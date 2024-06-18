import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";



import About from "./pages/About"
import Home from "./pages/Home"
import SIgnUp from "./pages/SIgnOut"
import SignIn from "./pages/SignIn"
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SIgnUp />} />
        <Route path='/about' element={<About />} />
      </Routes>
       
    </BrowserRouter>
  );

}

export default App
