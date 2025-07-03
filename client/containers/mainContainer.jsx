import * as React from 'react';
import ResponsiveAppBar from '../components/NavBar.jsx';
import { useState, useEffect } from 'react';
// import axios from 'axios';

function MainContainer() {
  const [view, setView] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleSessionAction(action) {
    if (action === 'logout') {
      // const response = await axios.post('/users/logout');
      setIsLoggedIn(false);
      setView('');
    }

    if (action === 'login') {
      setIsLoggedIn(true);
    }
  }

  const setViewHandler = (e) => {
    setView(e.target.id);
  };

  async function getSession() {
    try {
      // const response = await axios.get('/users/session');
      // console.log(response);
      return true;
    } catch (error) {
      console.error(error);
      alert('Error validating user session. Please log in again.');
    }
  }

  useEffect(() => {
    getSession().then((session) => {
      setIsLoggedIn(session.data.sessionValid);
    });
  }, [isLoggedIn]);

  if (view === 'project-planning-view') {
    return (
      <>
        <ResponsiveAppBar
          setViewHandler={setViewHandler}
          isLoggedIn={isLoggedIn}
          handleSessionAction={handleSessionAction}
          currentView={view}
          id='responsive-navbar'
        />
        <div id='main-container'>
        </div>
      </>
    );
  }

  return (
    <>
      <ResponsiveAppBar
        setViewHandler={setViewHandler}
        isLoggedIn={isLoggedIn}
        id='responsive-navbar'
        currentView={view}
        handleSessionAction={handleSessionAction}
      />
      <div id='main-container'>
      </div>
    </>
  );
}

export default MainContainer;
