import Image from 'next/image';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import cow1 from "../assets/cow-1.jpg";
import cow2 from "../assets/cow-2.jpg";
import mapLocation from "../assets/farm-location.png";
import fish1 from "../assets/fish-1.jpg";
import fish2 from "../assets/fish-2.jpg";
import fish3 from "../assets/fish-3.jpg";
import style from "../styles/businesSegments.module.css";

const Segments = () => {
    return (
        <Container className={style.mainContainer} fluid>
            <Row className={`${style.bannerContainer}`}>
                <div className={`${style.banTextBox} p-3`}>
                    <span className='fw-light'>Liveagro</span>
                    <h2 className='pb-2'>Animal Farming</h2>
                    <span className='fw-light'>Home | Business Segments | Animal Agriculture Business</span>
                </div>
            </Row>
            <Container>
                <Row className={`${style.overviewContainer} align-items-center p-3`}>
                    <Col md={6} className={`${style.overView}`}>
                        <h3>Overview</h3>
                        <p className='text-muted text-justify'>Animal farming focused on the know-how to best guide in both quality and quantity and thereby contribute to sustainable agriculture in Bangladesh. It started with cattle farmers , then gradually moved to Aquaculture Farmers, Liveagro Farming able to develop comprehensive solutions for entire farming communities of Bangladesh. We entered into farming with commercial cattle farmers and fish farming. Then we started a small scale dairy farm to learn how to produce the best quality milk. This farm will also consist of a state-of-the-art integrated milk processing plant to produce various milk and milk products.The area under the project should be in total 13.47 acres (Bill is 12.70 acres and the adjacent plot is 0.77 acres). </p>
                    </Col>
                    <Col md={6}>
                        <Image className='rounded-1' src={mapLocation} alt='farm map location'/>
                    </Col>
                </Row>
                <div className={`${style.border}`}/>

                <div className='text-center mt-5'>
                     <h2><span className={`${style.title}`}>Dairy</span> Farming</h2>
                </div>
                <Row xs={1} md={3}>
                     {demoData.map((item, idx) => (
                        <Col key={idx} className='pt-5'>
                        
                          <Card.Img className='rounded-3' height={220} variant="top" src={item.image.src} />
                          <Card.Body className='pt-2'>
                            <Card.Text>{item.title}</Card.Text>
                          </Card.Body>
                        </Col>
                    ))}
                </Row> 

                 <div className={`${style.border}`}/>


                <div className='text-center mt-5'>
                     <h2><span className={`${style.title}`}>Aquaculture</span> Integration</h2>
                </div>
                <Row xs={1} md={3}>
                     {fishFarm.map((item, idx) => (
                        <Col key={idx} className='py-5'>
                            <Card.Header className='mb-2 fw-bold text-muted text-center'>{item.title}</Card.Header>
                          <Card.Img className='rounded-3' height={220} variant="top" src={item.image.src} />
                          <Card.Body className='pt-2'>
                            <Card.Text>{item.details}</Card.Text>
                          </Card.Body>
                        </Col>
                    ))}
                </Row>                  
                 
            </Container>
        </Container>
    );
};

export default Segments;


const demoData = [
    {
      title: "Feeding Total Mixed Ration (TMR) to daily Cattle at the Feed alley.",
      image: cow1
    },
    {
      title: "Automatic milking at the milking parlor is a system for production of hygienic and safe milk.",
      image: cow2
    },
    {
        title: "Milk Processing Unit for the production of different milk products.",
        image: cow2
      },
  
  ];

 const fishFarm = [
    {
      title: "Prawn Feeds",
      details: "The farming aspect of the aqua farming implies an intervention enhance production.s",
      image: fish1
    },
    {
      title: "Aquatic Plants",
      details: "The submerged and emergent vegetation are relatively easy to distinguish aquarium for the best feed.",
      image: fish2
    },
    {
        title: "Hatchery Supply",
        details: "Hatishalar Bil Sadullapur, Gaibandha",
        image: fish3
      },
  
  ];