import React from 'react';
import { motion } from 'framer-motion';
import PhoenixLogo from '../assets/phoenix-vector.svg';
import EvilEye from '../Components/EvilEye';


const Hero = () => {
    return (
        <section className="relative min-h-[85vh] w-full bg-[#060010] flex items-center justify-center overflow-hidden">

            {/* EvilEye Background */}
            <div className="absolute inset-0 z-0">
                <EvilEye
                    eyeColor="#4b1111"
                    intensity={0.5}
                    pupilSize={0.45}
                    irisWidth={0.4}
                    glowIntensity={0}
                    scale={2.4}
                    noiseScale={1.9}
                    pupilFollow={0.8}
                    flameSpeed={1.1}
                    backgroundColor="#060010"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">


                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -20, 0]
                    }}
                    transition={{
                        opacity: { duration: 2 },
                        y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative mb-10"
                >
                    <img
                        src={PhoenixLogo}
                        alt="Phoenix"
                        className="w-56 h-56 md:w-96 md:h-96 object-contain brightness-110"
                    />

                    <motion.div
                        animate={{ opacity: [0.1, 0.4, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-full -z-10"
                    />
                </motion.div>

                <div className="text-center max-w-5xl">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-[#D4AF37] font-boldonse text-xs md:text-sm tracking-[0.5em] mb-6 uppercase font-bold"
                    >
                        A C E S • D I T • P I M P R I
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-6xl md:text-[9rem] font-boldonse font-bold text-white leading-none tracking-tighter"
                    >
                        HACK<span className="text-[#D4AF37]">SERIES</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-gray-500 mt-8 text-sm md:text-xl font-light tracking-widest max-w-3xl mx-auto px-4 uppercase"
                    >
                        Step into the vault. Forge the future of code.
                    </motion.p>
                </div>

                {/* 4. CALL TO ACTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-14 flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-8 sm:px-0"
                >
                    <a href="https://aces-hackseries.vercel.app/docs/Job%20Description.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-14 py-4 bg-[#D4AF37] text-black font-boldonse font-bold tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                        Resources
                    </a>
                    <button className="px-14 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-boldonse font-bold tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
                        LEARN MORE
                    </button>
                </motion.div>
            </div>

            {/* Bottom Decorative Fade */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
};

export default Hero;