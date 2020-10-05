import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import PortfolioContext from '../context/context';
// import GithubButtons from './githubbuttons';

import { githubButtons } from '../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  // const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="#" smooth duration={3000}>
            <i className="fa fa-caret-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {/* {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return ( */}
                {/* <a
                  // key={id}
                  href={'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label='home'
                >
                  <i className={`fa fa-${'home'} fa-inverse`} />
                </a> */}
              {/* );
            })} */}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Beskid Wyspowy {' '}
        </p>
        <a href="https://ever-art.pl" className="open-btn" target="_blank" rel="noopener noreferrer">
            everART
          </a>

        {/* {isEnabled && <GithubButtons />} */}
      </Container>
    </footer>
  );
};

export default Footer;
