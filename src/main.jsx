import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './landing-page'
import SignUp from './sign-up'
import Login from './login'
import UserDashBoard from './user-dashB'
import Creds from './creds'
import TrendingCompanies from './trending-companies'
import Resources from './resources'
import CommBlog from './comm-blog'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider>
    <React.StrictMode>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/user-dashB' element={<UserDashBoard/>} />
            <Route path='/creds' element={<Creds/>} />
            <Route path='/trending-companies' element={<TrendingCompanies/>} />
            <Route path='/resources' element={<Resources/>} />
            <Route path='/blog' element={<CommBlog/>} />
          </Routes>
        </BrowserRouter>

    </React.StrictMode>
  </GoogleOAuthProvider>
  </React.StrictMode>,
)
