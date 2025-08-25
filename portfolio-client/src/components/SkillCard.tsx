import { motion } from "framer-motion";

interface skillcardProps {
  title: string;
  description: string;
  url: string;
}


export default function SkillCard({ title, url, description }: skillcardProps) {
  return (
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
    <div className="bg-[#454545] h-auto min-h-[150px] p-4 flex items-center justify-end gap-2 rounded-[12px] border-1 border-[#888888]">
      <div className="h-[50px] w-[80px] rounded-[8px] bg-[#012204] p-2 flex items-center justify-center">
        <img src={url} alt="" className="h-10 w-10 object-contain" />
      </div>
      <div>
        <h4 className="text-md lg:text-xl font-semibold">{title}</h4>
        <p className="text-sm mt-2 text-gray-300">{description}</p>
      </div>
    </div>
    </motion.div>
  );
}
