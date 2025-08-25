import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
    image: string,
    name: string,
    brief: string
}

export default function ProjectCard({ image, name, brief }:ProjectCardProps) {
    return (
        <div className="w-full flex flex-col gap-4 shadow-sm rounded-[20px] overflow-hidden">
            <div>
                <img src={image} alt="" className="h-56 lg:h-40 w-full lg:w-60 rounded-[8px]" />
            </div>
            <div className="px-4 mt-4">
                <h4 className="mb-6 text-xl font-semibold">{name}</h4>
                <p className="text-sm">{brief}</p>

                <div className="mt-10 flex justify-end">
                    <button className="flex gap-2">View Details <ArrowRight /></button>
                </div>
            </div>
        </div>
    )
}