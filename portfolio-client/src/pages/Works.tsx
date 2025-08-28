// import { useEffect, useState } from "react";
// import Dropdown from "../components/Dropdown";
// import ProjectCard from "../components/ProjectCard";
// import { motion } from "framer-motion";
// import PortfolioLoading from "../components/PortfolioLoading";

// interface ProjectImage {
//   url: string;
//   public_id?: string;
//   _id?: string;
// }

// interface Project {
//   name: string;
//   brief: string;
//   timeframe: string;
//   githubLink: string;
//   liveUrl: string;
//   tools: string;
//   overview: string;
//   images: ProjectImage[];
//   id: string;
// }

// export default function Works() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch(
//           "https://nnamdi-portfolio-site.onrender.com/api/projects"
//         );
//         if (!res.ok) throw new Error("Failed to fetch projects");

//         const data = await res.json();
// console.log(data)
//         setTimeout(() => {
//           setProjects(data);
//           setLoading(false);
//         }, 3000);

//         setProjects(data);
//       } catch (err: any) {
//         setError(err.message || "Something went wrong");
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (loading) return <PortfolioLoading />;
//   if (error) return <div className="text-red-600">{error}</div>;

//   return (
//     <div className="mt-10 pb-10">
//       <motion.div
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
//         <header className="mb-6 flex flex-col lg:flex-row justify-between gap-8 items-end">
//           <div className="w-full lg:w-4/7">
//             <h2 className="text-xl lg:text-3xl font-semibold mb-3">
//               Portfolio
//             </h2>
//             <p className="">Some of the noteworthy projects I have worked on</p>
//           </div>
//           {/* <select className="w-3/7 border-1 bg-[#373636] border-[#737373] p-2 rounded-[8px]">
//             <option value="" className="bg-white hover:bg-[#737373]">All</option>
//             <option value="" className="bg-white">Website Design</option>
//             <option value="" className="bg-white text-black">Mobile App Development</option>
//         </select> */}
//           <Dropdown />
//         </header>
//       </motion.div>

//       <motion.div
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
//         <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
//           {projects.map((project) => (
//             <ProjectCard
//               key={project.id}
//               name={project.name}
//               brief={project.brief}
//               image={project?.images[0].url}
//               id={project.id}
//             />
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import PortfolioLoading from "../components/PortfolioLoading";

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
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://nnamdi-portfolio-site.onrender.com/api/projects"
        );
        if (!res.ok) throw new Error("Failed to fetch projects");

        const data = await res.json();
        console.log(data);
        
        setTimeout(() => {
          setProjects(data);
          setFilteredProjects(data); 
          setLoading(false);
        }, 3000);

        setProjects(data);
        setFilteredProjects(data); 
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (!projects.length) return;

    let filtered = projects;

    if (selectedFilter === "Website Design") {
      filtered = projects.filter((project) => {
        const searchText = `${project.name} ${project.brief} ${project.tools} ${project.overview}`.toLowerCase();
        return searchText.includes("web design") || searchText.includes("web");
      });
    } else if (selectedFilter === "Mobile App Development") {
      filtered = projects.filter((project) => {
        const searchText = `${project.name} ${project.brief} ${project.tools} ${project.overview}`.toLowerCase();
        return searchText.includes("mobile app");
      });
    }

    setFilteredProjects(filtered);
  }, [selectedFilter, projects]);

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  if (loading) return <PortfolioLoading />;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="mt-10 pb-10">
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
        <header className="mb-6 flex flex-col lg:flex-row justify-between gap-8 items-end">
          <div className="w-full lg:w-4/7">
            <h2 className="text-xl lg:text-3xl font-semibold mb-3">
              Portfolio
            </h2>
            <p className="">Some of the noteworthy projects I have worked on</p>
          </div>
          <Dropdown onChange={handleFilterChange} />
        </header>
      </motion.div>

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
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                brief={project.brief}
                image={project?.images[0].url}
                id={project.id}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500">
              No projects found for the selected filter.
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}