"use client";
import { AnimatePresence, motion } from "motion/react";
import GoButton from "./go-button";
import SpeedometerGauge from "./speedometer-gauge";

interface SectionProps {
  start: boolean;
  handleStart: () => void;
  speedData?: number;
  liveData?: number;
}
export default function SpeedTestComponent({
  start,
  handleStart,
  speedData,
  liveData,
}: SectionProps) {
  return (
    <AnimatePresence mode="wait">
      {start ? (
        <motion.div
          key="gauge"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SpeedometerGauge liveData={liveData} />
        </motion.div>
      ) : (
        <motion.div
          key="button"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleStart}
        >
          <GoButton downloadSpeed={speedData} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
