import React from "react";
// react plugin used to create switch buttons
// import Switch from "react-bootstrap-switch";
// plugin that creates slider
// import Slider from "nouislider";
// import ExamplesNavbar from "components/ExamplesNavbar.js";
// import LandingPageHeader from "components/LandingPageHeader.js";
// import DefaultFooter from "components/Footers/DefaultFooter";
// reactstrap components
// import  { useEffect } from 'react';
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);


  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
        <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">What is it all about</h2>
                <h4>
                  
                  According to the National Informatics Centre, 90% of blood
                  donations in India are carried out in camps set up by various
                  organizations. While all the donated blood goes through the
                  testing phase and safe blood is separated, sometimes unsafe
                  blood can also penetrate this test and reach the patients
                  infecting them. Though this problem may go unnoticed but the
                  consequences are fatal. We use the potential of Blockchain to
                  help curb these flaws and make systems reliable.
                </h4> 
              </Col>
            </Row>
              
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-danger">
                      <h5>"We have elected to put our money and faith in a
                      mathematical framework that is free of politics and human
                      error."</h5>
                       <br></br>
                      <br></br>
                      <small>-TYLER WINKELVOSS</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg2.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg")+ ")",
                    }}
                  ></div>
                  <h3>
                    So what actually is the potential of blockchain which can
                    benefit the healthcare domain?
                  </h3>
                 
                  <h5>
                 
                    The carriage of healthcare and blockchain has resulted in
                    cooperation that changes the traditional way of sharing a
                    patient’s healthcare data across entities in the value
                    chain. This is primarily through the elimination of third
                    parties and middlemen. Challenges such as security and
                    fragmented data are streamlined. Also, the authentication
                    controls of shared transactions lower the risk of data theft
                    and other digital fraud.
                    </h5>
                  <h5>
                    We aim to provide a platform that could guarantee the
                    visibility, security, and reliability of records from
                    donation to transfusion, in this way we could make blood
                    product usage data more visible and usable. The main purpose
                    of using a technology like blockchain is to ensure that the
                    patient gets safe blood and reduce the flaws in the
                    conventional systems by replacing human workforce with
                    technology to reduce the chances of malfunctions.
                 </h5>
                </Col>
              </Row>
            </div>




     
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
