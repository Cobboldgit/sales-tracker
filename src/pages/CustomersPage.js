import { Col, Container, Row } from "react-bootstrap";
import CustomersForms from "../components/customers/CustomersForms";
import CustomersList from "../components/customers/CustomersList";
import Sidebar from "../components/Sidebar";

function CustomersToBeRender() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <CustomersForms />
            <CustomersList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CustomersToBeRender;
