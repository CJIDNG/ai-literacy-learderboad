import { Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import imgCjidLogoBlack1 from "figma:asset/27fde7541dab44ab14093c05ebae8e33d68da55b.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full mt-12 pb-8">
      <div className="flex flex-col md:flex-row items-center justify-between px-[24px] gap-6">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <ImageWithFallback
            src={imgCjidLogoBlack1}
            alt="CJID Logo"
            className="h-[40px] w-auto"
          />
          <p className="text-[12px] text-[#848a90] text-center md:text-left">
            © 2025. Dubawa Audio, CJID. All Rights Reserved
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex gap-3 items-center">
            <a
              href="https://www.facebook.com/thecjid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:text-[#6365ef] transition-colors"
              aria-label="Visit CJID on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/thecjid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:text-[#6365ef] transition-colors"
              aria-label="Visit CJID on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/thecjid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:text-[#6365ef] transition-colors"
              aria-label="Visit CJID on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/thecjid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:text-[#6365ef] transition-colors"
              aria-label="Visit CJID on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[#111111] hover:text-[#6365ef] transition-colors"
              aria-label="Visit CJID on YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="bg-[#6365ef] hover:bg-[#5a74d2] transition-colors text-white px-6 py-3 rounded-full flex items-center gap-2"
          >
            <span className="text-[14px]">Scroll Up</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
