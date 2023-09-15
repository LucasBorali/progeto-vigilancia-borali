

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
