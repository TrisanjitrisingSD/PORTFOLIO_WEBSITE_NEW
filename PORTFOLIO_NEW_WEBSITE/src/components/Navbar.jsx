// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import profilePic from "../assets/profile.jpg"; // Your profile picture import

// const navItems = [
//   { name: "Home", href: "#hero" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
//   { name: "Certificates", href: "#certificates" },
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isImageEnlarged, setIsImageEnlarged] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Prevent background scroll when menu is open
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//       window.scrollTo(0, 0); // Always scroll to top for full menu overlay
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       document.body.style.overflow = "";
//     };
//   }, [isMenuOpen]);

//   const toggleImageSize = () => {
//     setIsImageEnlarged((prev) => !prev);
//   };

//   return (
//     <nav
//       className={cn(
//         "fixed w-full z-40 transition-all duration-300",
//         isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
//       )}
//     >
//       <div className="container flex items-center justify-between">
//         <a
//           className="text-xl font-bold text-primary flex items-center"
//           href="#hero"
//         >
//           <img
//             src={profilePic}
//             alt="Trisanjit's Profile"
//             onClick={toggleImageSize}
//             className={cn(
//               "rounded-full object-cover mr-2 border-2 border-primary cursor-pointer",
//               "transition-all duration-300 ease-in-out",
//               isImageEnlarged ? "w-64 h-64" : "w-12 h-12"
//             )}
//           />
//           <span className="relative z-10">
//             <span className="text-glow text-foreground"> Trisanjit's </span>{" "}
//             Portfolio
//           </span>
//         </a>

//         {/* desktop nav */}
//         <div className="hidden md:flex space-x-8">
//           {navItems.map((item, key) => (
//             <a
//               key={key}
//               href={item.href}
//               className="text-foreground/80 hover:text-primary transition-colors duration-300"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* mobile menu button */}
//         <button
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//           className="md:hidden p-2 text-foreground z-50"
//           aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* mobile nav overlay */}
//         <div
//           className={cn(
//             "fixed top-0 left-0 w-full h-full bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
//             "transition-all duration-300 md:hidden",
//             isMenuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           )}
//         >
//           <div className="flex flex-col space-y-8 text-xl">
//             {navItems.map((item, key) => (
//               <a
//                 key={key}
//                 href={item.href}
//                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* enlarged profile overlay */}
//       {isImageEnlarged && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
//           onClick={toggleImageSize}
//         >
//           <img
//             src={profilePic}
//             alt="Trisanjit's Profile (Enlarged)"
//             className="w-80 h-80 rounded-full object-cover border-4 border-primary shadow-lg cursor-pointer"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </nav>
//   );
// };






import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import profilePic from "../assets/profile.jpg";
import leetcodeIcon from "../assets/leetcode.png"; // Make sure this exists

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Certificates", href: "#certificates" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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
        {/* Left side: logo/profile */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <img
            src={profilePic}
            alt="Trisanjit's Profile"
            onClick={toggleImageSize}
            className={cn(
              "rounded-full object-cover mr-2 border-2 border-primary cursor-pointer",
              "transition-all duration-300 ease-in-out",
              isImageEnlarged ? "w-64 h-64" : "w-12 h-12"
            )}
          />
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Trisanjit's </span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {/* LeetCode icon link */}
          <a
            href="https://leetcode.com/Tris2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200 bg-white dark:bg-neutral-800 p-1.5 rounded-full shadow-md"
          >
            <img
              src={leetcodeIcon}
              alt="LeetCode"
              className="w-6 h-6"
            />
          </a>

          {/* Nav items */}
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

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile nav overlay */}
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-full bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl items-center">
            {/* LeetCode icon in mobile nav */}
            <a
              href="https://leetcode.com/Tris2/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-white dark:bg-neutral-800 p-2 rounded-full shadow-md"
            >
              <img
                src={leetcodeIcon}
                alt="LeetCode"
                className="w-8 h-8"
              />
            </a>

            {/* Nav items */}
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

      {/* Enlarged profile overlay */}
      {isImageEnlarged && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={toggleImageSize}
        >
          <img
            src={profilePic}
            alt="Trisanjit's Profile (Enlarged)"
            className="w-80 h-80 rounded-full object-cover border-4 border-primary shadow-lg cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </nav>
  );
};
