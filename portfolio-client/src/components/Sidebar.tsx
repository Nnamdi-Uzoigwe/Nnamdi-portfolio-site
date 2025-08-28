import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { useState } from "react";
import { Check, ChevronDown, Copy, Mail, Phone } from "lucide-react";

export default function Sidebar() {
  const [copied, setCopied] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="w-full lg:w-[280px] overflow-hidden mt-4 lg:mt-0 z-40 relative lg:fixed py-2 lg:py-0 px-4 lg:px-3 left-0 lg:left-[140px] top-0 lg:top-[81px] flex flex-col justify-center items-start lg:items-center h-auto lg:h-[550px] rounded-[24px] border-1 border-[#737373] bg-[#1a1a1b]">
      <div className=" overflow-hidden pb-4 lg:pb-0 flex flex-row lg:flex-col gap-8 lg:gap-0 justify-center items-center">
        <div>
          <img
            src="/myimg.jpeg"
            alt=""
            className="w-20 lg:w-50 h-20 lg:h-50 rounded-full"
          />
        </div>
        <div>
          <div>
            <h3 className="text-lg lg:text-2xl font-semibold mt-4">
              Nnamdi Uzoigwe
            </h3>
            <p className="text-[#737373] text-sm lg:text-md text-center">
              Web & Mobile App Developer
            </p>
          </div>

          <div className={`flex mt-3 gap-2 justify-start lg:justify-center`}>
            <a href="https://github.com/Nnamdi-Uzoigwe/">
              <FaGithub className="text-[#ffdb46] cursor-pointer" />
            </a>
            <a href="https://x.com/Nnamdiuzo2">
              <FaTwitter className="text-[#ffdb46] cursor-pointer" />
            </a>
            <a href="#"></a>
            <FaLinkedin className="text-[#ffdb46] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* <div className={`mt-8 pt-8 pb-4 lg:pb-0 border-t-2 w-full border-[#737373] transition-transform duration-400 ease-in-out ${open ? "flex" : "hidden"} lg:flex flex-col items-start lg:items-end gap-4`}> */}
      <div
 className={`mt-0 lg:mt-8 border-t-2 w-full border-[#737373] 
  overflow-hidden transition-all duration-300 ease-in-out 
  ${open 
    ? "opacity-100 max-h-[500px] pt-3 pb-2" 
    : "opacity-0 max-h-0 pt-0 pb-0"} 
  lg:opacity-100 lg:max-h-none lg:pt-8 lg:pb-0 lg:flex flex-col items-start lg:items-end gap-4`}>
 

        <div className="mb-2 lg:mb-0 flex justify-between lg:justify-center w-full items-end gap-3">
          <div className="flex gap-2">

          <div className="bg-[#012204] flex justify-center items-center  h-10 w-10 rounded-[8px] border-1 border-[#04910c]">
            <Mail className="text-[#0A5D10]" />
          </div>
          <div>
            <h5 className="text-[15px]">EMAIL</h5>
            <p className="text-sm">uzonnamdi31@gmail.com</p>
          </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleCopy("uzonnamdi31@gmail.com")}
            >
            {copied === "uzonnamdi31@gmail.com" ? <Check size={18} /> : <Copy size={18} />}
          </div>
        </div>
        <div className="flex w-full gap-3 justify-between items-end">
          <div className="flex gap-2">
            <div className="bg-[#012204] h-10 w-10 rounded-[8px] flex justify-center items-center border-1 border-[#04910c]">
              <Phone className="text-[#0A5D10]" />
            </div>
            <div>
              <h5 className="text-[15px]">PHONE</h5>
              <p className="text-sm">08160192784</p>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleCopy("08160192784")}
          >
            {copied === "08160192784" ? <Check size={18} /> : <Copy size={18} />}
          </div>
        </div>
      </div>

      <div
        onClick={handleToggle}
        className="cursor-pointer flex absolute top-0 right-0 px-2 py-[3px] border-1 border-[#14ff1f] rounded-tr-lg rounded-bl-xl lg:hidden bg-gradient-to-b from-[#165d19] to-[#967a09]"
      >
        <ChevronDown
          size={28}
          className={`text-[#18da21] transition-transform duration-300 ease-in-out ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
    </div>
  );
}


// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
// import { useState } from "react";
// import { Check, ChevronDown, Copy, Mail, Phone } from "lucide-react";

// export default function Sidebar() {
//     const [copied, setCopied] = useState<string | null>(null);
//   const [open, setOpen] = useState(false);

//   const handleToggle = () => {
//     setOpen((prev) => !prev);
//   };

//   const handleCopy = async (value: string) => {
//     try {
//       await navigator.clipboard.writeText(value);
//       setCopied(value);
//       setTimeout(() => setCopied(null), 2000);
//     } catch (err) {
//       console.error("Copy failed:", err);
//     }
//   };

//   return (
//     <div className="w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none relative">
//       {/* Main sidebar container */}
//       <div className="bg-[#1a1a1b] border border-[#737373] rounded-2xl p-4 lg:p-6 relative">
//         {/* Toggle button for mobile */}
//         <button
//           onClick={handleToggle}
//           className="absolute top-3 right-3 lg:hidden bg-gradient-to-b from-[#165d19] to-[#967a09] border border-[#14ff1f] rounded-lg p-1.5 z-10"
//         >
//           <ChevronDown
//             size={20}
//             className={`text-[#18da21] transition-transform duration-300 ease-in-out ${
//               open ? "rotate-180" : "rotate-0"
//             }`}
//           />
//         </button>

//         {/* Profile section - always visible */}
//         <div className="flex flex-col items-center text-center mb-6">
//           <div className="mb-4">
//             <img
//               src="/myimg.jpeg"
//               alt="Nnamdi Uzoigwe"
//               className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover mx-auto"
//             />
//           </div>
          
//           <div>
//             <h3 className="text-xl lg:text-2xl font-semibold mb-1">
//               Nnamdi Uzoigwe
//             </h3>
//             <p className="text-[#737373] text-sm lg:text-base mb-4">
//               Web & Mobile App Developer
//             </p>
//           </div>

//           {/* Social links */}
//           <div className="flex gap-4 justify-center">
//             <a 
//               href="https://github.com/Nnamdi-Uzoigwe/"
//               className="text-[#ffdb46] hover:text-[#ffdb46]/80 transition-colors"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaGithub size={20} />
//             </a>
//             <a 
//               href="https://x.com/Nnamdiuzo2"
//               className="text-[#ffdb46] hover:text-[#ffdb46]/80 transition-colors"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTwitter size={20} />
//             </a>
//             <a 
//               href="#"
//               className="text-[#ffdb46] hover:text-[#ffdb46]/80 transition-colors"
//             >
//               <FaLinkedin size={20} />
//             </a>
//           </div>
//         </div>

//         {/* Contact information - toggleable on mobile, always visible on desktop */}
//         <div 
//           className={`border-t border-[#737373] pt-4 transition-all duration-300 ease-in-out ${
//             open 
//               ? "opacity-100 max-h-96 visible" 
//               : "opacity-0 max-h-0 invisible lg:opacity-100 lg:max-h-none lg:visible"
//           }`}
//         >
//           <div className="space-y-4">
//             {/* Email */}
//             <div className="flex items-center justify-between gap-3">
//               <div className="flex items-center gap-3 flex-1 min-w-0">
//                 <div className="bg-[#012204] border border-[#04910c] rounded-lg p-2 flex-shrink-0">
//                   <Mail className="text-[#0A5D10]" size={18} />
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <h5 className="text-xs font-medium text-[#737373] uppercase tracking-wide mb-1">
//                     EMAIL
//                   </h5>
//                   <p className="text-sm truncate">uzonnamdi31@gmail.com</p>
//                 </div>
//               </div>
//               <button
//                 className="flex-shrink-0 p-1 hover:bg-[#737373]/10 rounded transition-colors"
//                 onClick={() => handleCopy("uzonnamdi31@gmail.com")}
//               >
//                 {copied === "uzonnamdi31@gmail.com" ? (
//                   <Check size={16} className="text-green-500" />
//                 ) : (
//                   <Copy size={16} className="text-[#737373]" />
//                 )}
//               </button>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center justify-between gap-3">
//               <div className="flex items-center gap-3 flex-1 min-w-0">
//                 <div className="bg-[#012204] border border-[#04910c] rounded-lg p-2 flex-shrink-0">
//                   <Phone className="text-[#0A5D10]" size={18} />
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <h5 className="text-xs font-medium text-[#737373] uppercase tracking-wide mb-1">
//                     PHONE
//                   </h5>
//                   <p className="text-sm">08160192784</p>
//                 </div>
//               </div>
//               <button
//                 className="flex-shrink-0 p-1 hover:bg-[#737373]/10 rounded transition-colors"
//                 onClick={() => handleCopy("08160192784")}
//               >
//                 {copied === "08160192784" ? (
//                   <Check size={16} className="text-green-500" />
//                 ) : (
//                   <Copy size={16} className="text-[#737373]" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }