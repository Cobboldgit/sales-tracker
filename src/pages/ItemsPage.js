import { Col, Container, Row } from "react-bootstrap";
import ItemsForms from "../components/items/ItemsForms";
import ItemsList from "../components/items/ItemsList";
import Sidebar from "../components/Sidebar";

function ItemsToBeRender() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <ItemsForms />
            <ItemsList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ItemsToBeRender;
