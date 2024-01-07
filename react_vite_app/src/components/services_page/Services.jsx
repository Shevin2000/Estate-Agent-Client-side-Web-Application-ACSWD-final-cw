import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';

function ServicesPage() {
  return (
    <>
    <div className="container mt-5 pt-4">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title ps-4">
            <h2 style={{ fontSize: '2em', margin: '0',fontFamily: 'Raleway, sans-serif', padding: '20px' }}>Elevate Your Experience</h2>
            <p style={{
              textAlign: 'justify',
              color: '#fc5356',
              fontWeight: 'bold',
              fontSize: '1.1em',
              lineHeight: '1.5',
              fontFamily: 'Raleway, sans-serif', 
              padding: '20px'
            }}>
              Unlock the door to exceptional real estate experiences. 
              As a dedicated estate selling agency, we bring expertise, 
              integrity, and a commitment to turning your property 
              dreams into reality. From strategic listings to seamless 
              transactions, our team is here to guide you through every 
              step. Trust us to maximize the value of your property and 
              make your selling journey a smooth and successful one.
            </p>
          </div>
        </div>
        <div className="col-lg-6 mt-3">
          <img
            className="w-100"
            src="/src/assets/home/whyus.png"
            alt="Search"
            style={{ maxHeight: '250px' }}
          />
        </div>
      </div>
    </div>
        <div className='col-lg-6 ps-5 ms-3 mt-5 pt-5'>
          
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        
      </div>
      <section className="section services-section pt-1" id="services" style={{ fontFamily: 'Raleway, sans-serif',fontSize: '0.9em' }} >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <div className="feature-box-1">
                    <div className="icon">
                      <i className="fa fa-desktop"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Property Search and Evaluation</h5>
                      <p>
                      Let us simplify your property search. We provide comprehensive evaluation services to help you find the perfect home or investment opportunity. Our team leverages industry expertise to identify properties that align with your goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="feature-box-1">
                    <div className="icon">
                      <i className="fa fa-user"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Investment Consultation</h5>
                      <p>
                      Explore lucrative investment opportunities with our expert consultation services. Whether you're a seasoned investor or a first-time buyer, our team will guide you through the intricacies of real estate investment, ensuring informed decisions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="feature-box-1">
                    <div className="icon">
                      <i className="fa fa-comment"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Home Selling Assistance</h5>
                      <p>
                      Selling your home? Trust ShevinHomes for a seamless experience. Our dedicated team offers personalized assistance, from pricing strategy to marketing, to help you achieve the best value for your property in the current market.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="feature-box-1">
                    <div className="icon">
                      <i className="fa fa-image"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Legal Support and Documentation</h5>
                      <p>
                      Navigate legal complexities with confidence. ShevinHomes provides comprehensive legal support and documentation services. We ensure that your property transactions comply with all legal requirements, giving you peace of mind.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="feature-box-1">
                    <div className="icon">
                      <i className="fa fa-th"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Financial Planning for Real Estate</h5>
                      <p>
                      Elevate your property's appeal with our interior design and staging services. Our experts will transform spaces to captivate potential buyers, enhancing the overall presentation and value of your property in the real estate market.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="feature-box-1">
                    <div className="icon">
                      <i className="fa fa-cog"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Interior Design and Staging</h5>
                      <p>
                      Elevate your property`s appeal with our interior design and staging services. Our experts will transform spaces to captivate potential buyers, enhancing the overall presentation and value of your property in the real estate market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
