import Image from "next/image";
import Link from "next/link";
import BusinessInfo from "../../../cms/business Info/businessInfo"

const TopBar = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="bg-topbar-bg flex justify-between items-center py-3 px-4 md:px-8 2xl:px-30 relative border-b border-black/5">
      {/* Left group: Reviews */}
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-2">
          <span className="font-bold text-base text-topbar-text tracking-tight">
            {BusinessInfo.SocialMedia.GoogleReviews.rating}
          </span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src="/icons/reviews-star.svg"
                alt="Reviews stars"
                width={16}
                height={16}
                className="color-review-star"
              />
            ))}
          </div>
          <Link
            href= {BusinessInfo.GoogleMaps}
            className="text-[0.85rem] text-topbar-text underline decoration-black/30 underline-offset-2 hover:text-topbar-text-hover transition-colors"
          >
            {BusinessInfo.SocialMedia.GoogleReviews.reviews}
          </Link>
        </div>
      </div>

      {/* Right group: Location + Phone (Desktop) or Hamburger (Mobile) */}
      <div className="flex items-center">
        {/* Desktop Info */}
        <div className="hidden lg:flex items-center flex-row-reverse">
          {/* Location */}
          <Link href={BusinessInfo.GoogleMaps} target="_blank" className="hover:[filter:var(--color-topbar-icon-hover)] text-topbar-text hover:text-topbar-text-hover flex items-center gap-2 px-4 border-l border-black/10">
            <Image
              src="/icons/location-fill.svg"
              alt="Location"
              width={18}
              height={18}
              className="[filter:var(--color-topbar-icon)]"
            />
            <span className="text-md ">
              <span className="font-medium">{BusinessInfo.ShortAddress}</span>
            </span>
          </Link>

          {/* Phone */}
          <Link href={`tel:${BusinessInfo.PrimaryContactNumber}`} className="hover:[filter:var(--color-topbar-icon-hover)] text-topbar-text hover:text-topbar-text-hover flex items-center gap-2 px-4 border-l border-black/10">
            <Image
              src="/icons/call.svg"
              alt="Phone"
              width={18}
              height={18}
              className="[filter:var(--color-topbar-icon)]"
            />
            <span  className="text-md">
              <span className="font-medium">{BusinessInfo.PrimaryContactNumber}</span>
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-l border-black/10 pl-4 ml-2"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className={`w-6 h-0.5 bg-topbar-menuicon transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-6 h-0.5 bg-topbar-menuicon transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-topbar-menuicon transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>
    </div>
  );
};

export default TopBar;