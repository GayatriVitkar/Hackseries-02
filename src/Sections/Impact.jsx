import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Network, Globe2, Crown, Code2, Workflow, Target, Puzzle, Award, UserPlus, Database, Cloud } from 'lucide-react';

const Impact = () => {
    const canvasRef = useRef(null);
    // Exact user content mapping with updated icons
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

    const cardClass = "bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-[2.5rem] px-10 pt-10 pb-14 flex flex-col gap-6 relative overflow-hidden group hover:border-[#D4AF37]/40 shadow-2xl transition-all duration-500 ease-out will-change-transform";

    return (
        <section className="py-32 px-6 relative overflow-hidden bg-[#050505] min-h-screen">
            {/* 1. Canvas Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none opacity-80"
            />

            {/* 2. Gradient Overlay for Stacking Depth */}
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />

            <div className="w-full px-4 md:px-[6vw] relative z-10">
                <div className="mb-24 text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-boldonse font-bold text-white uppercase tracking-tighter leading-tight">
                        How Hack<span className="text-[#D4AF37]">Series</span> <br /> Helps Students
                    </h2>
                </div>

                {/* Staggered Full-Width 3-Column Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20 lg:min-h-[900px]">

                    {/* COLUMN 1 */}
                    <div className="flex flex-col gap-8 lg:h-full">
                        {/* Col 1 Top (60%) - Problem Solving */}
                        <div className={`${cardClass} min-h-[400px] lg:flex-1 justify-between`}>
                            {/* Dark Yellow/Gold Glow Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                            {/* Animated Background Logo Floater */}
                            <div className="absolute -bottom-20 -right-20 opacity-[0.02] group-hover:opacity-[0.15] transition-opacity duration-1000 ease-out z-0 pointer-events-none">
                                {impacts.problem.bgIcon}
                            </div>

                            {/* Visual: Dynamic Bar Chart */}
                            <div className="w-full bg-[#111111]/80 backdrop-blur-sm rounded-3xl border border-white/5 p-6 mb-8 shadow-2xl transform transition-transform duration-500 relative z-10 mt-2">
                                <div className="flex justify-between items-end h-36 gap-2 sm:gap-3">
                                    {[45, 85, 45, 35, 10, 55, 40, 70, 90].map((h, j) => (
                                        <div key={j} className="w-full h-full flex flex-col justify-end relative">
                                            <div className={`w-full rounded-t-[4px] transition-all duration-500 ${j === 1 || j === 8 ? 'bg-gradient-to-t from-[#D4AF37]/40 to-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.6)]' : 'bg-gradient-to-t from-[#D4AF37]/5 to-[#D4AF37]/20 group-hover:from-[#D4AF37]/10 group-hover:to-[#D4AF37]/40'}`} style={{ height: `${h}%` }}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Text Container at Bottom */}
                            <div className="mt-auto relative z-20">
                                {impacts.problem.icon}
                                <h3 className="text-2xl md:text-3xl font-boldonse font-bold text-white mb-3 tracking-wide">{impacts.problem.title}</h3>
                                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed drop-shadow-md">{impacts.problem.desc}</p>
                            </div>
                        </div>

                        {/* Col 1 Bottom (40%) - Real World Experience */}
                        <div className={`${cardClass} min-h-[300px] lg:flex-1 justify-between`}>
                            {/* Inner Gold Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                            {/* Animated Globe Logo Floater */}
                            <div className="absolute -bottom-16 -right-16 opacity-[0.02] group-hover:opacity-[0.15] transition-opacity duration-1000 ease-out z-0 pointer-events-none">
                                {impacts.realworld.bgIcon}
                            </div>

                            {/* Visual: Project Management / Kanban Timeline */}
                            <div className="w-full flex-1 flex flex-col justify-center relative min-h-[160px] mb-8 z-10 px-2 lg:px-4">
                                <div className="w-full h-40 bg-[#111111]/80 backdrop-blur-sm rounded-2xl border border-white/5 p-4 flex flex-col gap-3 relative overflow-hidden group-hover:border-[#D4AF37]/30 transition-colors shadow-2xl">
                                    {/* Grid lines */}
                                    <div className="absolute inset-y-0 left-[30%] w-[1px] bg-white/5"></div>
                                    <div className="absolute inset-y-0 left-[60%] w-[1px] bg-white/5"></div>

                                    {/* Toolbar mockup */}
                                    <div className="flex gap-2 mb-1">
                                        <div className="w-6 h-2 rounded bg-white/20"></div>
                                        <div className="w-10 h-2 rounded bg-white/10"></div>
                                    </div>

                                    {/* Task 1 (Active) */}
                                    <div className="relative w-[75%] h-7 rounded border border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.3)] mt-1 flex items-center px-3 group-hover:w-[90%] transition-all duration-700 ease-out overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/80 to-[#D4AF37]/20 opacity-80"></div>
                                        <div className="w-16 h-1.5 rounded-full bg-white relative z-10"></div>
                                    </div>

                                    {/* Task 2 */}
                                    <div className="relative w-[45%] h-7 rounded bg-white/5 border border-white/10 ml-[20%] group-hover:ml-[10%] group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/30 transition-all duration-700 ease-out delay-100 flex items-center px-3">
                                        <div className="w-12 h-1.5 rounded-full bg-white/20 group-hover:bg-[#D4AF37]/80 transition-colors delay-100"></div>
                                    </div>

                                    {/* Task 3 */}
                                    <div className="relative w-[30%] h-7 rounded bg-white/5 border border-white/10 ml-[50%] group-hover:ml-[60%] transition-all duration-700 ease-out delay-200 flex items-center px-3">
                                        <div className="w-8 h-1.5 rounded-full bg-white/20"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto z-20 relative">
                                {impacts.realworld.icon}
                                <h3 className="text-xl md:text-2xl font-boldonse font-bold text-white mb-3 tracking-wide">{impacts.realworld.title}</h3>
                                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed drop-shadow-md">{impacts.realworld.desc}</p>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="flex flex-col gap-8 lg:h-full">
                        {/* Col 2 Full (100%) - Technical Proficiency */}
                        <div className={`${cardClass} min-h-[550px] lg:h-full`}>
                            {/* Massive Gold Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 via-[#D4AF37]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0" />

                            {/* Animated Background Terminal Floater */}
                            <div className="absolute -top-32 -right-32 opacity-[0.02] group-hover:opacity-[0.1] transition-opacity duration-[1.5s] ease-out z-0 pointer-events-none">
                                {impacts.technical.bgIcon}
                            </div>

                            {/* Visual: Glowing MacOS Code Editor */}
                            <div className="w-full bg-[#0a0a0a]/80 backdrop-blur-md rounded-3xl border border-white/10 p-6 md:p-8 mb-auto shadow-[0_20px_50px_rgba(0,0,0,0.7)] transform transition-transform duration-500 mt-6 relative z-10 font-mono text-sm md:text-base">
                                <div className="flex gap-2 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>
                                </div>

                                <div className="space-y-4 md:space-y-5">
                                    <div className="flex flex-wrap gap-2 md:gap-3 items-center">
                                        <span className="text-[#D4AF37]">import</span>
                                        <span className="text-white">{' { Innovation } '}</span>
                                        <span className="text-[#D4AF37]">from</span>
                                        <span className="text-gray-400">'@hack/core'</span>;
                                    </div>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        <span className="text-[#D4AF37]">const</span>
                                        <span className="text-white">Participant</span>
                                        <span className="text-blue-400">=</span>
                                        <span className="text-purple-400">new</span>
                                        <span className="text-[#D4AF37]">Developer</span>();
                                    </div>
                                    <div className="pl-4 md:pl-6 flex flex-col gap-3 mt-4 border-l border-white/10 ml-2 md:ml-3">
                                        <div className="text-gray-500 italic">// Initialize logic circuits...</div>
                                        <div className="flex flex-wrap gap-2 md:gap-3 items-center">
                                            <span className="text-purple-400">await</span>
                                            <div>
                                                <span className="text-white">Participant.</span><span className="text-green-300">upgrade</span><span className="text-white">();</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="text-white">Participant.</span><span className="text-blue-300">deploy</span><span className="text-white">()</span>
                                            <span className="w-2 h-5 bg-[#D4AF37] animate-[pulse_1s_ease-in-out_infinite] shadow-[0_0_8px_#D4AF37]"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 relative z-20">
                                {impacts.technical.icon}
                                <h3 className="text-3xl md:text-5xl font-boldonse font-bold text-white mb-4 leading-tight tracking-wide">{impacts.technical.title}</h3>
                                <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed drop-shadow-md">{impacts.technical.desc}</p>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="flex flex-col gap-8 lg:h-full">
                        {/* Col 3 Top (40%) - Leadership & Teamwork */}
                        <div className={`${cardClass} min-h-[300px] lg:flex-1 justify-between`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                            <div className="absolute -bottom-16 -right-16 opacity-[0.02] group-hover:opacity-[0.15] transition-opacity duration-1000 ease-out z-0 pointer-events-none">
                                {impacts.leadership.bgIcon}
                            </div>

                            {/* Visual: Avatars */}
                            <div className="flex justify-center items-center flex-1 relative z-10 w-full mb-8">
                                <div className="flex -space-x-4">
                                    {['JD', 'AL', 'MR', 'SK', 'HP'].map((initials, j) => (
                                        <div key={j} className="w-14 h-14 rounded-full border-[3px] border-[#0a0a0a] bg-[#1a1a1a] flex items-center justify-center text-sm font-bold text-white shadow-2xl relative overflow-hidden transition-all duration-500 hover:z-30 cursor-pointer group/avatar">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/50 to-[#111] opacity-60 group-hover/avatar:opacity-100 transition-opacity"></div>
                                            <span className="relative z-10 tracking-wider drop-shadow-md">{initials}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto z-20 relative">
                                {impacts.leadership.icon}
                                <h3 className="text-xl md:text-2xl font-boldonse font-bold text-white mb-3 tracking-wide">{impacts.leadership.title}</h3>
                                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed drop-shadow-md">{impacts.leadership.desc}</p>
                            </div>
                        </div>

                        {/* Col 3 Bottom (60%) - Networking */}
                        <div className={`${cardClass} min-h-[520px] lg:flex-1 justify-between`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                            <div className="absolute -bottom-20 -right-20 opacity-[0.02] group-hover:opacity-[0.15] transition-opacity duration-1000 ease-out z-0 pointer-events-none">
                                {impacts.networking.bgIcon}
                            </div>

                            {/* Visual: Fanning Contact Cards */}
                            <div className="w-full flex-1 flex items-center justify-center relative min-h-[180px] mb-6 z-10" style={{ perspective: '1000px' }}>
                                {[
                                    {
                                        rot: '-rotate-12 -translate-x-10 translate-y-6',
                                        hov: 'group-hover:opacity-40'
                                    },
                                    {
                                        rot: 'rotate-12 translate-x-10 translate-y-6',
                                        hov: 'group-hover:opacity-40'
                                    },
                                    {
                                        rot: 'z-30 translate-y-2',
                                        hov: 'group-hover:shadow-[0_20px_40px_rgba(212,175,55,0.25)]'
                                    },
                                ].map((card, i) => (
                                    <div key={i} className={`absolute w-full max-w-[180px] h-28 bg-[#111111]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl transition-all duration-700 flex flex-col p-4 justify-between transform ${card.rot} ${card.hov} ${i === 2 ? 'border-[#D4AF37]/40 ring-1 ring-[#D4AF37]/10' : ''}`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${i === 2 ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/50' : 'bg-white/5 border border-white/10'}`}>
                                                <UserPlus className={`w-4 h-4 ${i === 2 ? 'text-[#D4AF37]' : 'text-gray-400'}`} />
                                            </div>
                                            <div className="flex-1 space-y-2 w-full">
                                                <div className="w-full h-2 bg-white/20 rounded-full"></div>
                                                <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className={`w-full py-2 rounded-lg border flex items-center justify-center text-[10px] uppercase font-bold tracking-widest transition-colors ${i === 2 ? 'bg-[#D4AF37] border-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'bg-transparent border-white/10 text-gray-500'}`}>
                                            {i === 2 ? 'Connected' : 'Connect'}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto z-20 relative pb-6">
                                {impacts.networking.icon}
                                <h3 className="text-2xl md:text-3xl font-boldonse font-bold text-white mb-3 tracking-wide">{impacts.networking.title}</h3>
                                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed drop-shadow-md mb-2">{impacts.networking.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;