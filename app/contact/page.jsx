import SubpageHero from "@/components/sections/subpageHero";
import ContactInfo from "@/components/ui/ContactInfo";
import { ContactHeroContent, ContactFaqContent } from "@/cms/content/content";
import Faqs from "@/components/sections/faqSection";

export const metadata = {
    title: "Contact Us | MS Fashion",
    description: "MS Fashion is a clothing store located in Dhaka, Bangladesh.",
};

const Contact = () => {
    return (
        <>
            <SubpageHero content={ContactHeroContent} isCta2={false} isClickToCall={true}/>
            <ContactInfo />
            <Faqs bgColor="bg-section-bg" isButton={false} isImage={false} content={ContactFaqContent} />
        </>
    );
};

export default Contact;