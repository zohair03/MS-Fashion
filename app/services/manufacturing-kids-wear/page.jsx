import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import TextAndImageSection from "@/components/sections/textAndImageSection";
import FinalCta from "@/components/sections/finalCtaSection";
import Faqs from "@/components/sections/faqSection";
import { ManufacturingOfKidsWearMetaContent, ManufacturingOfKidsWearHeroContent, ManufacturingOfKidsWearSection1, ManufacturingOfKidsWearSection2, ManufacturingOfKidsWearSection3, ManufacturingOfKidsWearFaqsContent, ManufacturingOfKidsWearFinalCtaContent } from "@/cms/content/indiviualServicesContent";


export const metadata = {
    title: ManufacturingOfKidsWearMetaContent.metaTitle,
    description: ManufacturingOfKidsWearMetaContent.metaDescription,
    keywords: ManufacturingOfKidsWearMetaContent.metaKeywords,
};

const ManufacturingOfKidsWear = () => {
    return (
        <>
            <SubpageHero content={ManufacturingOfKidsWearHeroContent}/>
            <TextAndImageSection content={ManufacturingOfKidsWearSection1}/>
            <TextAndImageSection bgColor="bg-section-bg" content={ManufacturingOfKidsWearSection2} imageLeft={true}/>
            <TextAndImageSection content={ManufacturingOfKidsWearSection3}/>
            <Faqs bgColor="bg-section-bg" content={ManufacturingOfKidsWearFaqsContent} />
            <FinalCta content={ManufacturingOfKidsWearFinalCtaContent}/>
        </>
    );
};

export default ManufacturingOfKidsWear;