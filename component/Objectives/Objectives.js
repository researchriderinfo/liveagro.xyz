import React from "react";
import style from "./objectives.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import check from "../../assets/check.png";
import farm from "../../assets/liveagro_objective.jpg";
import Image from "next/image";

const Objectives = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Image className="rounded-1" src={farm} />
        </Col>
        <Col md={6} className={style.textContainer}>
          <h2 className={style.sec_header}>
            Objectives of <span>Live</span>
            <span>agro</span>
          </h2>

          <div className={style.objectives}>
            <li className="d-flex align-items-center">
              <Image src={check} />
              Conduct agro research on fisheries and poultry.
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
