import React from "react";
import style from "./about.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import demo from "../../assets/img_1.png";

const About = () => {
  return (
    <Container id="about" className="py-5 my-5">
      <Row className="align-items-center">
        <Col md={4} className="shadow-lg p-3">
          <h2 className={style.section_header}>ABOUT AGRO</h2>
          <span className={style.sub_header}> FARM COMPANY</span>
          <div className={style.aboutBtn}>
            <Button className="rounded-pill" variant="outline-warning">
              More About
            </Button>
          </div>
        </Col>
        <Col md={4} data-aos="fade-up" data-aos-duration="300">
          <Image src={demo} />
        </Col>
        <Col md={4} className="shadow-lg p-3">
          <p>
            Liveagro is always prepared to do any agro production with relation
            to ICT and research based platforms.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
