import React from 'react';
import { auth } from '../firebaseConfig';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
 
  const navigate = useNavigate();
  const [signOut, loading, error] = useSignOut(auth);

  return (
    <div>
      <button
        onClick={async () => {
          const success = await signOut();
          if (success) {
            navigate('/');
          }
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserPage;
