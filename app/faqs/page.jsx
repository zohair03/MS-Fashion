import SubpageHero from "@/components/sections/subpageHero";
import { FaqsHeroContent, FaqsPageContent } from "@/cms/content/content";
import Faqs from "@/components/sections/faqSection";

export const metadata = {
    title: "Frequently Asked Questions | MS Fashion",
    description: "Find answers to common questions about MS Fashion's kids wear manufacturing and wholesale services in Mumbai.",
};

const FaqsPage = () => {
    return (
        <>
            <SubpageHero content={FaqsHeroContent} isCta2={false} isClickToCall={true} />
            <Faqs bgColor="bg-section-bg" isButton={false} isImage={false} content={FaqsPageContent} />
        </>
    );
};

export default FaqsPage;