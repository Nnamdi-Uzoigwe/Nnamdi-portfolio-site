import express from 'express';
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';
import protect  from '../middleware/authMiddleware.js';
import upload from '../middleware/upload.js'; // Import Multer configuration

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', protect, upload.array('images', 3), createProject); // Multer middleware here
router.put('/:id', protect, upload.array('images', 3), updateProject); // Multer middleware here
router.delete('/:id', protect, deleteProject);

export default router;