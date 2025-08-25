import "./App.css";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Works from "./pages/Works";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="px-2 lg:px-56 flex overflow-x-hidden flex-col lg:flex-row gap-2 lg:gap-8 bg-[#1a1a1b] text-white justify-center min-h-screen h-auto">
      <div className="hidden lg:block absolute top-40 left-[-190px] w-64 h-64 bg-[#04910c] rounded-full blur-[200px] opacity-60"></div>
      <div className="absolute top-0 lg:top-10 left-0 w-64 h-64 bg-[#04910c] rounded-full blur-[200px] opacity-60"></div>
      <div className="absolute top-0 lg:top-20 right-0 w-64 h-64 bg-[#04910c] rounded-full blur-[200px] opacity-60"></div>
      <Router>
        <Sidebar />
        <main className="w-full bg-[#1a1a1b] z-40 mt-0 lg:mt-[80px] mb-20 lg:mb-0 ml-0 lg:ml-[290px] px-4 lg:px-8 rounded-[24px] border-1 border-[#737373]">
          <div className="flex justify-center">
            <Navigation />
          </div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
