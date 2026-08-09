const fs = require('fs');

const services = [
    { name: "Infant Clothing", key: "InfantClothing", desc: "Soft, safe, and comfortable infant clothing available for wholesale orders. Perfect for sensitive baby skin." },
    { name: "Toddler Clothing", key: "ToddlerClothing", desc: "Trendy and durable toddler clothing for all seasons, designed for active kids." },
    { name: "Teen Clothing", key: "TeenClothing", desc: "Stylish and comfortable teen clothing available in bulk for your retail needs." },
    { name: "Manufacturing Of Kids Wear", key: "ManufacturingOfKidsWear", desc: "We manufacture high-quality kids wear with a focus on comfort, durability, and the latest fashion trends." },
    { name: "Bulk Export Orders", key: "BulkExportOrders", desc: "Reliable export services for international clients looking for high-quality Indian-made kids apparel." },
    { name: "Custom Kids Apparel", key: "CustomKidsApparel", desc: "Customized clothing manufacturing based on specific designs, fabrics, and branding requirements." }
];

let content = "";

services.forEach((s, index) => {
    content += `// Service ${index + 1} : ${s.name}
export const ${s.key}MetaContent = {
    metaTitle: "${s.name} | MS Fashion",
    metaDescription: "${s.desc}",
    metaKeywords: "${s.name.toLowerCase()}, wholesale, kids wear, MS Fashion Mumbai"
}

export const ${s.key}HeroContent = {
    heading: "${s.name}",
    subtitle: "${s.desc}",
    btn1Text: "View Services",
    href1: "/services",
    btn2Text: "Contact Us",
    href2: "/contact",
    bgImage: "bg-[url('/images/image3.webp')]",
    breadcrumb: "${s.name}"
}

export const ${s.key}Section1 = {
    label: "Quality",
    heading: "Premium Quality ${s.name}",
    description: "At MS Fashion, we provide the best in class ${s.name.toLowerCase()} ensuring high quality, comfort and style for all your retail needs.",
    cta: "Learn More",
    href: "/contact",
    image: "/images/rn-infotech-57.webp",
}

export const ${s.key}Section2 = {
    label: "Trendy",
    heading: "Latest Fashion Trends",
    description: "Our collections are always updated with the latest trends in the market, making sure your business stays ahead.",
    cta: "View Collection",
    href: "/contact",
    image: "/images/rn-infotech-31.webp",
}

export const ${s.key}Section3 = {
    label: "Bulk Orders",
    heading: "Wholesale & Bulk Supply",
    description: "We handle bulk orders efficiently with a state-of-the-art facility in Mumbai to ensure timely deliveries.",
    cta: "Place an Order",
    href: "/contact",
    image: "/images/rn-infotech-38.webp",
}

export const ${s.key}FaqsContent = {
    label: "faqs",
    heading: "${s.name} FAQs",
    image: "/images/image5.webp",
    questions: [
        {
            id: 1,
            question: "What is your minimum order quantity for ${s.name.toLowerCase()}?",
            answer: "Our MOQ varies by product. Please reach out to our sales team for detailed information.",
        },
        {
            id: 2,
            question: "Do you ship ${s.name.toLowerCase()} across India?",
            answer: "Yes, we handle orders pan-India as well as international export orders.",
        },
        {
            id: 3,
            question: "Are the fabrics used skin-friendly?",
            answer: "Absolutely. We ensure all fabrics are safe and comfortable.",
        },
        {
            id: 4,
            question: "Can we request a sample before a bulk order?",
            answer: "Yes, we can provide samples for quality checks before placing a large order.",
        }
    ],
    btnText: "Have More Questions?",
    href: "/contact",
}

export const ${s.key}FinalCtaContent = {
    label: "Get In Touch",
    heading: "Looking for ${s.name}?",
    subtitle: "Contact MS Fashion today for your wholesale needs.",
    btn1Text: "Call Us Now",
    href1: "tel:+919137905368",
    btn2Text: "Find Our Location",
    href2: "/",
    image: "bg-[url('/images/rn-infotech-57.webp')]",
}

`;
});

fs.writeFileSync('cms/content/indiviualServicesContent.js', content);
console.log("Generated indiviualServicesContent.js successfully");
