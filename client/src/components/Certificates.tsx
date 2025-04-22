import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export default function Certificates() {
  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Vreendaar IT Solutions Pvt Ltd",
      date: "2023-2024",
      credentialUrl: "/internship.pdf",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Agile Project management",
      issuer: "hp",
      date: "2024",
      credentialUrl: "/certificate.pdf",
      skills: ["project managment", "Scrum", "Agile","kanban"],
    },
    {
      title: "Python",
      issuer: "Udemy",
      date: "2025",
      credentialUrl: "pythoncertificate.pdf",
      skills: ["Python", "Machine learning concepts"],
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2021",
      credentialUrl: "#",
      skills: ["HTML", "CSS", "Responsive Design"],
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
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificates & Achievements</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Professional certifications and achievements in my learning journey
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{certificate.title}</h3>
                      <p className="text-sm text-gray-500">{certificate.issuer} • {certificate.date}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {certificate.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 text-sm font-medium flex items-center mt-2"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                    <a
                      href="/internship.pdf"
                      download="internship.pdf"
                      className="text-primary hover:text-primary/80 text-sm font-medium flex items-center mt-2"
                    >
                    </a>
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
