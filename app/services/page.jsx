import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import { ServicesHeroContent, ServicesPageCardsContent } from "@/cms/content/content";
import Services from "@/components/sections/servicesSection";

export const metadata = {
    title: "Services | MS Fashion",
    description: "We specialize in professional tailoring for men, women, and children. From custom suits to perfect fittings, we bring your vision to life.",
};

const ServicesPage = () => {
    return (
        <>
            <SubpageHero content={ServicesHeroContent}/>
            <Services content={ServicesPageCardsContent}/>
        </>
    );
};

export default ServicesPage;