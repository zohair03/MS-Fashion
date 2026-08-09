import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import TextAndImageSection from "@/components/sections/textAndImageSection";
import FinalCta from "@/components/sections/finalCtaSection";
import Faqs from "@/components/sections/faqSection";
import { TeenClothingMetaContent, TeenClothingHeroContent, TeenClothingSection1, TeenClothingSection2, TeenClothingSection3, TeenClothingFaqsContent, TeenClothingFinalCtaContent } from "@/cms/content/indiviualServicesContent";


export const metadata = {
    title: TeenClothingMetaContent.metaTitle,
    description: TeenClothingMetaContent.metaDescription,
    keywords: TeenClothingMetaContent.metaKeywords,
};

const TeenClothing = () => {
    return (
        <>
            <SubpageHero content={TeenClothingHeroContent}/>
            <TextAndImageSection content={TeenClothingSection1}/>
            <TextAndImageSection bgColor="bg-section-bg" content={TeenClothingSection2} imageLeft={true}/>
            <TextAndImageSection content={TeenClothingSection3}/>
            <Faqs bgColor="bg-section-bg" content={TeenClothingFaqsContent} />
            <FinalCta content={TeenClothingFinalCtaContent}/>
        </>
    );
};

export default TeenClothing;