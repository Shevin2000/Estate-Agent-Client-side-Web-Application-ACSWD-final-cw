import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="mt-5 py-3 bg-light text-center">
      <div className="container">
        <p>&copy; 2023 SHEVIN HOMES. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/shevin-mitipolaarachchi-a55447252/" target="_blank" rel="noopener noreferrer" className="social-icon p-2">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/Shevin2000" target="_blank" rel="noopener noreferrer" className="social-icon p-2">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://web.facebook.com/shevinmaduranga.mitipolaarachchi/" target="_blank" rel="noopener noreferrer" className="social-icon p-2">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        </div>
        <p>
          Shevin Mitipolaarachchi | University of Westminster | School of Electronics and Computer Science
 | 5COSC026W Advanced Client-Side Web Development

        </p>
      </div>
    </footer>
  );
}

export default Footer;
