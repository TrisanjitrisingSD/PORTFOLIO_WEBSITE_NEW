// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4"
//     >
//       <div className="container max-w-4xl mx-auto text-center z-10">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               {" "}
//               Trisanjit
//             </span>
//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               {" "}
//               Das
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//             I build robust full-stack applications and leverage data science to drive smart, scalable solutions.
//           </p>



//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };







// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4"
//     >
//       <div className="container max-w-4xl mx-auto text-center z-10">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               {" "}
//               Trisanjit
//             </span>
//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               {" "}
//               Das
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-white max-w-2xl mx-auto animate-[fade-in-delay-3] glow-text">
//             I build robust full-stack applications and leverage data science to drive smart, scalable solutions.
//           </p>

//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>

//       <style>{`
//         .glow-text {
//           color: #ffffff;
//           text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5);
//           animation: glow 2s ease-in-out infinite, shrink-expand 3s ease-in-out infinite;
//         }

//         @keyframes glow {
//           0%, 100% {
//             text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5);
//           }
//           50% {
//             text-shadow: 0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.7);
//           }
//         }

//         @keyframes shrink-expand {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(0.98);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };



// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4"
//     >
//       <div className="container max-w-4xl mx-auto text-center z-10">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               {" "}
//               Trisanjit
//             </span>
//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               {" "}
//               Das
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-white max-w-2xl mx-auto animate-[fade-in-delay-3] glow-text">
//             I build robust full-stack applications and leverage data science to drive smart, scalable solutions.
//           </p>

//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//       {
//         <style>{`
//              .glow-text {
//     color: #FFFA8A;
//     text-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
//     animation: optimized-glow 3s ease-in-out infinite,
//       shrink-expand 1.5s ease-in-out infinite; /* Keep shrink-expand */
//     will-change: text-shadow, transform; /* Hint for both animations */
//   }

//   @keyframes optimized-glow {
//     0%,
//     100% {
//       text-shadow: 0 0 5px rgba(255, 255, 255, 0.6),
//         0 0 10px rgba(255, 255, 255, 0.3);
//     }
//     50% {
//       text-shadow: 0 0 8px rgba(255, 255, 255, 0.9),
//         0 0 15px rgba(255, 255, 255, 0.5);
//     }
//   }

//   @keyframes shrink-expand {
//     0%,
//     100% {
//       transform: scale(1);
//     }
//     50% {
//       transform: scale(0.9);
//     }
//   }
//       `}
//         </style>
//       }
//     </section>
//   );
// };





import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {/* These will likely be handled by text-primary or specific colors */}
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Trisanjit
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Das
            </span>
          </h1>

          {/* THIS IS THE KEY CHANGE: Use 'text-foreground' instead of 'text-white' */}
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto animate-[fade-in-delay-3] glow-text">
            I build robust full-stack applications and leverage data science to
            drive smart, scalable solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* OPTION 2 Style Tag (optimized, with shrink-expand) */}
      <style>{`
        .glow-text {
          color: #2ECC71; /* This is the base color for the text itself */
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
          animation: optimized-glow 3s ease-in-out infinite,
                     shrink-expand 1.5s ease-in-out infinite; /* Keep shrink-expand */
          will-change: text-shadow, transform; /* Hint for both animations */
        }

        @keyframes optimized-glow {
          0%,
          100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.6),
                         0 0 10px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.9),
                         0 0 15px rgba(255, 255, 255, 0.5);
          }
        }

        @keyframes shrink-expand {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.9);
          }
        }
      `}</style>
    </section>
  );
};