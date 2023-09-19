import React, { useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, sendUserData } from '../Store/users-actions';
import { usersActions } from '../Store/users-slice';

const UserPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [signOut, loading, error] = useSignOut(auth);

  const user = useSelector(state => state.users.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const callCarHandler = e => {
    e.preventDefault();

    dispatch(
      usersActions.callCar({
        callCar: true,
        reason: 'escolta',
      })
    );
  };

  if (user && user.callCar) {
    dispatch(sendUserData(user));
    dispatch(usersActions.cancelCalling());
  }

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
      {/* {key ? (
      <h1>{user.user[key].name}</h1>
    ) : (
      <p>Loading...</p> 
    )} */}
      <form onSubmit={e => callCarHandler(e)}>
        <button>Call a car</button>
      </form>
    </div>
  );
};

export default UserPage;
