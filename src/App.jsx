
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootLayout from './Pages/RootLayout';
import HomePage from './Pages/HomePage';
import LogInPage from './Pages/LogInPage';
import SignInPage from './Pages/SignInPage';
import AdminPage from './Pages/AdminPage';
import UserPage from './Pages/UserPage';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {index: true, element: <HomePage/>},
      ]
    },
    {
      path: '/log-in',
      element: <LogInPage />,
    },
    {
      path: '/sign-in',
      element: <SignInPage />,
    },
    {
      path: '/admin',
      element: <AdminPage />,
    },
    {
      path: '/user',
      element: <UserPage />,
    },
  ]
)

function App() {
  return <RouterProvider router={router}/>
}

export default App;
