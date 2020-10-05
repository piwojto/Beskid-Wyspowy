import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
// import Title from '../components/Title';
import SecondImg from '../components/SecondImg';
import ProjectImg from '../components/ProjectImg';
import PortfolioContext from '../context/context';

const SecondSection = () => {
  // const url='https://beskidy.netlify.app/beskidy/mogielica';
  const { projects } = useContext(PortfolioContext);
  // const { second } = useContext(PortfolioContext);
  // const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = second;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
       
      <div className="project-wrapper">
          {/* <Title title="Projects" /> */}
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
      <Row key={id}>
        {/* <Col lg={0.5} sm={0.5}>
        <div className="hero-line"> </div> 
        </Col> */}
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                
                    <div className="project-wrapper__text">
                    <div className="line"></div>
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        
                        <p className="mb-4">{info2 || ''}</p>
                        
                      </div>
                      {/* <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a> */}

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="open-btn"
                          href={repo}
                        >
                          Otwórz stronę
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      {/* <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      > */}
                        
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        
                      {/* </a> */}
                    </div>
                  </Fade>
                </Col>
              </Row>
               );
              })}
            </div>


      {/* <h4 className="title">Beskid </h4> */}
        {/* <Row className="about-wrapper">
          
          <Col md={4} sm={4}>
            <Fade left={isDesktop} bottom={isMobile} duration={3000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                {paragraphOne || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                {paragraphTwo || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={url}
                    >
                      Szlak na Mogielicę
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={10}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <SecondImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
        </Row> */}
     
      </Container>
    </section>
  );
};

export default SecondSection;