import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { GithubRepo } from "@/lib/types";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      codeLink: "https://github.com/Pavanhs1808",
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration.",
      image: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "https://github.com/Pavanhs1808",
    },
    {
      title: "Finance Tracker",
      description: "A personal finance application to track expenses, income, and visualize spending habits.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["Angular", "Express", "Chart.js"],
      demoLink: "#",
      codeLink: "https://github.com/Pavanhs1808",
    },
  ];

  // Fetch GitHub repositories
  const { data: repositories = [], isLoading } = useQuery<GithubRepo[]>({
    queryKey: ["/api/github/repos"],
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Here are some of my recent projects
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={`${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.demoLink}
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      <span>View Demo</span>
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
                    >
                      <span>Code</span>
                      <Github className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repositories Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">GitHub Repositories</h3>
                <a
                  href="https://github.com/Pavanhs1808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <span>View All</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {isLoading ? (
                  Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="border border-gray-200 rounded-lg p-5 animate-pulse"
                      >
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    ))
                ) : repositories.length > 0 ? (
                  repositories.slice(0, 4).map((repo, index) => (
                    <motion.div
                      key={repo.id}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={cardVariants}
                      className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{repo.name}</h4>
                          <p className="text-sm text-gray-500 mb-3">{repo.description || "No description available"}</p>
                        </div>
                        <div className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {repo.language || "Unknown"}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="flex items-center mr-4">
                          <Star className="mr-1 h-4 w-4 text-amber-400" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center">
                          <GitFork className="mr-1 h-4 w-4" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-8 text-gray-500">
                    No repositories found
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* View more projects button */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="font-semibold gap-2"
          >
            <a
              href="https://github.com/Pavanhs1808"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More Projects
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
