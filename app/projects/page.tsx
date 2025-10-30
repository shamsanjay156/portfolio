/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const projects = [
//   {
//     title: "ADNIC Claim Portal",
//     client: "Abu Dhabi National Insurance Company (ADNIC)",
//     description:
//       "Digital claim submission portal supporting UAE Pass and traditional login, as well as guest submissions for Motor, Travel, and Commercial claims. Integrated with ADNIC’s core system for real-time claim status and mobile notifications.",
//     tech: "React.js, TypeScript, Redux, Vite, ANTD, Tailwind CSS, Node.js, REST API, Azure DevOps",
//     roles: [
//       "Implemented dual authentication (traditional & UAE Pass).",
//       "Enabled guest claim submissions with modular Formik forms.",
//       "Integrated with ADNIC core system for claim triggering and tracking.",
//       "Added push notifications and email alerts for claim status.",
//       "Collaborated on CI/CD pipelines using Azure DevOps.",
//     ],
//   },
//   {
//     title: "ADNIC EMIMS Portal",
//     client: "Abu Dhabi National Insurance Company (ADNIC)",
//     description:
//       "Role-based EMIMS platform providing modules for endorsements, claims, user management, and approval workflows.",
//     tech: "React.js, TypeScript, Redux, Vite, Tailwind, ANTD",
//     roles: [
//       "Developed scalable architecture with SSR and role-based access.",
//       "Optimized state management with Redux.",
//       "Implemented form validation using Formik and Yup.",
//       "Managed CI/CD and version control with Azure DevOps.",
//     ],
//   },
//   {
//     title: "Encounter Complete Healthcare",
//     client: "CHC - USA",
//     description:
//       "HIPAA-compliant EMR management platform with diagnostic reports and claim tracking.",
//     tech: "React.js, Redux-Saga, React PDF, CHC UI",
//     roles: [
//       "Built reusable components integrated with REST APIs.",
//       "Implemented PDF preview and in-app search.",
//       "Developed responsive tables with sorting and pagination.",
//       "Worked in Agile teams for testing and requirement validation.",
//     ],
//   },
//   {
//     title: "Phonology Assessment",
//     client: "Edutech",
//     description:
//       "Cross-platform assessment tool to detect learning disorders like Dyslexia with personalized reports.",
//     tech: "React.js, React Native, MobX, TypeScript, Node.js, Express, MongoDB",
//     roles: [
//       "Developed mobile and web apps using React & React Native.",
//       "Implemented authentication, dashboards, and progress reports.",
//       "Integrated Firebase login and push notifications.",
//       "Built backend authentication with Node.js & MongoDB.",
//     ],
//   },
//   {
//     title: "NexDo – Home Service Platform",
//     client: "NexDo - New Zealand",
//     description:
//       "Home service marketplace connecting customers with skilled professionals, featuring location tracking and payment gateway integration.",
//     tech: "React.js, React Native, MobX, Razorpay, Stripe, Firebase, Google Maps API",
//     roles: [
//       "Built responsive web and mobile apps.",
//       "Integrated Razorpay and Stripe payments.",
//       "Added push notifications and location tracking via Google Maps.",
//     ],
//   },
// ];

// export default function Projects() {
//   const [selectedProject, setSelectedProject] = useState<any | null>(null);

//   return (
//     <div className="overflow-y-auto px-6 py-[59px] h-full w-full ">
//       {/* Page Heading */}
//       <motion.h2
//         className="text-center text-5xl font-extrabold text-white tracking-tight mb-14"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         Featured <span className="text-[#00bcd4]">Projects</span>
//       </motion.h2>

//       {/* Project Buttons */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {projects.map((p, i) => (
//           <motion.button
//             key={i}
//             onClick={() => setSelectedProject(p)}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             className=" font-sans cursor-pointer relative group w-64 p-6 rounded-2xl bg-[#161b22] border border-[#2c313c] text-left shadow-lg hover:border-[#00bcd4]/50 transition-all"
//           >
//             <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00bcd4] transition-colors">
//               {p.title}
//             </h3>
//             <p className="text-sm text-gray-400 line-clamp-2">
//               {p.description}
//             </p>

//             {/* Subtle Glow */}
//             <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00bcd4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
//           </motion.button>
//         ))}
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="relative bg-[#161b22] border border-[#2c313c] rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-4 overflow-y-auto max-h-[90vh]"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.25 }}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 cursor-pointer right-5 text-gray-400 hover:text-white text-2xl"
//               >
//                 ×
//               </button>

//               {/* Modal Content */}
//               <h3 className="text-3xl font-bold text-white mb-1">
//                 {selectedProject.title}
//               </h3>
//               <p className="text-sm text-[#00bcd4] mb-2">
//                 {selectedProject.client}
//               </p>
//               <p className="text-gray-400 text-sm italic mb-5">
//                 {selectedProject.tech}
//               </p>
//               <p className="text-gray-300 mb-5 leading-relaxed">
//                 {selectedProject.description}
//               </p>

//               <h4 className="text-lg font-semibold text-[#00bcd4] mb-3">
//                 Roles & Responsibilities
//               </h4>
//               <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
//                 {selectedProject.roles.map((r: string, idx: number) => (
//                   <li key={idx}>{r}</li>
//                 ))}
//               </ul>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<any>(null);

  const skills = [
    { name: "React", icon: "/tech_icons/React.png" },
    { name: "React Native", icon: "/tech_icons/React.png" },
    { name: "Vite", icon: "/tech_icons/Vite.js.png" },
    { name: "Next.js", icon: "/tech_icons/Next.js.png" },
    { name: "JavaScript", icon: "/tech_icons/JavaScript.png" },
    { name: "TypeScript", icon: "/tech_icons/TypeScript.png" },
    { name: "Redux", icon: "/tech_icons/Redux.png" },
    { name: "Node.js", icon: "/tech_icons/Node.js.png" },
    { name: "Tailwind", icon: "/tech_icons/Tailwind CSS.png" },
    { name: "Firebase", icon: "/tech_icons/Firebase.png" },
  ];

  const experience = [
    {
      company: "KGISL",
      role: "Associate",
      duration: "2023 – Present",
      points: [
        "Developing and maintaining scalable web and mobile applications using React.js, Vite, and React Native, with focus on performance and maintainability.",
        "Implemented server-side rendering (SSR) with React and optimized applications using code-splitting, lazy loading, and state management best practices.",
        "Collaborating with cross-functional teams and mentoring juniors to deliver efficient, high-quality solutions through Agile workflows and Azure DevOps.",
      ],
    },
    {
      company: "Embarckle LLP",
      role: "Application Developer",
      duration: "2021 – 2023",
      points: [
        "Developed responsive and enterprise-grade web apps using React.js, Next.js, Redux, and Axios for seamless API integration.",
        "Built and maintained cross-platform mobile apps with React Native, integrating Firebase notifications and Google Maps.",
        "Implemented CRUD operations and file handling using Node.js and MongoDB for backend data management.",
        "Collaborated in Agile teams with Git and JIRA to ensure smooth delivery and high-quality releases.",
      ],
    },
  ];

  const projects = [
    {
      title: "ADNIC Claim Portal",
      client: "Abu Dhabi National Insurance Company (ADNIC)",
      desc: "Comprehensive insurance claim platform supporting UAE Pass, guest submissions, and core system integration.",
      image: "/images/claim-portal.png",
      tech: "React, TypeScript, Redux, Vite, Tailwind, ANTD",
      responsibilities: [
        "Developed responsive UI for claim submission and inquiry modules.",
        "Integrated UAE Pass and traditional login flows with API security.",
        "Enabled guest claim submission and mobile notifications via backend integration.",
        "Handled error logging and state management using Redux Toolkit.",
      ],
    },
    {
      title: "ADNIC EMIMS Portal",
      client: "Abu Dhabi National Insurance Company (ADNIC)",
      desc: "Developed a role-based EMIMS platform for ADNIC with scoped access for internal teams, brokers, and external users, delivering modules for endorsements, claims, real-time alerts, user management, and approval workflows to streamline insurance operations.",
      image: "/images/emims.png",
      tech: "React, Redux, TypeScript, Tailwind, ANTD, Vite",
      responsibilities: [
        "Developed end-to-end module UIs (Endorsement, Claims, and Reports).",
        "Implemented SSR build using Vite for performance and SEO optimization.",
        "Collaborated with backend for data handling and workflow APIs.",
        "Maintained reusable Redux actions and modular components.",
      ],
    },
    {
      title: "Encounter Healthcare Portal",
      client: "CHC - USA Healthcare Provider",
      desc: "A secure web platform for a US-based healthcare provider, enabling users to manage Electronic Medical Records (EMR), track diagnostic reports, and monitor insurance claims, while ensuring data privacy and HIPAA compliance.",
      image: "/images/healthcare.png",
      tech: "React, Redux-Saga, React PDF, Chart.js",
      responsibilities: [
        "Created dashboards for patient data visualization and report generation.",
        "Built PDF reports dynamically with charts and clinical data.",
        "Improved load performance and responsiveness using React optimization.",
      ],
    },
    {
      title: "Phonology App",
      client: "EdTech",
      desc: "An intelligent assessment platform designed to identify learning disorders such as Dyslexia, using user demographics and behavioral data. It provides personalized evaluations, delivers test results via email, and allows users to track progress through an intuitive interface.",
      image: "/images/phonology.png",
      tech: "React Native, Node.js, MongoDB, TypeScript",
      responsibilities: [
        "Developed cross-platform assessment forms with Formik and dynamic validations.",
        "Integrated Node.js backend APIs for assessment scoring and analytics.",
        "Implemented offline data caching and exportable reports.",
      ],
    },
    {
      title: "NexDo – Home Service Platform",
      client: "NexDo - New Zealand",
      image: "/images/healthcare.png",
      desc: "A home service platform (NexDo) that connects customers with skilled professionals. Users can book services for specific time slots, with nearby professionals notified of new requests. The system supports automated work order creation, real-time confirmations, and a secure payment gateway for seamless post-service transactions.",
      tech: "React.js, React Native, MobX, Razorpay, Stripe, Firebase, Google Maps API",
      responsibilities: [
        "Built responsive web and mobile apps.",
        "Integrated Razorpay and Stripe payments.",
        "Added push notifications and location tracking via Google Maps.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-white px-6 py-16 space-y-16">
      {/* 🔹 About Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4">
          About <span className="text-[#00bcd4]">Me</span>
        </h2>
        <p className="text-gray-400 leading-relaxed">
          I’m{" "}
          <span className="text-[#00bcd4] font-semibold">Sanjay Kannan</span>,
          an Application Developer with 4+ years of experience building
          scalable, high-performance <span className="text-[#00bcd4]">web</span>{" "}
          and <span className="text-[#00bcd4]">mobile applications</span> using{" "}
          <span className="text-[#00bcd4]">React</span>,{" "}
          <span className="text-[#00bcd4]">Next.js</span>,{" "}
          <span className="text-[#00bcd4]">TypeScript</span>, and{" "}
          <span className="text-[#00bcd4]">React Native</span>. Passionate about
          crafting intuitive interfaces, optimizing performance, and writing
          clean, maintainable code.
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-10">
          My <span className="text-[#00bcd4]">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-[#00bcd4]/50 transition"
            >
              <Image src={s.icon} alt={s.name} width={30} height={30} />
              <span className="text-gray-300 text-sm font-semibold mt-2">
                {s.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🔹 Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          Work <span className="text-[#00bcd4]">Experience</span>
        </h2>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-[#161b22] rounded-2xl border border-[#30363d] shadow-lg transition"
            >
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">
                  {exp.role} —{" "}
                  <span className="text-[#00bcd4]">{exp.company}</span>
                </h3>
                <span className="text-sm text-gray-400">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm pl-2">
                {exp.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🔹 Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-10">
          Featured <span className="text-[#00bcd4]">Projects</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto justify-center items-center">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="w-[300px] h-[250px] p-6 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-[#00bcd4]/50 cursor-pointer transition"
              onClick={() => setSelected(p)}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-[#00bcd4] mb-2">{p.client}</p>
              <p className="text-gray-400 text-sm line-clamp-3">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#161b22] rounded-2xl border border-[#30363d] max-w-2xl w-full p-6 shadow-xl relative overflow-y-auto max-h-[85vh]"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="cursor-pointer absolute top-3 right-4 text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
                <div className="w-full flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {selected.title}
                  </h3>
                  <p className="text-sm text-[#00bcd4] mb-2">
                    {selected.client}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">{selected.desc}</p>
                  <p className="text-xs text-gray-500 italic mb-4">
                    Tech Stack: {selected.tech}
                  </p>

                  <h4 className="text-lg font-semibold text-white mb-2 -ml-10">
                    Roles & Responsibilities
                  </h4>
                  <ul className="list-disc w-[90%] text-left list-inside text-gray-400 text-sm space-y-1 pl-2 ">
                    {selected.responsibilities.map((r: string, i: number) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </main>
  );
}
