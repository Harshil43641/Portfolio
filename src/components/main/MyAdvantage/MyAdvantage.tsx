import { technicalSkills, nonTechnicalSkills } from "../../../data/data";
import SkillCard from "./SkillCard";

export const MyAdvantage = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Top horizontal divider line */}
            <hr className="w-10/12 border border-solid border-gray-400 my-6" />

            {/* Section title */}
            <h3 className="text-center text-3xl font-medium my-6 font-imfell">My Skills</h3>

            {/* Technical Skills Section */}
            <div className="w-full px-4">
                <h4 className="text-center text-2xl font-semibold mt-4">Technical Skills</h4>
                <div className="flex flex-wrap justify-center gap-14 my-8">
                    {technicalSkills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>

            {/* Non-Technical Skills Section */}
            <div className="w-full px-4">
                <h4 className="text-center text-2xl font-semibold mt-4">Non-Technical Skills</h4>
                <div className="flex flex-wrap justify-center gap-14 my-8">
                    {nonTechnicalSkills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>

            {/* Bottom horizontal divider line */}
            <hr className="w-10/12 border border-solid border-gray-400 my-6" />
        </div>
    );
};
