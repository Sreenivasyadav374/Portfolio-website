import { Home, FolderArchive, User, Settings } from "lucide-react";
import Dock from "./ui/Dock";
import { useCallback } from "react";

const Navbar = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const items = [
    { icon: <Home size={22} />, label: "Home", onClick: () => scrollToSection("home") },
    { icon: <FolderArchive size={22} />, label: "Projects", onClick: () => scrollToSection("projects") },
    { icon: <User size={22} />, label: "About", onClick: () => scrollToSection("about") },
    { icon: <Settings size={22} />, label: "Contact", onClick: () => scrollToSection("contact") },
  ];

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50">
  <div className="relative h-[100px] w-[400px] flex justify-center items-start group">
    <div className="opacity-30 group-hover:opacity-100 transition-opacity duration-300">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  </div>
</div>

  );
};

export default Navbar;
