import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
