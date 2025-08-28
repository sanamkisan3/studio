import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website v1",
    description: "My first personal portfolio built with HTML, CSS, and vanilla JavaScript. A great learning experience in web fundamentals.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["HTML", "CSS", "JS"],
    github: "#",
    live: "#",
    aiHint: "portfolio website"
  },
  {
    title: "AI Chatbot Interface",
    description: "A sleek user interface for an AI-powered chatbot, focusing on user experience and responsive design.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["React", "TailwindCSS"],
    github: "#",
    live: "#",
    aiHint: "chatbot interface"
  },
  {
    title: "3D Product Visualizer",
    description: "An interactive 3D model viewer for e-commerce products, built using Three.js. Explored 3D rendering on the web.",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["Three.js", "Next.js"],
    github: "#",
    live: "#",
    aiHint: "3d model"
  },
  {
    title: "Task Management App",
    description: "A simple and effective task manager to organize daily chores and school assignments. Features drag-and-drop functionality.",
    image: "https://picsum.photos/600/400?random=4",
    tags: ["Vue.js", "Firebase"],
    github: "#",
    live: "#",
    aiHint: "task manager"
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background/70">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">My <span className="text-accent">Projects</span></h2>
          <p className="text-muted-foreground mt-4 text-lg">A selection of projects I've worked on.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent transition-all duration-300 transform hover:-translate-y-2 animate-in fade-in-up duration-500"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <CardHeader className="p-0">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={project.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end gap-4">
                <Button asChild variant="ghost" size="sm">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
