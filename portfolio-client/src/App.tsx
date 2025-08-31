import "./App.css";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Works from "./pages/Works";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetail from "./pages/ProjectDetail";
// bg-[#1a1a1b]
function App() {
  return (
    <div className="px-2 lg:px-20 xl:px-36 flex overflow-x-hidden flex-col xl:flex-row gap-2 xl:gap-8 bg-black text-white justify-start xl:justify-center min-h-screen h-auto">
      <div className="hidden xl:block absolute top-40 left-[-190px] w-64 h-64 bg-[#04910c] rounded-full blur-[200px] opacity-60"></div>
      <div className="absolute top-0 xl:top-10 left-0 w-64 h-64 bg-[#04910c] rounded-full blur-[200px] opacity-60"></div>
      <div className="absolute top-0 xl:top-20 right-0 w-64 h-64 bg-[#04910c] rounded-full blur-[200px] opacity-60"></div>
      <Router>
        <Sidebar />
        <main className="w-full bg-black h-fit z-40 mt-0 xl:mt-[80px] mb-20 xl:mb-10 ml-0 xl:ml-[290px] px-4 xl:px-8 rounded-[24px] border-1 border-[#737373]">
          <div className="flex justify-center">
            <Navigation />
          </div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:id" element={<ProjectDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;


// import "./App.css";
// import Navigation from "./components/Navigation";
// import Sidebar from "./components/Sidebar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./pages/About";
// import Works from "./pages/Works";
// import Resume from "./pages/Resume";
// import Contact from "./pages/Contact";
// import Admin from "./pages/Admin";
// import AdminDashboard from "./pages/AdminDashboard";
// import ScrollToTop from "./components/ScrollToTop";
// import ProjectDetail from "./pages/ProjectDetail";

// function App() {
//   return (
//     <div className="min-h-screen bg-[#1a1a1b] text-white relative overflow-x-hidden">
//       {/* Background blur effects */}
//       <div className="hidden xl:block absolute top-40 left-[-190px] w-64 h-64 bg-[#04910c] rounded-full blur-[200px] opacity-60 pointer-events-none"></div>
//       <div className="absolute top-0 xl:top-10 left-0 w-64 h-64 bg-[#04910c] rounded-full blur-[200px] opacity-60 pointer-events-none"></div>
//       <div className="absolute top-0 xl:top-20 right-0 w-64 h-64 bg-[#04910c] rounded-full blur-[200px] opacity-60 pointer-events-none"></div>
      
//       <Router>
//         <div className="flex flex-col xl:flex-row">
//           {/* Sidebar */}
//           <div className="xl:fixed xl:top-0 xl:left-0 xl:w-80 xl:h-screen xl:overflow-y-auto xl:z-50">
//             <div className="px-4 xl:px-6 py-4 xl:py-8">
//               <Sidebar />
//             </div>
//           </div>

//           {/* Main content */}
//           <main className="flex-1 xl:ml-80 relative z-10">
//             <div className="px-4 sm:px-6 xl:px-8 py-4 xl:py-8">
//               <div className="max-w-4xl mx-auto">
//                 {/* Navigation */}
//                 <div className="mb-6 xl:mb-8">
//                   <Navigation />
//                 </div>
                
//                 {/* Page content */}
//                 <div className="bg-[#1a1a1b] rounded-2xl border border-[#737373] p-6 xl:p-8">
//                   <Routes>
//                     <Route path="/" element={<About />} />
//                     <Route path="/works" element={<Works />} />
//                     <Route path="/works/:id" element={<ProjectDetail />} />
//                     <Route path="/resume" element={<Resume />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/admin" element={<Admin />} />
//                     <Route path="/dashboard" element={<AdminDashboard />} />
//                   </Routes>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//         <ScrollToTop />
//       </Router>
//     </div>
//   );
// }

// export default App;