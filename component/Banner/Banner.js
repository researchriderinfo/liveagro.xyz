import Carousel from "react-bootstrap/Carousel";
import banner2 from "../../assets/slider-1.jpg";
import banner3 from "../../assets/slider-2.jpg";
import Image from "next/image";
import style from "./banner.module.css";

function Banner() {
  return (
    <Carousel className="pb-lg-5" id="home">
      <Carousel.Item>
        <Image
          height={800}
          className={`d-block w-100 ${style["carousel-image"]}`}
          src={banner2}
          alt="First slide"
        />
        <Carousel.Caption
          className={style["carousel-caption"]}
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <h3>Title for First Slide</h3>
          <p>Subtitle for First Slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          height={800}
          className={`d-block w-100 ${style["carousel-image"]}`}
          src={banner3}
          alt="Second slide"
        />
        <Carousel.Caption className={style["carousel-caption"]}>
          <h3>Title for Second Slide</h3>
          <p>Subtitle for Second Slide</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
