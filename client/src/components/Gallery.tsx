import { motion } from "framer-motion";
import { Image as ImageIcon, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

export default function Gallery() {
  // Sample gallery images data
  const images = [
    {
      id: 1,
      title: "Web Development Workshop",
      category: "Events",
      thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      fullImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "Team Collaboration",
      category: "Teamwork",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      fullImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "Code Review Session",
      category: "Development",
      thumbnail: "https://images.unsplash.com/photo-1581092921461-39b10bc4bf78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      fullImage: "https://images.unsplash.com/photo-1581092921461-39b10bc4bf78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      title: "Hackathon Project",
      category: "Events",
      thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      fullImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 5,
      title: "Project Presentation",
      category: "Events",
      thumbnail: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      fullImage: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 6,
      title: "Design Workshop",
      category: "Learning",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      fullImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            A visual journey through my professional experiences and events
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={galleryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <motion.div
                  variants={itemVariants}
                  className="cursor-pointer group"
                >
                  <Card className="overflow-hidden h-64 relative">
                    <img
                      src={image.thumbnail}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="text-white">
                        <h3 className="font-semibold text-lg">{image.title}</h3>
                        <p className="text-sm text-gray-200">{image.category}</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                        <ZoomIn className="h-5 w-5 text-gray-800" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 overflow-hidden">
                <div className="relative">
                  <img
                    src={image.fullImage}
                    alt={image.title}
                    className="w-full object-contain max-h-[80vh]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.category}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </section>
  );
}