import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperContent from "./SwiperContent";
import { Certification as CertificationData } from "../../../data/data";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export const Certification = () => {
    return (
        <>
            {/* Section Title */}
            <h2 className="text-3xl mt-8 font-thin font-imfell mb-12 text-center">My Projects</h2>

            {/* Swiper Carousel Component */}
            <Swiper
                slidesPerView={1}            
                spaceBetween={10}             
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,              // Delay between slides in milliseconds
                    disableOnInteraction: false, // Continues autoplay after interaction
                }}
                modules={[Pagination, Autoplay]} // Registers the pagination and autoplay modules
                className="mySwiper"          // Custom CSS class for styling
                breakpoints={{
                    640: {                    
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {                    
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {                   
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {/* Map over the latestProjects array to create a slide for each project */}
                {CertificationData.map((certificate, index) => (
                    <SwiperSlide key={index}>
                        {/* SwiperContent component that displays project details */}
                        <SwiperContent 
                            href={certificate.href} 
                            imgSrc={certificate.imgSrc} 
                            imgAlt={certificate.imgAlt} 
                            overlayText={certificate.overlayText} 
                            description={certificate.description} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
