import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import check from "../../assets/check.png";
import farm from "../../assets/liveagro_objective.jpg";
import style from "./objectives.module.css";

const Objectives = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <Image className="rounded-1" src={farm} />
        </Col>
        <Col md={6} className={style.textContainer}>
          <h2 className={`${style.sec_header} text-center text-lg-start`}>
            Objectives of  <span>Live</span>
            <span>agro</span>
          </h2>

          <div className={style.objectives}>
            <li className="d-flex align-items-center">
              <Image src={check} />
              Conduct agro research on fisheries, poultry, livestock etc.
            </li>
            <li className="d-flex align-items-center">
              <Image src={check} /> Train up the people to participate in
              agriculture.
            </li>
            <li className="d-flex align-items-center">
              <Image src={check} />
              Contribute into the national food security via operating agro
              business.
            </li>
            <li className="d-flex align-items-center">
              <Image src={check} />
              Make steps to progress the livelihood of the people adjacent to
              Hatishalar Bil.
            </li>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Objectives;
