import React, { useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.lastNotifiedUid === 'LTYY8keIOabtKGVA6q5WVaYY2Me2') {
      navigate('/admin');
    } else if (auth.lastNotifiedUid) {
      navigate('/user');
    }
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
