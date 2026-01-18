"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-16"
    >
      <div className="max-w-3xl mx-auto w-full">
        <p
          className={`text-primary font-mono text-sm mb-4 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Hello, my name is
        </p>

        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3 tracking-tight transition-all duration-700 delay-100 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-balance">Vihaan Jain</span>
        </h1>

        <h2
          className={`text-xl sm:text-2xl font-medium text-muted-foreground mb-6 transition-all duration-700 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Student Engineer | AI & Systems Thinking
        </h2>

        <p
          className={`text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed mb-8 transition-all duration-700 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          I build projects to understand how things work—from neural networks to
          mechanical systems. Driven by curiosity and analytical thinking, I
          apply physics, math, and code to solve real problems and explore ideas
          in artificial intelligence and engineering.
        </p>

        <div
          className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <Button asChild size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
