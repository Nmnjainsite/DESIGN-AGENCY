import React from "react";
import "./SecondPage.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";
import img4 from "../../assets/img-4.jpg";
import img5 from "../../assets/img-5.jpg";
import img6 from "../../assets/img-6.jpg";
import img7 from "../../assets/img-7.jpg";
import img8 from "../../assets/img-8.jpg";
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

      <Row xs={1} md={2} className="g-4" style={{ margin: "2%" }}>
        <Col style={{ width: "400px", background: "black", color: "white" }}>
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img
                src={img1}
                width="50px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>TRANSPARENCY AND RELIABILITY</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "black", color: "white" }}>
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img
                src={img2}
                width="50px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>REAL TIME PROJECT STATUS</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "black", color: "white" }}>
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img
                src={img3}
                width="50px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>WELL STRUCTURED COMMUNICATION</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "black", color: "white" }}>
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img
                src={img4}
                width="50px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>AGILE METHODOLOGY</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "black", color: "white" }}>
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img
                src={img5}
                width="50px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>ONSITE COLLABORATION</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "black", color: "white" }}>
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img
                src={img6}
                width="50px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>INNOVATION AT WORK</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "black", color: "white" }}>
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img
                src={img7}
                width="50px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>CLIENT'S INVOLVEMENT IN EACH MILESTONE</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: "400px", background: "black", color: "white" }}>
          <Card style={{ background: "black" }}>
            <Card.Body className="text-box">
              <img
                src={img8}
                width="50px"
                alt=""
                style={{ marginRight: "1.5rem" }}
              />
              <Card.Title>DEDICATED TEAM</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SecondPage;
