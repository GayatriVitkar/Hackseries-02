import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
    {
        id: "01",
        whiteText: "BUILD",
        yellowText: "FOUNDATIONS",
        desc: "Master the core logic of programming languages."
    },
    {
        id: "02",
        whiteText: "HANDS-ON",
        yellowText: "LEARNING",
        desc: "Theory is a ghost without practice. Apply concepts in real-world scenarios."
    },
    {
        id: "03",
        whiteText: "CAREER",
        yellowText: "ORIENTED",
        desc: "Focus on high-demand domains, ensuring you stay updated with latest tools."
    },
    {
        id: "04",
        whiteText: "PEER",
        yellowText: "LEARNING",
        desc: "Collaborative growth in a competitive student-led environment."
    }
];

const FeatureSection = ({ reason }) => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center bg-[#050505] overflow-hidden border-b border-white/5">

            {/* Maroon Radial Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(75,17,17,0.35)_0%,_transparent_70%)]" />

            {/* HUGE BACKGROUND NUMBER - Now with higher visibility */}
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 0.5, y: 0, scale: 1 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
            >
                <span className="text-[65vw] font-boldonse font-bold text-[#7a2020] leading-none select-none tracking-tighter">
                    {reason.id}
                </span>
            </motion.div>

            <div className="relative z-10 max-w-5xl px-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.6 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-[#D4AF37] font-boldonse text-xs md:text-sm tracking-[0.5em] mb-6 uppercase font-bold drop-shadow-lg">
                        Reason {reason.id}
                    </h3>
                    <h2 className="text-6xl md:text-[9rem] font-boldonse font-bold text-white mb-10 leading-[0.9] tracking-tighter uppercase">
                        {reason.whiteText} <span className="text-[#D4AF37]">{reason.yellowText}</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-2xl font-light tracking-widest leading-relaxed max-w-3xl mx-auto uppercase">
                        {reason.desc}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

const Why = () => {
    return (
        <section className="relative bg-[#050505]">
            {/* INTRO HEADER - Fixed Gradient across HACKSERIES */}
            <div className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                {/* Maroon Radial Glow */}
                <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(75,17,17,0.4)_0%,_transparent_65%)]" />
                <h2 className="text-6xl md:text-[10rem] font-boldonse font-bold tracking-tighter uppercase leading-none">
                    <span className="text-white">Why</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] via-40% to-[#4b1111]">
                        HackSeries?
                    </span>
                </h2>
                <div className="h-[2px] w-64 bg-gradient-to-r from-transparent via-[#4b1111] to-transparent mt-12" />
            </div>

            {/* THE REVEAL SEQUENCE */}
            <div className="relative">
                {reasons.map((r) => (
                    <FeatureSection key={r.id} reason={r} />
                ))}
            </div>
        </section>
    );
};

export default Why;