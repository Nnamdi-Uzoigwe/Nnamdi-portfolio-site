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
    <div className="w-full xl:w-[280px] overflow-hidden mt-4 xl:mt-0 z-40 relative xl:fixed py-2 lg:py-0 px-4 lg:px-3 left-0 xl:left-[140px] top-0 xl:top-[81px] flex flex-col justify-center items-start xl:items-center h-auto xl:h-[550px] rounded-[24px] border-1 border-[#737373] bg-black">
      <div className=" overflow-hidden pb-4 xl:pb-0 flex flex-row xl:flex-col gap-8 xl:gap-0 justify-center items-center">
        <div>
          <img
            src="/myimg.jpeg"
            alt=""
            className="w-20 xl:w-50 h-20 xl:h-50 rounded-full"
          />
        </div>
        <div>
          <div>
            <h3 className="text-xl xl:text-2xl font-semibold mt-4">
              Nnamdi Uzoigwe
            </h3>
            <p className="text-[#737373] text-sm xl:text-md text-center">
              Web & Mobile App Developer
            </p>
          </div>

          <div className={`flex mt-3 gap-2 justify-start xl:justify-center`}>
            <a href="https://github.com/Nnamdi-Uzoigwe/" className="hover:-translate-y-2 transform transition duration-300 ease-in-out">
              <FaGithub className="text-[#ffdb46] cursor-pointer" />
            </a>
            <a href="https://x.com/Nnamdiuzo2" className="hover:-translate-y-2 transform transition duration-300 ease-in-out">
              <FaTwitter className="text-[#ffdb46] cursor-pointer" />
            </a>
            <a href="https://nnamdiuzoigwedev.vercel.app" className="hover:-translate-y-2 transform transition duration-300 ease-in-out">
              <FaLinkedin className="text-[#ffdb46] cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`mt-0 xl:mt-8 border-t-2 w-full border-[#737373] 
  overflow-hidden transition-all duration-300 ease-in-out 
  ${
    open ? "opacity-100 max-h-[500px] pt-3 pb-2" : "opacity-0 max-h-0 pt-0 pb-0"
  } 
  xl:opacity-100 xl:max-h-none xl:pt-8 xl:pb-0 xl:flex flex-col items-start xl:items-end gap-4`}
      >
        <div className="mb-2 xl:mb-0 flex justify-between xl:justify-center w-full items-end gap-3">
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
            {copied === "uzonnamdi31@gmail.com" ? (
              <Check size={18} />
            ) : (
              <Copy size={18} />
            )}
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
            {copied === "08160192784" ? (
              <Check size={18} />
            ) : (
              <Copy size={18} />
            )}
          </div>
        </div>
      </div>

      <div
        onClick={handleToggle}
        className="cursor-pointer flex absolute top-0 right-0 px-2 py-[3px] border-1 border-[#14ff1f] rounded-tr-xl rounded-bl-xl xl:hidden bg-gradient-to-b from-[#165d19] to-[#967a09]"
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
