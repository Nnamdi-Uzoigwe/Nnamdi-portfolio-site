import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import ProjectCard from "../components/ProjectCard";

interface ProjectImage {
  url: string;
  public_id?: string;
  _id?: string;
}

interface Project {
  name: string;
  brief: string;
  timeframe: string;
  githubLink: string;
  liveUrl: string;
  tools: string;
  overview: string;
  images: ProjectImage[];
  id: string;
}

export default function Works() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://nnamdi-portfolio-three.vercel.app/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");

        const data = await res.json();
        setProjects(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    //     <div className="p-4">
    //   {projects.map((project) => (
    //     <div key={project.id} className="mb-6 border p-4 rounded">
    //       <h2 className="text-xl font-bold">{project.name}</h2>
    //       <p>{project.brief}</p>

    //       <div className="flex gap-2 mt-2">
    //         {project.images.map((image) => (
    //           <img
    //             key={image._id}
    //             src={image.url}
    //             alt={project.name}
    //             className="w-24 h-24 object-cover rounded"
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="mt-10 pb-10">
      <header className="mb-6 flex flex-col lg:flex-row justify-between gap-8 items-end">
        <div className="w-full lg:w-4/7">
            <h2 className="text-xl lg:text-3xl font-semibold mb-3">Portfolio</h2>
            <p className="">Some of the noteworthy projects I have worked on</p>
        </div>
        {/* <select className="w-3/7 border-1 bg-[#373636] border-[#737373] p-2 rounded-[8px]">
            <option value="" className="bg-white hover:bg-[#737373]">All</option>
            <option value="" className="bg-white">Website Design</option>
            <option value="" className="bg-white text-black">Mobile App Development</option>
        </select> */}
        <Dropdown />

      </header>
        
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-3">
        {projects.map((project) => (
            <ProjectCard 
                key={project.id}
                name={project.name}
                brief={project.brief}
                image={project?.images[0].url}
            />
        ))}
    </div>

    </div>
  );
}
