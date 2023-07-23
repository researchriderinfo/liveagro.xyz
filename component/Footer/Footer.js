import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import rrLogo from "../../assets/logo.png";
import style from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`${style.custom_footer}`}>
      <Container>
        <Row className="justify-content-between align-items-start g-2  p-2">
          <Col xs={12} md={8}>
            <p className={`${style.text_color}`}>
              <span className={`${style.first_let}`}>L</span>
              <span className={`${style.brand}`}>iveagro</span> is always
              prepared to do any agro production
              <p>with relation to ICT and research based platforms.</p>
            </p>

            <Form.Label className="text-success" htmlFor="inputPassword5">
              Stay in the Loop
            </Form.Label>
            <Form.Control
              className={style.inputFiled}
              type="text"
              placeholder="Email*"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
              Stay in touch with us for the freshest products
            </Form.Text>
          </Col>

          <Col
            xs={12}
            md={4}
            className={`${style.link_wrapper} text-lg-start text-center`}
          >
            <h5>Contact Us</h5>
            <a href="">
              <LocationOnOutlinedIcon
                sx={{ fontSize: "20px", marginLeft: "-6px" }}
              />{" "}
              Rupnagar R/A, Road-04, House-26/1, Mirpur-02, Dhaka, Bangladesh
            </a>
            <a href="">
              <LocalPhoneOutlinedIcon
                sx={{ fontSize: "20px", marginLeft: "-2px" }}
              />{" "}
              +880 1729-914461
            </a>
            <a href="">
              <EmailOutlinedIcon
                sx={{ fontSize: "20px", marginLeft: "-2px" }}
              />{" "}
              info@researchrider.com
            </a>
          </Col>
          <hr className={`${style.divider}`} />

          <div className={`${style.footer_end}`}>
            <div className="d-flex justify-content-between align-items-center flex-wrap ">
              <div className="d-flex align-items-center">
                <Link href="https://www.researchrider.com/">
                  <a target="_blank">
                    <Image
                      width={60}
                      height={60}
                      src={rrLogo}
                      alt="liveagro.xyz"
                    />
                  </a>
                </Link>
                <h6 className="text-success fs-5 mx-2">
                  <span className="text-danger">Live</span>agro
                </h6>
              </div>

              <div className={`${style.social_box}`}>
                <a href="www.facebook.com">
                  <FacebookIcon />
                </a>
                <a href="www.youtube.com">
                  <YouTubeIcon />
                </a>
                <a href="www.linkedin.com">
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div
              className="d-flex flex-wrap align-items-end justify-content-end"
              style={{ gap: "30px" }}
            >
              <div> 2023 © liveagro.xyz. All rights reserved</div>

              <div className={`${style.ending_link} mx-lg-2`}>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
                <a href="#">About</a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
