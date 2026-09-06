import React, { useRef, useState } from "react";
import Skillsicon from "./skillsicon";
const skillsData = [
  {
    name: "Languages & Tools",
    icon: "bi bi-code-slash",
    skills: [
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/cplusplus/default.svg" },
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF" },
    ],
  },
  {
    name: "Frontend",
    icon: "bi bi-window",
    skills: [
      { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", logo: "https://cdn.simpleicons.org/css/1572B6" },
      {
        name: "JavaScript",
        logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      {
        name: "TypeScript",
        logo: "https://cdn.simpleicons.org/typescript/3178C6",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      {
        name: "Bootstrap",
        logo: "https://cdn.simpleicons.org/bootstrap/7952B3",
      },
    ],
  },
  {
    name: "Backend & Database",
    icon: "bi bi-hdd-rack",
    skills: [
      { name: "ASP.NET", logo: "https://cdn.simpleicons.org/dotnet/512BD4" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
    ],
  },
];
function SkillCategory({ category }) {
  const skillsRef = useRef(null);
  const scrollSkills = (direction) => {
    if (!skillsRef.current) return;
    skillsRef.current.scrollBy({
      left: direction === "right" ? 400 : -400,
      behavior: "smooth",
    });
  };
  return (
    <div className="skills-category">
      {" "}
      <div className="category-header ">
        {" "}
        <div className="category-title">
          {" "}
          <i className={`${category.icon} category-icon`}></i>
          <span>{category.name}</span>{" "}
          <span className="category-count">
            {" "}
            {category.skills.length}{" "}
          </span>{" "}
        </div>{" "}
        <div className="skills-arrows">
          {" "}
          <button
            type="button"
            className="skills-arrow"
            onClick={() => scrollSkills("left")}
            aria-label="Previous skills"
          >
            {" "}
            <span className="material-symbols-outlined">
              <i class="bi bi-arrow-left"></i>
            </span>{" "}
          </button>{" "}
          <button
            type="button"
            className="skills-arrow"
            onClick={() => scrollSkills("right")}
            aria-label="Next skills"
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>{" "}
      </div>{" "}
      <div ref={skillsRef} className="skills-horizontal">
        {" "}
        {category.skills.map((skill) => (
          <div className="skill-card skill-card-fixed" key={skill.name}>
            {" "}
            <div className="skill-logo-container">
              {" "}
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="skill-logo"
              />{" "}
            </div>{" "}
            <span className="skill-name"> {skill.name} </span>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    { name: "All", icon: "bi bi-stack" },
    { name: "Languages & Tools", icon: "bi bi-code-slash" },
    { name: "Frontend", icon: "bi bi-window" },
    { name: "Backend & Database", icon: "bi bi-hdd-rack" },
  ];
  const displayedCategories =
    activeFilter === "All"
      ? skillsData
      : skillsData.filter((category) => category.name === activeFilter);
  return (
    <section className="skills-section" id="Skills">
      {" "}
      <div className="skills-container">
        {" "}
        <div className="skills-header">
          {" "}
          <span className="skills-label"> Skills </span>{" "}
          <h2 className="skills-title"> Skills & Tools </h2>{" "}
          <p className="skills-subtitle">
            {" "}
            Technologies I use in my projects and topics I am currently
            learning.{" "}
          </p>{" "}
          <div className="skills-filters">
            {" "}
            {filters.map((filter) => (
              <button
                key={filter.name}
                className={`skills-filter ${activeFilter === filter.name ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.name)}
              >
                {" "}
                <span className="material-symbols-outlined">
                  {" "}
                  <i className={`  ${filter.icon}`}></i>
                </span>{" "}
                {filter.name}{" "}
              </button>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        <div className="skills-categories">
          {" "}
          {displayedCategories.map((category) => (
            <SkillCategory key={category.name} category={category} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
      <div className="skills-icons-wrapper">
        {" "}
        <Skillsicon />{" "}
      </div>{" "}
    </section>
  );
}
