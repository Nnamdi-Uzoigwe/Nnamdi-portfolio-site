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

function App() {
  return (
    <div className="px-2 lg:px-36 flex overflow-x-hidden flex-col lg:flex-row gap-2 lg:gap-8 bg-[#1a1a1b] text-white justify-start lg:justify-center min-h-screen h-auto">
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
//       <div className="hidden lg:block absolute top-40 left-[-190px] w-64 h-64 bg-[#04910c] rounded-full blur-[200px] opacity-60 pointer-events-none"></div>
//       <div className="absolute top-0 lg:top-10 left-0 w-64 h-64 bg-[#04910c] rounded-full blur-[200px] opacity-60 pointer-events-none"></div>
//       <div className="absolute top-0 lg:top-20 right-0 w-64 h-64 bg-[#04910c] rounded-full blur-[200px] opacity-60 pointer-events-none"></div>
      
//       <Router>
//         <div className="flex flex-col lg:flex-row">
//           {/* Sidebar */}
//           <div className="lg:fixed lg:top-0 lg:left-0 lg:w-80 lg:h-screen lg:overflow-y-auto lg:z-50">
//             <div className="px-4 lg:px-6 py-4 lg:py-8">
//               <Sidebar />
//             </div>
//           </div>

//           {/* Main content */}
//           <main className="flex-1 lg:ml-80 relative z-10">
//             <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
//               <div className="max-w-4xl mx-auto">
//                 {/* Navigation */}
//                 <div className="mb-6 lg:mb-8">
//                   <Navigation />
//                 </div>
                
//                 {/* Page content */}
//                 <div className="bg-[#1a1a1b] rounded-2xl border border-[#737373] p-6 lg:p-8">
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