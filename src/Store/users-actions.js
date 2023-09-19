import { auth } from '../firebaseConfig';
import { usersActions } from './users-slice';

export const addNewUserData = (user, uid) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://ronda-8392b-default-rtdb.firebaseio.com/users/${uid}.json`,
        {
          method: 'POST',
          body: JSON.stringify({ ...user }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending users data failed');
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchUserData = () => {
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
          `https://ronda-8392b-default-rtdb.firebaseio.com/users/${auth.lastNotifiedUid}.json`
        );

        if (!response.ok) {
          throw new Error('could not fetch user data!');
        }

        const data = await response.json();

        return data;
      };

      const userData = await fetchData();

      dispatch(usersActions.replaceUsers({ ...userData }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendUserData = userData => {
  return async () => {
    const response = await fetch(
      `https://ronda-8392b-default-rtdb.firebaseio.com/users/${auth.lastNotifiedUid}.json`,
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
