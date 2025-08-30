import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ChevronsRight,
  BriefcaseBusiness,
  Clock,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import ProjectCard from "../components/ProjectCard";
import ProjectLoading from "../components/ProjectLoading";
import ImageModal from "../components/ImageModal";

export interface ProjectImage {
  url: string;
  _id?: string;
}

export interface Project {
  id: string;
  name: string;
  brief: string;
  overview: string;
  timeframe: string;
  tools: string[];
  images: ProjectImage[];
  liveUrl?: string;
  githubLink?: string;
  dateAdded: string;
  createdAt: string;
  updatedAt: string;
}

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `https://nnamdi-portfolio-site.onrender.com/api/projects/${id}`
        );

        if (!res.ok) {
          throw new Error(
            res.status === 404 ? "Project not found" : "Failed to fetch project"
          );
        }

        const data = (await res.json()) as Project;
        setTimeout(() => {
          setProject(data);
          setLoading(false);
        }, 1000);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Something went wrong");
        setLoading(false);
      }
    };

    if (id) fetchProject();
  }, [id]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://nnamdi-portfolio-site.onrender.com/api/projects"
        );
        if (!res.ok) throw new Error("Failed to fetch projects");

        const data = await res.json();
        setProjects(data);
      } catch (err: any) {
        console.error(err.message || "Something went wrong");
      }
    };

    fetchProjects();
  }, [id]);

  // Loading state
  if (loading) {
    return <ProjectLoading />;
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-[#1a1a1b] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Error</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <Link
            to="/works"
            className="bg-[#faa300] text-black px-6 py-3 rounded-lg hover:bg-[#e8930a] transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // No project found
  if (!project) {
    return <Navigate to="/works" replace />;
  }

  return (
    <motion.div
      className=" min-h-screen bg-[#1a1a1b] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-10 max-w-6xl mx-auto ">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex gap-2 items-center">
            <Link
              to="/works"
              className="inline-flex text-lg items-center gap-2 text-[#888888] font-semibold"
            >
              WORKS
            </Link>
            <ChevronsRight className="text-[#888888]" />
            <p className="text-lg font-semibold">{project.name}</p>
          </div>
        </motion.div>

        {/* Project Header */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <header className="mt-14 flex flex-col items-center">
            <h1 className="text-2xl lg:text-4xl font-semibold mb-6">
              {project.name}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {project.brief}
            </p>
            {/* Project Meta Info */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center">
              {project.tools?.map((item, index) => (
                <div
                  key={index}
                  className="p-2 bg-[#d8d5d5] text-[#737373] font-semibold rounded-[20px] text-sm"
                >
                  {item}
                </div>
              ))}
            </div>

                {/* make it dynamic later for mobile app */}
            <div className="flex justify-center gap-10 items-center">
              <div className="flex gap-2">
                <BriefcaseBusiness className="text-gray-300" />
                <p className="text-gray-300">Website Design</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-gray-300" />
                <span className="text-gray-300">{project.timeframe}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex mt-8 flex-wrap gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 0 text-gray-300 px-6 py-3 font-medium"
                >
                  Github
                  <FaGithub size={24} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2  text-gray-300 px-6 py-3 rounded-[30px] font-medium border-2 border-gray-300 transition-colors"
                >
                  Live Demo
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </header>
        </motion.header>

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid grid-cols-1  gap-6">
              {project.images.slice(0, 1).map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden border-1 border-gray-300 rounded-lg bg-gray-800"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onClick={() =>
                    setModalImage({
                      src: image.url,
                      alt: `${project.name} screenshot ${index + 1}`,
                    })
                  }
                >
                  <img
                    src={image.url}
                    alt={`${project.name} screenshot ${index + 1}`}
                    className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Project Overview */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-300">Overview</h2>
          <div>
            <p className="text-gray-300 text-md lg:text-lg leading-relaxed whitespace-pre-line text-justify">
              {project.overview}
            </p>
          </div>
        </motion.section>

        {project.images && project.images.length > 0 && (
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {project.images.slice(1, 3).map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden border-1 border-gray-300 rounded-lg bg-gray-800"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onClick={() =>
                    setModalImage({
                      src: image.url,
                      alt: `${project.name} screenshot ${index + 2}`,
                    })
                  }
                >
                  <img
                    src={image.url}
                    alt={`${project.name} screenshot ${index + 2}`}
                    className="w-full  h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Related Projects */}
        <motion.div
          className="pt-12 border-t border-gray-800 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8">
            View Next Project
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <ProjectCard
                    key={relatedProject.id}
                    name={relatedProject.name}
                    brief={relatedProject.brief}
                    image={relatedProject?.images[0].url}
                    id={relatedProject.id}
                  />
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
      {/* Image Modal */}
      <ImageModal
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        imageSrc={modalImage?.src || ""}
        imageAlt={modalImage?.alt || ""}
      />
    </motion.div>
  );
};

export default ProjectDetails;
