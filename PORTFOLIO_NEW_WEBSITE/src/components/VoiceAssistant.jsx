import { useEffect, useState, useRef } from "react";

export const VoiceNavigator = () => {
  const [isListening, setIsListening] = useState(false);
  const [showSleepMessage, setShowSleepMessage] = useState(false);
  const [sleepText, setSleepText] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";
    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .toLowerCase()
        .trim();
      console.log("User said:", transcript);

      const commands = {
        home: "#hero",
        about: "#about",
        skills: "#skills",
        projects: "#projects",
        contact: "#contact",
        certificates: "#certificates",
      };

      for (const key in commands) {
        if (transcript.includes(key)) {
          const section = document.querySelector(commands[key]);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            break;
          }
        }
      }
    };

    recognition.onend = () => {
      console.log("Speech recognition ended");
      if (isListening && recognitionRef.current) {
        console.log("Restarting recognition on mobile");
        try {
          recognitionRef.current.start();
        } catch (error) {
          console.error("Failed to restart recognition:", error);
          setIsListening(false);
          setShowSleepMessage(true);
          setSleepText("Recognition error, going asleep.");
          speechSynthesis.speak(
            new SpeechSynthesisUtterance("Recognition error, going asleep.")
          );
          setTimeout(() => {
            setShowSleepMessage(false);
            setSleepText("");
          }, 5000);
        }
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      if (event.error === "no-speech" && isListening) {
        console.log("No speech detected, continuing to listen");
        return;
      }
      setIsListening(false);
      setShowSleepMessage(true);
      setSleepText("Recognition error, going asleep.");
      speechSynthesis.speak(
        new SpeechSynthesisUtterance("Recognition error, going asleep.")
      );
      setTimeout(() => {
        setShowSleepMessage(false);
        setSleepText("");
      }, 5000);
    };

    if (isListening) {
      recognition.start();

      // Announce instruction
      const prompt = new SpeechSynthesisUtterance(
        "Tell me which section you want to visit. Home, About, Skills, Projects, Certificates, or Contact."
      );
      prompt.rate = 1;
      prompt.pitch = 1;
      prompt.lang = "en-US";
      speechSynthesis.speak(prompt);

      // Stop after 20 seconds
      setTimeout(() => {
        const message =
          "Thank you, I am going asleep. If you need me further, activate me.";
        setSleepText(message);
        setShowSleepMessage(true);

        const utterance = new SpeechSynthesisUtterance(message);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.lang = "en-US";
        speechSynthesis.speak(utterance);

        recognition.stop();
        setIsListening(false);

        // Hide message after 5 seconds
        setTimeout(() => {
          setShowSleepMessage(false);
          setSleepText("");
        }, 5000);
      }, 20000);
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
        recognitionRef.current = null;
      }
    };
  }, [isListening]);

  return (
    <>
      {/* 🔴 Voice Assistant Sleep Message */}
      {showSleepMessage && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-xl text-xl font-bold z-50 animate-pulse">
          {sleepText}
        </div>
      )}

      {/* 🟢 Activate Voice Button */}
      <button
        onClick={() => setIsListening(true)}
        className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-600 hover:to-indigo-500 text-white px-4 py-2 rounded-full shadow-lg text-base font-medium transition duration-200 z-50"
      >
        🎧 Activate Voice
      </button>
    </>
  );
};

export default VoiceNavigator;