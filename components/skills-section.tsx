"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Programming & Software",
    skills: ["Python", "C++", "JavaScript", "SQL", "Git", "Linux"],
  },
  {
    title: "Engineering & Physics",
    skills: [
      "CAD Design",
      "3D Printing",
      "Circuit Design",
      "Mechanics",
      "Kinematics",
      "Energy Systems",
    ],
  },
  {
    title: "Data, AI & Systems",
    skills: [
      "Machine Learning",
      "Neural Networks",
      "Data Analysis",
      "Statistical Modeling",
      "Computer Vision",
      "Control Systems",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Arduino",
      "VEX Robotics",
      "MATLAB",
    ],
  },
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-semibold text-foreground">Skills</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-sm font-medium text-foreground mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
