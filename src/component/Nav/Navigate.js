import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Navigate() {
  const Navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand onClick={() => Navigate("")}>
          To Employee App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Navigate;
