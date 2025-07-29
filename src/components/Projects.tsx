import ProjectCard from "./ProjectCard";
import notes_img from "@/assets/notes_img.jpg";
import dashboardImage from "@/assets/project-dashboard.jpg";
import mobileImage from "@/assets/project-mobile.jpg";

const Projects = () => {
  const projects = [
     {
      
  title: "Smart Notes App",
  description:
    "A full-stack notes application with create, edit, and delete functionality. Built with React for the frontend and Node.js, Express, and MongoDB for the backend. Users can save notes persistently with a responsive UI and smooth user experience.",
  image: notes_img,
      technologies: [
        "React",
        "TypeScript",
        "MongoDB",
        "Tailwind CSS",
        "Stripe API",
        "Node.js",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Sreenivasyadav374/note-craft-suite",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Interactive data visualization dashboard with real-time charts and analytics. Features responsive design and dark mode support.",
      image: dashboardImage,
      technologies: ["React", "Chart.js", "Firebase", "Material-UI", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Mobile-first task management application with drag & drop functionality, team collaboration, and progress tracking.",
      image: mobileImage,
      technologies: [
        "React Native",
        "TypeScript",
        "SQLite",
        "Redux Toolkit",
        "React Navigation",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden"
    >
      {/* Floating Blobs for premium look */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-white/5 rounded-full blur-[150px] animate-float-slow z-0" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] bg-gray-500/5 rounded-full blur-[150px] animate-float-slow-reverse z-0" />

      {/* SVG mesh/light for subtle texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5 z-0"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.05"
          d="M0,160L40,176C80,192,160,224,240,229.3C320,235,400,213,480,202.7C560,192,640,192,720,181.3C800,171,880,149,960,160C1040,171,1120,213,1200,213.3C1280,213,1360,171,1400,149.3L1440,128L1440,0L0,0Z"
        ></path>
      </svg>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 bg-clip-text text-transparent animate-fade-in-up">
            Featured Projects
          </h2>
          <p
            className="text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Here are some of my recent projects that showcase my skills in
            frontend development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up transform transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl rounded-3xl p-6 hover:scale-[1.03] hover:shadow-2xl hover:border-white/20 transition-all duration-300 group">
                <ProjectCard {...project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
