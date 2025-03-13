"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 flex h-full flex-col items-center justify-center text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          你好，我是
          <span className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            {" "}
            王嫖
          </span>
        </h1>
        <p className="mt-4 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          99岁全栈开发工程师 / 重庆移通学院计算机科学与技术专业
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="#projects">查看项目</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">联系我</Link>
          </Button>
        </div>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8"
        >
          <Link href="#about">
            <ArrowDown className="h-6 w-6" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}