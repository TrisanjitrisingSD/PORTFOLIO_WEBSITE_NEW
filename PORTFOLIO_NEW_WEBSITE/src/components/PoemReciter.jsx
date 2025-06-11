import React, { useState, useEffect } from "react";

export const PoemReciter = () => {
  const [isActive, setIsActive] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const isSpeechSynthesisSupported = "speechSynthesis" in window;

  const poemLines = [
    "For her this rhyme is penned, whose eyes have a special penetrating power in my heart, i like her charmed gazing towards mine, yes she is my valentine.",
    "I love her for a life time, not only for a day,",
    "i love you for who you are , not what you do or say.",
    "I can't think without you neither i can live, for sure you the only one who is my valentine.",
    "Sitting beside you, talking to you, fascinates me very much, your innocent smile can break me from core of my heart.",
    "Don't know how i began to like you, how i fell in love with you, what i know is that i only love you.",
    "Even if i haven't yet expressed my feelings to her, i am in my own love - world with her.",
    "Today is the day, i am ready to propose her with this line, 'Your attitude is very fine, will you be my valentine'.",
    "Carrying a rose, with a letter, i am going to her. Don't know the outcome, whether she will agree or not, i don't dare to think that much.",
    "All loves are not written in those golden flags of God, though she hurts the feeling of mine, i can still say she is my ...valentine...",
  ];

  const speak = (text, callback = () => {}) => {
    if (!isSpeechSynthesisSupported) {
      console.warn("Speech Synthesis not supported.");
      callback();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.onend = () => {
      console.log(`Spoke: ${text}`);
      callback();
    };
    utterance.onerror = (event) => {
      console.error("SpeechSynthesisUtterance.onerror", event);
      callback();
    };
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const speakPoem = (finalCallback) => {
    if (!isSpeechSynthesisSupported) {
      finalCallback();
      return;
    }
    let index = 0;
    const linesWithIntro = ["Here is a beautiful poem of Trisanjit", ...poemLines];
    const speakNextLine = () => {
      if (index < linesWithIntro.length) {
        const utterance = new SpeechSynthesisUtterance(linesWithIntro[index]);
        utterance.rate = 1;
        utterance.onend = () => setTimeout(speakNextLine, 700);
        utterance.onerror = (event) => {
          console.error("SpeechSynthesisUtterance.onerror", event);
          index++;
          speakNextLine();
        };
        speechSynthesis.speak(utterance);
        index++;
      } else {
        finalCallback();
      }
    };
    speechSynthesis.cancel();
    speakNextLine();
  };

  const goToSleep = () => {
    console.log("Poem going to sleep");
    setStatusMessage("Going to sleep...");
    speak("Thank you for listening bye, falling asleep", () => {
      speechSynthesis.cancel();
      setIsActive(false);
      setTimeout(() => setStatusMessage(""), 3000);
    });
  };

  const startPoem = () => {
    setIsActive(true);
    setStatusMessage("Reciting poem...");
    speakPoem(goToSleep);
  };

  const togglePoem = () => {
    console.log("Toggling poem, active:", isActive);
    if (!isActive) {
      startPoem();
    } else {
      goToSleep();
    }
  };

  useEffect(() => {
    return () => {
      console.log("Cleaning up PoemReciter");
      if (isSpeechSynthesisSupported) speechSynthesis.cancel();
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={togglePoem}
        style={{
          padding: "10px 10px",
          fontSize: "10px",
          backgroundColor: isActive ? "#dc3545" : "#28a745",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 0 12px rgba(167, 40, 125, 0.7)",
        }}
      >
        {isActive ? "🔴 Stop Poem" : "❤️ Recite Poem"}
      </button>
      {statusMessage && (
        <div
          style={{
            marginTop: "10px",
            color: "#ff4081",
            fontSize: "24px",
            fontWeight: "bold",
            animation: "fadeIn 1s ease-in-out",
          }}
        >
          {statusMessage}
        </div>
      )}
    </div>
  );
};

export default PoemReciter;