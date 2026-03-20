import { motion } from 'motion/react';

interface LoadingScreenProps {
  key?: string;
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <svg width="120" height="120" viewBox="0 0 120 120">
        <motion.rect
          x="10"
          y="10"
          width="100"
          height="100"
          fill="none"
          stroke="#ffffff"
          strokeWidth="6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={() => {
            setTimeout(onComplete, 400);
          }}
        />
      </svg>
    </motion.div>
  );
}
