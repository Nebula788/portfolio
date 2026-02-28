"use client";

import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Navbar from "./(components)/navbar";
import Hero from "./(components)/hero";
import About from "./(components)/about";
import Skills from "./(components)/skills";
import Experience from "./(components)/experience";
import Projects from "./(components)/projects";

import Contact from "./(components)/contact";
import Footer from "./(components)/footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-800 via-slate-900 to-blue-900 text-foreground">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
