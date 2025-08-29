import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
interface ProjectCardProps {
  image: string;
  name: string;
  brief: string;
  id: string;
}

export default function ProjectCard({
  image,
  name,
  brief,
  id,
}: ProjectCardProps) {
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
      <div className="w-full flex flex-col mt-2 gap-4 shadow-sm rounded-[20px] overflow-hidden h-full">
        <div>
          <img
            src={image}
            alt=""
            className="h-56 lg:h-40 w-full rounded-[8px]"
          />
        </div>
        <div className="px-4 mt-4 flex flex-col flex-1">
          <h4 className="mb-6 text-xl font-semibold">{name}</h4>
          <p className="text-sm flex-1">{brief}</p>

          <div className="mt-10 flex justify-end">
            <Link to={`/works/${id}`}>
              {/* <button className="flex gap-2 rounded-[30px] cursor-pointer bg-gradient-to-r from-[#e69534] to-[#503401] lg:hover:bg-gradient-to-r lg:hover:from-[#e69534] lg:hover:to-[#503401] py-3 px-4 border-1 border-[#c6f8c8]"> */}<button className="flex gap-2 rounded-[30px] cursor-pointer bg-gradient-to-r from-[#e69534] to-[#503401] lg:bg-none lg:hover:bg-gradient-to-r lg:hover:from-[#e69534] lg:hover:to-[#503401] py-3 px-4 border-1 border-[#c6f8c8]">
                View Details <ArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
