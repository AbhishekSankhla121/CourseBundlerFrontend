import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home';
import Header from './components/layout/Header';
import Courses from './components/courses/courses';
import Footer from './components/layout/Footer';
import Login from './components/Auth/login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/layout/NotFound/NotFound';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFailed from './components/Payments/PaymentFailed';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';



function App() {

  // TODO: window.addEventListener('contextmenu',(e)=>{
  //   e.preventDefault();
  // })

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/course/:id' element={<CoursePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request" element={<Request />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/paymentfail" element={<PaymentFailed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/createcourse" element={<CreateCourse />} />
          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );

}

export default App;
