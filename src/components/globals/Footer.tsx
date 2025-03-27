import SocialMediaLinks from "./SocialMediaLinks";
import {footer} from "../../data/data";
import Divider from "../main/Divider";

export const Footer = () => {
    return (
        <div className="w-[70vw] m-auto">
            <div className="mt-16 md:mt-28"></div>
            <Divider />
            <div className="text-sm font-montserrat flex flex-col md:flex-row-reverse gap-4 md:gap-0 justify-between items-center py-10 md:py-14 px-10 md:px-0">
                <div>&copy;&nbsp;{footer.copyRightText}</div>
                <div>
                    <a href={`mailto:${footer.email}`} className="text-black no-underline hover:underline hover:font-semibold">
                        {footer.email}
                    </a>
                </div>
                <SocialMediaLinks />
            </div>
        </div>
    );
};
