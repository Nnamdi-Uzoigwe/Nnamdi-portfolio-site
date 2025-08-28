// import { motion } from "framer-motion";
// import { Send } from "lucide-react";

// export default function Contact() {
//   return (
//     <div className="mt-10 mb-10">
//        <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{
//           once: true,
//           amount: 0.1, // Lower threshold
//           margin: "100px", // Trigger earlier
//         }}
//         transition={{
//           duration: 0.8,
//           ease: [0.25, 0.46, 0.45, 0.94],
//         }}
//       >
//       <header className="mb-6">
//         <h2 className="text-xl lg:text-3xl font-semibold mb-3">Contact</h2>
//         <p className="">Interested in collaborating?</p>
//       </header>
// </motion.div>
//       <div className="flex justify-start">
//         <h1 className="text-[35px] lg:text-[60px] text-[#5d5d5d] font-semibold">
//           LET'S MAKE IT HAPPEN!
//         </h1>
//       </div>
//  <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{
//           once: true,
//           amount: 0.1, // Lower threshold
//           margin: "100px", // Trigger earlier
//         }}
//         transition={{
//           duration: 0.8,
//           ease: [0.25, 0.46, 0.45, 0.94],
//         }}
//       >
//       <form className="bg-[#373636] p-4 lg:p-6 rounded-[20px]">    
//         <div className="w-full">
//             <p className="mb-1 font-semibold">Full name</p>
//             <input 
//                 type="text" 
//                 placeholder="Enter name"
//                 className="border-1 border-gray-200 p-2 rounded-[8px] w-full"
//             />
//         </div>

//         <div className="w-full mt-6">
//             <p className="mb-1 font-semibold">Email Address</p>
//             <input 
//                 type="text" 
//                 placeholder="Enter email"
//                 className="border-1 border-gray-200 p-2 rounded-[8px] w-full"
//             />
//         </div>

//         <div className="w-full mt-6">
//             <p className="mb-1 font-semibold">Message</p>
//             <textarea  
//                 placeholder="Write Message"
//                 className="border-1 border-gray-200 p-2 h-auto min-h-[150px] rounded-[8px] w-full"
//             ></textarea>
//         </div>
//         <button className="mt-4 rounded-[8px] p-3 w-full flex justify-center cursor-pointer items-center gap-2 bg-gradient-to-r from-[#faa300] to-[#946000]">
//             Send Message
//             <Send />
//         </button>
//       </form>
//       </motion.div>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xbladjby", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="mt-10 mb-10">
       <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.1,
          margin: "100px",
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
          amount: 0.1,
          margin: "100px",
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
      <form className="bg-[#373636] p-4 lg:p-6 rounded-[20px]" onSubmit={handleSubmit}>    
        <div className="w-full">
            <p className="mb-1 font-semibold">Full name</p>
            <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter name"
                className="border-1 border-gray-200 p-2 rounded-[8px] w-full text-gray-300"
            />
        </div>

        <div className="w-full mt-6">
            <p className="mb-1 font-semibold">Email Address</p>
            <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter email"
                className="border-1 border-gray-200 p-2 rounded-[8px] w-full text-gray-300"
            />
        </div>

        <div className="w-full mt-6">
            <p className="mb-1 font-semibold">Message</p>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write Message"
                className="border-1 border-gray-200 p-2 h-auto min-h-[150px] rounded-[8px] w-full text-gray-300"
            ></textarea>
        </div>
        
        {submitStatus === 'success' && (
          <div className="mt-4 p-3 bg-green-600 text-white rounded-[8px]">
            🎉 Message sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mt-4 p-3 bg-red-600 text-white rounded-[8px]">
            ❌ Failed to send message. Please try again or email me directly.
          </div>
        )}
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="mt-4 rounded-[8px] p-3 w-full flex justify-center cursor-pointer items-center gap-2 bg-gradient-to-r from-[#faa300] to-[#946000] disabled:opacity-50 disabled:cursor-not-allowed hover:from-[#ffb31a] hover:to-[#a67000] transition-all"
        >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className={isSubmitting ? 'animate-pulse' : ''} />
        </button>
      </form>
      </motion.div>
    </div>
  );
}