import React, { useState, useEffect, useRef } from 'react';
import { 
  LogOut, 
  Upload, 
  X, 
  Plus, 
  FolderPlus, 
  Github, 
  ExternalLink, 
  Calendar,
  Trash2,
  Image as ImageIcon,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface Project {
  id: number;
  name: string;
  brief: string;
  timeframe: string;
  githubLink: string;
  liveUrl: string;
  tools: string;
  overview: string;
  images: string[];
  dateAdded: string;
}


// interface AdminDashboardProps {
//   onLogout: () => void;
// }

const AdminDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    brief: '',
    timeframe: '',
    githubLink: '',
    liveUrl: '',
    tools: '',
    overview: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load projects on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage(text);
    if (type === 'success') {
      setShowSuccess(true);
      setShowError(false);
    } else {
      setShowError(true);
      setShowSuccess(false);
    }
    setTimeout(() => {
      setShowSuccess(false);
      setShowError(false);
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    
    const maxFiles = 3;
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const newFiles: File[] = [];
    
    for (let i = 0; i < Math.min(files.length, maxFiles - selectedFiles.length); i++) {
      const file = files[i];
      if (allowedTypes.includes(file.type)) {
        newFiles.push(file);
      } else {
        showMessage('error', 'Please upload only JPG, PNG, or WebP images.');
        return;
      }
    }
    
    setSelectedFiles([...selectedFiles, ...newFiles]);
    
    if (selectedFiles.length + newFiles.length >= maxFiles) {
      showMessage('error', `Maximum ${maxFiles} images allowed.`);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add('border-purple-500', 'bg-purple-50');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-purple-500', 'bg-purple-50');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-purple-500', 'bg-purple-50');
    handleFileSelect(e.dataTransfer.files);
  };



  // const handleSubmit = async () => {
  //   if (!formData.name || !formData.brief || !formData.timeframe || !formData.tools || !formData.overview) {
  //     showMessage('error', 'Please fill in all required fields.');
  //     return;
  //   }

  //   if (selectedFiles.length === 0) {
  //     showMessage('error', 'Please upload at least one project image.');
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   try {
  //     const imageDataUrls = await convertFilesToBase64(selectedFiles);
      
  //     const newProject: Project = {
  //       id: Date.now(),
  //       name: formData.name,
  //       brief: formData.brief,
  //       timeframe: formData.timeframe,
  //       githubLink: formData.githubLink,
  //       liveUrl: formData.liveUrl,
  //       tools: formData.tools,
  //       overview: formData.overview,
  //       images: imageDataUrls,
  //       dateAdded: new Date().toLocaleDateString()
  //     };

  //     const updatedProjects = [...projects, newProject];
  //     setProjects(updatedProjects);
  //     localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects));

  //     // Reset form
  //     setFormData({
  //       name: '',
  //       brief: '',
  //       timeframe: '',
  //       githubLink: '',
  //       liveUrl: '',
  //       tools: '',
  //       overview: ''
  //     });
  //     setSelectedFiles([]);
      
  //     showMessage('success', 'Project added successfully!');
  //   } catch (error) {
  //     showMessage('error', 'Error adding project. Please try again.');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.brief || !formData.timeframe || !formData.tools || !formData.overview) {
    showMessage("error", "Please fill in all required fields.");
    return;
  }

  if (selectedFiles.length === 0) {
    showMessage("error", "Please upload at least one project image.");
    return;
  }

  setIsSubmitting(true);

  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.name);
  formDataToSend.append("brief", formData.brief);
  formDataToSend.append("timeframe", formData.timeframe);
  formDataToSend.append("githubLink", formData.githubLink);
  formDataToSend.append("liveUrl", formData.liveUrl);
  formDataToSend.append("tools", formData.tools);
  formDataToSend.append("overview", formData.overview);

  selectedFiles.forEach((file) => {
    formDataToSend.append("images", file); // matches upload.array("images", 3) in backend
  });

  const token = localStorage.getItem("token"); // get token from login

  try {
    const res = await fetch("https://nnamdi-portfolio-site.onrender.com/api/projects", {
      method: "POST",
      body: formDataToSend,
      headers: {
        Authorization: `Bearer ${token}` // send token in header
      },
    });

    const data = await res.json();

    if (res.ok) {
      showMessage("success", "Project added successfully!");
      // reset form & selected files
      setFormData({
        name: "",
        brief: "",
        timeframe: "",
        githubLink: "",
        liveUrl: "",
        tools: "",
        overview: ""
      });
      setSelectedFiles([]);
    } else {
      showMessage("error", data.message || "Error uploading project.");
    }
  } catch (err) {
    showMessage("error", "Network error, please try again.");
  } finally {
    setIsSubmitting(false);
  }
};



  const deleteProject = (id: number) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(project => project.id !== id);
      setProjects(updatedProjects);
      localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects));
      showMessage('success', 'Project deleted successfully!');
    }
  };

  return (
    <div className="z-10 min-h-screen bg-[#454545]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Portfolio Admin</h1>
              <p className="text-sm text-gray-600">Manage your portfolio projects</p>
            </div>
            <button
            //   onClick={onLogout}
              className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success/Error Messages */}
        {showSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
            <p className="text-green-800 font-medium">{message}</p>
          </div>
        )}
        
        {showError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
            <p className="text-red-800 font-medium">{message}</p>
          </div>
        )}

        {/* Add New Project Section */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
          <div className="flex items-center mb-6">
            <FolderPlus className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Add New Project</h2>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 text-black">
            {/* Project Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200  rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                placeholder="Enter project name"
              />
            </div>

            {/* Timeframe */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Timeframe *
              </label>
              <input
                type="text"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                placeholder="e.g., 2 months, 1 week"
              />
            </div>

            {/* GitHub Link */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                GitHub Link
              </label>
              <input
                type="url"
                name="githubLink"
                value={formData.githubLink}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                placeholder="https://github.com/username/repo"
              />
            </div>

            {/* Live URL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Live URL
              </label>
              <input
                type="url"
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                placeholder="https://yourproject.com"
              />
            </div>
          </div>

          {/* Full Width Fields */}
          <div className="space-y-6 mb-6">
            {/* Project Brief */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Brief *
              </label>
              <textarea
                name="brief"
                value={formData.brief}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border text-black border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white resize-vertical"
                placeholder="Brief description of the project..."
              />
            </div>

            {/* Tools and Technologies */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tools and Technologies Used *
              </label>
              <input
                type="text"
                name="tools"
                value={formData.tools}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-black border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                placeholder="React, Node.js, MongoDB, etc."
              />
            </div>

            {/* Project Overview */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Overview (Description) *
              </label>
              <textarea
                name="overview"
                value={formData.overview}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border text-black border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white resize-vertical"
                placeholder="Detailed project description..."
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Project Images (Up to 3) *
            </label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-all duration-200"
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium mb-2">
                Drag and drop images here, or click to select
              </p>
              <p className="text-sm text-gray-500">
                Maximum 3 images (JPG, PNG, WebP)
              </p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handleFileSelect(e.target.files)}
                className="hidden"
                multiple
                accept=".jpg,.jpeg,.png,.webp"
              />
            </div>

            {/* Selected Files Preview */}
            {selectedFiles.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Selected Files:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="relative border border-gray-200 rounded-lg p-2">
                      <div className="flex items-center">
                        <ImageIcon className="w-5 h-5 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-700 truncate">{file.name}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile(index);
                        }}
                        className="absolute top-1 right-1 p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Adding Project...
              </>
            ) : (
              <>
                <Plus className="w-5 h-5 mr-2" />
                Add Project
              </>
            )}
          </button>
        </div>

        {/* Existing Projects Section */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="flex items-center mb-6">
            <FolderPlus className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Existing Projects ({projects.length})</h2>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-12">
              <FolderPlus className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No projects added yet. Create your first project above.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200">
                  {project.images.length > 0 && (
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      <img 
                        src={project.images[0]} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-gray-800 truncate">{project.name}</h3>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        title="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.brief}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{project.dateAdded}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-purple-600 transition-colors"
                          title="View on GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-purple-600 transition-colors"
                          title="View live site"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;