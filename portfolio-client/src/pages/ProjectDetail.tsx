import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react';
import PortfolioLoading from '../components/PortfolioLoading';

export interface ProjectImage {
  url: string;
  _id?: string;   // sometimes MongoDB adds this
}

export interface Project {
  id: string;           // API sends "id", not "_id"
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
  const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `https://nnamdi-portfolio-site.onrender.com/api/projects/${id}`
        );

        if (!res.ok) {
          throw new Error(res.status === 404 ? 'Project not found' : 'Failed to fetch project');
        }

        const data = (await res.json()) as Project;
        // console.log("Fetched project:", json); 
        setTimeout(() => {
          setProject(data);
          setLoading(false)
        }, 1000);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
        setLoading(false);
      }
    };

    if (id) fetchProject();
  }, [id]);


  // Loading state
  if (loading) {
    return <PortfolioLoading />;
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
      className="min-h-screen bg-[#1a1a1b] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto p-4 lg:p-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link 
            to="/works" 
            className="inline-flex items-center gap-2 text-[#faa300] hover:text-[#e8930a] transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.header 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{project.name}</h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">{project.brief}</p>
          
          {/* Project Meta Info */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-[#faa300]" />
              <span className="text-gray-300">{project.timeframe}</span>
            </div>
            <div className="flex items-center gap-2">
              {/* <Tool size={18} className="text-[#faa300]" /> */}
              <span className="text-gray-300">{project.tools?.join(', ')}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#faa300] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#e8930a] transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                <Github size={18} />
                View Code
              </a>
            )}
          </div>
        </motion.header>

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg bg-gray-800"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
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
          <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {project.overview}
            </p>
          </div>
        </motion.section>

        {/* Technologies Used */}
        {project.tools && project.tools.length > 0 && (
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-800 text-[#faa300] px-4 py-2 rounded-lg text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + (index * 0.05) }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.section>
        )}

        {/* Bottom Actions */}
        <motion.div 
          className="flex justify-center pt-12 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link 
            to="/works"
            className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            View More Projects
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;