import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import TextAndImageSection from "@/components/sections/textAndImageSection";
import FinalCta from "@/components/sections/finalCtaSection";
import Faqs from "@/components/sections/faqSection";
import { InfantClothingMetaContent, InfantClothingHeroContent, InfantClothingSection1, InfantClothingSection2, InfantClothingSection3, InfantClothingFaqsContent, InfantClothingFinalCtaContent } from "@/cms/content/indiviualServicesContent";


export const metadata = {
    title: InfantClothingMetaContent.metaTitle,
    description: InfantClothingMetaContent.metaDescription,
    keywords: InfantClothingMetaContent.metaKeywords,
};

const InfantClothing = () => {
    return (
        <>
            <SubpageHero content={InfantClothingHeroContent}/>
            <TextAndImageSection content={InfantClothingSection1}/>
            <TextAndImageSection bgColor="bg-section-bg" content={InfantClothingSection2} imageLeft={true}/>
            <TextAndImageSection content={InfantClothingSection3}/>
            <Faqs bgColor="bg-section-bg" content={InfantClothingFaqsContent} />
            <FinalCta content={InfantClothingFinalCtaContent}/>
        </>
    );
};

export default InfantClothing;