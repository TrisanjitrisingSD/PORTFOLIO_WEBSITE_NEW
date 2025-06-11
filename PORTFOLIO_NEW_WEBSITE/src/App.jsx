import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import Chatbot from "./chatbot/Chatbot.jsx";
import { MouseTrail } from "./components/MouseTrail"; // NEW

import { CursorTrail } from "./components/CursorTrail"; // 👈 Import CursorTrail


function App() {
  return (
    <>
      <Toaster />
      <CursorTrail /> {/* 👈 Add CursorTrail here */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Chatbot />
      <MouseTrail /> {/* ✨ Add here */}
    </>
  );
}

export default App;
