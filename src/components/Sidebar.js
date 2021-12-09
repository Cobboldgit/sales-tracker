import React from "react";
import { Link } from "react-router-dom";
import { IoIosContacts } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
import { Col, Container, Row } from "react-bootstrap";
import image from "../canvas.png";

function Sidebar() {
  return (
    <div className="sidebar_container">
      <div className="sidebar_profile">
        <Container>
          <Row>
            <Col className="profile_text">Sales Tracker</Col>
          </Row>
        </Container>
      </div>
      <div className="links">
        <ul>
          <Link to="/">
            <li>
              <Container>
                <Row>
                  <Col sm={12}>
                    <GiPayMoney className="sidebar_icon" />
                  </Col>
                  <Col sm={12}>Sales</Col>
                </Row>
              </Container>
            </li>
          </Link>
          <Link to="/items">
            <li>
              <Container>
                <Row>
                  <Col sm={12}>
                    <AiOutlineShoppingCart className="sidebar_icon" />
                  </Col>
                  <Col sm={12}>Items</Col>
                </Row>
              </Container>
            </li>
          </Link>
          <Link to="/customers">
            <li>
              <Container>
                <Row>
                  <Col sm={12}>
                    <IoIosContacts className="sidebar_icon" />
                  </Col>
                  <Col sm={12}>Customers</Col>
                </Row>
              </Container>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
