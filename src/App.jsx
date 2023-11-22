import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <div id="App">
      <Container className="App_content">
        <Header />
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
