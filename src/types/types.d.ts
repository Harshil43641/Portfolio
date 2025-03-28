export interface User {
    name: string;
    email: string;
    socials: Social[];
}

export interface Social {
    link: string;
    icon: string;
    name: string;
}

export interface MyAdv {
    name: string;
    proficiency: string;
    image: string;
}

export interface FadeEffectProps {
    children: ReactNode;
    sectionId?: string;
}

export interface AnimatedHamburgerProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export interface StatsPlaceholderProps {
    title: string;
    stat: string;
}

export interface SwiperContentProps {
    href: string;
    imgSrc: string;
    imgAlt: string;
    overlayText: string;
    description: string;
}
