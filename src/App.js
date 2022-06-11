import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';


//!  Components
import Login from './components/Login';
import Verify from './components/Verify';
import Welcome from './components/Welcome';
import PageBallot from './pages/PageBallot';
import WelcomeBack from './components/WelcomeBack';
import PageResults from './pages/PageResults';
import NotAuthorized from './components/NotAuthorized';
import Voted from './components/Voted';


const App = () => {
  const navigate = useNavigate();
  const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVoted(true), 20000);
    
    if (timer === 10) {
      setIsVoted(true)
      console.log(timer);
    }

  }, [])
  
  //!  Protected routes: navigate user to login if not authenticated
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate('/');
    } else {
      navigate('/welcome');
    }
  }, [])


  return (
    <>
      <Routes>
        <Route exact path='/' element={ isVoted ? <Voted/> : <Login />} />
        <Route path='/welcome'  element={<Welcome />} />
        <Route path='/ballot' element={<PageBallot />} />
        <Route path='/verify'  element={<Verify />} />
        <Route path='/not-authorized' element={<NotAuthorized />} />

        //!  Soon to be open protected routes
        <Route path='/welcome-back' element={<WelcomeBack />} />
        <Route path='/results' element={<PageResults />} />
      </Routes>
    </>
  )
}

export default App;