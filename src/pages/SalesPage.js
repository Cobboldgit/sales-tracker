import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import SalesForms from "../components/sales/SalesForms";
import SalesItems from "../components/sales/SalesItems";
import Sidebar from "../components/Sidebar";

function SalesToBeRender() {
  return (
    <div>
      <Container fluid className="page_container">
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <SalesForms />
            <SalesItems />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SalesToBeRender;
