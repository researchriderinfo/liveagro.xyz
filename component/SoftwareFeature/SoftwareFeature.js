import { Row, Col, Container } from "react-bootstrap";
import effeciency from "../../assets/image-effeciency.jpg"
import profitability from "../../assets/image-profitability.jpg"
import sustainability from "../../assets/image-sustainability.jpg"
import style from "./SoftwareFeature.module.css"
import Image from "next/image";

export default function SoftwareFeature (){
    return(
        <Container className={`${style.container}`}>
         <Col className="text-center my-5">
         <h2 className={`${style.mainTitle}`}>what you can expect from liveagro.</h2>
            <p>Unlock profit-driving insights, improve your animal performance and grazing decisions, and record the data
            that matters most to the success of your ranch.</p>
         </Col>
            {demoData.map((item, idx) => (
         <Row key={idx} className={`g-4 align-items-center my-1 ${idx % 2 === 1 ? "flex-row-reverse" : ""}`}>
         <Col md={6} className={`${style.textContainer}`}>
           <h5>{item.title}</h5>
           <p className="text-muted">{item.description}</p>
         </Col>
         <Col md={6}>
           <Image className="rounded-3 fluid" src={item.image} alt={item.title} />
         </Col>
       </Row>
            ))}
        </Container>
    )
}



const demoData = [
    {
      title: "Get more done, even faster",
      description: "When your team is more productive, your business is more successful. With online and offline record keeping, unlimited users, and easy-to-use task management features, you can put busywork on autopilot and focus on the decisions that matter most.",
      icon: "path/to/icon1.png",
      image: effeciency
    },
    {
      title: "Take control of your profitability",
      description: "Get instant insight into weight gains and production costs, access powerful reporting with a single click, and drill down into individual animal details to make the most of every profit-driving opportunity.",
      icon: "path/to/icon2.png",
      image: profitability
    },
    {
        title: "Ensure a sustainable future",
        description: "You’re already doing the work, let Agrolive help you leverage it. Prove out your impact and own your ranch’s sustainability story with detailed grazing insights and full histories of each grazing decision you make. Plus, secure cloud storage ensures there’s always a blueprint of success for the next generation to follow.",
        icon: "path/to/icon2.png",
        image: sustainability
      },
  
  ];