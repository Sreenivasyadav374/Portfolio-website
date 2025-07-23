import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxScroll = 300;
  const progress = Math.min(scrollY / maxScroll, 1);

  const titleScale = 1 + progress * 0.5;
  const titleOpacity = 1 - progress;
  const titleTranslateY = progress * 100;

  const descOpacity = 1 - progress * 1.2;
  const descTranslateY = progress * 20;

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Floating Blobs */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-white/5 rounded-full blur-[150px] animate-float-slow z-0" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] bg-gray-500/5 rounded-full blur-[150px] animate-float-slow-reverse z-0" />

      {/* Optional SVG mesh/light */}
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

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 bg-clip-text text-transparent"
            style={{
              transform: `scale(${titleScale}) translateY(${titleTranslateY}px)`,
              opacity: titleOpacity,
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          >
            Frontend Developer
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            style={{
              opacity: Math.max(0, descOpacity),
              transform: `translateY(${descTranslateY}px)`,
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          >
            I create beautiful, responsive web applications with modern
            technologies. Passionate about clean code and exceptional user
            experiences.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground shadow-premium hover:shadow-hover transition-all duration-500 ease-premium transform hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary transition-all duration-500 ease-premium transform hover:scale-105 hover:border-primary/50 hover:shadow-glow"
            >
              Download Resume
            </Button>
          </div>

          {/* Social Icons */}
          <div
            className="flex justify-center space-x-6 animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <Button
                key={i}
                variant="outline"
                size="icon"
                className="border-border hover:bg-secondary transition-all duration-500 ease-premium transform hover:scale-105 hover:border-primary/50 hover:shadow-glow"
              >
                <Icon size={24} />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
