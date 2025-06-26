import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";

const imageModules = import.meta.glob("/public/galeria/**/*.*", {
  eager: true,
  as: "url",
});
const urls = Object.values(imageModules);

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (event.key === "ArrowRight") {
        setSelectedImage((prev) => (prev! + 1) % urls.length);
      } else if (event.key === "ArrowLeft") {
        setSelectedImage((prev) => (prev! - 1 + urls.length) % urls.length);
      } else if (event.key === "Escape") {
        setSelectedImage(null);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <div className="p-4 sm:p-6 md:p-8">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 mt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Galería de Proyectos
        </motion.h1>
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
          {urls.map((url, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={url}
                alt={`Proyecto ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={urls[selectedImage]}
                alt="Selected"
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
              >
                <X size={24} />
              </button>
              <button
                onClick={() =>
                  setSelectedImage(
                    (selectedImage - 1 + urls.length) % urls.length,
                  )
                }
                className={cn(
                  "absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors",
                  urls.length <= 1 && "hidden",
                )}
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={() =>
                  setSelectedImage((selectedImage + 1) % urls.length)
                }
                className={cn(
                  "absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors",
                  urls.length <= 1 && "hidden",
                )}
              >
                <ArrowRight size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galeria;
