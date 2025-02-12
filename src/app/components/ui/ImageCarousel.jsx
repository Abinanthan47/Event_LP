import { motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const ImageCarousel = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const dragX = useMotionValue(0);
    // ... existing code ...
};

const Images = ({ imgIndex }) => {
    return (
        <>
            {imgs.map((imgSrc, idx) => (
                <ImageItem key={idx} imgSrc={imgSrc} imgIndex={imgIndex} idx={idx} />
            ))}
        </>
    );
};

const ImageItem = ({ imgSrc, imgIndex, idx }) => {
    return (
        <motion.div
            animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-auto w-96 h-96 shrink-0 rounded-xl overflow-hidden"
        >
            <Image
                src={imgSrc}
                alt={`Image ${idx}`}
                layout="fill"
                objectFit="cover"
            />
        </motion.div>
    );
};

const Dots = ({ imgIndex, setImgIndex }) => {
    return (
        <div className="mt-4 flex w-full justify-center gap-2">
            {imgs.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setImgIndex(idx)}
                    className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-zinc-50" : "bg-zinc-500"}`}
                />
            ))}
        </div>
    );
};

// ... existing code ... 