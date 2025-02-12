'use client';
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const imgs = [
  '/ipl.webp',
  '/amongus.jpg',
  '/connection.jpg',
];

const AUTO_DELAY = 5000; // Auto-slide delay (5 sec)
const SPRING_OPTIONS = { type: "spring", mass: 3, stiffness: 400, damping: 50 };

const ImageCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      if (dragX.get() === 0) {
        setImgIndex((prevIndex) => (prevIndex === imgs.length - 1 ? 0 : prevIndex + 1));
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, [dragX]);

  return (
    <div className="relative flex justify-center items-center h-[70vh] md:h-[80vh] overflow-hidden bg-black">
      {/* Background Text Layer */}
      <div className="absolute inset-0 flex top-[65%]  justify-center px-5 text-white text-[6vw] md:text-[6vw] font-extrabold uppercase tracking-wide z-0">
        {imgIndex === 0 && "IPL AUCTION"}
        {imgIndex === 1 && "AMONG US"}
        {imgIndex === 2 && "CONNECTIONS"}
      </div>

      {/* Foreground Image Layer */}
      <motion.div
        key={imgIndex}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute w-[80vw] max-w-[500px] h-auto rounded-xl overflow-hidden shadow-xl"
      >
        <motion.img
          src={imgs[imgIndex]}
          alt="Carousel Image"
          className="w-full h-full mix-blend-exclusion opacity-90"
        />
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
