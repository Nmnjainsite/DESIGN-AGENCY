import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img200 from "../../assets/img-2.0.png";
import img201 from "../../assets/img-2.1.png";
import img202 from "../../assets/img-2.2.png";
import img203 from "../../assets/img-2.3.png";
import img204 from "../../assets/img-2.4.png";
import img205 from "../../assets/img-2.5.png";
import img206 from "../../assets/img-2.6.png";
import img207 from "../../assets/img-2.7.png";
import img208 from "../../assets/img-2.8.png";
import "./PageThree.css";
const PageThree = () => {
  return (
    <div style={{ padding: "3rem", background: "#EDEDED" }}>
      <h1 className="pagethree-typography">
        WE ARE WORKING WITH THESE INDUSTRIES
      </h1>

      <Row xs={1} md={3} className="g-4" style={{ margin: "2%" }}>
        <Col className="pagethree-card-col">
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img src={img200} className="pagethree-images" alt="" />
              <Card.Title className="card-typography">
                MEDIA & ENTERTAINMENT
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagethree-card-col">
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img src={img201} className="pagethree-images" alt="" />
              <Card.Title className="card-typography">
                HEALTH CARE & WELLNESS
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagethree-card-col">
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img src={img202} className="pagethree-images" alt="" />
              <Card.Title className="card-typography">
                HOSPITALITY & REAL ESTATE
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagethree-card-col">
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img src={img203} className="pagethree-images" alt="" />
              <Card.Title className="card-typography">
                RETAIL & E COMMERCE
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagethree-card-col">
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img src={img204} className="pagethree-images" alt="" />
              <Card.Title className="card-typography">
                EDUCATION & LEARNING
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagethree-card-col">
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img src={img205} className="pagethree-images" alt="" />
              <Card.Title className="card-typography">
                TRAVEL & TRANSPORT
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagethree-card-col">
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img src={img206} className="pagethree-images" alt="" />
              <Card.Title className="card-typography">
                MOBILE & TELECOM
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagethree-card-col">
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img src={img207} className="pagethree-images" alt="" />
              <Card.Title className="card-typography">IT & ITES</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagethree-card-col">
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img src={img208} className="pagethree-images" alt="" />
              <Card.Title className="card-typography">AGRITECH</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PageThree;
