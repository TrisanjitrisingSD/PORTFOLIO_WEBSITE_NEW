// // import React, { useState, useEffect } from "react";

// // export const PoemReciter = () => {
// //   const [isActive, setIsActive] = useState(false);
// //   const [statusMessage, setStatusMessage] = useState("");

// //   const isSpeechSynthesisSupported = "speechSynthesis" in window;

// //   const poemLines = [
// //     "For her this rhyme is penned, whose eyes have a special penetrating power in my heart, i like her charmed gazing towards mine, yes she is my valentine.",
// //     "I love her for a life time, not only for a day,",
// //     "i love you for who you are , not what you do or say.",
// //     "I can't think without you neither i can live, for sure you the only one who is my valentine.",
// //     "Sitting beside you, talking to you, fascinates me very much, your innocent smile can break me from core of my heart.",
// //     "Don't know how i began to like you, how i fell in love with you, what i know is that i only love you.",
// //     "Even if i haven't yet expressed my feelings to her, i am in my own love - world with her.",
// //     "Today is the day, i am ready to propose her with this line, 'Your attitude is very fine, will you be my valentine'.",
// //     "Carrying a rose, with a letter, i am going to her. Don't know the outcome, whether she will agree or not, i don't dare to think that much.",
// //     "All loves are not written in those golden flags of God, though she hurts the feeling of mine, i can still say she is my ...valentine...",
// //   ];

// //   const speak = (text, callback = () => {}) => {
// //     if (!isSpeechSynthesisSupported) {
// //       console.warn("Speech Synthesis not supported.");
// //       callback();
// //       return;
// //     }
// //     const utterance = new SpeechSynthesisUtterance(text);
// //     utterance.rate = 1;
// //     utterance.onend = () => {
// //       console.log(`Spoke: ${text}`);
// //       callback();
// //     };
// //     utterance.onerror = (event) => {
// //       console.error("SpeechSynthesisUtterance.onerror", event);
// //       callback();
// //     };
// //     speechSynthesis.cancel();
// //     speechSynthesis.speak(utterance);
// //   };

// //   const speakPoem = (finalCallback) => {
// //     if (!isSpeechSynthesisSupported) {
// //       finalCallback();
// //       return;
// //     }
// //     let index = 0;
// //     const linesWithIntro = ["Here is a beautiful poem of Trisanjit", ...poemLines];
// //     const speakNextLine = () => {
// //       if (index < linesWithIntro.length) {
// //         const utterance = new SpeechSynthesisUtterance(linesWithIntro[index]);
// //         utterance.rate = 1;
// //         utterance.onend = () => setTimeout(speakNextLine, 700);
// //         utterance.onerror = (event) => {
// //           console.error("SpeechSynthesisUtterance.onerror", event);
// //           index++;
// //           speakNextLine();
// //         };
// //         speechSynthesis.speak(utterance);
// //         index++;
// //       } else {
// //         finalCallback();
// //       }
// //     };
// //     speechSynthesis.cancel();
// //     speakNextLine();
// //   };

// //   const goToSleep = () => {
// //     console.log("Poem going to sleep");
// //     setStatusMessage("Going to sleep...");
// //     speak("Thank you for listening bye, falling asleep", () => {
// //       speechSynthesis.cancel();
// //       setIsActive(false);
// //       setTimeout(() => setStatusMessage(""), 3000);
// //     });
// //   };

// //   const startPoem = () => {
// //     setIsActive(true);
// //     setStatusMessage("Reciting poem...");
// //     speakPoem(goToSleep);
// //   };

// //   const togglePoem = () => {
// //     console.log("Toggling poem, active:", isActive);
// //     if (!isActive) {
// //       startPoem();
// //     } else {
// //       goToSleep();
// //     }
// //   };

// //   useEffect(() => {
// //     return () => {
// //       console.log("Cleaning up PoemReciter");
// //       if (isSpeechSynthesisSupported) speechSynthesis.cancel();
// //     };
// //   }, []);

// //   return (
// //     <div style={{ textAlign: "center" }}>
// //       <button
// //         onClick={togglePoem}
// //         style={{
// //           padding: "10px 10px",
// //           fontSize: "10px",
// //           backgroundColor: isActive ? "#dc3545" : "#28a745",
// //           color: "white",
// //           border: "none",
// //           borderRadius: "8px",
// //           cursor: "pointer",
// //           boxShadow: "0 0 12px rgba(167, 40, 125, 0.7)",
// //         }}
// //       >
// //         {isActive ? "🔴 Stop Poem" : "❤️ Recite Poem"}
// //       </button>
// //       {statusMessage && (
// //         <div
// //           style={{
// //             marginTop: "10px",
// //             color: "#ff4081",
// //             fontSize: "24px",
// //             fontWeight: "bold",
// //             animation: "fadeIn 1s ease-in-out",
// //           }}
// //         >
// //           {statusMessage}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default PoemReciter;


// import React, { useState, useEffect, useRef, useCallback } from "react";

// export const PoemReciter = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [statusMessage, setStatusMessage] = useState("");

//   const isSpeechSynthesisSupported = "speechSynthesis" in window;
//   const utteranceQueue = useRef([]); // Use a ref to manage queued utterances
//   const isSpeakingRef = useRef(false); // Track if speech synthesis is currently active
//   const availableVoices = useRef([]); // To store available voices

//   // Your Bengali poem lines
//   const poemLines = [
//     "বঙ্গ সাহিত্য অতি সমৃদ্ধ হয়েছে কবির ছোয়ায়,",
//     "কবিগুরু তিনি রবীন্দ্রনাথ ঠাকুর প্রণাম জানাই তোমায়।",
//     "বাঙালি জাতির গর্ব যিনি স্থান যার অতি উচ্চে,",
//     "মেলে ধরেছেন বাংলার সাহিত্য বিশ্বের সব প্রান্তে।",
//     "কাব্য, কবিতা, নাটক, প্রবন্ধ - সব ক্ষেত্রেই পারদর্শী,",
//     "করেছেন অনেক মহান সৃষ্টি , কটা নাম ই বা বলি।",
//     "কবি সত্ত্বায় শুধু থেমে থাকেন নি, বিজ্ঞানেও রেখেছেন দৃষ্টি,",
//     "“ বিশ্ব পরিচয়” গ্রন্থখানি তারই অমর সৃষ্টি।",
//     "প্রথম বাঙালি তিনিই , নোবেল পেলেন যিনি, লিখেছিলেন গীতাঞ্জলি,",
//     "পরাধীন জাতির শাসকদের বিরুদ্ধে ছিল সে ভীষন জিত।",
//     "বিশ্বকবির ছিল না মোহ রাজশাহী পদকের প্রতি,",
//     "শত ঘৃণা ভরে তাই প্রত্যাখান করেছিলেন ইংরেজদের “নাইট” উপাধি।",
//     "আজ কবিগুরুর জন্মদিবস এ রইলো সস্রদ্ধ প্রণাম,",
//     "ভারত মাতার এমন গুণী যুগে যুগে দরকার।",
//   ];

//   // --- Voice Initialization ---
//   const loadVoices = useCallback(() => {
//     if (isSpeechSynthesisSupported) {
//       availableVoices.current = window.speechSynthesis.getVoices();
//       console.log("All available voices:", availableVoices.current);
//       const bengaliVoices = availableVoices.current.filter(voice =>
//         voice.lang.startsWith('bn-') || voice.lang.startsWith('bn_')
//       );
//       console.log("Bengali voices found:", bengaliVoices);
//       if (bengaliVoices.length === 0) {
//         console.warn("No Bengali (bn-IN/bn-BD) voices found in your browser/OS.");
//         console.warn("You might need to install Bengali language packs or voices from your operating system settings.");
//         console.warn("For Windows: Settings > Time & Language > Language & Region > Add a language (Bengali) > Language pack > Speech.");
//         console.warn("For macOS: System Settings > Accessibility > Spoken Content > System Voice > Manage Voices > Add Bengali voice.");
//       }
//     }
//   }, [isSpeechSynthesisSupported]);

//   useEffect(() => {
//     if (isSpeechSynthesisSupported) {
//       // Voices might not be loaded immediately, especially on first page load
//       window.speechSynthesis.onvoiceschanged = loadVoices;
//       loadVoices(); // Try loading immediately in case they are already there
//     }
//   }, [isSpeechSynthesisSupported, loadVoices]);


//   // Helper to process the speech queue
//   const processSpeechQueue = () => {
//     if (utteranceQueue.current.length > 0 && !isSpeakingRef.current) {
//       const { text, callback, lang } = utteranceQueue.current.shift();

//       if (!isSpeechSynthesisSupported) {
//         console.warn("Speech Synthesis not supported.");
//         callback();
//         processSpeechQueue();
//         return;
//       }

//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.rate = 1;

//       // --- CRITICAL: Set the language ---
//       utterance.lang = lang; // Use the provided language (e.g., 'bn-IN')

//       // Try to find and use a specific Bengali voice if available
//       const preferredVoice = availableVoices.current.find(voice =>
//         voice.lang === lang || (voice.lang.startsWith('bn-') && voice.default)
//       );
//       if (preferredVoice) {
//         utterance.voice = preferredVoice;
//         console.log(`Using voice: ${preferredVoice.name} (${preferredVoice.lang})`);
//       } else {
//         console.warn(`No specific voice found for lang: ${lang}. Using default.`);
//       }


//       utterance.onstart = () => {
//         isSpeakingRef.current = true;
//         console.log(`Speaking started: ${text}`);
//       };

//       utterance.onend = () => {
//         console.log(`Spoke: ${text}`);
//         isSpeakingRef.current = false;
//         callback();
//         processSpeechQueue();
//       };

//       utterance.onerror = (event) => {
//         console.error("SpeechSynthesisUtterance.onerror", event);
//         console.error("Error details:", event.error); // More detailed error
//         isSpeakingRef.current = false;
//         callback();
//         processSpeechQueue();
//       };

//       speechSynthesis.speak(utterance);
//     }
//   };

//   // Function to add text to the speech queue
//   // Now includes a 'lang' parameter, default to Bengali
//   const queueSpeech = (text, callback = () => {}, lang = 'bn-IN') => { // Default to Bengali
//     utteranceQueue.current.push({ text, callback, lang });
//     if (!isSpeakingRef.current) {
//       processSpeechQueue();
//     }
//   };

//   const stopAllSpeech = useCallback(() => {
//     if (isSpeechSynthesisSupported) {
//       speechSynthesis.cancel();
//       isSpeakingRef.current = false;
//       utteranceQueue.current = [];
//       console.log("Speech synthesis cancelled and queue cleared.");
//     }
//   }, [isSpeechSynthesisSupported]);

//   const speakPoem = (finalCallback) => {
//     if (!isSpeechSynthesisSupported) {
//       finalCallback();
//       return;
//     }
//     stopAllSpeech(); // Ensure all previous speech is cancelled

//     const linesWithIntro = ["এখানে রয়েছে ত্রিসঞ্জিতের একটি সুন্দর ছন্দোবদ্ধ কবিতা", ...poemLines]; // Bengali intro
//     let index = 0;

//     const speakNextLine = () => {
//       if (index < linesWithIntro.length) {
//         queueSpeech(linesWithIntro[index], () => {
//           setTimeout(() => {
//             index++;
//             speakNextLine();
//           }, 700); // Pause after each line
//         }, 'bn-IN'); // Explicitly set language for poem lines
//       } else {
//         finalCallback();
//       }
//     };
//     speakNextLine();
//   };

//   const goToSleep = () => {
//     console.log("Poem going to sleep");
//     setStatusMessage("Sleeping"); // Changed message to Bengali
//     queueSpeech("ত্রিসঞ্জিতের এই সুন্দর কবিতা শোনার জন্য ধন্যবাদ, বিদায় ", () => { // Changed message to Bengali
//       setIsActive(false);
//       setTimeout(() => setStatusMessage(""), 3000);
//     }, 'bn-IN'); // Explicitly set language for goodbye message

//     // Ensure active status and message are updated immediately while speech plays
//     setIsActive(false);
//   };

//   const startPoem = () => {
//     setIsActive(true);
//     setStatusMessage("কবিতা আবৃত্তি হচ্ছে..."); // Changed message to Bengali
//     speakPoem(goToSleep);
//   };

//   const togglePoem = () => {
//     console.log("Toggling poem, active:", isActive);
//     if (!isActive) {
//       startPoem();
//     } else {
//       stopAllSpeech();
//       setStatusMessage("বন্ধ করা হলো "); // Changed message to Bengali
//       setIsActive(false);
//       setTimeout(() => setStatusMessage(""), 3000);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       console.log("Cleaning up PoemReciter");
//       stopAllSpeech();
//     };
//   }, [stopAllSpeech]);


//   return (
//     <div style={{ textAlign: "center" }}>
//       <button
//         onClick={togglePoem}
//         style={{
//           padding: "10px 10px",
//           fontSize: "10px",
//           backgroundColor: isActive ? "#dc3545" : "#28a745",
//           color: "white",
//           border: "none",
//           borderRadius: "8px",
//           cursor: "pointer",
//           boxShadow: "0 0 12px rgba(167, 40, 125, 0.7)",
//         }}
//       >
//         {isActive ? "🔴Stop Poem" : "❤️Recite Poem"}
//       </button>
//       {statusMessage && (
//         <div
//           style={{
//             marginTop: "10px",
//             color: "#ff4081",
//             fontSize: "24px",
//             fontWeight: "bold",
//             animation: "fadeIn 1s ease-in-out",
//           }}
//         >
//           {statusMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PoemReciter;




// import React, { useState, useEffect, useRef, useCallback } from "react";

// export const PoemReciter = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [statusMessage, setStatusMessage] = useState("");

//   const isSpeechSynthesisSupported = "speechSynthesis" in window;
//   const availableVoices = useRef([]); // To store available voices

//   // Your Bengali poem lines
//   const poemLines = [
//     "বঙ্গ সাহিত্য অতি সমৃদ্ধ হয়েছে কবির ছোয়ায়,",
//     "কবিগুরু তিনি রবীন্দ্রনাথ ঠাকুর প্রণাম জানাই তোমায়।",
//     "বাঙালি জাতির গর্ব যিনি স্থান যার অতি উচ্চে,",
//     "মেলে ধরেছেন বাংলার সাহিত্য বিশ্বের সব প্রান্তে।",
//     "কাব্য, কবিতা, নাটক, প্রবন্ধ - সব ক্ষেত্রেই পারদর্শী,",
//     "করেছেন অনেক মহান সৃষ্টি , কটা নাম ই বা বলি।",
//     "কবি সত্ত্বায় শুধু থেমে থাকেন নি, বিজ্ঞানেও রেখেছেন দৃষ্টি,",
//     "“ বিশ্ব পরিচয়” গ্রন্থখানি তারই অমর সৃষ্টি।",
//     "প্রথম বাঙালি তিনিই , নোবেল পেলেন যিনি, লিখেছিলেন গীতাঞ্জলি,",
//     "পরাধীন জাতির শাসকদের বিরুদ্ধে ছিল সে ভীষন জিত।",
//     "বিশ্বকবির ছিল না মোহ রাজশাহী পদকের প্রতি,",
//     "শত ঘৃণা ভরে তাই প্রত্যাখান করেছিলেন ইংরেজদের “নাইট” উপাধি।",
//     "আজ কবিগুরুর জন্মদিবস এ রইলো সস্রদ্ধ প্রণাম,",
//     "ভারত মাতার এমন গুণী যুগে যুগে দরকার।",
//   ];

//   const introMessage = "এখানে রয়েছে ত্রিসঞ্জিতের একটি সুন্দর ছন্দোবদ্ধ কবিতা";
//   const outroMessage = "ত্রিসঞ্জিতের এই সুন্দর কবিতা শোনার জন্য ধন্যবাদ, বিদায় ";

//   // --- Voice Initialization (kept as is) ---
//   const loadVoices = useCallback(() => {
//     if (isSpeechSynthesisSupported) {
//       availableVoices.current = window.speechSynthesis.getVoices();
//       console.log("DEBUG: All available voices:", availableVoices.current);
//       const bengaliVoices = availableVoices.current.filter(voice =>
//         voice.lang.startsWith('bn-') || voice.lang.startsWith('bn_')
//       );
//       console.log("DEBUG: Bengali voices found:", bengaliVoices);
//       if (bengaliVoices.length === 0) {
//         setStatusMessage("বেঙ্গলি ভয়েস পাওয়া যায়নি। OS/ব্রাউজার সেটিংস চেক করুন।");
//         console.warn("WARN: No Bengali (bn-IN/bn-BD) voices found in your browser/OS.");
//       } else {
//         setStatusMessage("");
//       }
//     }
//   }, [isSpeechSynthesisSupported]);

//   useEffect(() => {
//     if (isSpeechSynthesisSupported) {
//       window.speechSynthesis.onvoiceschanged = loadVoices;
//       loadVoices();
//     }
//   }, [isSpeechSynthesisSupported, loadVoices]);

//   // Helper to create and speak an utterance, with voice selection
//   const createAndSpeakUtterance = useCallback((text, lang = 'bn-IN', onUtteranceEnd = () => {}) => {
//     if (!isSpeechSynthesisSupported) {
//       console.warn("Speech Synthesis not supported.");
//       onUtteranceEnd();
//       return null;
//     }

//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.rate = 1;
//     utterance.lang = lang;

//     const preferredVoice = availableVoices.current.find(voice =>
//       voice.lang === lang || (voice.lang.startsWith('bn-') && voice.default)
//     );
//     if (preferredVoice) {
//       utterance.voice = preferredVoice;
//       console.log(`DEBUG: Using voice: ${preferredVoice.name} (${preferredVoice.lang}) for "${text.substring(0, 20)}..."`);
//     } else {
//       console.warn(`WARN: No specific voice found for lang: ${lang}. Using default for "${text.substring(0, 20)}..."`);
//     }

//     utterance.onend = () => {
//       console.log(`DEBUG: Finished speaking: "${text.substring(0, 20)}..."`);
//       onUtteranceEnd(); // Call the specific callback for this utterance
//     };

//     utterance.onerror = (event) => {
//       console.error("ERROR: SpeechSynthesisUtterance.onerror:", event);
//       console.error("ERROR: Error details:", event.error);
//       setStatusMessage(`পরে শুনলে বলবেন: ${event.error}`);
//       onUtteranceEnd(); // Ensure callback is called even on error
//     };

//     speechSynthesis.speak(utterance);
//     console.log(`DEBUG: Called speechSynthesis.speak() for: "${text.substring(0, 20)}..."`);
//     return utterance; // Return the utterance object if needed
//   }, [isSpeechSynthesisSupported]);


//   const stopAllSpeech = useCallback(() => {
//     if (isSpeechSynthesisSupported) {
//       if (speechSynthesis.speaking) {
//         speechSynthesis.cancel();
//         console.log("DEBUG: speechSynthesis.cancel() called.");
//       }
//       console.log("DEBUG: Stop command processed.");
//     }
//   }, [isSpeechSynthesisSupported]);


//   // Main function to start the poem recitation
//   const startPoem = () => {
//     console.log("DEBUG: Starting poem recitation...");
//     stopAllSpeech(); // Ensure clean slate (stops current, clears browser's queue)
//     setIsActive(true);
//     setStatusMessage("কবিতা আবৃত্তি হচ্ছে...");

//     let currentLineIndex = 0; // Local index for this specific recitation flow

//     const allLinesToSpeak = [introMessage, ...poemLines, outroMessage];
//     const totalLines = allLinesToSpeak.length;

//     const speakNextQueuedLine = () => {
//         if (currentLineIndex < totalLines) {
//             const line = allLinesToSpeak[currentLineIndex];
//             const isLastLine = (currentLineIndex === totalLines - 1);

//             createAndSpeakUtterance(line, 'bn-IN', () => {
//                 // This callback fires when the current utterance finishes.
//                 // We *could* introduce a slight pause here before the *next* line.
//                 // However, for maximum autoplay policy compatibility, we'll
//                 // queue all utterances immediately.
//                 if (isLastLine) {
//                     console.log("DEBUG: Last line finished speaking.");
//                     setIsActive(false); // Poem finished naturally
//                     setStatusMessage("শেষ হলো।");
//                     setTimeout(() => setStatusMessage(""), 3000);
//                 }
//             });
//             currentLineIndex++; // Move to the next line for the next createAndSpeakUtterance call
//         }
//     };

//     // Queue all lines immediately after the button click
//     allLinesToSpeak.forEach((line, index) => {
//         // For lines in the middle, we want them to flow without specific callbacks
//         // The last line will trigger the 'finished' state
//         const isLastLine = (index === totalLines - 1);
//         createAndSpeakUtterance(line, 'bn-IN', isLastLine ? () => {
//             // This is the onUtteranceEnd callback for the very last line
//             console.log("DEBUG: Entire poem sequence finished.");
//             setIsActive(false); // Poem finished naturally
//             setStatusMessage("শেষ হলো।");
//             setTimeout(() => setStatusMessage(""), 3000);
//         } : undefined); // No special callback for intermediate lines
//     });

//     // You might want a small delay for status update, but speech should start immediately.
//   };


//   const togglePoem = () => {
//     console.log("DEBUG: Toggling poem, current isActive:", isActive);
//     if (!isActive) {
//       // User clicks to START
//       startPoem();
//     } else {
//       // User clicks to STOP
//       console.log("DEBUG: User clicked STOP button.");
//       stopAllSpeech(); // This should immediately halt audio and clear internal queue
//       setIsActive(false); // Set to inactive immediately
//       setStatusMessage("বন্ধ করা হলো।");
//       setTimeout(() => setStatusMessage(""), 3000);
//     }
//   };

//   useEffect(() => {
//     // Cleanup on component unmount
//     return () => {
//       console.log("DEBUG: Cleaning up PoemReciter on component unmount.");
//       stopAllSpeech();
//     };
//   }, [stopAllSpeech]);


//   return (
//     <div style={{ textAlign: "center" }}>
//       <button
//         onClick={togglePoem}
//         style={{
//           padding: "10px 10px",
//           fontSize: "10px",
//           backgroundColor: isActive ? "#dc3545" : "#28a745",
//           color: "white",
//           border: "none",
//           borderRadius: "8px",
//           cursor: "pointer",
//           boxShadow: "0 0 12px rgba(167, 40, 125, 0.7)",
//         }}
//       >
//         {isActive ? "❤️Stop Poem" : "❤️Recite Poem"}
//       </button>
//       {statusMessage && (
//         <div
//           style={{
//             marginTop: "10px",
//             color: "#ff4081",
//             fontSize: "24px",
//             fontWeight: "bold",
//             animation: "fadeIn 1s ease-in-out",
//           }}
//         >
//           {statusMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PoemReciter;








import React, { useState, useEffect, useRef, useCallback } from "react";

export const PoemReciter = () => {
  const [isActive, setIsActive] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const isSpeechSynthesisSupported = "speechSynthesis" in window;
  const availableVoices = useRef([]);
  const preferredLangRef = useRef("bn-IN"); // Start assuming Bengali

  const bengaliPoem = [
    "বঙ্গ সাহিত্য অতি সমৃদ্ধ হয়েছে কবির ছোয়ায়,",
    "কবিগুরু তিনি রবীন্দ্রনাথ ঠাকুর প্রণাম জানাই তোমায়।",
    "বাঙালি জাতির গর্ব যিনি স্থান যার অতি উচ্চে,",
    "মেলে ধরেছেন বাংলার সাহিত্য বিশ্বের সব প্রান্তে।",
    "কাব্য, কবিতা, নাটক, প্রবন্ধ - সব ক্ষেত্রেই পারদর্শী,",
    "করেছেন অনেক মহান সৃষ্টি , কটা নাম ই বা বলি।",
    "কবি সত্ত্বায় শুধু থেমে থাকেন নি, বিজ্ঞানেও রেখেছেন দৃষ্টি,",
    "“ বিশ্ব পরিচয়” গ্রন্থখানি তারই অমর সৃষ্টি।",
    "প্রথম বাঙালি তিনিই , নোবেল পেলেন যিনি, লিখেছিলেন গীতাঞ্জলি,",
    "পরাধীন জাতির শাসকদের বিরুদ্ধে ছিল সে ভীষন জিত।",
    "বিশ্বকবির ছিল না মোহ রাজশাহী পদকের প্রতি,",
    "শত ঘৃণা ভরে তাই প্রত্যাখান করেছিলেন ইংরেজদের “নাইট” উপাধি।",
    "আজ কবিগুরুর জন্মদিবস এ রইলো সস্রদ্ধ প্রণাম,",
    "ভারত মাতার এমন গুণী যুগে যুগে দরকার।"
  ];

  const englishPoem = [
    "The Bengali pen shines bright, its ink like flowing art,",
    "Rabindranath Tagore, we bow to you from heart.",
    "A poet, sage, and thinker, who led with soulful grace,",
    "His words still echo loudly, through time and every place.",
    "From verse to play to lecture, his wisdom reached afar,",
    "So many works he gifted — each a guiding star.",
    "Not just in words he triumphed, but in science too he gazed,",
    "His book 'Visva Parichay' left many minds amazed.",
    "The first Bengali Nobel — Gitanjali his song,",
    "A voice that stood for justice, when the world was going wrong.",
    "He shunned the knightly honor from rulers not so kind,",
    "A fearless act of protest — a truly noble mind.",
    "So here's our humble tribute on his birth anniversary,",
    "May India birth such legends through all of history."
  ];

  const introLine = {
    bn: "এখানে রয়েছে ত্রিসঞ্জিতের একটি সুন্দর ছন্দোবদ্ধ কবিতা",
    en: "Here's a beautiful rhythmic poem presented by Trisanjit",
  };
  const outroLine = {
    bn: "ত্রিসঞ্জিতের এই সুন্দর কবিতা শোনার জন্য ধন্যবাদ, বিদায় ",
    en: "Thank you for listening to this poem by Trisanjit. Goodbye.",
  };

  const loadVoices = useCallback(() => {
    if (!isSpeechSynthesisSupported) return;

    availableVoices.current = speechSynthesis.getVoices();
    const bnVoice = availableVoices.current.find(v => v.lang.startsWith("bn"));
    const enVoice = availableVoices.current.find(v => v.lang.startsWith("en"));

    if (bnVoice) {
      preferredLangRef.current = "bn-IN";
      setStatusMessage("✅ Bengali voice available.");
    } else if (enVoice) {
      preferredLangRef.current = "en-US";
      setStatusMessage("⚠️ Bengali voice unavailable. Using English.");
    } else {
      setStatusMessage("❌ No suitable voice found.");
    }
  }, [isSpeechSynthesisSupported]);

  useEffect(() => {
    if (!isSpeechSynthesisSupported) {
      setStatusMessage("❌ Speech synthesis not supported in your browser.");
      return;
    }

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, [loadVoices, isSpeechSynthesisSupported]);

  const shouldStopRef = useRef(false);

  const stopAllSpeech = useCallback(() => {
    if (isSpeechSynthesisSupported) {
      shouldStopRef.current = true;
      speechSynthesis.cancel();
    }
  }, [isSpeechSynthesisSupported]);

  const speakLine = useCallback((text, lang, onEnd = () => {}) => {
    if (shouldStopRef.current) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 1;
    const voice = availableVoices.current.find(v => v.lang.startsWith(lang));
    if (voice) utterance.voice = voice;

    utterance.onend = onEnd;
    utterance.onerror = () => onEnd();

    speechSynthesis.speak(utterance);
  }, []);

  const startPoem = () => {
    stopAllSpeech();
    shouldStopRef.current = false;
    setIsActive(true);

    const lang = preferredLangRef.current;
    const poem = lang.startsWith("bn") ? bengaliPoem : englishPoem;
    const intro = introLine[lang.startsWith("bn") ? "bn" : "en"];
    const outro = outroLine[lang.startsWith("bn") ? "bn" : "en"];

    const allLines = [intro, ...poem, outro];
    let index = 0;

    const speakNext = () => {
      if (shouldStopRef.current) return;
      if (index < allLines.length) {
        speakLine(allLines[index], lang, () => {
          index++;
          speakNext();
        });
      } else {
        setStatusMessage("✅ Poem finished.");
        setIsActive(false);
        setTimeout(() => setStatusMessage(""), 3000);
      }
    };

    speakNext();
    setStatusMessage("🔊 Poem is being recited...");
  };

  const togglePoem = () => {
    if (!isActive) startPoem();
    else {
      stopAllSpeech();
      setIsActive(false);
      setStatusMessage("⛔ Poem stopped.");
      setTimeout(() => setStatusMessage(""), 3000);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={togglePoem}
        style={{
          padding: "10px 10px",
          fontSize: "14px",
          backgroundColor: isActive ? "#dc3545" : "#28a745",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 0 12px rgba(167, 40, 125, 0.7)",
        }}
      >
        {isActive ? "❤️ Stop Poem" : "❤️ Recite Poem"}
      </button>

      {statusMessage && (
        <div
          style={{
            marginTop: "10px",
            color: "#ff4081",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {statusMessage}
        </div>
      )}
    </div>
  );
};

export default PoemReciter;



