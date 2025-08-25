import Project from "../models/Project.js";
import cloudinary from "../config/cloudinary.js";


export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single project
export const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createProject = async (req, res) => {
  try {
    // req.files is now available thanks to Multer middleware
    const { name, brief, timeframe, githubLink, liveUrl, tools, overview } = req.body;

    const toolsArray = tools.split(',').map(tool => tool.trim()).filter(tool => tool.length > 0);
    
    // Upload images to Cloudinary
    const imageUploads = [];
    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(
        `data:${file.mimetype};base64,${file.buffer.toString('base64')}`,
        {
          folder: 'portfolio-projects',
          transformation: [
            { width: 1200, height: 800, crop: 'fill', quality: 'auto' }
          ]
        }
      );
      
      imageUploads.push({
        url: result.secure_url,
        public_id: result.public_id
      });
    }

    const project = new Project({
      name,
      brief,
      timeframe,
      githubLink,
      liveUrl,
      tools: toolsArray,
      overview,
      images: imageUploads
    });

    const createdProject = await project.save();
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update project
export const updateProject = async (req, res) => {
  try {
    // req.files contains the new uploaded files
    // Your update logic here
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    await project.deleteOne();
    res.json({ message: "Project removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

