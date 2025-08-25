
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import database connection
import connectDB from './config/db.js';

// Import routes
import adminRoutes from './routes/adminRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(cors({
  origin: ["https://nnamdi-portfolio-three.vercel.app/", "http://localhost:5173"],  // your frontend URL
  credentials: true,  // allow cookies / auth headers
}));    
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/projects', projectRoutes);

// Get port from environment or default to 5000
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

export default app;
