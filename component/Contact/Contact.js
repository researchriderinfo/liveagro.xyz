import Image from "next/image";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import envelope from "../../assets/envelope.png";
import phone from "../../assets/phone-call.png";
import place from "../../assets/place.png";
import style from "./Contact.module.css";


export default function Contact() {
    return (
    <Container fluid>
        <Row className={`${style.rowContainer} p-lg-4 p-3 g-4`}>
            <Col md={6} className={`${style.title} bg-white p-lg-5 p-3 rounded-3`}>
              <h5>Have Questions? </h5>
              <h2>Send us a Massage</h2>
              <Row className="g-4 justify-content-start">
                <Col md={12}><Form.Control className={`${style.form}`} size="lg" type="text" placeholder="Large text" /></Col>
                <Col><Form.Control className={`${style.form}`}  size="lg" type="text" placeholder="Large text" /></Col>
                <Col><Form.Control  className={`${style.form}`}  size="lg" type="text" placeholder="Large text" /></Col>
                <Col md={12}> <Form.Control className={`${style.form}`}  size="lg" as="textarea" rows={8} /></Col>
                <Button className="w-50 mx-3 py-2 fw-bold" variant="success">Submit</Button>{' '}
              </Row>
            </Col>
            <Col md={6} className={`${style.contactContainrt} p-lg-5`}>
              <div className={`${style.contactTitle}`}>
                <h2>Contact Information</h2>
                <p>Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.</p>
              </div>

              <div className="d-flex align-items-start">
                <Image width={50} height={50} src={phone} alt="phone-icon"/>
              <div className={`${style.contactInfo} px-3`}>
                <h5>Hotline</h5>
                <p>+4733378901</p>
              </div>
              </div>



              <div className="d-flex align-items-start mt-3">
                <Image width={50} height={50} src={place} alt="phone-icon"/>
              <div className={`${style.contactInfo} px-3`}>
                <h5>Our Location</h5>
                <p>Rupnagar R/A, Road-04, House-26/1, Mirpur-02, Dhaka, Bangladesh</p>
              </div>
              </div>


              <div className="d-flex align-items-start mt-3">
                <Image width={50} height={50} src={envelope} alt="phone-icon"/>
              <div className={`${style.contactInfo} px-3`}>
                <h5>Official Email </h5>
                <p>info@researchrider.com</p>
              </div>
              </div>
             
            </Col>
        </Row>
    </Container>
    );
  }