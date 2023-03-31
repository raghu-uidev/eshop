import { Carousel } from "react-bootstrap";
import { bannerCorouselConfig } from "./banner-corousel.config";
import './banner-corousel.css';

const BannerCorousel = () => {
    return (
        <Carousel>
            {bannerCorouselConfig.corouselImages.map(corousel =>
            (<Carousel.Item>
                <img
                    className="d-block w-100"
                    src={corousel.imageSrc}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{corousel.title}</h3>
                    <p>{corousel.caption}</p>
                </Carousel.Caption>
            </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default BannerCorousel;