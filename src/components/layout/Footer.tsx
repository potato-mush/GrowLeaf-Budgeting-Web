import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const links = [
    { label: "About", href: "#" },
    { label: "Support", href: "#support" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link, index) =>
              link.href.startsWith("/") ? (
                <Link
                  key={index}
                  to={link.href}
                  className="text-[16px] text-[#6b7280] hover:text-[#3b82f6] transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  className="text-[16px] text-[#6b7280] hover:text-[#3b82f6] transition-colors"
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }
                  }}
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-[#f9fafb] hover:bg-[#3b82f6] text-[#6b7280] hover:text-white flex items-center justify-center transition-all"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[14px] text-[#6b7280] mb-1">Version 1.0.0</p>
            <p className="text-[14px] text-[#6b7280]">
              © 2025 GrowLeaf. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
