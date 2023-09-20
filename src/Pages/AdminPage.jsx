import React, { useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, sendBackUserData } from '../Store/admin-actions';

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signOut, loading, error] = useSignOut(auth);

  const users = useSelector(state => state.adminUsers.users);

  const keys = users && Object.keys(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const attendHandler = (key, user) => {
    const newUser = { ...user.userData };
    newUser.callCar = false;
    newUser.reason = '';

    dispatch(sendBackUserData(key, newUser));
  };

  return (
    <div>
      Admin Page
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
      <ul>
        {users &&
          keys.map(key => (
            <li key={key}>
              {users[key].userData.name}{' '}
              <button onClick={() => attendHandler(key, users[key])}>ir</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AdminPage;
