import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageBackgroundProps {
    images: string[];
    overlayOpacity?: number;
}

export function PageBackground({ images, overlayOpacity = 0.15 }: PageBackgroundProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 8000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none bg-black">
            <AnimatePresence mode='popLayout'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={images[currentIndex]}
                        alt="Background"
                        className="w-full h-full object-cover opacity-100"
                        loading="eager"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlay to ensure text readability - lighter than standard white to let some texture through */}
            <div
                className="absolute inset-0 bg-white"
                style={{ opacity: overlayOpacity }}
            />

            {/* Subtle texture overlay for "Keystone" feel */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        </div>
    );
}
