import { motion } from "framer-motion";
import { User, Laptop, GraduationCap, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
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

  const aboutCards = [
    {
      title: "Who I Am",
      icon: <User className="h-5 w-5 text-primary" />,
      content:
        "I'm a software developer with expertise in web technologies. I enjoy building applications that solve real-world problems and provide great user experiences. I'm constantly learning and exploring new technologies to expand my skillset.",
    },
    {
      title: "What I Do",
      icon: <Laptop className="h-5 w-5 text-secondary" />,
      content:
        "I develop responsive web applications with modern frameworks and libraries. My focus is on creating clean, efficient code that delivers exceptional user experiences. I specialize in front-end development but also have experience with back-end technologies.",
    },
    {
      title: "Education",
      icon: <GraduationCap className="h-5 w-5 text-amber-500" />,
      content:
        "I have a strong educational background in computer science, with a focus on software development. I continuously enhance my skills through online courses, workshops, and industry certifications.",
    },
    {
      title: "My Goals",
      icon: <Rocket className="h-5 w-5 text-primary" />,
      content:
        "I aim to create impactful digital solutions that enhance user experiences and solve real-world problems. I'm passionate about staying at the forefront of technology trends and contributing to innovative projects.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            I'm a passionate developer with a focus on creating responsive and user-friendly web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{card.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
