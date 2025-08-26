import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";

const ProjectLoading = () => {
  return (
    <motion.div
      className="min-h-screen bg-[#1a1a1b] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto p-4 lg:p-8">
        {/* Back Button Skeleton */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex gap-2 items-center">
            <div className="inline-flex text-lg items-center gap-2 text-[#888888] font-semibold">
              WORKS
            </div>
            <ChevronsRight className="text-[#888888]" />
            <div className="h-7 w-48 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </motion.div>

        {/* Project Header Skeleton */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <header className="mt-14 flex flex-col items-center">
            {/* Title Skeleton */}
            <div className="h-12 w-60 lg:w-96 bg-gray-700 rounded animate-pulse mb-6"></div>
            
            {/* Brief Skeleton */}
            <div className="h-6 w-3/4 bg-gray-700 rounded animate-pulse mb-8"></div>

            {/* Tools Skeleton */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="h-8 w-20 bg-gray-600 rounded-[20px] animate-pulse"></div>
                <div className="h-8 w-24 bg-gray-600 rounded-[20px] animate-pulse"></div>
                <div className="h-8 w-16 bg-gray-600 rounded-[20px] animate-pulse"></div>
              </div>
            </div>

            {/* Meta Info Skeleton */}
            <div className="flex justify-center gap-10 items-center">
              <div className="flex gap-2">
                <div className="h-5 w-5 bg-gray-600 rounded animate-pulse"></div>
                <div className="h-5 w-28 bg-gray-600 rounded animate-pulse"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 bg-gray-600 rounded animate-pulse"></div>
                <div className="h-5 w-16 bg-gray-600 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Action Buttons Skeleton */}
            <div className="flex mt-8 flex-wrap gap-4">
              <div className="h-12 w-24 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-12 w-32 bg-gray-700 rounded-[30px] animate-pulse"></div>
            </div>
          </header>
        </motion.header>

        {/* Main Image Skeleton */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 gap-6">
            <motion.div
              className="relative overflow-hidden border-1 border-gray-300 rounded-lg bg-gray-800"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-full h-64 lg:h-80 bg-gray-700 animate-pulse"></div>
            </motion.div>
          </div>
        </motion.section>

        {/* Overview Section Skeleton */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-8 w-32 bg-gray-600 rounded animate-pulse mb-6"></div>
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </motion.section>

        {/* Additional Images Skeleton */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              className="relative overflow-hidden border-1 border-gray-300 rounded-lg bg-gray-800"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-full h-64 lg:h-80 bg-gray-700 animate-pulse"></div>
            </motion.div>
            <motion.div
              className="relative overflow-hidden border-1 border-gray-300 rounded-lg bg-gray-800"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-full h-64 lg:h-80 bg-gray-700 animate-pulse"></div>
            </motion.div>
          </div>
        </motion.section>

        {/* Related Projects Skeleton */}
        <motion.div
          className="pt-12 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="h-8 w-48 bg-gray-600 rounded animate-pulse mb-8 mx-auto"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="w-full flex flex-col gap-4 shadow-sm rounded-[20px] overflow-hidden bg-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div>
                  <div className="h-56 lg:h-40 w-full rounded-[8px] bg-gray-700 animate-pulse"></div>
                </div>
                <div className="px-4 mt-4 flex flex-col flex-1">
                  <div className="h-6 w-3/4 bg-gray-600 rounded animate-pulse mb-6"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 w-2/3 bg-gray-700 rounded animate-pulse"></div>
                  </div>
                  <div className="mt-10 flex justify-end">
                    <div className="h-8 w-32 bg-gray-600 rounded animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="h-12 w-40 bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectLoading;