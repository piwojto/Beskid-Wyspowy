import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import PortfolioContext from '../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="#" smooth="true" duration={3000}>
            <i className="fa fa-caret-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Beskid Wyspowy {' '}
        </p>
        <a href="https://ever-art.pl" className="open-btn" target="_blank" rel="noopener noreferrer">
            everART
          </a>
      </Container>
    </footer>
  );
};

export default Footer;
