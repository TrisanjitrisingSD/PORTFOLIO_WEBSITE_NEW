import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import Chatbot from "./chatbot/Chatbot.jsx";
import { CursorTrail } from "./components/CursorTrail"; // 👈 Import CursorTrail

function App() {
  return (
    <>
      <Toaster />
      <CursorTrail /> {/* 👈 Add cursor trail effect */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Chatbot /> {/* Chatbot stays at the bottom */}
    </>
  );
}

export default App;
