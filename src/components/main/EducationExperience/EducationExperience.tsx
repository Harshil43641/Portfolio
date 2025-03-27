import {education, experience} from "../../../data/data";
import "../../../styles/hero.css";

const EducationExperience = () => {
    return (
        <section className="p-8 mb-20 bg-white">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-medium font-imfell mb-8 md:mb-12 text-center">Education & Experience</h2>
            
            {/* Grid container for Education and Experience sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-[4rem] md:gap-[8rem] lg:mx-[8rem]" id="heroid">
                
                {/* Education Section */}
                <div className="">
                    {education.map((edu, index) => (
                        <div key={index} className="mb-2">
                            {/* Year of Education */}
                            <p className="text-xs font-semibold text-gray-400 mb-2 md:mb-4">{edu.year}</p>
                            
                            {/* Title of Degree/Certification */}
                            <h3 className="text-base md:text-lg mb-2 md:mb-0 mt-8 font-imfell">{edu.title}</h3>
                            
                            {/* Institution Name */}
                            <p className="text-gray-400 text-xs font-semibold">{edu.institution}</p>
                        </div>
                    ))}
                </div>
                
                {/* Experience Section */}
                {experience.map((exp, index) => (
                    <div key={index} className="">
                        {/* Period of Experience */}
                        <p className="text-xs font-semibold text-gray-400 mb-2 lg:mb-4">{exp.period}</p>
                        
                        {/* Mapping through each experience item */}
                        {exp.items.map((item, i) => (
                            <div key={i} className="mb-1 mt-8 lg:mb-2">
                                {/* Job Title or Position */}
                                <h3 className="text-base lg:text-lg mb-2 md:mb-0 font-imfell">{item.title}</h3>
                                
                                {/* Company or Institution */}
                                <p className="text-gray-400 text-xs font-semibold">{item.institution}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EducationExperience;
