import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import Home from './pages/home/Home';
import Header from './components/header/Header';
import Cardapio from './pages/cardapio/Cardapio';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cardapio',
    element: <Cardapio />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
