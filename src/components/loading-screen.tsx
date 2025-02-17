
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center">
      <div className="relative w-32 h-32">
        <motion.div
          className="absolute w-full h-full"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="relative w-full h-full">
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
                style={{ transform: 'rotate(90deg)' }}
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
        <motion.div
          className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}
