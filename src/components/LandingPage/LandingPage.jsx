import React from "react";
import landing from "../../assets/landing.png";
import "./LandingPage.css";
import Card from "react-bootstrap/Card";
const LandingPage = () => {
  return (
    <Card
      style={{
        background: "#00FF00",
        border: "none",
        marginLeft: "5%",
        borderRadius: "50%",
      }}
    >
      <Card.Img src={landing} alt="Card image" className="landing-img" />
      <Card.ImgOverlay
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Card.Title>
          <p className="landing-page-text">INNOVATION DIGITAL TECHNOLOGY</p>
        </Card.Title>
        <Card.Text>
          <p className="landing-page-text-2">
            everything we do is the consumer, imagination and you.
          </p>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default LandingPage;
