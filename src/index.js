import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './components/account/Register';
import Tnc from './components/account/Tnc';
import SendPasswordResetEmail from './components/account/SendPasswordResetMail';
import ActivationSuccess from './components/account/ActivationSuccess';
import ResetPassword from './components/account/ResetPassword';
import PrivateRoute from './components/account/PrivateRoute';
import ChangePassword from './components/account/ChangePassword';
import PageNotFound from './components/account/PageNotFound';
import ProfileUpdate from './components/account/ProfileUpdate';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import OurTeam from './components/pages/OurTeam';
import Vision from './components/pages/Vision';
import CompanyProfile from './components/pages/CompanyProfile';
import { AuthProvider } from './components/account/AuthContext';
import Login from './components/account/Login';
import Auth from './components/account/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path='home' element={<Home />} />
            <Route path='contactus' element={<ContactUs />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="activate/:uid/:token" element={<ActivationSuccess/>} />


            <Route path="auth" element={<Auth />} >
                        <Route path="login" element={<Login/>} />
                        <Route path="register" element={<Register/>} />
                        <Route path="tnc" element={<Tnc/>} />
                        
                        <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail/>} />
                        <Route path="changepassword" element={<ChangePassword/>} />

                        <Route path="changepassword1" element={<PrivateRoute><ChangePassword/></PrivateRoute>} />
                      
                        <Route path="profile" element={<PrivateRoute><ProfileUpdate/></PrivateRoute>} />
                         

                        <Route path="*" element={<PageNotFound/>} />
          
                        <Route path="ab" element={<ChangePassword />} />
                        <Route path="password/reset/confirm/:uid/:token" element={<ResetPassword/>} />
                    </Route>
                    

            <Route path='companyprofile' element={<CompanyProfile />}>
              <Route index element={<Navigate to="/companyprofile/aboutus" />} />
              <Route path='aboutus' element={<AboutUs />} />
              
              <Route path='vision' element={<Vision />} />
            </Route>


          </Route>
        </Routes></AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
