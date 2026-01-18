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
    title: "Neural Network Image Classifier",
    description:
      "Built a convolutional neural network from scratch to classify handwritten digits with 97%+ accuracy. Implemented backpropagation, gradient descent optimization, and data augmentation techniques.",
    technologies: ["Python", "NumPy", "TensorFlow", "Computer Vision"],
    details:
      "This project deepened my understanding of how neural networks learn hierarchical representations. I experimented with different architectures, activation functions, and regularization methods to improve performance. The experience reinforced the importance of understanding the mathematics behind ML algorithms rather than relying solely on pre-built libraries.",
  },
  {
    title: "Predictive Analytics Dashboard",
    description:
      "Developed a data visualization platform that analyzes trends and generates forecasts using statistical models. Features interactive charts and automated report generation.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Plotly", "SQL"],
    details:
      "Started with exploratory data analysis to identify patterns, then implemented time series forecasting models. The dashboard allows users to upload datasets and receive automated insights. Learned about the importance of data preprocessing and feature engineering in building reliable predictive models.",
  },
  {
    title: "Autonomous Decision System",
    description:
      "Created a rule-based AI system that analyzes scenarios and makes logical decisions based on defined parameters and patterns learned from historical data.",
    technologies: ["Python", "Logic Programming", "Data Analysis"],
    details:
      "Explored how AI systems can be designed to make transparent, explainable decisions. Combined symbolic AI approaches with data-driven methods to create a hybrid system that balances interpretability with performance.",
  },
];

const engineeringProjects = [
  {
    title: "VEX Robotics Competition Robot",
    problem:
      "Design and build a competitive robot capable of autonomous and driver-controlled operations for the VEX challenge.",
    constraints: [
      "18\" cube size limit",
      "Weight optimization",
      "Power management",
      "Reliability under stress",
    ],
    decisions:
      "Chose a 4-motor drivetrain configuration to balance speed and torque. Implemented a pneumatic-assisted lifting mechanism to reduce motor load. Designed custom 3D-printed brackets to reduce weight while maintaining structural integrity.",
    iterations:
      "Initial design struggled with intake consistency—redesigned the roller mechanism three times, adjusting compression and speed ratios. Final version achieved 95%+ game piece acquisition rate during testing.",
    technologies: ["C++", "CAD Design", "3D Printing", "Pneumatics"],
  },
  {
    title: "Energy-Efficient Launcher System",
    problem:
      "Build a projectile launcher that maximizes range while minimizing energy input, applying physics principles to real-world constraints.",
    constraints: [
      "Limited spring options",
      "Consistent launch angle",
      "Repeatable results",
      "Safety requirements",
    ],
    decisions:
      "Used kinematic equations to model optimal launch angles. Designed an adjustable release mechanism to fine-tune trajectory. Selected materials based on energy transfer efficiency calculations.",
    iterations:
      "First prototype had high variability in launch distance. Added guide rails and a consistent release trigger mechanism. Achieved less than 5% variance in landing position across 50 trials.",
    technologies: ["Physics Modeling", "CAD", "Prototyping", "Data Analysis"],
  },
  {
    title: "Automated Sorting Mechanism",
    problem:
      "Create a system that sorts objects by physical properties using sensors and actuators, demonstrating feedback control principles.",
    constraints: [
      "Processing speed",
      "Sensor accuracy",
      "Power budget",
      "Noise interference",
    ],
    decisions:
      "Implemented a conveyor-based system with color and weight sensors. Used a microcontroller to process sensor data and control sorting gates. Designed error-handling routines for edge cases.",
    iterations:
      "Initial sensor readings were inconsistent due to ambient light. Added shielding and calibration routines. Improved sorting accuracy from 78% to 96% through iterative refinement.",
    technologies: ["Arduino", "Sensors", "Control Systems", "C++"],
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
