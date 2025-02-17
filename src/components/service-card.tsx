import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  index: number;
}

export default function ServiceCard({ title, description, icon: Icon, image, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card">
        <div className="relative h-48">
          <img 
            src={image} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center mb-2">
              <Icon className="h-5 w-5" />
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}