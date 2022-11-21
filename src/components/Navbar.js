import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoImage from '../img/logo.svg'

function Navigasi() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logoImage}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Wildrift Gameplay
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigasi;