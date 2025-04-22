import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePlaceholder from "../assets/profile-placeholder.svg";
import TypewriterEffect from "./TypewriterEffect";

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-40 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Hi, I'm <span className="text-primary">Pavan HS</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              <TypewriterEffect 
                words={[
                  "Software Developer",
                  "Full Stack Developer",
                  "Problem Solver"
                ]}
              />
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg" 
                className="gap-2 font-semibold"
              >
                <a href="#projects">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="font-semibold"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button 
                asChild 
                variant="secondary" 
                size="lg" 
                className="gap-2 font-semibold"
              >
                <a href="#" download>
                  Download CV
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div 
              className="relative"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30"></div>
              <div className="relative bg-white p-3 rounded-full shadow-xl">
                <div className="rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden flex items-center justify-center">
                  <img 
                    src={profilePlaceholder} 
                    alt="Pavan HS" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 right-5 bg-white p-2 rounded-full shadow-lg">
                  <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <span className="font-bold">✓</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
