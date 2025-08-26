
import { motion } from 'framer-motion';

const PortfolioLoading = () => {

  const SkeletonBox = ({ className = "", style = {} }) => (
    <motion.div
      className={`bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] rounded ${className}`}
      style={{ ...style }}
      initial={{ backgroundPosition: '-200% 0' }}
      animate={{ 
        backgroundPosition: '200% 0',
        transition: {
          duration: 1.5,
          ease: 'linear',
          repeat: Infinity,
        }
      }}
    />
  );

  const ProjectCardSkeleton = () => (
    <div className="bg-[#373636] rounded-xl w-full p-6">
      {/* Project Image */}
      <SkeletonBox 
        className="w-full rounded-xl mb-6" 
        style={{ height: '200px' }} 
      />
      
      {/* Project Title */}
      <SkeletonBox 
        className="h-8 mb-4" 
        style={{ width: '80%' }} 
      />
      
      {/* Project Description */}
      <div className="space-y-3 mb-6 rounded-xl">
        <SkeletonBox className="h-4 w-full" />
        <SkeletonBox className="h-4 w-full" />
        <SkeletonBox className="h-4 w-3/4" />
      </div>
      
      {/* View Details Button */}
      <div className="flex justify-end rounded-lg">
        <SkeletonBox className="h-10 w-32 rounded-md" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#1a1a1b] text-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start gap-2 mb-8">
          <div>
            {/* Portfolio Title */}
            <SkeletonBox className="h-12 w-64 mb-4" />
            {/* Subtitle */}
            <SkeletonBox className="h-6 w-60 lg:w-96" />
          </div>
          
          {/* Filter Dropdown */}
          <SkeletonBox className="h-12 w-28 lg:w-32 rounded-lg" />
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioLoading;