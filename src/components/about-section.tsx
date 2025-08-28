import { BrainCircuit, Code, Rocket, School } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
    { icon: <Code className="w-8 h-8 text-accent" />, name: "Web Development" },
    { icon: <BrainCircuit className="w-8 h-8 text-accent" />, name: "Problem Solving" },
    { icon: <School className="w-8 h-8 text-accent" />, name: "Quick Learner" },
    { icon: <Rocket className="w-8 h-8 text-accent" />, name: "Creative Projects" },
];

export function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 bg-background">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">About <span className="text-accent">Me</span></h2>
                    <p className="text-muted-foreground mt-4 text-lg">A glimpse into my world, skills, and passion.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-foreground/90">
                        <p className="animate-in fade-in slide-in-from-left duration-500">
                            Hello! I'm Sanam Kisan, a passionate and curious student currently in class 11. My journey into the world of programming started with a simple "Hello, World!" and has since blossomed into a full-fledged passion for building creative and functional web applications.
                        </p>
                        <p className="animate-in fade-in slide-in-from-left duration-500 delay-200">
                            I thrive on challenges and am constantly exploring new technologies to expand my skillset. Whether it's designing a responsive UI, tinkering with 3D graphics, or architecting a backend, I find joy in every step of the development process.
                        </p>
                         <p className="animate-in fade-in slide-in-from-left duration-500 delay-400">
                            Beyond coding, I'm driven by a desire to learn and grow. My goal is to leverage technology to create impactful solutions and contribute to innovative projects.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-right duration-500">
                        {skills.map((skill, index) => (
                             <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent transition-all duration-300">
                                <CardHeader className="flex flex-col items-center justify-center text-center p-4">
                                     {skill.icon}
                                    <CardTitle className="font-headline text-xl mt-2">{skill.name}</CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
