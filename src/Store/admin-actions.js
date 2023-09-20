import { auth } from '../firebaseConfig';
import { adminActions } from './admin-slice';

export const fetchUsers = () => {
  return async dispatch => {
    try {
      await new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          unsubscribe();
          if (user) {
            resolve();
          } else {
            reject(new Error('User not authenticated'));
          }
        });
      });

      const fetchData = async () => {
        const response = await fetch(
          `https://ronda-8392b-default-rtdb.firebaseio.com/users.json`
        );

        if (!response.ok) {
          throw new Error('could not fetch user data!');
        }
        const data = await response.json();
        return data;
      };

      const usersData = await fetchData();

      dispatch(adminActions.replaceInitialUsers(usersData));
    } catch (error) {}
  };
};

export const sendBackUserData = (key, userData) => {
    return async () => {
      const response = await fetch(
        `https://ronda-8392b-default-rtdb.firebaseio.com/users/${key}.json`,
        {
          method: 'PUT',
          body: JSON.stringify({ userData }),
        }
      );
  
      if (!response.ok) {
        throw new Error('Sending user data failed');
      }
    };
  };
