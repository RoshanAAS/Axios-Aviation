import HeroSection from "@/components/hero-section";
import ServiceCard from "@/components/service-card";
import { motion } from "framer-motion";
import { Plane, Briefcase, Clock, Shield, Package, Globe, Scale, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const SERVICES = [
  {
    title: "Private Charter",
    description: "Customize your travel experience with our private charter services.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b"
  },
  {
    title: "Corporate Solutions",
    description: "Efficient and reliable aviation solutions for businesses.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad"
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock service to meet your travel needs.",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c"
  },
  {
    title: "Safety First",
    description: "Highest safety standards and certified crew members.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f"
  },
  {
    title: "Cargo Services",
    description: "Global cargo transportation solutions for businesses.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
  },
  {
    title: "International Shipping",
    description: "Worldwide shipping network with customs expertise.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144"
  },
  {
    title: "Heavy Cargo",
    description: "Specialized solutions for oversized and heavy cargo.",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b"
  },
  {
    title: "Express Delivery",
    description: "Time-critical cargo delivery services worldwide.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1580674285058-57a3a3b0ae1c"
  }
];

const STATS = [
  { number: "50+", label: "Aircraft in Fleet" },
  { number: "100+", label: "Global Destinations" },
  { number: "24/7", label: "Customer Support" },
  { number: "15+", label: "Years Experience" }
];

const CARGO_FEATURES_LIST = [
  "Temperature-controlled transportation",
  "Hazardous materials handling",
  "Door-to-door delivery services",
  "Real-time cargo tracking",
  "Custom clearance assistance",
  "Priority freight services",
  "Specialized handling solutions",
  "24/7 customer support"
];

const Testimonials = [
  {
    quote: "Exceptional service and attention to detail. Made our business travel effortless.",
    author: "John Smith",
    title: "CEO, Tech Innovations"
  },
  {
    quote: "The most reliable cargo solutions we've ever worked with. Truly professional.",
    author: "Sarah Johnson",
    title: "Logistics Manager, Global Trade Co"
  },
  {
    quote: "Luxury redefined. Every flight is a perfect blend of comfort and efficiency.",
    author: "Michael Chen",
    title: "Executive Director, Investment Corp"
  }
];

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

 <section className="py-16 md:py-24 container">
  {/* Animated Heading */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
      Our Services
    </h2>
    <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
      From private charter flights to comprehensive cargo solutions, we deliver excellence in aviation services.
    </p>
  </motion.div>

  {/* Service Cards Grid */}
  <motion.div
    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
      },
    }}
  >
    {SERVICES.map((service, index) => (
      <motion.div
        key={service.title}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        className="flex flex-col items-center justify-center rounded-lg bg-card shadow-lg p-6 min-h-[300px] hover:shadow-xl transition-all"
      >
        <ServiceCard {...service} index={index} />
      </motion.div>
    ))}
  </motion.div>
</section>
      {/* Global Cargo Solutions Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted to-primary/10 animate-gradient-slow"></div>
  <div className="absolute inset-0 bg-grid-white/10"></div>
  
  <div className="container max-w-[90rem] mx-auto px-6 lg:px-10 relative z-10">
    <div className="grid md:grid-cols-[1.3fr,1fr] gap-12 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Global Cargo Solutions
        </h2>
        <p className="text-lg text-muted-foreground">
          We specialize in efficient cargo transportation across the globe, handling everything from time-sensitive deliveries to oversized freight with unmatched precision and care.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
          {CARGO_FEATURES_LIST.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <Button size="lg">Get a Quote</Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative w-full h-[500px]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
          alt="Global Cargo Fleet"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </motion.div>
    </div>

    {/* Image + Text Sections */}
    <div className="space-y-20 lg:space-y-24 mt-16">
      {[
        {
          title: "Global Reach",
          description:
            "Our modern cargo fleet ensures reliable delivery across continents, with state-of-the-art aircraft designed for efficient cargo transport.",
          image:
            "https://images.unsplash.com/photo-1542296332-2e4473faf563",
          reverse: false,
        },
        {
          title: "Express Delivery",
          description:
            "Time-critical shipments handled with precision and care, utilizing our dedicated fleet of cargo aircraft for fastest delivery times.",
          image:
            "https://images.unsplash.com/photo-1542296332-2e4473faf563",
          reverse: true,
        },
        {
          title: "Heavy Cargo Solutions",
          description:
            "Specialized aircraft and equipment for transporting heavy and oversized cargo, backed by expert logistics planning and execution.",
          image:
            "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b",
          reverse: false,
        },
      ].map(({ title, description, image, reverse }, index) => (
        <motion.div
          key={index}
          className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-[500px]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">{title}</h3>
            <p className="text-lg text-muted-foreground">{description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Exceptional service and attention to detail. Made our business logistics seamless.",
                author: "John Smith",
                title: "CEO, Tech Innovations",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
              },
              {
                quote: "The most reliable cargo solutions we've ever worked with. Truly professional.",
                author: "Sarah Johnson",
                title: "Logistics Manager, Global Trade Co",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
              },
              {
                quote: "Outstanding global reach and efficient handling of our cargo needs.",
                author: "Michael Chen",
                title: "Executive Director, Investment Corp",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <motion.img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}