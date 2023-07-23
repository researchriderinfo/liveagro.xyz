import React from "react";
import style from "./liveAgro.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import logo1 from "../../assets/farmer.png";
import logo2 from "../../assets/fund.png";
import logo3 from "../../assets/city.png";
import logo4 from "../../assets/negotiation.png";
import { Avatar } from "@mui/material";

const LiveAgro = () => {
  const abouts = [
    {
      title: "Local Farmer",
      details:
        "Financing, farm inputs and guidance, insurance, and market access are all bundled together to help farmers maximize profits. ",
      image: logo1,
    },
    {
      title: "Financiers",
      details:
        "Utilizing technology and data, we help organizations and individuals assist the creation of access to financing for farmers.",
      image: logo2,
    },
    {
      title: "Agro Companies",
      details:
        "We collaborate with agricultural input Companies and service providers to provide farmers with high-quality agricultural input and advice services.",
      image: logo3,
    },
    {
      title: "Consumers",
      details:
        "We buy directly from farmers and provide agricultural products in huge quantities to big businesses, modern trade merchants, and wholesale markets.",
      image: logo4,
    },
  ];

  return (
    <Container className="py-5">
      <h2 id="services" className={style.sec_title}>
        We Stand For
      </h2>
      <div className={style.sub_title}>
        <span>LIVE</span>
        <span>AGRO</span> is a technology company that enables small-scale
        farmers and
        <p className="text-center">Agri Businesses to maximize their profit.</p>
      </div>

      <Row xs={1} md={4} className="g-4">
        {abouts.map((about, idx) => (
          <Col key={idx}>
            <Card className={` shadow-lg ${style.cardContainer}`}>
              <Avatar
                alt="Remy Sharp"
                src={about.image.src}
                sx={{ width: 90, height: 90 }}
              />

              <Card.Body className="text-center">
                <Card.Title className={style.title}>{about.title}</Card.Title>
                <Card.Text style={{ color: "gray" }}>{about.details}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LiveAgro;
