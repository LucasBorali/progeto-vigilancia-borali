import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDMsvkwRd8Ba6cG7dF05LOKNNTWYlG81e4',
  authDomain: 'ronda-8392b.firebaseapp.com',
  projectId: 'ronda-8392b',
  storageBucket: 'ronda-8392b.appspot.com',
  messagingSenderId: '1037020787852',
  appId: '1:1037020787852:web:fdf9a1e0b4734e26e1f7a9',
  measurementId: 'G-DJZE26CXQ2',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
