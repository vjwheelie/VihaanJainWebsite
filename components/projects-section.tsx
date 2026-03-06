"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const codingProjects = [
  {
    title: "SalesPatriot Defense Contract Procurement Mock-Up",
    description:
      "Built a prototype system that automates parts of the federal contract proposal workflow using AI.",
    technologies: ["Python", "LLM APIs", "Web Scraping", "Dashboard UI"],
    details:
      "As part of an internship project with the defense tech startup SalesPatriot (YC W25), my team developed a prototype that automated several steps of the federal procurement workflow. The system scraped Requests for Quote (RFQs) from SAM.gov and DIBBS, extracted key contract requirements using LLMs, and generated draft proposal summaries for human review. We also designed verification and logging features so each AI output could be traced back to the model and prompt used. The final prototype demonstrated a full pipeline from contract discovery to AI-assisted proposal generation, with a human-in-the-loop review layer for reliability.",
  },
  {
    title: "LLM Reliability Experiment for Defense Procurement (SalesPatriot)",
    description:
      "Built a benchmarking system to evaluate how reliably large language models extract contract data from real defense procurement documents.",
    technologies: ["Python", "LangChain", "OpenAI API", "Anthropic API"],
    details:
      "To better understand AI reliability in high-stakes environments, I built a benchmarking script that tested how well LLMs could extract structured data from real DIBBS Requests for Quote. The system converted RFQ PDFs into model-compatible inputs and evaluated GPT-4o-mini and Claude 3.5 Sonnet on fields such as NSN, quantity, delivery time, and delivery address. Outputs were compared against manually verified ground-truth data to detect hallucinations objectively. Each run logged the model, prompt structure, and results.",
  },
  {
    title: "Computer Vision Image Classification Model",
    description:
      "Trained a computer vision model to classify images with high accuracy using machine learning techniques and feature extraction.",
    technologies: ["Python", "Scikit-learn", "OpenCV", "NumPy", "Computer Vision"],
    details:
      "During the Mark Cuban Foundation AI Bootcamp, I began experimenting with computer vision by building an image classification model in Python. I developed a pipeline that processed image data using OpenCV for preprocessing and feature extraction, then trained a classification model using Scikit-learn. I experimented with techniques such as dimensionality reduction, dataset normalization, and model tuning to improve prediction accuracy. Through this project I learned how raw image data is transformed into numerical features that machine learning models can interpret. It also introduced me to core concepts like training/testing splits, overfitting, and model evaluation metrics, which are fundamental when building reliable computer vision systems.",
  },
];

const engineeringProjects = [
  {
    title: "Autonomous Guided Vehicle (AGV)",
    problem:
      "Design and program a robotic vehicle capable of autonomously navigating a twisting obstacle course using sensor feedback and control algorithms.",
    constraints: [
      "Limited onboard sensors",
      "Tight turning radius",
      "Motor synchronization",
      "Course variability",
    ],
    decisions:
      "Implemented sensor-based navigation logic to detect boundaries and adjust steering in real time. Optimized drivetrain configuration for stability during turns and consistent speed across the course.",
    iterations:
      "Early prototypes frequently drifted off course during sharp turns. Refined steering control and sensor thresholds, improving navigation accuracy and completing the full course reliably.",
    technologies: ["VEX Robotics", "C++", "Fusion 360", "Sensor Integration"],
  },
  {
    title: "Material Sorting System",
    problem:
      "Build an automated mechanism capable of identifying and sorting marbles made of plastic, wood, and steel using physical property detection.",
    constraints: [
      "Sensor precision",
      "Real-time processing",
      "Mechanical reliability",
      "Material similarity",
    ],
    decisions:
      "Integrated weight thresholds and optical sensing to classify materials. Programmed microcontroller logic to trigger mechanical gates based on detected properties.",
    iterations:
      "Initial sensor readings produced inconsistent classifications. Introduced calibration routines and improved sensor shielding, increasing sorting accuracy and consistency.",
    technologies: ["Arduino", "Sensors", "Embedded Programming", "Control Systems"],
  },
  {
    title: "High-Torque Mini Tractor",
    problem:
      "Engineer a compact robotic vehicle capable of maximizing torque output to pull heavy loads relative to its size.",
    constraints: [
      "Small chassis size",
      "Motor power limitations",
      "Gear friction losses",
      "Structural durability",
    ],
    decisions:
      "Designed a drivetrain with an 11.65:1 gear ratio to maximize torque output. Balanced gear reduction with drivetrain efficiency to maintain stable motion under load.",
    iterations:
      "Early versions stalled under heavy loads due to inefficient torque transfer. Adjusted gear alignment and drivetrain configuration, achieving a calculated output torque of 18.04 ft-lbs.",
    technologies: ["Fusion 360", "Mechanical Design", "Gear Systems", "Prototyping"],
  },
];

function CodingProjectCard({
  project,
}: {
  project: (typeof codingProjects)[0];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="h-full border border-border hover:border-primary/40 transition-colors duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-foreground">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
            {isOpen ? "Hide" : "View"} Details
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-3">
            <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-3">
              {project.details}
            </p>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

function EngineeringProjectCard({
  project,
}: {
  project: (typeof engineeringProjects)[0];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="h-full border border-border hover:border-primary/40 transition-colors duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-foreground">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">
            Problem
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
            {isOpen ? "Hide" : "View"} Case Study
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-3 space-y-4">
            <div>
              <p className="text-xs font-medium text-foreground mb-2">
                Design Constraints
              </p>
              <ul className="grid grid-cols-2 gap-1">
                {project.constraints.map((constraint) => (
                  <li
                    key={constraint}
                    className="text-xs text-muted-foreground flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/60" />
                    {constraint}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-foreground mb-1">
                Engineering Decisions
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.decisions}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-foreground mb-1">
                Iteration & Testing
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.iterations}
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Coding / AI / ML Projects */}
          <div className="mb-16">
            <h3 className="text-lg font-medium text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Coding / AI / ML
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {codingProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CodingProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Projects */}
          <div>
            <h3 className="text-lg font-medium text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Engineering Projects
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {engineeringProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <EngineeringProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
