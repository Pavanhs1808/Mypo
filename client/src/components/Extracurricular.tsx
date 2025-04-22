import { motion } from "framer-motion";
import { Calendar, Users, Lightbulb, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Extracurricular() {
  const activities = [
    {
      id: 1,
      title: "Problem Solving Workshop",
      organization: "Solvecon Bengaluru",
      period: "April 2025",
      description: "Led a workshop on algorithmic problem-solving techniques and data structures, helping participants improve their coding skills.",
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      tags: ["DSA", "Problem Solving", "Teaching"],
    },
    {
      id: 2,
      title: "Open Source Contributor",
      organization: "GitHub",
      period: "2023 - Present",
      description: "Contributing to React-based open source projects, implementing new features and resolving critical bugs.",
      icon: <Users className="h-5 w-5 text-primary" />,
      tags: ["React", "TypeScript", "Git"],
    },
    {
      id: 3,
      title: "Tech Community Lead",
      organization: "Dev Community",
      period: "2024 - Present",
      description: "Leading a community of 500+ developers, organizing weekly code reviews and technical workshops.",
      icon: <Users className="h-5 w-5 text-primary" />,
      tags: ["Leadership", "Mentoring", "Community"],
    },
    {
      id: 4,
      title: "Hackathon Winner",
      organization: "TechFest 2024",
      period: "March 2024",
      description: "Won first place for developing a real-time collaborative code editor using Next.js and WebSocket.",
      icon: <Trophy className="h-5 w-5 text-amber-500" />,
      tags: ["Next.js", "WebSocket", "UI/UX"],
    },
  ];

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
    <section id="extracurricular" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Extracurricular Activities</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Beyond professional work, I engage in various activities that enhance my skills and network
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      {activity.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{activity.title}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{activity.organization}</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{activity.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {activity.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}