// import { useEffect, useState } from "react";

// export const VoiceNavigator = () => {
//   const [isListening, setIsListening] = useState(false);
//   const [showSleepMessage, setShowSleepMessage] = useState(false);
//   const [sleepText, setSleepText] = useState("");

//   useEffect(() => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       console.error("Speech recognition not supported");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.continuous = true;
//     recognition.lang = "en-US";

//     recognition.onresult = (event) => {
//       const transcript = event.results[event.results.length - 1][0].transcript
//         .toLowerCase()
//         .trim();
//       console.log("User said:", transcript);

//       const commands = {
//         home: "#hero",
//         about: "#about",
//         skills: "#skills",
//         projects: "#projects",
//         contact: "#contact",
//         certificates: "#certificates",
//       };

//       for (const key in commands) {
//         if (transcript.includes(key)) {
//           const section = document.querySelector(commands[key]);
//           if (section) {
//             section.scrollIntoView({ behavior: "smooth" });
//             break;
//           }
//         }
//       }
//     };

//     if (isListening) {
//       recognition.start();

//       // Announce instruction
//       const prompt = new SpeechSynthesisUtterance(
//         "Tell me which section you want to visit. Home, About, Skills, Projects, Certificates, or Contact."
//       );
//       prompt.rate = 1;
//       prompt.pitch = 1;
//       prompt.lang = "en-US";
//       speechSynthesis.speak(prompt);

//       // Stop after 15 seconds
//       setTimeout(() => {
//         const message =
//           "Thank you, I am going asleep. If you need me further, activate me.";
//         setSleepText(message);
//         setShowSleepMessage(true);

//         const utterance = new SpeechSynthesisUtterance(message);
//         utterance.rate = 1;
//         utterance.pitch = 1;
//         utterance.lang = "en-US";
//         speechSynthesis.speak(utterance);

//         recognition.stop();
//         setIsListening(false);

//         // Hide message after 5 seconds
//         setTimeout(() => {
//           setShowSleepMessage(false);
//           setSleepText("");
//         }, 5000);
//       }, 20000);
//     }

//     return () => {
//       recognition.stop();
//     };
//   }, [isListening]);

//   return (
//     <>
//       {/* 🔴 Voice Assistant Sleep Message */}
//       {showSleepMessage && (
//         <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-xl text-xl font-bold z-50 animate-pulse">
//           {sleepText}
//         </div>
//       )}

//       {/* 🟢 Activate Button */}
//       <button
//         onClick={() => setIsListening(true)}
//         className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold transition duration-300 z-50"
//       >
//         🎤 Activate Voice Assistant
//       </button>
//     </>
//   );
// };

// export default VoiceNavigator;
import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

const VoiceNavigator = forwardRef((props, ref) => {
  const recognitionRef = useRef(null);
  const timeoutRef = useRef(null);

  useImperativeHandle(ref, () => ({
    activateAssistant,
  }));

  const activateAssistant = () => {
    if (!recognitionRef.current) return;

    const recognition = recognitionRef.current;

    const speak = (text) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      speechSynthesis.speak(utterance);
    };

    speak("Tell me which section you want to visit: Home, About, Skills, Projects, Contact, or Certificates.");

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      const routes = ["home", "about", "skills", "projects", "contact", "certificates"];
      const found = routes.find((r) => transcript.includes(r));
      if (found) {
        window.location.hash = "#" + found;
      }
    };

    recognition.onerror = (e) => {
      console.error("Recognition error:", e);
    };

    // Stop listening after 20 seconds
    timeoutRef.current = setTimeout(() => {
      recognition.stop();
      speak("Thank you, I am going asleep. If you need further, activate me.");
      const msg = document.createElement("div");
      msg.textContent = "Voice Assistant going asleep...";
      msg.style.position = "fixed";
      msg.style.top = "20px";
      msg.style.left = "50%";
      msg.style.transform = "translateX(-50%)";
      msg.style.padding = "12px 24px";
      msg.style.background = "#f43f5e";
      msg.style.color = "white";
      msg.style.fontSize = "20px";
      msg.style.borderRadius = "8px";
      msg.style.zIndex = "9999";
      document.body.appendChild(msg);

      setTimeout(() => {
        msg.remove();
      }, 4000);
    }, 20000);
  };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech recognition not supported");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.lang = "en-US";
    recognitionRef.current.interimResults = false;
  }, []);

  return null;
});

export { VoiceNavigator };
