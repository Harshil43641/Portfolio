import React from "react";
import "../../../styles/hero.css";
import StatsPlaceholder from "./StatsPlaceholder";
import { heroData } from "../../../data/data";

const Hero: React.FC = () => {
    return (
        <main className="overflow-hidden">
            {/* Main Hero Section */}
            <section id="home" className="py-8 flex justify-center">
                {/* Container with responsive grid layout */}
                <div className="max-w-6xl mx-6 lg:mx-8 sm:mx-4 grid lg:gap-16 md:gap-12 max-md:gap-10 lg:pt-8 md:grid-cols-[1fr_2fr_1fr]">
                    
                    {/* Profile Section */}
                    {/* Centered profile introduction */}
                    <div className="grid xl:gap-1 lg:gap-1 gap-1 md:order-2 text-center">
                        <h1 style={{ lineHeight: "1.25" }} className="text-center lg:text-4xl xl:text-4xl text-4xl font-imfell font-semibold tracking-wider mb-1">
                            Hi, I'm {heroData.name} <br />
                            {heroData.profession} <br />
                        </h1>

                        {/* Profile Image Container */}
                        <div className="relative w-[250px] h-[350px] lg:w-[400px] lg:h-[600px] bg-gray-50 border-2 border-gray-300 rounded-[10rem] grid place-items-center transition-colors duration-400 mx-auto">
                            <div className="w-[220px] h-[300px] lg:w-[350px] lg:h-[550px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-[10rem] overflow-hidden flex justify-center items-end">
                                {/* Profile Image */}
                                <img loading="lazy" src={heroData.profileImage} alt="profile" className="lg:w-[350px] w-[200px]" />
                            </div>

                            {/* Decorative Elements */}
                            <img loading="lazy" src={heroData.waveImage} alt="decorative waves" className="absolute opacity-10 w-[70px] left-[-2rem] top-[5rem] md:w-[100px]" />
                            <img loading="lazy" src={heroData.circleImage} alt="decorative circle" className="absolute opacity-10 w-[180px] md:w-[250px] bottom-[-2rem] right-[-3rem] rotate-[15deg] z-[-1]" />
                        </div>
                    </div> 

                    {/* Biography, Contact, and Services Section */}
                    <div className="grid gap-8 md:order-1 md:mt-40 xl:grid-rows-3 xl:gap-y-16 xl:mt-64 text-center md:text-left" id="heroid">
                        {/* Biography */}
                        <div>
                            <h3 className="text-sm font-normal text-gray-500 mb-4 font-montserrat">BIOGRAPHY</h3>
                            <p className="font-imfell text-lg text-gray-900">{heroData.biography}</p>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h3 className="text-sm font-normal text-gray-500 mb-4 font-montserrat">CONTACT</h3>
                            <p className="font-imfell text-lg text-gray-900">
                                {heroData.contact.city} <br />
                                {heroData.contact.email} <br />
                                {heroData.contact.phone}
                            </p>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid gap-8 md:order-3 md:mt-40 md:text-right xl:grid-rows-3 xl:gap-y-16 xl:mt-64" id="heroid">
                        {heroData.stats.map((stat, index) => (
                            <StatsPlaceholder key={index} title={stat.title} stat={stat.stat} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Hero;
