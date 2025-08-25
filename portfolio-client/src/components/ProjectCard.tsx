import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
interface ProjectCardProps {
    image: string,
    name: string,
    brief: string,
    id: string
}

export default function ProjectCard({ image, name, brief, id }:ProjectCardProps) {
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
        <div className="w-full flex flex-col gap-4 shadow-sm rounded-[20px] overflow-hidden">
            <div>
                <img src={image} alt="" className="h-56 lg:h-40 w-full rounded-[8px]" />
            </div>
            <div className="px-4 mt-4">
                <h4 className="mb-6 text-xl font-semibold">{name}</h4>
                <p className="text-sm">{brief}</p>

                <div className="mt-10 flex justify-end">
                    <Link to={`/works/${id}`} >
                        <button className="flex gap-2">View Details <ArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
        </motion.div>
    )
}