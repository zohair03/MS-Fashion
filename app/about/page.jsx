import React from "react";
import TextAndImageSection from "@/components/sections/textAndImageSection";
import SubpageHero from "@/components/sections/subpageHero";
import { Abouthero, AboutSection1, AboutSection2 } from "@/cms/content/content";


export const metadata = {
    title: "About Us | MS Fashion",
    description: "MS Fashion is a clothing store that sells a variety of clothing items for men and women. We offer a wide range of styles and sizes to meet your needs. Contact us today to learn more!",
};

const AboutUs = () => {
    return (
        <>
            <SubpageHero content={Abouthero}/>
            <TextAndImageSection content={AboutSection1}/>
            <TextAndImageSection bgColor="bg-section-bg" content={AboutSection2} imageLeft={true}/>
        </>
    );
};

export default AboutUs;