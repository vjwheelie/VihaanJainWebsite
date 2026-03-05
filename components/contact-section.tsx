"use client";

import React from "react"

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatusMessage("Message sent. Thank you!");
        setFormState({ name: "", email: "", message: "" });
      } else {
        const json = await res.json().catch(() => null);
        setStatusMessage(json?.error || "Failed to send message.");
      }
    } catch (err) {
      setStatusMessage("Network error. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-6 bg-muted/30"
    >
      <div className="max-w-xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m currently seeking research & development opportunities and would welcome
              the chance to connect. Whether you have a question, want to discuss
              a project, or just want to say hello, feel free to reach out!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="bg-background"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, message: e.target.value }))
                }
                className="bg-background resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSending}>
              {isSending ? "Sending…" : "Send Message"}
            </Button>

            {statusMessage && (
              <p className="text-sm mt-2 text-center text-muted-foreground">{statusMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
