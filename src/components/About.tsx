import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Frontend Development",
      description:
        "Expert in React, TypeScript, and modern JavaScript frameworks",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive user interfaces with attention to detail",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Responsive Design",
      description: "Building applications that work perfectly on all devices",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance",
      description:
        "Optimizing applications for speed and exceptional user experience",
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Firebase",
    "MongoDB",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-transparent relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-premium-float"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-morphing"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 bg-clip-text text-transparent animate-fade-in-up">
            About Me
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            I'm a passionate frontend developer with 2+ years of experience
            creating web applications that combine beautiful design with robust
            functionality. I love turning ideas into interactive digital
            experiences.
          </p>
        </div>

        <div className="relative overflow-visible mt-16 mb-16">
          {" "}
          {/* Increased top & bottom margin */}
          <div className="flex w-max animate-marquee gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 ease-premium hover:shadow-premium transform hover:scale-105 hover:-translate-y-2 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce-in">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div
          className="text-center animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <h3 className="text-3xl font-bold mb-12 text-foreground relative inline-block">
            Technologies
            <div
              className="w-24 h-[3px] bg-gradient-to-r from-gray-400 via-white to-gray-400 mx-auto mt-2 rounded-full 
    shadow-[0_0_8px_rgba(255,255,255,0.3)] origin-center animate-glow-line"
            />
          </h3>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-lg bg-black/30 border border-white/10 text-white shadow-inner backdrop-blur-md
          hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-500 ease-out
          cursor-default"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <span className="font-medium text-lg">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
