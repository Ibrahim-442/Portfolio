import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 180;
      let currentSection = "Home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const sectionTop =
            element.getBoundingClientRect().top + window.scrollY;

          if (scrollPosition >= sectionTop) {
            currentSection = section;
          }
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e, section) => {
    e.preventDefault();

    const element = document.getElementById(section);

    if (element) {
      setActive(section);
      setMenuOpen(false);

      const offset = 90;

      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-zinc-800/80 transition-all duration-300 ${
        scrolled ? "scale-[0.98]" : "scale-100"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a
          href="#Home"
          onClick={(e) => handleClick(e, "Home")}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <span className="special-font text-3xl font-bold font-display tracking-tight text-white">
            <span className="inline-block text-white group-hover:text-gray-400 transition-all duration-300 group-hover:-translate-y-1">
              Ibrahim
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-1 bg-black/40 border border-zinc-800/80 backdrop-blur-md text-white rounded-full px-5 py-1.5 shadow-inner">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleClick(e, section)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                active === section
                  ? "bg-teal-400 text-black shadow-lg shadow-teal-400/20"
                  : "text-zinc-300 hover:text-white hover:bg-zinc-800/70"
              }`}
            >
              {section}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/70 text-zinc-300 hover:text-teal-400 hover:border-teal-400/50 transition-all duration-300"
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5">
          <div className="flex flex-col gap-2 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-3 shadow-2xl">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleClick(e, section)}
                className={`flex items-center justify-between px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  active === section
                    ? "bg-teal-400 text-black"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-800"
                }`}
              >
                <span>{section}</span>

                {active === section && (
                  <span className="w-2 h-2 rounded-full bg-black" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr
        className={`mx-auto border-0 h-[1px] bg-gray-500 transition-all duration-500 ease-out ${
          scrolled
            ? "w-full opacity-100"
            : "w-0 opacity-0"
        }`}
      />
    </nav>
  );
}