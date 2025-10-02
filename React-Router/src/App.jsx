import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Team from "./components/Team";
import Company from "./components/Company";

export default function App() {
  return (
    // <div className="min-h-screen bg-gray-100 text-gray-800">
    //   <Navbar />
    //   <div className="p-6">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about/*" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </div>
    // </div>

    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Nested routing for About */}
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="company" element={<Company />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    </div>
  );
}
