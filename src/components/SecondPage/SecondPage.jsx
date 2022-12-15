import React from "react";
import "./SecondPage.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import img4 from "../../assets/img-4.png";
import img5 from "../../assets/img-5.png";
import img6 from "../../assets/img-6.png";
import img7 from "../../assets/img-7.png";
import img8 from "../../assets/img-8.png";
const SecondPage = () => {
  return (
    <div className="pagetwo-container">
      <p className="second-page-typography">
        {" "}
        MEASUREMENT<p> TO OUR SUCCESS</p>
      </p>
      <p style={{ textAlign: "center", color: "#ffff" }}>
        Our process-driven approach keeps us going
      </p>

      <Row xs={1} md={3} className="g-4">
        <Col className="pagetwo-card-col">
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img src={img1} className="pagethree-images" alt="" />
              <Card.Title>TRANSPARENCY AND RELIABILITY</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagetwo-card-col">
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img src={img2} className="pagethree-images" alt="" />
              <Card.Title>REAL TIME PROJECT STATUS</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagetwo-card-col">
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img src={img3} className="pagethree-images" alt="" />
              <Card.Title>WELL STRUCTURED COMMUNICATION</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagetwo-card-col">
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img src={img4} className="pagethree-images" alt="" />
              <Card.Title>AGILE METHODOLOGY</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagetwo-card-col">
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img src={img5} className="pagethree-images" alt="" />
              <Card.Title>ONSITE COLLABORATION</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagetwo-card-col">
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img src={img6} className="pagethree-images" alt="" />
              <Card.Title>INNOVATION AT WORK</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagetwo-card-col">
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img src={img7} className="pagethree-images" alt="" />
              <Card.Title>CLIENT'S INVOLVEMENT IN EACH MILESTONE</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="pagetwo-card-col">
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img src={img8} className="pagethree-images" alt="" />
              <Card.Title>DEDICATED TEAM</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SecondPage;
