
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroContent = [
  {
    image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80",
    title: "Global Cargo Solutions",
    subtitle: "Connecting Businesses Worldwide"
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
    title: "Premium Air Freight",
    subtitle: "Fast, Reliable, Worldwide"
  },
  {
    image: "https://images.unsplash.com/photo-1583410179365-087162a1f0b4?auto=format&fit=crop&q=80",
    title: "Express Delivery",
    subtitle: "Time-Critical Shipments Handled with Care"
  },
  {
    image: "https://images.pexels.com/photos/9969358/pexels-photo-9969358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Reliable Service",
    subtitle: "Your Trusted Logistics Partner"
  },
  {
    image: "https://images.pexels.com/photos/9969348/pexels-photo-9969348.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "24/7 Support",
    subtitle: "Always Ready to Serve You"
  }
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${heroContent[currentImageIndex].image}')`,
          }}
        />
      </AnimatePresence>

      <div className="container relative z-10 mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl backdrop-blur-sm bg-black/30 p-8 rounded-lg"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {heroContent[currentImageIndex].title}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {heroContent[currentImageIndex].subtitle}
            </motion.p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-2">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
