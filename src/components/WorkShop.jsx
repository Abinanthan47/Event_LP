'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';


const features = [
    { 
        step: 'Full Stack Development', 
        content: 'Master frontend and backend technologies to build scalable web applications.', 
        image: 'https://ideogram.ai/assets/image/lossless/response/TiyvC_ROTAydBD5BqWTdsw'
    },
    { 
        step: 'VLSI', 
        content: 'Explore Very Large Scale Integration (VLSI) design and semiconductor technologies.', 
        image: 'https://ideogram.ai/assets/progressive-image/balanced/response/Aa8TqwhtRCKHLsOVXVjt6Q'
    },
    { 
        step: 'Machine Learning', 
        content: 'Learn how to train models, analyze data, and deploy AI-powered applications.', 
        image: 'https://ideogram.ai/assets/progressive-image/balanced/response/aNQvITSQTPqBeCuP35maeQ'
    },
    { 
        step: 'Matlab', 
        content: 'Learn how to Use Matlab for  computing, simulations, and data visualization.', 
        image: 'https://ideogram.ai/assets/progressive-image/balanced/response/l0fV8o6jRb-XyntiAYND6g'
    },
];


const Workshops = () => {
    const [currentFeature, setCurrentFeature] = useState(0);
    const [progress, setProgress] = useState(0);
    const [, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress((prev) => prev + 3.33);
            } else {
                setCurrentFeature((prev) => (prev + 1) % features.length);
                setProgress(0);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [progress]);



    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-10 flex items-center justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-10 md:mb-18 text-center text-gray-100">WORKSHOPS</h2>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
                    {/* Features List */}
                    <div className="order-2 md:order-1 space-y-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-6 md:gap-8"
                                initial={{ opacity: 0.3 }}
                                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${index === currentFeature ? 'bg-red-500 scale-110' : 'bg-gray-500'
                                        } border-2 ${index === currentFeature ? 'border-red-400' : 'border-gray-400'
                                        }`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {index <= currentFeature ? (
                                        <span className="text-white text-lg font-medium">✓</span>
                                    ) : (
                                        <span className="text-white text-lg font-semibold">{index + 1}</span>
                                    )}
                                </motion.div>

                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-medium tracking-wider text-gray-200">{feature.step}</h3>
                                    <p className="text-sm md:text-md font-300 text-gray-400">{feature.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Image Cards */}
                    <div className="order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg">
                        <AnimatePresence mode="wait">
                            {features.map(
                                (feature, index) =>
                                    index === currentFeature && (
                                        <motion.div
                                            key={index}
                                            className="absolute inset-0 rounded-lg overflow-hidden"
                                            initial={{ y: 100, opacity: 0, rotateX: -20 }}
                                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                            exit={{ y: -100, opacity: 0, rotateX: 20 }}
                                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                                        >
                                            <img
                                                src={feature.image}
                                                alt={feature.step}
                                                className="w-full h-full  transition-transform transform"
                                                width={1000}
                                                height={500}
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4"></div>
                                        </motion.div>
                                    )
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workshops;