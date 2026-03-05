"use client";

import { useEffect, useRef, useState } from "react";

export function AboutSection() {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-semibold text-foreground">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a Junior at Howard High School who can be seen playing tennis 
              with his friends, listening to music, and exploring nature. 
              “Technially” I love solving problems in all types of domains, my favorite being AI &
              Programming, Mechanical Engineering and Finance. 
            </p>

            <p>
              My interest in{" "}
              <span className="text-foreground font-medium">
                artificial intelligence
              </span>{" "}
              and{" "}
              <span className="text-foreground font-medium">
                intelligent systems
              </span>{" "}
              comes from a fascination with how we can build machines that
              learn, adapt, and make decisions, tying in machine learning too.
              I began my journey in this sphere through my PLTW Engineering classes, 
              soon learning I loved the software side in what we built, such as 
              autonomous decision making for small cars that we built. This experience 
              compounding over three years as a series of classes proved very beneficial 
              for me, as I learned the “engineering mindset” which structured my 
              approach to problems.

            </p>

            <p>
              My curiosity in tech led me to learn and create projects like websites 
              and apps to understand the abstraction behind what we see on a screen. 
              By learning through doing, I&apos;ve developed functional skills in programming 
              and engineering design. I'm constantly looking for opportunities to apply what I've learned to meaningful challenges, most recently finding success in USACO. 

            </p>

            <div className="pt-4">
              <p className="text-foreground font-medium mb-3 text-sm">
                Relevant Coursework
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                {[
                  "PLTW Intro-to-Eng Design",
                  "PLTW Prin-of-Engineering",
                  "PLTW Comp-Int Manufacturing",
                  "AP Physics C: Mechanics",
                  "AP Computer Science A",
                  "Programming Fundamentals",
                  "Exploring Computer Science"

                ].map((course) => (
                  <li key={course} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
