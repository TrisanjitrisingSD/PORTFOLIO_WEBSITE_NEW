import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import Chatbot from "./chatbot/Chatbot.jsx";
import { MouseTrail } from "./components/MouseTrail.jsx"; // ✅ Only this one
import {VoiceNavigator} from "./components/VoiceNavigator.jsx";

import { CursorTrail} from "./components/CursorTrail.jsx";

function App() {
  return (
    <>
      <Toaster />
      <CursorTrail />
      <MouseTrail /> 
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Chatbot />
      <VoiceNavigator />
    </>
  );
}

export default App;
