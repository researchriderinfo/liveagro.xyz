import Carousel from "react-bootstrap/Carousel";
import banner2 from "../../assets/slider-1.jpg";
import banner3 from "../../assets/slider-2.jpg";
import Image from "next/image";
import style from "./banner.module.css";

function Banner() {
  return (
    <Carousel className="pb-lg-5" id="home" fade>
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
          {/* <h3>Innovative Farming for a Sustainable Tomorrow</h3> */}
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
          {/* <h3>Growing Greener with IOT Farming</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
