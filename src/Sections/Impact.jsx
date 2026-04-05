import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Terminal, Shield, Network, Globe2, Crown, Code2, 
    Workflow, Target, Puzzle, Award, UserPlus 
} from 'lucide-react';

const Impact = () => {
    const canvasRef = useRef(null);

    // Placeholder for Canvas Particle Effect (You can expand this later)
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        // Simple canvas resize logic
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();
        return () => window.removeEventListener('resize', resize);
    }, []);

    const impacts = {
        technical: {
            title: "Technical Proficiency",
            desc: "Participants develop a deeper understanding of various concepts and programming languages, preparing them for internships and hackathons.",
            icon: <Code2 className="w-8 h-8 text-[#D4AF37] mb-4 relative z-20" />,
            bgIcon: <Terminal className="w-[400px] h-[400px] text-[#D4AF37]" strokeWidth={0.5} />
        },
        problem: {
            title: "Problem-Solving Skills",
            desc: "Each session includes problem-solving tasks that push students to think critically and come up with creative solutions.",
            icon: <Puzzle className="w-8 h-8 text-[#D4AF37] mb-4 relative z-20" />,
            bgIcon: <Shield className="w-[300px] h-[300px] text-[#D4AF37]" strokeWidth={0.5} />
        },
        networking: {
            title: "Networking Opportunities",
            desc: "Participants can network with speakers, mentors, and peers, building valuable connections for future career opportunities.",
            icon: <Network className="w-8 h-8 text-[#D4AF37] mb-4 relative z-20" />,
            bgIcon: <Workflow className="w-[350px] h-[350px] text-[#D4AF37]" strokeWidth={0.5} />
        },
        realworld: {
            title: "Real-World Experience",
            desc: "Bridge the gap between theory and practice by actively collaborating on practical, industry-aligned projects.",
            icon: <Globe2 className="w-8 h-8 text-[#D4AF37] mb-4 relative z-20" />,
            bgIcon: <Target className="w-[250px] h-[250px] text-[#D4AF37]" strokeWidth={0.5} />
        },
        leadership: {
            title: "Leadership & Teamwork",
            desc: "Develop crucial soft skills by collaborating in high-stakes environments, learning to lead teams effectively.",
            icon: <Crown className="w-8 h-8 text-[#D4AF37] mb-4 relative z-20" />,
            bgIcon: <Award className="w-[300px] h-[300px] text-[#D4AF37]" strokeWidth={0.5} />
        }
    };

    const cardClass = "bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden group hover:border-[#D4AF37]/40 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 will-change-transform";

    return (
        <section className="py-32 px-6 relative overflow-hidden bg-[#050505] min-h-screen">
            {/* 1. Canvas Layer */}
            <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-80" />

            {/* 2. Gradient Overlay for Stacking Depth */}
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />

            <div className="w-full px-4 md:px-[6vw] relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-tight">
                        How Hack<span className="text-[#D4AF37]">Series</span> <br /> Helps Students
                    </h2>
                </motion.div>

                {/* Staggered Full-Width 3-Column Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20 h-auto lg:h-[900px]">
                    
                    {/* COLUMN 1 */}
                    <div className="flex flex-col gap-8 lg:h-full">
                        {/* Problem Solving */}
                        <div className={`${cardClass} lg:h-[60%] min-h-[400px]`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                            <div className="absolute -bottom-20 -right-20 opacity-[0.02] group-hover:opacity-[0.15] group-hover:-translate-y-8 group-hover:-translate-x-8 transition-all duration-1000 ease-out z-0 pointer-events-none">
                                {impacts.problem.bgIcon}
                            </div>
                            
                            {/* Visual: Bar Chart */}
                            <div className="w-full bg-[#111111]/80 backdrop-blur-sm rounded-3xl border border-white/5 p-6 mb-8 shadow-2xl relative z-10 mt-2">
                                <div className="flex justify-between items-end h-36 gap-2 sm:gap-3">
                                    {[45, 85, 45, 35, 10, 55, 40, 70, 90].map((h, j) => (
                                        <div key={j} className="w-full h-full flex flex-col justify-end relative">
                                            <div className={`w-full rounded-t-[4px] transition-all duration-500 ${j === 1 || j === 8 ? 'bg-gradient-to-t from-[#D4AF37] to-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.6)]' : 'bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/30'}`} style={{height: `${h}%`}}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto relative z-20">
                                {impacts.problem.icon}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-wide">{impacts.problem.title}</h3>
                                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">{impacts.problem.desc}</p>
                            </div>
                        </div>

                        {/* Real World Experience */}
                        <div className={`${cardClass} lg:h-[40%] min-h-[300px]`}>
                             <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                             <div className="absolute -bottom-16 -right-16 opacity-[0.02] group-hover:opacity-[0.15] z-0 pointer-events-none">{impacts.realworld.bgIcon}</div>
                             
                             <div className="mt-auto z-20 relative">
                                {impacts.realworld.icon}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">{impacts.realworld.title}</h3>
                                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">{impacts.realworld.desc}</p>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="flex flex-col gap-8 lg:h-full">
                        <div className={`${cardClass} lg:h-full min-h-[550px]`}>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 via-[#D4AF37]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0" />
                            <div className="absolute -top-32 -right-32 opacity-[0.02] z-0 pointer-events-none">{impacts.technical.bgIcon}</div>
                            
                            <div className="w-full flex-1 flex items-center justify-center relative mt-6 z-10 text-center">
                                <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                                    <div className="absolute w-40 h-40 rounded-full bg-[#D4AF37]/20 blur-3xl group-hover:scale-[1.8] transition-all duration-1000 ease-out" />
                                    <div className="relative w-24 h-24 rounded-3xl border-2 border-[#D4AF37]/40 bg-[#111] flex items-center justify-center z-20 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                                        <Code2 className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.5} />
                                    </div>
                                    {/* Tech Pills */}
                                    <div className="absolute top-0 left-0 px-4 py-2 rounded-xl border border-[#61DAFB]/30 bg-[#61DAFB]/10 text-[#61DAFB] text-[10px] font-bold uppercase tracking-widest translate-y-4 -translate-x-4">React.js</div>
                                    <div className="absolute bottom-10 right-0 px-4 py-2 rounded-xl border border-[#FFE873]/30 bg-[#FFE873]/10 text-[#FFE873] text-[10px] font-bold uppercase tracking-widest translate-y-4">Python</div>
                                </div>
                            </div>

                            <div className="mt-12 relative z-20">
                                {impacts.technical.icon}
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-wide">{impacts.technical.title}</h3>
                                <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed">{impacts.technical.desc}</p>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="flex flex-col gap-8 lg:h-full">
                        {/* Leadership */}
                        <div className={`${cardClass} lg:h-[40%] min-h-[300px]`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                            <div className="mt-auto z-20 relative">
                                {impacts.leadership.icon}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">{impacts.leadership.title}</h3>
                                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">{impacts.leadership.desc}</p>
                            </div>
                        </div>

                        {/* Networking */}
                        <div className={`${cardClass} lg:h-[60%] min-h-[400px]`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                            <div className="flex justify-center items-center flex-1 relative z-10 w-full mb-8">
                                <div className="flex -space-x-4">
                                    {['JD', 'AL', 'MR', 'SK'].map((initials, j) => (
                                        <div key={j} className="w-14 h-14 rounded-full border-[3px] border-[#0a0a0a] bg-[#1a1a1a] flex items-center justify-center text-sm font-bold text-white shadow-2xl relative overflow-hidden transition-all duration-500 hover:z-30 hover:-translate-y-2 hover:scale-110 cursor-pointer">
                                            <div className="absolute inset-0 bg-[#D4AF37]/40 group-hover:bg-[#D4AF37]/80 transition-opacity"></div>
                                            <span className="relative z-10 tracking-wider">{initials}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-auto z-20 relative">
                                {impacts.networking.icon}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-wide">{impacts.networking.title}</h3>
                                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">{impacts.networking.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
