import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./Aboutus.css";
import team from "/src/components/imagee/About/team.jpg";
import vision from "/src/components/imagee/About/vision.jpg";

const AboutUs = () => {
  return (
    <div className="container mt-5 pt-3">
      <Row>
        <Col lg={6}>
          <div className="section-title ps-4">
            <h2
              style={{
                fontSize: "2em",
                margin: "0",
                fontFamily: "Raleway, sans-serif",
                padding: "20px",
              }}
            >
              Our Vision & Mission
            </h2>
            <p
              style={{
                textAlign: "justify",
                color: "#fc5356",
                fontWeight: "bold",
                fontSize: "1.1em",
                lineHeight: "1.5",
                fontFamily: "Raleway, sans-serif",
                padding: "20px",
              }}
            >
              Have questions or inquiries? We're eager to hear from you! Connect
              with us using the contact details provided, and our dedicated team
              will promptly assist you. Whether you're seeking information about
              properties, investment opportunities, or have general inquiries,
              SHEVINHOMES is ready to help. Your property journey starts with us
              – reach out today for personalized and expert assistance.
            </p>
          </div>
        </Col>
        <Col lg={6} className="mt-3">
          <img
            className="w-100"
            src="/src/assets/home/4x/whatweof.png"
            alt="Search"
            style={{ maxHeight: "250px", width: "100%", objectFit: "cover" }}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <Card className="mb-4 team-card">
            <Card.Img className="team-card-img" variant="top" src={vision} />
            <Card.Body>
              <Card.Title
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#20247b",
                }}
              >
                Our Vision
              </Card.Title>
              <Card.Text
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1rem",
                  color: "#20247b",
                  lineHeight: "1.6",
                }}
              >
                "To be the premier real estate partner, transforming dreams into
                homes and investments. We aspire to create a positive impact on
                communities by delivering exceptional real estate solutions that
                stand the test of time."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4 team-card">
            <Card.Img className="team-card-img" variant="top" src={team} />
            <Card.Body>
              <Card.Title className="team-card-title">Our Team</Card.Title>
              <Card.Text
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1rem",
                  color: "#20247b",
                  lineHeight: "1.6",
                }}
              >
                Meet our dedicated team of professionals who are passionate
                about delivering excellent results. Our team consists of 4
                dedicated agents, each committed to providing personalized and
                top-notch real estate services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h3
            className="mb-3"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#20247b",
            }}
          >
            Our Mission
          </h3>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.3rem",
              color: "#20247b",
              lineHeight: "1.6",
            }}
          >
            At SHEVINHOMES, our mission is to provide unparalleled real estate
            services that exceed expectations. We are committed to:
          </p>
        </Col>
      </Row>
      <div className="d-flex flex-wrap mt-3">
        <span className="badge rounded-pill bg-info text-white fs-6 p-2 m-1">
          Customer Satisfaction
        </span>
        <span className="badge rounded-pill bg-primary text-white fs-6 p-2 m-1">
          Innovation
        </span>
        <span className="badge rounded-pill bg-info text-white fs-6 p-2 m-1">
          Community Impact
        </span>
        <span className="badge rounded-pill bg-primary text-white fs-6 p-2 m-1">
          Team Empowerment
        </span>
      </div>
    </div>
  );
};

export default AboutUs;
