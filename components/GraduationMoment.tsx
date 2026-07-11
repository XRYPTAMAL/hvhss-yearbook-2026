"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "./Confetti";

export default function GraduationMoment({ children }: { children: React.ReactNode }) {
  const [fired, setFired] = useState(false);

  return (
    <motion.div
      className="relative"
      onViewportEnter={() => !fired && setFired(true)}
      viewport={{ once: true, amount: 0.6 }}
    >
      {fired && <Confetti />}
      {children}
    </motion.div>
  );
}
