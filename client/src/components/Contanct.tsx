import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ContactProps {
    name:string,
    userRef:string,
}

interface LandlordProps {
    username:string,
    email:string,
}

export default function Contact({ name,userRef }:ContactProps) {
  const [landlord, setLandlord] = useState<LandlordProps>();
  const [message, setMessage] = useState('');
  const onChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [userRef]);
  return (
    <>
      {landlord && (
        <div className='flex flex-col gap-2'>
          <p>
            Contact <span className='font-semibold'>{landlord.username}</span>{' '}
            for{' '}
            <span className='font-semibold'>{name.toLowerCase()}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows={2}
            value={message}
            onChange={onChange}
            placeholder='Enter your message here...'
            className='w-full border p-3 rounded-lg'
          ></textarea>

          <Link
          to={`mailto:${landlord.email}?subject=Regarding ${name}&body=${message}`}
          className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
          >
            Send Message          
          </Link>
        </div>
      )}
    </>
  );
}
