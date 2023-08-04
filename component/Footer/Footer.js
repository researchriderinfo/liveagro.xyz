import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import style from "./Footer.module.css";

export default function Footer() {
  return (
<footer className={`${style.custom_footer}`}>
      <Container>
        <Row className="justify-content-between align-items-center g-2  p-2">
        <Col xs={12} md={8}>
          <div className={`${style.text_color}`}>
            <span className={`${style.first_let}`}>L</span>
            <span className={`${style.brand}`}>iveagro</span> is always prepared to do any agro production
            <p>with relation to ICT and research based platforms.</p>
          </div>
        </Col>

          <Col
            xs={12}
            md={4}
            className={`${style.link_wrapper} text-lg-start text-center`}
          >
         
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
          <hr className={`${style.divider}`} />

          <div className={`${style.footer_end}`}>
            <div className="d-flex justify-content-between align-items-center flex-wrap ">
              <div className="d-flex align-items-center">
                <Link href="https://www.researchrider.com/">
                  <a target="_blank">
                    {/* <Image
                      width={60}
                      height={60}
                      src={rrLogo}
                      alt="liveagro.xyz"
                    /> */}
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
}
