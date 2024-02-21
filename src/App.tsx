import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import AddElementModal from "./components/AddElementModal";
import FormLayout from "./components/FormLayout";
import ExportForm from "./components/ExportForm";
import ImportForm from "./components/ImportForm";

function App() {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary px-4"
        sticky="top"
      >
        <Navbar.Brand>
          <AddElementModal />
        </Navbar.Brand>
        <Nav className="float-end d-flex flex-row">
          <Nav.Item>
            <ImportForm />
          </Nav.Item>
          <Nav.Item className="ms-3">
            <ExportForm />
          </Nav.Item>
        </Nav>
      </Navbar>
      <div className="main">
        <Container className="my-4">
          <FormLayout />
        </Container>
      </div>
    </>
  );
}

export default App;
