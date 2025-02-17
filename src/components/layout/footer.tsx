
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900/90 to-gray-950 text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container py-12 md:py-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white/90">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/fleet" className="text-gray-300 hover:text-white transition-colors">Our Fleet</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white/90">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Private Charter</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Corporate Travel</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Luxury Experience</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white/90">Legal</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Terms of Service</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Cookie Policy</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white/90">Connect</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">+1 (555) 123-4567</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">info@skyluxe.com</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Newsletter</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} SkyLuxe Aviation. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
