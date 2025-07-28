import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import RotatingText from "./ui/rotatingtext";
import { Github, Linkedin, Mail } from "lucide-react";
import TiltedCard from "./ui/TitledCard"; // ✅ Your card component

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
      {/* Floating Effects */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-white/5 rounded-full blur-[150px] animate-float-slow z-0" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] bg-gray-500/5 rounded-full blur-[150px] animate-float-slow-reverse z-0" />
      <svg className="absolute inset-0 w-full h-full opacity-5 z-0" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#ffffff" fillOpacity="0.05" d="M0,160L40,176C80,192,160,224..." />
      </svg>

      {/* Layout Container */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* TiltedCard Left - 30% */}
        <div className="w-full md:w-[40%] flex justify-center mb-8 md:mb-0">
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Sreenivas Yadav - Portfolio"
            //captionText="Sreenivas Yadav - Portfolio"
            containerHeight="400px"
            containerWidth="600px"
            imageHeight="400px"
            imageWidth="400px"
            rotateAmplitude={18}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text">Sreenivas Yadav</p>}
          />
        </div>

        {/* Main Hero Content - 70% */}
        <div className="w-full md:w-[70%] text-center md:text-left">
          <div
            className="flex flex-wrap justify-center md:justify-start items-center text-5xl md:text-7xl font-bold mb-6 gap-3"
            style={{
              transform: `scale(${titleScale}) translateY(${titleTranslateY}px)`,
              opacity: titleOpacity,
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 bg-clip-text text-transparent">
              Frontend
            </span>
            <RotatingText
              texts={["Developer", "Innovator", "Designer"]}
              mainClassName="w-96 flex items-center justify-center px-2 sm:px-2 md:px-3 bg-gray-300 dark:bg-gray-800 text-black dark:text-white overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg text-center"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </div>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
            style={{
              opacity: Math.max(0, descOpacity),
              transform: `translateY(${descTranslateY}px)`,
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          >
            I create beautiful, responsive web applications with modern technologies. Passionate about clean code and exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-12 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground shadow-premium hover:shadow-hover transition-all duration-500 ease-premium transform hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>

            <a href="/Sreenivas_Yadav_Resume.pdf" download target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary transition-all duration-500 ease-premium transform hover:scale-105 hover:border-primary/50 hover:shadow-glow"
              >
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex justify-start space-x-6 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href={
                  i === 0
                    ? "https://github.com/Sreenivasyadav374"
                    : i === 1
                    ? "https://www.linkedin.com/in/srinivas-yadav-b6a30527a/"
                    : "mailto:srinivaspa374@gmail.com"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-border hover:bg-secondary transition-all duration-500 ease-premium transform hover:scale-105 hover:border-primary/50 hover:shadow-glow"
                >
                  <Icon size={24} />
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
