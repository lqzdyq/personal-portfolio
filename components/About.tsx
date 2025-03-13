"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Server } from "lucide-react";

const skills = [
  {
    name: "前端开发",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    icon: Globe,
  },
  {
    name: "后端开发",
    description: "Node.js, Express, Python, Django",
    icon: Server,
  },
  {
    name: "数据库",
    description: "MySQL, MongoDB, Redis",
    icon: Database,
  },
  {
    name: "其他技能",
    description: "Git, Docker, AWS, CI/CD",
    icon: Code2,
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">关于我</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            我是一名充满热情的全栈开发工程师，专注于创建优雅且高效的web应用。
            在重庆移通学院计算机科学与技术专业学习期间，我培养了扎实的编程基础和解决问题的能力。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <skill.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {skill.name}
              </h3>
              <p className="text-foreground/60">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 