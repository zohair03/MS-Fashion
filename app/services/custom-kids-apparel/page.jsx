import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import TextAndImageSection from "@/components/sections/textAndImageSection";
import FinalCta from "@/components/sections/finalCtaSection";
import Faqs from "@/components/sections/faqSection";
import { CustomKidsApparelMetaContent, CustomKidsApparelHeroContent, CustomKidsApparelSection1, CustomKidsApparelSection2, CustomKidsApparelSection3, CustomKidsApparelFaqsContent, CustomKidsApparelFinalCtaContent } from "@/cms/content/indiviualServicesContent";


export const metadata = {
    title: CustomKidsApparelMetaContent.metaTitle,
    description: CustomKidsApparelMetaContent.metaDescription,
    keywords: CustomKidsApparelMetaContent.metaKeywords,
};

const CustomKidsApparel = () => {
    return (
        <>
            <SubpageHero content={CustomKidsApparelHeroContent}/>
            <TextAndImageSection content={CustomKidsApparelSection1}/>
            <TextAndImageSection bgColor="bg-section-bg" content={CustomKidsApparelSection2} imageLeft={true}/>
            <TextAndImageSection content={CustomKidsApparelSection3}/>
            <Faqs bgColor="bg-section-bg" content={CustomKidsApparelFaqsContent} />
            <FinalCta content={CustomKidsApparelFinalCtaContent}/>
        </>
    );
};

export default CustomKidsApparel;