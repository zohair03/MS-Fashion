import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import TextAndImageSection from "@/components/sections/textAndImageSection";
import FinalCta from "@/components/sections/finalCtaSection";
import Faqs from "@/components/sections/faqSection";
import { BulkExportOrdersMetaContent, BulkExportOrdersHeroContent, BulkExportOrdersSection1, BulkExportOrdersSection2, BulkExportOrdersSection3, BulkExportOrdersFaqsContent, BulkExportOrdersFinalCtaContent } from "@/cms/content/indiviualServicesContent";


export const metadata = {
    title: BulkExportOrdersMetaContent.metaTitle,
    description: BulkExportOrdersMetaContent.metaDescription,
    keywords: BulkExportOrdersMetaContent.metaKeywords,
};

const BulkExportOrders = () => {
    return (
        <>
            <SubpageHero content={BulkExportOrdersHeroContent}/>
            <TextAndImageSection content={BulkExportOrdersSection1}/>
            <TextAndImageSection bgColor="bg-section-bg" content={BulkExportOrdersSection2} imageLeft={true}/>
            <TextAndImageSection content={BulkExportOrdersSection3}/>
            <Faqs bgColor="bg-section-bg" content={BulkExportOrdersFaqsContent} />
            <FinalCta content={BulkExportOrdersFinalCtaContent}/>
        </>
    );
};

export default BulkExportOrders;