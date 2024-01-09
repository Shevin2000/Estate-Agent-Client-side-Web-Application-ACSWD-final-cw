// HomePage.jsx
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import data from "../properties_page/properties.json";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./HomePage.css";
import { Container } from "react-bootstrap";
import home from "/src/assets/home/home.svg";
import share from "/src/assets/home/share.svg";
import time from "/src/assets/home/time.svg";

const HomePage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // From json file
    setProperties(data.properties);
  }, []);

  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/Properties/" + e, { state: { id: e, name: "just name" } });
  };

  // console.log(properties[0]);

  return (
    
    <div>
 <div className="jumbotron jumbotron-fluid d-flex justify-content-center align-items-center mt-5 pt-2 pb-0 mb-0" style={{ backgroundColor: '#20247b', color: 'white' }}>
      <div className="container">
        <h1 className="display-4" style={{color: 'white', fontSize:"2rem", fontWeight:"normal"}}>Welcome to SHEVIN HOMES !!!</h1>
        <p className="lead pb-3 mb-0" style={{color: 'white', fontSize:"1rem", fontWeight:"normal"}} >We are your trusted estate selling agents, committed to helping you find your dream home. Explore our wide range of properties and let us guide you through the journey of making your next home a reality.</p>
      </div>
    </div>
      <Carousel className="pt-0 mt-0">
        <Carousel.Item className="">
          <img
            className="d-block w-100"
            src="/src/components/CarouselImage/home1Ca.jpg"
            alt="First slide"
            style={{ maxHeight: "620px" }}
          />
          <Carousel.Caption>
            <h2 className="H2C">Modern Living Spaces</h2>
            <p className="para">Stylish homes for contemporary lifestyles.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="pt-0">
          <img
            className="d-block w-100"
            src="/src/components/CarouselImage/home2Ca.jpg"
            alt="Second slide"
            style={{ maxHeight: "620px" }}
          />
          <Carousel.Caption>
            <h2 className="H2C">Scenic Views</h2>
            <p className="para">
              {" "}
              ShevinHomes offers scenic views and peaceful living.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="pt-0">
          <img
            className="d-block w-100"
            src="/src/components/CarouselImage/home3Ca.jpg"
            alt="Third slide"
            style={{ maxHeight: "620px" }}
          />
          <Carousel.Caption>
            <h2 className="H2C"> Luxury Redefined</h2>
            <p className="para">
              Explore opulent residences and premium living.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="col-lg-6 ps-5 ms-3 mt-4 pt-2">
        <div className="section-title">
          <h2
            style={{
              fontSize: "1.5em",
              margin: "0",
              fontFamily: "Raleway, sans-serif",
              padding: "20px",
            }}
          >
            What We Offer
          </h2>
          <p
            style={{
              textAlign: "justify",
              color: "#fc5356",
              fontWeight: "bold",
              fontSize: "o.8em",
              lineHeight: "1.5",
              fontFamily: "Raleway, sans-serif",
              padding: "20px",
            }}
          >
            Explore a world of possibilities with SHEVINHOMES. From stunning
            residential properties to lucrative investment opportunities, we
            offer a diverse range of real estate solutions tailored to your
            needs. Our commitment to excellence ensures that you experience the
            pinnacle of property services, supported by a team of dedicated
            professionals. Discover the perfect home or investment with
            SHEVINHOMES – where your property aspirations come to life.
          </p>
        </div>
      </div>

      <section
        className="section services-section pt-1"
        id="services"
        style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9em" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <div className="feature-box-1">
                    <div className="icon">
                      <img
                        src={share}
                        alt="Home Icon"
                        className="svg-icon"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div className="feature-content">
                      <h5>Discover Local Experts:</h5>
                      <p>
                        We assist you in discovering, choosing, and connecting
                        with local real estate experts who understand your
                        property needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="feature-box-1">
                    <div className="icon">
                      <img
                        src={home}
                        alt="Home Icon"
                        className="svg-icon"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div className="feature-content">
                      <h5>Schedule a Home Valuation:</h5>
                      <p>
                        Let them reach out to you for a personalized home
                        valuation. Take the next step in assessing your
                        property`s worth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="feature-box-1">
                    <div className="icon">
                      <img
                        src={time}
                        alt="Home Icon"
                        className="svg-icon"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div className="feature-content">
                      <h5>Local Expert Market Valuation:</h5>
                      <p>
                        Obtain a precise market valuation for your property from
                        a trusted local expert. Make informed decisions with our
                        assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
