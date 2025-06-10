// Chatbot.jsx
import React, { useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import './chatbotStyles.css'; // Import the custom styles

import { createChatBotMessage } from "react-chatbot-kit";

// Import your custom avatar component
import TrisBotAvatar from './TrisBotAvatar'; // <--- ADD THIS LINE (adjust path if needed)

// --- SuggestedQuestions Widget ---
const SuggestedQuestions = ({ message, payload, actions }) => {
  console.log("Rendering SuggestedQuestions widget");
  const handleClick = (question) => {
    actions.handleMessage(question);
  };

  return (
    <div style={{ margin: "10px 0", display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {["Show projects", "Tell me about Trisanjit", "What are your skills?", "How to contact you"].map((question, index) => (
        <button
          key={index}
          onClick={() => handleClick(question)}
          style={{
            padding: "5px 10px",
            backgroundColor: "#6b48ff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          {question}
        </button>
      ))}
    </div>
  );
};

// --- PoemPrompt Widget (only the buttons) ---
const PoemPrompt = ({ actions }) => {
  console.log("Rendering PoemPrompt widget");
  const handleYesClick = () => {
    actions.handlePoemResponse("yes"); // Call a specific action handler
  };

  const handleNoClick = () => {
    actions.handlePoemResponse("no"); // Call a specific action handler
  };

  return (
    <div style={{ margin: "10px 0", display: "flex", gap: "10px" }}>
      <button
        onClick={handleYesClick}
        style={{
          padding: "5px 15px",
          backgroundColor: "#6b48ff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Yes
      </button>
      <button
        onClick={handleNoClick}
        style={{
          padding: "5px 15px",
          backgroundColor: "#ff6b6b",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        No
      </button>
    </div>
  );
};

// --- Config for the Chatbot ---
const config = {
  botName: "Portfolio Assistant", // This name is now primarily for header, not avatar
  initialMessages: [
    createChatBotMessage(
      "Hi there! I’m Trisanjit’s portfolio assistant. I can help you explore my projects, learn about me, or contact me. What can I do for you today?",
      { widget: null }
    ),
    createChatBotMessage("", {
      widget: "suggestedQuestions",
    }),
    createChatBotMessage("Would you like me to deliver a poem written by Trisanjit?", {
        widget: "poemPrompt",
        delay: 500
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#6b48ff",
    },
    chatButton: {
      backgroundColor: "rgb(164, 207, 22)",
    },
  },
  widgets: [
    {
      widgetName: "suggestedQuestions",
      widgetFunc: (props) => <SuggestedQuestions {...props} />,
    },
    {
      widgetName: "poemPrompt",
      widgetFunc: (props) => <PoemPrompt {...props} />,
    },
  ],
  // ADD THIS BLOCK: Custom Components
  customComponents: {
    botAvatar: (props) => <TrisBotAvatar {...props} />, // Use your custom avatar component
  },
};

// ... (rest of MessageParser, ActionProvider, ChatbotComponent, and export remains the same)
// MessageParser, ActionProvider, ChatbotComponent functions are here
const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
      actions.handleMessage(message);
    };

    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            parse: parse,
            actions,
          });
        })}
      </div>
    );
  };

  const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const [poemOffered, setPoemOffered] = useState(false);
    const [poemDelivered, setPoemDelivered] = useState(false);

    useEffect(() => {
      const initialPoemPromptExists = config.initialMessages.some(
        (msg) => msg.widget === "poemPrompt"
      );
      if (initialPoemPromptExists && !poemOffered) {
        setPoemOffered(true);
      }
    }, []);

    const poemText =
      "Here’s one of Trisanjit’s beautiful Bengali poems:\n\n" +
      "রাত্রির মায়াময় আঁধার কাটিয়ে হয়েছে ভোরের উদয়!\n" +
      "হৃদয় আমার স্নিগ্ধ হয়েছে তোমার কোমল ছোঁয়ায়!\n\n" +
      "ক্ষান্ত হয় না, অবাধ্য এ মন, অল্প কিছু কথায়!\n" +
      "তোমায় ছাড়া কাটে না সময়, স্তব্ধ মনে হয়!\n\n" +
      "যত কর্ম, ধর্ম আমার, তোমায় পাওয়ার আশায়!\n" +
      "ব্যাকুল এ মন; খোঁজে নিরন্তর, এ কেমন প্রশ্রয়!\n\n" +
      "যতই সে চাই, যাব দূরে চলে, রইব না আর মনে!\n" +
      "কোন সে পিছুটান টেনে ধরে আমায়, সবই ভাসে আনমনে!\n\n" +
      "কি মায়ায় বাধা পড়েছি, হায় আমি!\n" +
      "যাবো না কখনও দূরে!\n" +
      "তোমায় ভালো বেসেই যাবো আমার জীবন জুড়ে!!";

    const addMessageToState = (message) => {
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };

    const handleMessage = (message) => {
      const lowerCaseMessage = message.toLowerCase().trim();

      if (!lowerCaseMessage) {
        return;
      }

      let botResponse = null;

      if (/\b(hi|hello|hey|hola|namaste|good morning|good afternoon|good evening)\b/.test(lowerCaseMessage)) {
        const greetings = [
          "Hello there! How can I assist you today?",
          "Hi! Glad to have you here. What would you like to know about Trisanjit?",
          "Hey! Ask me anything about Trisanjit's portfolio.",
          "Greetings! Ready to explore Trisanjit's work?",
          "Nice to meet you! How can I help?",
        ];
        botResponse = createChatBotMessage(
          greetings[Math.floor(Math.random() * greetings.length)]
        );
      }
      else if (/\b(how are you|how's it going|whats up)\b/.test(lowerCaseMessage)) {
          const responses = [
              "I'm an AI, so I don't have feelings, but I'm ready to help you navigate Trisanjit's portfolio!",
              "I'm functioning perfectly! How can I help you today?",
              "All systems go! What can I tell you about Trisanjit?",
          ];
          botResponse = createChatBotMessage(
              responses[Math.floor(Math.random() * responses.length)]
          );
      }
      else if (/\b(thank you|thanks|thx|cheers)\b/.test(lowerCaseMessage)) {
          const responses = [
              "You're very welcome! Is there anything else I can assist you with?",
              "No problem at all! Happy to help.",
              "Anytime! Feel free to ask if you have more questions.",
          ];
          botResponse = createChatBotMessage(
              responses[Math.floor(Math.random() * responses.length)]
          );
      }
      else if (/\b(bye|goodbye|see you|adios)\b/.test(lowerCaseMessage)) {
          const responses = [
              "Goodbye! Hope to see you around Trisanjit's portfolio again soon!",
              "Farewell! Don't hesitate to return if you have more questions.",
              "Take care! Have a great day.",
          ];
          botResponse = createChatBotMessage(
              responses[Math.floor(Math.random() * responses.length)]
          );
      }
      else if (/\b(your name|who are you)\b/.test(lowerCaseMessage)) {
          const responses = [
              "I'm Trisanjit's Portfolio Assistant, designed to help you explore his work and connect with him!",
              "You can call me Trisanjit's AI assistant. How can I be of service?",
          ];
          botResponse = createChatBotMessage(
              responses[Math.floor(Math.random() * responses.length)]
          );
      }
      else if (/\b(project|projects|show projects|list projects|works)\b/.test(lowerCaseMessage)) {
        const responses = [
          "I’ve worked on projects like a Portfolio Website, a Bengali Poem Generator, and this Chatbot! Check out the Projects section for more details.",
          "Some of my projects include a Portfolio Website, a Bengali Poem Generator, and this Chatbot. Take a look at the Projects section!",
          "Trisanjit has a few interesting projects: this portfolio website, a Bengali Poem Generator, and me! Find out more in the Projects section.",
        ];
        botResponse = createChatBotMessage(
          responses[Math.floor(Math.random() * responses.length)]
        );
      } else if (/\b(about|who are you|trisanjit|tell me about you|bio|biography)\b/.test(lowerCaseMessage)) {
        const responses = [
          "I’m Trisanjit Das, a second-year IT student at Jadavpur University. I’m passionate about web development and AI. Explore my website to learn more!",
          "Hi! I’m Trisanjit Das, a second-year IT student at Jadavpur University. I love working on web dev and AI projects. Check out my portfolio!",
          "Trisanjit is an IT student at Jadavpur University, focusing on web development and AI. His portfolio has more details!",
        ];
        botResponse = createChatBotMessage(
          responses[Math.floor(Math.random() * responses.length)]
        );
      } else if (/\b(contact|reach out|get in touch|email|connect)\b/.test(lowerCaseMessage)) {
        const responses = [
          "You can fill out the contact form on my website or email me at trisanjitdas7@gmail.com. I’d love to hear from you!",
          "Feel free to use the contact form on my portfolio or email me at trisanjitdas7@gmail.com. Looking forward to connecting!",
          "To get in touch with Trisanjit, use the contact form or send an email to trisanjitdas7@gmail.com.",
        ];
        botResponse = createChatBotMessage(
          responses[Math.floor(Math.random() * responses.length)]
        );
      } else if (/\b(skill|skills|what can you do|abilities|expertise|technologies)\b/.test(lowerCaseMessage)) {
        const responses = [
          "I’m skilled in web development (React, Node.js), AI integration (like this chatbot!), and problem-solving. Check out my projects to see my skills in action!",
          "I’m good at web development with React and Node.js, AI integration, and solving problems. Take a look at my projects for more!",
          "Trisanjit's key skills include React, Node.js, and integrating AI solutions. You can see examples in his projects section.",
        ];
        botResponse = createChatBotMessage(
          responses[Math.floor(Math.random() * responses.length)]
        );
      } else if (/\b(resume|cv|download resume|curriculum vitae)\b/.test(lowerCaseMessage)) {
        const responses = [
          "You can download my resume from the About section of my portfolio!",
          "My resume is available in the About section of my portfolio. Feel free to download it!",
          "To view Trisanjit's resume, please visit the About section.",
        ];
        botResponse = createChatBotMessage(
          responses[Math.floor(Math.random() * responses.length)]
        );
      } else if (/\b(hobby|hobbies|what do you like|interests|what do you do for fun)\b/.test(lowerCaseMessage)) {
        const responses = [
          "Trisanjit enjoys coding, exploring AI, and writing Bengali poems. What about your interests?",
          "His hobbies include coding, learning about AI, and writing Bengali poetry. What do you like to do?",
          "Outside of tech, Trisanjit is passionate about AI and expressing himself through Bengali poetry.",
        ];
        botResponse = createChatBotMessage(
          responses[Math.floor(Math.random() * responses.length)]
        );
      }
      else if (/\b(poem|give poem|tell me a poem|read a poem|bengali poem)\b/.test(lowerCaseMessage)) {
          if (poemDelivered) {
              botResponse = createChatBotMessage("I've already delivered the poem. Is there anything else you'd like to know?");
          } else {
              botResponse = createChatBotMessage(poemText);
              setPoemDelivered(true);
              setPoemOffered(true);
          }
      }
      else {
        botResponse = createChatBotMessage(
          "I’m sorry, I didn’t quite catch that. Could you please rephrase or try asking about my projects, skills, resume, hobbies, or how to contact me?"
        );
      }

      if (botResponse) {
        addMessageToState(botResponse);
      }
    };

    const handlePoemResponse = (response) => {
      if (response === "yes") {
        if (!poemDelivered) {
          addMessageToState(createChatBotMessage(poemText));
          setPoemDelivered(true);
        } else {
          addMessageToState(createChatBotMessage("I've already delivered the poem. Is there anything else you'd like to know?"));
        }
        setPoemOffered(true);
      } else if (response === "no") {
        addMessageToState(createChatBotMessage("Okay, maybe another time! How can I assist you?"));
        setPoemOffered(true);
      }
    };

    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            actions: {
              handleMessage,
              handlePoemResponse,
            },
          });
        })}
      </div>
    );
  };

  const ChatbotComponent = () => {
    const [showChatbot, setShowChatbot] = useState(false);

    return (
      <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "1000" }}>
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          style={{
            padding: "10px 20px",
            backgroundColor: "rgb(34, 30, 163)",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          className="react-chatbot-kit-chat-floating-btn"
        >
          {showChatbot ? "Hide Trisan bot" : "Trisan Bot"}
        </button>
        {showChatbot && (
          <div style={{ marginTop: "10px", width: "300px" }}>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        )}
      </div>
    );
  };

export default ChatbotComponent;