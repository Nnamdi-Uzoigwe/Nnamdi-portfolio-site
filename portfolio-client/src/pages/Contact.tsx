import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="mt-10 mb-10">
       <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.1, // Lower threshold
          margin: "100px", // Trigger earlier
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
      <header className="mb-6">
        <h2 className="text-xl lg:text-3xl font-semibold mb-3">Contact</h2>
        <p className="">Interested in collaborating?</p>
      </header>
</motion.div>
      <div className="flex justify-start">
        <h1 className="text-[35px] lg:text-[60px] text-[#5d5d5d] font-semibold">
          LET'S MAKE IT HAPPEN!
        </h1>
      </div>
 <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.1, // Lower threshold
          margin: "100px", // Trigger earlier
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
      <form className="bg-[#373636] p-4 lg:p-6 rounded-[20px]">    
        <div className="w-full">
            <p className="mb-1 font-semibold">Full name</p>
            <input 
                type="text" 
                placeholder="Enter name"
                className="border-1 border-gray-200 p-2 rounded-[8px] w-full"
            />
        </div>

        <div className="w-full mt-6">
            <p className="mb-1 font-semibold">Email Address</p>
            <input 
                type="text" 
                placeholder="Enter email"
                className="border-1 border-gray-200 p-2 rounded-[8px] w-full"
            />
        </div>

        <div className="w-full mt-6">
            <p className="mb-1 font-semibold">Message</p>
            <textarea  
                placeholder="Write Message"
                className="border-1 border-gray-200 p-2 h-auto min-h-[150px] rounded-[8px] w-full"
            ></textarea>
        </div>
        <button className="mt-4 rounded-[8px] p-3 w-full flex justify-center cursor-pointer items-center gap-2 bg-gradient-to-r from-[#faa300] to-[#946000]">
            Send Message
            <Send />
        </button>
      </form>
      </motion.div>
    </div>
  );
}
