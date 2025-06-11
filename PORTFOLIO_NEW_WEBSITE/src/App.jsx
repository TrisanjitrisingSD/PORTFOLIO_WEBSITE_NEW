import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import Chatbot from "./chatbot/Chatbot.jsx";
import { MouseTrail } from "./components/MouseTrail.jsx";
import { CursorTrail } from "./components/CursorTrail.jsx";
import VoiceAssistant from "./components/VoiceAssistant";
import PoemReciter from "./components/PoemReciter";


function App() {
  return (
    <>
      <Toaster />
      <CursorTrail />
      <MouseTrail />
      <BrowserRouter> {/* BrowserRouter starts here */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Move Chatbot and UnifiedAssistant INSIDE BrowserRouter */}
        <Chatbot />
        <VoiceAssistant />
        <PoemReciter />
      </BrowserRouter> {/* BrowserRouter ends here */}
    </>
  );
}

export default App;