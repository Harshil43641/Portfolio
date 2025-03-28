import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperContent from "./SwiperContent";
import { Certification as CertificationData } from "../../../data/data";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { useState } from 'react';

export const Certification = () => {
    const [swiperInstance, setSwiperInstance] = useState<any>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <h2 className="text-3xl mt-8 font-thin font-imfell mb-12 text-center">Certifications</h2>

            <div 
                onMouseEnter={() => swiperInstance?.autoplay?.pause()}
                onMouseLeave={() => swiperInstance?.autoplay?.resume()}
            >
                <Swiper
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{ clickable: false }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
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
                    {CertificationData.map((certificate, index) => (
                        <SwiperSlide key={index}>
                            <SwiperContent 
                                href={certificate.href}
                                imgSrc={certificate.imgSrc}
                                imgAlt={certificate.imgAlt}
                                overlayText={certificate.overlayText}
                                description={certificate.description}
                                onClick={() => setSelectedImage(certificate.imgSrc)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}>
                    <img 
                        src={selectedImage} 
                        alt="Enlarged certification" 
                        className="max-h-full max-w-full object-contain cursor-pointer"
                    />
                </div>
            )}
        </>
    );
};