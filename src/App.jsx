import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import img1 from "./images/r1.png";
import img2 from "./images/r2.png";
import img3 from "./images/r3.png";
import img4 from "./images/r4.png";


const App = () => {
  return (
    <>
       <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <img src={img1} width="300" height="200"/>
      <img src={img2} width="300" height="200" />
      <img src={img3} width="300" height="200"/>
      <img src={img4} width="300" height="200"/>
    </>
  )
}

export default App;