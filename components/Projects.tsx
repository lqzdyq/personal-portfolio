"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "个人博客系统",
    description: "使用 Next.js 和 TypeScript 开发的现代化博客系统，支持 Markdown 编辑和实时预览。",
    image: "/projects/blog.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com/yourusername/blog",
    demo: "https://blog.example.com",
  },
  {
    title: "电商平台",
    description: "基于 React 和 Node.js 的全栈电商平台，包含用户认证、商品管理、购物车等功能。",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce.example.com",
  },
  {
    title: "任务管理系统",
    description: "使用 Django 和 Vue.js 开发的任务管理系统，支持团队协作和任务追踪。",
    image: "/projects/taskmanager.jpg",
    technologies: ["Django", "Vue.js", "PostgreSQL", "Redis"],
    github: "https://github.com/yourusername/taskmanager",
    demo: "https://tasks.example.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">项目展示</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            以下是我参与开发的一些项目，每个项目都展示了不同的技术栈和解决方案。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-foreground/60 hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-foreground/60 hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 