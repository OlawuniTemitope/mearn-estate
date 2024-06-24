import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { RootState } from '../redux/app/store';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state:RootState) => state.user);
  return currentUser ? <Outlet /> : <Navigate replace={true} to='/sign-in' />;
}
