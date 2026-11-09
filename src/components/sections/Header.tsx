import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] bg-white w-full ${
        isScrolled ? "border-b border-black" : ""
      }`}
    >
      <div className="w-full px-6 lg:px-0">
        <div className="container mx-auto max-w-[1152px] flex items-center justify-center h-20 w-full">
          <span className="text-2xl font-bold tracking-tight text-black lowercase">
            tono
          </span>
        </div>
      </div>
    </header>
  );
}
