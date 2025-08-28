"use client";

import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from 'next/link';

const Avatar3D = dynamic(() => import('@/components/avatar-3d').then(mod => mod.Avatar3D), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-muted/20 rounded-lg animate-pulse" />
});

export function HeroSection() {
  const introTexts = [
    { text: "Sanam Kisan" },
    { text: "Class 11" },
    { text: "Roll No: 13" },
    { text: "Kalika Chowk" },
  ];

  return (
    <section id="home" className="relative w-full h-[calc(100vh-3.5rem)] overflow-hidden">
       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      <div className="container relative grid md:grid-cols-2 items-center h-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-start text-left space-y-6">
          <div className="space-y-4">
             <h1 className="text-5xl md:text-7xl font-bold font-headline animate-in fade-in slide-in-from-bottom-12 duration-1000">
                Hi, I&apos;m <span className="text-accent">Sanam</span>.
             </h1>
             <p className="text-xl md:text-2xl text-muted-foreground font-headline animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200">
                A Creative Developer & Student
             </p>
          </div>
          
          <div className="space-y-2">
            {introTexts.map((item, index) => (
                <p 
                    key={index} 
                    className="text-lg text-foreground/80 animate-in fade-in slide-in-from-bottom-20 duration-1000"
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                    {item.text}
                </p>
            ))}
          </div>

          <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="#projects">My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
                <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full h-full hidden md:flex items-center justify-center">
            <Avatar3D />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
}

// Helper for bg pattern
const BgPattern = () => (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full fill-background/5 stroke-foreground/5 [mask-image:radial-gradient(400px_at_center,white,transparent)]"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x="50%"
          y="50%"
          patternTransform="translate(-20 -20)"
        >
          <path d="M.5 20V.5H20" fill="none"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)"></rect>
    </svg>
)
