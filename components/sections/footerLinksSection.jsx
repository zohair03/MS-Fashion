import Link from "next/link";
import Image from "next/image";
import CallButton from "../ui/buttons/callButton";
import BusinessInfo from "@/cms/business Info/businessInfo";
import { ServicesContent } from "@/cms/content/content";
import { navLinks, aboutLinks, privacyPolicy } from "@/cms/content/navLink";

// Instagram Icon
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 shrink-0 text-zinc-600"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Facebook Icon
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 shrink-0 text-zinc-600"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// LinkedIn Icon
const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 shrink-0 text-zinc-600"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);


const quickLinks1 = [
  { title: "Home", href: "/" },
  { title: "About Us", href: navLinks[1].href },
  { title: "FAQs", href: aboutLinks[1].href },
];

const quickLinks2 = [
  { title: "Contact Us", href: navLinks[4].href },
  { title: "Services", href: navLinks[2].href },
  { title: "Gallery", href: aboutLinks[2].href },
];

const servicesLinks1 = [
  { title: "Computer & Mac Repairs", href: "/" },
  { title: "Gaming Console Repair", href: "/" },
  { title: "New & Used Computers", href: "/" },
  { title: "Networking Services", href: "/" },
  { title: "Server & IT Support", href: "/" },
  { title: "Recycle & Disposal", href: "/" },
];

const FooterLinks = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-footer-bg via-footer-bg to-[#B27D06] text-white font-sans">
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-1 top-[20%] left-[5%] opacity-50" />
      <div className="floating-orb floating-orb-3 bottom-[15%] right-[8%] opacity-40" />

      {/* Main Footer */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-6 px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        {/* Col 1 - Logo + CTA + Social */}
        <div className="flex flex-col items-center gap-6 w-full lg:w-1/4">
          {/* Logo */}
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="logo-glow text-5xl lg:text-3xl xl:text-5xl text-red-500 flex flex-col items-center"
            >
              {BusinessInfo.isLogo ? (
                <Image
                  src={BusinessInfo.Logo}
                  alt="Repair IT MSP Logo"
                  width={100}
                  height={100}
                  className="object-cover rounded-lg"
                />
              ) : (
                <p className="text-xl font-serif text-center tracking-widest text-primary uppercase">
                  MS Fashion
                </p>
              )}
            </Link>
          </div>

          {/* CTA Button */}
          <div>
            <CallButton btnText="Call Us Now" />
          </div>

          {/* Social Icons */}
          <div className="mt-4 flex gap-7">
            <a className="hover:scale-120 active:scale-95 transition-all duration-200" href={BusinessInfo.SocialMedia.Facebook} target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a className="hover:scale-120 active:scale-95 transition-all duration-200" href={BusinessInfo.SocialMedia.Instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a className="hover:scale-120 active:scale-95 transition-all duration-200" href={BusinessInfo.SocialMedia.Youtube} target="_blank" rel="noopener noreferrer">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        {/* Col 2 - Quick Links — Glass Panel */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4  rounded-2xl p-6">
          <div className="glass-content flex flex-col gap-4">
            <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/20 pb-3">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div className="flex flex-col gap-3">
                {quickLinks1.map((link) => (
                  <Link
                    key={link.title + link.href}
                    href={link.href}
                    className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base transition-colors border-b border-white/10 pb-2"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {quickLinks2.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base transition-colors border-b border-white/10 pb-2"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Col 3 - Services — Glass Panel */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4 rounded-2xl p-6">
          <div className="glass-content flex flex-col gap-4">
            <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/20 pb-3">
              Services
            </h4>
            <div className="">
              <div className="flex flex-col gap-3">
                {ServicesContent.cards.map((link) => (
                  <Link
                    key={link.title + link.href}
                    href={link.href}
                    className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base transition-colors border-b border-white/10 pb-2"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Col 4 - Contact Us — Glass Panel */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4 rounded-2xl p-6">
          <div className="glass-content flex flex-col gap-4">
            <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/20 pb-3">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <a href={`tel:${BusinessInfo.PrimaryContactNumber}`} className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base transition-colors">
                {BusinessInfo.PrimaryContactNumber}
              </a>
              <a href={`mailto:${BusinessInfo.Email}`} className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base transition-colors">
                {BusinessInfo.Email}
              </a>
              <a
                href={BusinessInfo.GoogleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-form-text/80 hover:text-footer-form-text-hover text-sm md:text-base leading-relaxed transition-colors"
              >
                {BusinessInfo.Address}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 px-6 sm:px-10 lg:px-16 py-6 flex flex-col items-center gap-2 text-center">
        <p className="text-white/70 text-xs sm:text-sm">
          © 2026 &nbsp; The content on this website is owned by us and our
          licensors
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/70">
          <Link href={privacyPolicy.href} className="hover:text-footer-form-text-hover transition-colors">
            Privacy Policy
          </Link>
          <Link href={privacyPolicy.href} className="hover:text-footer-form-text-hover transition-colors">
            Do Not Sell/Share My Personal Information
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;
