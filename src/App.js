import "./App.css";
import Nav from "./Comp/Nav/Nav.jsx";
import Home from "./Comp/Main/Home.jsx";
import Edu from "./Comp/Main/Educ.jsx";
import About from "./Comp/Main/About.jsx";
import Cont from "./Comp/Main/Cont.jsx";
import Proj from "./Comp/Main/Proj.jsx";
import Skills from "./Comp/Main/skills.jsx";

export default function App() {
  return (
    <div>
      <Nav />
      <div>
        <Home />
        <About />
        <Edu />
        <Skills />
        <Proj />
        <Cont />
      </div>

      <footer className="bg-black border-t border-teal-400 py-10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="text-zinc-500 text-xs sm:text-sm text-center md:text-left">
              © 2026{" "}
              <span className="text-zinc-300 font-medium">Ibrahim Mohamed</span>
              . All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

