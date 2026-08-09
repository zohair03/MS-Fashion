import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import TextAndImageSection from "@/components/sections/textAndImageSection";
import FinalCta from "@/components/sections/finalCtaSection";
import Faqs from "@/components/sections/faqSection";
import { ToddlerClothingMetaContent, ToddlerClothingHeroContent, ToddlerClothingSection1, ToddlerClothingSection2, ToddlerClothingSection3, ToddlerClothingFaqsContent, ToddlerClothingFinalCtaContent } from "@/cms/content/indiviualServicesContent";


export const metadata = {
    title: ToddlerClothingMetaContent.metaTitle,
    description: ToddlerClothingMetaContent.metaDescription,
    keywords: ToddlerClothingMetaContent.metaKeywords,
};

const TeenClothing = () => {
    return (
        <>
            <SubpageHero content={ToddlerClothingHeroContent}/>
            <TextAndImageSection content={ToddlerClothingSection1}/>
            <TextAndImageSection bgColor="bg-section-bg" content={ToddlerClothingSection2} imageLeft={true}/>
            <TextAndImageSection content={ToddlerClothingSection3}/>
            <Faqs bgColor="bg-section-bg" content={ToddlerClothingFaqsContent} />
            <FinalCta content={ToddlerClothingFinalCtaContent}/>
        </>
    );
};

export default TeenClothing;