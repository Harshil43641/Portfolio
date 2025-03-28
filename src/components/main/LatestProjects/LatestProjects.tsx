import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperContent from "./SwiperContent";
import { latestProjects } from "../../../data/data";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { useState } from 'react';

export const LatestProjects = () => {
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    return (
        <>
            <h2 className="text-3xl mt-8 font-thin font-imfell mb-12 text-center">My Latest Projects</h2>

            <div 
                onMouseEnter={() => swiperInstance?.autoplay?.pause()}
                onMouseLeave={() => swiperInstance?.autoplay?.resume()}
            >
                <Swiper
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
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
                    {latestProjects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <SwiperContent 
                                href={project.href}
                                imgSrc={project.imgSrc}
                                imgAlt={project.imgAlt}
                                overlayText={project.overlayText}
                                description={project.description}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};