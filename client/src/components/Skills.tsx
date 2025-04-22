import { motion } from "framer-motion";
import { Code, Server, Bolt, Terminal, Monitor, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const programmingLanguages = [
    "Python",
    "Java",
    "C",
    "C++",
    "JavaScript",
    "TypeScript",
  ];
  
  const systemSkills = [
    "Windows",
    "Ethical hacking",
    "Cloud Architecture",
    "Ubuntu",
    "Android",
    "AWS",
  ];

  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Next.js",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Firebase",
    "REST API",
  ];

  const toolsSkills = [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Netlify",
    "Vercel",
  ];

  const proficiencySkills = [
    { name: "Python", value: 90 },
    { name: "Java", value: 85 },
    { name: "JavaScript", value: 80 },
    { name: "C/C++", value: 75 },
    { name: "HTML/CSS", value: 85 },
    { name: "Data structure", value: 65 }
  ];

  const skillVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
      },
    }),
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Here are the technologies and tools I'm proficient with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mr-4">
                    <Terminal className="h-5 w-5 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Programming Languages</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {programmingLanguages.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="bg-gray-100 rounded-lg p-3 flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-sm"
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={skillVariants}
                    >
                      <span className="font-medium text-gray-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Systems & Environments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                    <Monitor className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Systems & Environments</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {systemSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="bg-gray-100 rounded-lg p-3 flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-sm"
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={skillVariants}
                    >
                      <span className="font-medium text-gray-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Frontend</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {frontendSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="bg-gray-100 rounded-lg p-3 flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-sm"
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={skillVariants}
                    >
                      <span className="font-medium text-gray-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <Server className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Backend</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {backendSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="bg-gray-100 rounded-lg p-3 flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-sm"
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={skillVariants}
                    >
                      <span className="font-medium text-gray-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tools Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mr-4">
                    <Bolt className="h-5 w-5 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Tools</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {toolsSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="bg-gray-100 rounded-lg p-3 flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-sm"
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={skillVariants}
                    >
                      <span className="font-medium text-gray-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skill bars */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Proficiency Levels</h3>
            <div className="h-1 w-16 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {proficiencySkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "auto" }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800 text-lg">{skill.name}</span>
                  <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {skill.value}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
