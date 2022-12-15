import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img200 from "../../assets/img-2.0.jpg";
import img201 from "../../assets/img-2.1.jpg";
import img202 from "../../assets/img2.2.jpg";
import img203 from "../../assets/img-2.3.jpg";
import img204 from "../../assets/img-2.4.jpg";
import img205 from "../../assets/img-2.5.jpg";
import img206 from "../../assets/img-2.6.jpg";
import img207 from "../../assets/img-2.7.jpg";
import img208 from "../../assets/img-2.8.jpg";
import "./PageThree.css";
const PageThree = () => {
  return (
    <div style={{ padding: "3rem", background: "#EDEDED" }}>
      <h1 className="pagethree-typography">
        WE ARE WORKING WITH THESE INDUSTRIES
      </h1>

      <Row xs={1} md={2} className="g-4" style={{ margin: "2%" }}>
        <Col style={{ width: "400px", background: "#EDEDED", color: "black" }}>
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img
                src={img200}
                width="100px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>MEDIA & ENTERTAINMENT</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "#EDEDED", color: "black" }}>
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img
                src={img201}
                width="100px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>HEALTH CARE & WELLNESS</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "#EDEDED", color: "black" }}>
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img
                src={img202}
                width="100px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>HOSPITALITY & REAL ESTATE</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "#EDEDED", color: "black" }}>
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img
                src={img203}
                width="100px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>RETAIL & E COMMERCE</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "#EDEDED", color: "black" }}>
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img
                src={img208}
                width="100px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>EDUCATION & LEARNING</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "#EDEDED", color: "black" }}>
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img
                src={img204}
                width="100px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>TRAVEL & TRANSPORT</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "#EDEDED", color: "black" }}>
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img
                src={img205}
                width="100px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>MOBILE & TELECOM</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "#EDEDED", color: "black" }}>
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img
                src={img206}
                width="100px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>IT & ITES</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "#EDEDED", color: "black" }}>
          <Card style={{ background: "#EDEDED", border: "none" }}>
            <Card.Body className="text-box">
              <img
                src={img207}
                width="100px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>AGRITECH</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PageThree;
