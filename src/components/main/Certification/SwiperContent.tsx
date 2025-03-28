import {SwiperContentProps} from "../../../types/types";
import "./styles.css";
import "swiper/css";

const SwiperContent: React.FC<SwiperContentProps> = ({
    href, 
    imgSrc, 
    imgAlt, 
    overlayText, 
    description,
    onClick
}) => {
    return (
        <div className="slide-container">
            <div className="image-container">
                <a href={href} onClick={(e) => {
                    if(onClick) {
                        e.preventDefault();
                        onClick();
                    }
                }}>
                    <img loading="lazy" src={imgSrc} alt={imgAlt} />
                </a>
                <div className="overlay">{overlayText}</div>
            </div>
            <p className="text mt-3 mb-4 text-lg font-bold">{description}</p>
        </div>
    );
};

export default SwiperContent;