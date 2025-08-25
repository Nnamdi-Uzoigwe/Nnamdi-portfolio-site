import {
  Atom,
  BriefcaseBusiness,
  CloudDownload,
  GraduationCap,
} from "lucide-react";
import Progress from "../components/Progress";
import { motion } from "framer-motion";

export default function Resume() {
  const data = [
    {
      id: 1,
      technologies: "React.js/Next.js",
      level: "90%",
    },
    {
      id: 2,
      technologies: "Node.js/Express.js/MongoDB",
      level: "80%",
    },
    {
      id: 3,
      technologies: "Typescript/Javascript",
      level: "70%",
    },
    {
      id: 4,
      technologies: "TailwindCSS/ShadcnUI",
      level: "85%",
    },
    {
      id: 5,
      technologies: "Git/Github",
      level: "90%",
    },
    {
      id: 6,
      technologies: "React-Native",
      level: "75%",
    },
  ];

  const handleDownloadCV = () => {
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = '/UZOIGWE-NNAMDI-CV.pdf'; // Path to your CV in public folder
  link.download = 'UZOIGWE-NNAMDI-CV.pdf'; // Name for downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div className="mt-10 z-40">
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
        <header className="border-b-1 lg:border-b-0 pb-6 lg:pb-0 border-[#737373]">
          <h2 className="text-xl lg:text-3xl font-semibold mb-3">Resume</h2>
          <p className="">Skill level and technologies used</p>
        </header>
      </motion.div>
      {/* Education */}
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
        <div className="mt-10 ">
          <div className="flex gap-3 items-center mb-4">
            <GraduationCap className="text-[#ffdb46]" />
            <h4 className="text-xl font-semibold">Education</h4>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
            <div>
              <h5 className="text-[#888888]">B.Sc. Computer Science</h5>
              <p>University of Calabar, Calabar, Cross River State, Nigeria</p>
            </div>

            <div>2019 - 2025</div>
          </div>
        </div>
      </motion.div>
      {/* Skills */}

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
        <div className="mt-10">
          <div className="flex gap-3 items-center mb-4">
            <Atom className="text-[#ffdb46]" />
            <h4 className="text-xl font-semibold">Skills</h4>
          </div>
          <div className="bg-[#373636] border-1 border-[#888888] rounded-[16px] p-4 lg:p-6">
            {data.map((item) => (
              <Progress
                key={item.id}
                technology={item.technologies}
                level={item.level}
              />
            ))}
          </div>
        </div>
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
        {/* Work Experience */}
        <div className="mt-10 pb-8 border-b-1 border-[#737373]">
          <div className="flex gap-3 items-center mb-4">
            <BriefcaseBusiness className="text-[#ffdb46]" />
            <h4 className="text-xl font-semibold">Work Experience</h4>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
            <div>
              <h5 className="text-[#888888]">Frontend Developer (Remote)</h5>
              <p>Cyber Technologies Ltd</p>
            </div>

            <div className="text-[#888888]">2023 - present</div>
          </div>

          <div className="mt-4 flex flex-col lg:flex-row justify-between items-start lg:items-end">
            <div>
              <h5 className="text-[#888888]">Frontend Web Developer </h5>
              <p>Firsta Technologies, Calabar</p>
            </div>

            <div className="text-[#888888]">2022 - 2023</div>
          </div>

          <div className="mt-4 flex flex-col lg:flex-row justify-between items-start lg:items-end">
            <div>
              <h5 className="text-[#888888]">Developer & Tutor</h5>
              <p>Arvys Technologies, Calabar</p>
            </div>

            <div className="text-[#888888]">2021 - 2022</div>
          </div>
        </div>
      </motion.div>
      <div className="my-6 flex justify-end">
        <button onClick={handleDownloadCV} className="flex gap-2 py-3 px-4 rounded-xl cursor-pointer border-1 border-[#c6f8c8]">
          Download Resume
          <CloudDownload />
        </button>
      </div>
    </div>
  );
}
