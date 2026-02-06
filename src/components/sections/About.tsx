"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "@/components/layout/BentoGrid";
import { CountUp } from "@/components/animations/CountUp";
import { profile, stats } from "@/data/profile";
import { fadeInUp } from "@/lib/animations";
import { MapPin, GraduationCap, Clock, Briefcase } from "lucide-react";

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono text-3xl md:text-4xl font-bold tabular-nums">
      {time || "00:00:00"}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        {/* Section heading */}
        <motion.h2
          className="text-fluid-section font-display font-bold mb-16 md:mb-24"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About
        </motion.h2>

        <BentoGrid>
          {/* Bio - Large card */}
          <BentoCard size="lg">
            <div className="flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-foreground-muted mb-4 block">
                  Who I Am
                </span>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  {profile.bio}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-foreground-muted">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-mono">{profile.title}</span>
              </div>
            </div>
          </BentoCard>

          {/* Stats */}
          <BentoCard size="md">
            <span className="text-xs font-mono uppercase tracking-widest text-foreground-muted mb-6 block">
              Numbers
            </span>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <CountUp
                    value={stat.value}
                    className="text-3xl md:text-4xl font-display font-bold text-accent"
                  />
                  <p className="text-xs md:text-sm text-foreground-muted mt-1 font-mono">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Location */}
          <BentoCard size="sm">
            <div className="flex flex-col items-start h-full justify-between">
              <MapPin className="w-5 h-5 text-accent mb-4" />
              <div>
                <p className="text-sm text-foreground-muted font-mono mb-1">Based in</p>
                <p className="text-lg font-display font-semibold">{profile.location}</p>
              </div>
            </div>
          </BentoCard>

          {/* Live Clock */}
          <BentoCard size="sm">
            <div className="flex flex-col items-start h-full justify-between">
              <Clock className="w-5 h-5 text-accent mb-4" />
              <div>
                <p className="text-sm text-foreground-muted font-mono mb-2">Local Time (IST)</p>
                <LiveClock />
              </div>
            </div>
          </BentoCard>

          {/* Education */}
          <BentoCard size="md">
            <div className="flex flex-col h-full">
              <GraduationCap className="w-5 h-5 text-accent mb-4" />
              <span className="text-xs font-mono uppercase tracking-widest text-foreground-muted mb-3">
                Education
              </span>
              <h3 className="text-lg md:text-xl font-display font-semibold mb-2">
                {profile.education.degree}
              </h3>
              <p className="text-sm text-foreground-muted mb-1">
                {profile.education.institution}
              </p>
              <div className="flex items-center gap-4 mt-auto pt-4">
                <span className="text-xs font-mono text-foreground-muted">
                  {profile.education.duration}
                </span>
                <span className="text-xs font-mono text-accent">
                  GPA: {profile.education.gpa}
                </span>
              </div>
            </div>
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  );
}
