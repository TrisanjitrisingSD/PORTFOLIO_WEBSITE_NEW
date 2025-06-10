import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import profilePic from "../assets/profile.jpg"; // Your profile picture import

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false); // <--- NEW STATE

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to toggle image size
  const toggleImageSize = () => {
    setIsImageEnlarged((prev) => !prev);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          {/* Your clickable profile picture */}
          <img
            src={profilePic}
            alt="Trisanjit's Profile"
            onClick={toggleImageSize} // <--- ADD onClick HANDLER
            className={cn(
              "rounded-full object-cover mr-2 border-2 border-primary cursor-pointer", // Add cursor-pointer
              "transition-all duration-300 ease-in-out", // Add transition for smooth animation
              isImageEnlarged ? "w-64 h-64" : "w-12 h-12" // <--- CHANGE THIS LINE!
                                                    // Changed from "w-10 h-10" to "w-12 h-12"
            )}
          />
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Trisanjit's </span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* --- Overlay and Enlarged Image Display --- */}
      {isImageEnlarged && ( // <--- CONDITIONAL RENDERING OF OVERLAY
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={toggleImageSize} // Click anywhere on overlay to shrink
        >
          <img
            src={profilePic}
            alt="Trisanjit's Profile (Enlarged)"
            className="w-80 h-80 rounded-full object-cover border-4 border-primary shadow-lg cursor-pointer" // Larger size and styling for enlarged image
            onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to overlay (keeps image open if clicked directly)
          />
        </div>
      )}
    </nav>
  );
};