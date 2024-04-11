import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import HomeLayout from './components/pages/Home/HomeLayout/HomeLayout';
import ServicesLayout from "./components/pages/Services/ServicesLayout/ServicesLayout";
import Blogs from './components/pages/Blogs/Blogs';
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Login from "./components/pages/Auth/Login/Login";
import SignUp from "./components/pages/Auth/SignUp/SignUp";
import auth from './firebase/firebase.init';
import {useAuthState} from "react-firebase-hooks/auth";
import Appointment from './components/pages/Appointment/Appointment';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeLayout></HomeLayout>} />
        <Route path='/services' element={<ServicesLayout></ServicesLayout>} />
        <Route path='/services/:serviceId' element={<Appointment></Appointment>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/sign_up' element={<SignUp></SignUp>} />
        <Route path='*' element={<h1>404! Page not found</h1>} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
