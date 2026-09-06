export default function Proj() {
  const projects = [
    {
      title: " E-Commerce",
      description:
        "A responsive Apple-inspired e-commerce website built with React, featuring product browsing, filtering, product details, and a modern shopping experience.",
      image: "/Proj/e-comm.png",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/Ibrahim-442/E-commerce_React",
      demo: "https://e-commerce-react-project-blush.vercel.app/",
    },
    {
      title: "Task Management App",
      description:
        "A modern task management application for creating, organizing, filtering, and tracking tasks with a clean and responsive interface.",
      image: "/Proj/ToDo.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Ibrahim-442/Task-Management-App",
      demo: "https://to-do-list-react-pink.vercel.app/",
    },
   
 
   
  ];

  return (
    <section
      id="Projects"
      className="py-20 bg-black text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6">

      
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400">
            MY WORK
          </span>

          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold font-display tracking-tight">
            Featured Projects
          </h2>

          <p className="mt-5 text-zinc-400 text-base sm:text-lg leading-relaxed">
            A selection of projects I have built while learning and improving
            my software development skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-zinc-900/60 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-teal-400/50"
            >

              <div className="relative h-52 overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-6 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-teal-400 text-black font-bold text-sm py-3 rounded-xl transition-all duration-300 hover:bg-zinc-200 hover:-translate-y-0.5"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-zinc-700 text-white font-bold text-sm py-3 rounded-xl transition-all duration-300 hover:border-teal-400 hover:text-teal-400 hover:-translate-y-0.5"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}