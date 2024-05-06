import './App.css';
import {Routes, Route} from "react-router-dom";
import HomeLayout from './components/pages/Home/HomeLayout/HomeLayout';
import ServicesLayout from "./components/pages/Services/ServicesLayout/ServicesLayout";
import Blogs from './components/pages/Blogs/Blogs/Blogs';
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact/Contact";
import Login from "./components/pages/Auth/Login/Login";
import SignUp from "./components/pages/Auth/SignUp/SignUp";
import Appointment from './components/pages/Appointment/Appointment/Appointment';
import RequireAuth from './components/pages/Auth/RequireAuth/RequireAuth';
import NotFound from './components/shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeLayout></HomeLayout>} />
        <Route path='/services' element={<ServicesLayout></ServicesLayout>} />
        <Route path='/services/:serviceId' element={<RequireAuth><Appointment></Appointment></RequireAuth>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/sign_up' element={<SignUp></SignUp>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
