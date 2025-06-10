// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { NotFound } from "./pages/NotFound";
// import { Toaster } from "@/components/ui/toaster";

// function App() {
//   return (
//     <>
//       <Toaster />
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import Chatbot from "./chatbot/Chatbot.jsx";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Chatbot /> {/* Add the Chatbot component here */}
    </>
  );
}

export default App;