import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Particles from "@/components/ui/Particles"; // Update the path if needed

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={800}
          particleSpread={10}
          speed={0.02}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
