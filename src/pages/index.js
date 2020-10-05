import React, { useState, useEffect } from "react"
import { PortfolioProvider } from '../context/context';
// import { Link } from "gatsby"
// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Parallax from "../components/parallax"
import "../style/main.scss"
import SecondSection from "../components/second-section"
import { heroData, secondData, projectsData, contactData, footerData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/footer";

const IndexPage= () => {
  const [hero, setHero] = useState({});
  const [second, setSecond] = useState({});
  const [footer, setFooter] = useState({});
  const [projects, setProjects] = useState([]);

    useEffect(() => {
    setHero({ ...heroData });
    setSecond({ ...secondData });
    setProjects([...projectsData]);
    // setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <PortfolioProvider value={{ hero, second, projects, footer }}>
    <SEO title="Beskidy" />
    <Parallax/>
    <SecondSection/>
    <Footer/>
  
  </PortfolioProvider>
)}

export default IndexPage;


