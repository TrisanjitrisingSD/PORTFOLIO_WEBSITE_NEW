// import { ArrowRight, ExternalLink, Github } from "lucide-react";

// const projects = [
//   // Keep this empty for now
//   // Add your projects later here as objects
//   // {
//   //   id: 1,
//   //   title: "Project Title",
//   //   description: "Project description",
//   //   image: "/projects/project1.png",
//   //   tags: ["React", "TailwindCSS"],
//   //   demoUrl: "#",
//   //   githubUrl: "#",
//   // },
// ];

// export const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Featured <span className="text-primary"> Projects </span>
//         </h2>

//         {/* <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Here are some of my recent projects. Each project was carefully
//           crafted with attention to detail, performance, and user experience.
//         </p> */}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.length === 0 ? (
//             <p className="text-center text-muted-foreground col-span-full">
//               No projects added yet. Check back soon!
//             </p>
//           ) : (
//             projects.map((project, key) => (
//               <div
//                 key={key}
//                 className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>

//                 <div className="p-6">
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tags.map((tag, i) => (
//                       <span
//                         key={i}
//                         className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
//                   <p className="text-muted-foreground text-sm mb-4">
//                     {project.description}
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <div className="flex space-x-3">
//                       <a
//                         href={project.demoUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                       >
//                         <ExternalLink size={20} />
//                       </a>
//                       <a
//                         href={project.githubUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                       >
//                         <Github size={20} />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="text-center mt-12">
//           <a
//             className="cosmic-button w-fit flex items-center mx-auto gap-2"
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://github.com/TrisanjitrisingSD"
//           >
//             Check My Github <ArrowRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };





import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "WarniFy",
    description: "An intelligent,full-stack AI powered platform built with Gemini,React(Vite),Express and NeonDB.",
    image: "/projects/project1.png",
    tags: ["React", "Express", "Gemini", "NeonDB"],
    demoUrl: "https://warni-fy.vercel.app",
    githubUrl: "https://github.com/TrisanjitrisingSD/WarniFy",
  },
  {
    id: 2,
    title: "TrioSioGraM",
    description: "A visually rich social media app built with Appwrite, TypeScript, and React.",
    image: "/projects/project2.png",
    tags: ["React", "TypeScript", "Appwrite", "TailwindCSS"],
    demoUrl: "https://trio-sio-gra-m.vercel.app",
    githubUrl: "https://github.com/TrisanjitrisingSD/TrioSioGraM",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-start space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border px-3 py-1 rounded transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-md hover:scale-[1.05]"
                  >
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border px-3 py-1 rounded transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-md hover:scale-[1.05]"
                  >
                    Code
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TrisanjitrisingSD"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
