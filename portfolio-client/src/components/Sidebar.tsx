import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { useState } from "react";
import { Check, ChevronDown, Copy, Mail, Phone } from "lucide-react";

export default function Sidebar() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="w-full lg:w-[280px] overflow-hidden mt-4 lg:mt-0 z-40 relative lg:fixed py-2 lg:py-0 px-8 left-0 lg:left-[190px] top-0 lg:top-[81px] flex flex-col justify-center items-center h-auto lg:h-[550px] rounded-[24px] border-1 border-[#737373] bg-[#1a1a1b]">
      <div className=" overflow-hidden flex flex-col gap-2 lg:gap-0 items-center">
        <div>
        <img src="/myimg.jpeg" alt="" className="w-20 lg:w-50 h-20 lg:h-50 rounded-full"/>
        </div>
        <div>

        <h3 className="text-lg lg:text-2xl font-semibold mt-4">Nnamdi Uzoigwe</h3>
        <p className="text-[#737373] text-sm lg:text-md text-center">Web & Mobile App Developer</p>
        </div>

        <div className={`${open ? "flex" : "hidden"} lg:flex mt-3  gap-2`}>
          <FaGithub className="text-[#ffdb46] cursor-pointer" />
          <FaTwitter className="text-[#ffdb46] cursor-pointer" />
          <FaLinkedin className="text-[#ffdb46] cursor-pointer" />
        </div>
      </div>

      <div className="mt-8 pt-8 border-t-2 border-[#737373] hidden lg:flex flex-col items-end gap-4">
        <div className="flex items-end gap-3">
          <div className="bg-[#012204] flex justify-center items-center  h-10 w-10 rounded-[8px] border-1 border-[#04910c]">
            <Mail className="text-[#0A5D10]" />
          </div>
          <div>
            <h5 className="text-[15px]">EMAIL</h5>
            <p className="text-sm">uzonnamdi31@gmail.com</p>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleCopy("uzonnamdi31@gmail.com")}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
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
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </div>
        </div>
      </div>

      <div onClick={handleOpen} className="flex absolute top-0 right-0 px-3 py-1 border-1 border-[#14ff1f] rounded-tr-lg lg:hidden bg-gradient-to-b from-[#09de13] to-[#ffcf07]">
        <ChevronDown size={28} className="text-[#0b9012]" />
      </div>
    </div>
  );
}
