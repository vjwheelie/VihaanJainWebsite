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
              I approach problems the way an engineer should—by breaking them
              down, understanding the underlying systems, and building solutions
              that actually work. Whether I&apos;m writing code, designing a
              mechanical system, or analyzing data, I&apos;m most engaged when
              I&apos;m figuring out how something functions at its core.
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
              learn, adapt, and make decisions. I&apos;m equally drawn to
              physics and mathematics—not just as academic subjects, but as
              frameworks for modeling and understanding real-world behavior.
            </p>

            <p>
              Through coursework and independent projects, I&apos;ve developed
              foundations in programming, data analysis, and engineering design.
              I&apos;m constantly looking for opportunities to apply what
              I&apos;ve learned to meaningful challenges.
            </p>

            <div className="pt-4">
              <p className="text-foreground font-medium mb-3 text-sm">
                Relevant Coursework
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {[
                  "AP Physics C: Mechanics",
                  "Programming Fundamentals",
                  "Principles of Engineering",
                  "Data Structures & Algorithms",
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
