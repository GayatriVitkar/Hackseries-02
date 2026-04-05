import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Network, Globe2, Crown, Code2, Workflow, Target, Puzzle, Award, UserPlus, Database, Cloud } from 'lucide-react';

const Impact = () => {
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

    const cardClass = "bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden group hover:border-[#D4AF37]/40 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 will-change-transform";

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
                    <h2 className="text-5xl md:text-7xl font-boldonse font-bold text-white uppercase tracking-tighter leading-tight">
                        How Hack<span className="text-[#D4AF37]">Series</span> <br /> Helps Students
                    </h2>
                </motion.div>

                {/* Staggered Full-Width 3-Column Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20 h-auto lg:h-[900px]">
                    
                    {/* COLUMN 1 */}
                    <div className="flex flex-col gap-8 lg:h-full">
                        {/* Col 1 Top (60%) - Problem Solving */}
                        <div className={`${cardClass} lg:h-[60%] min-h-[400px]`}>
                            {/* Dark Yellow/Gold Glow Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                            
                            {/* Animated Background Logo Floater */}
                            <div className="absolute -bottom-20 -right-20 opacity-[0.02] group-hover:opacity-[0.15] group-hover:-translate-y-8 group-hover:-translate-x-8 transition-all duration-1000 ease-out z-0 pointer-events-none">
                                {impacts.problem.bgIcon}
                            </div>
                            
                            {/* Visual: Dynamic Bar Chart */}
                            <div className="w-full bg-[#111111]/80 backdrop-blur-sm rounded-3xl border border-white/5 p-6 mb-8 shadow-2xl transform transition-transform group-hover:scale-[1.03] duration-500 relative z-10 mt-2">
                                <div className="flex justify-between items-end h-36 gap-2 sm:gap-3">
                                    {[45, 85, 45, 35, 10, 55, 40, 70, 90].map((h, j) => (
                                        <div key={j} className="w-full h-full flex flex-col justify-end relative">
                                            <div className={`w-full rounded-t-[4px] transition-all duration-500 ${j === 1 || j === 8 ? 'bg-gradient-to-t from-[#D4AF37]/40 to-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.6)]' : 'bg-gradient-to-t from-[#D4AF37]/5 to-[#D4AF37]/20 group-hover:from-[#D4AF37]/10 group-hover:to-[#D4AF37]/40'}`} style={{height: `${h}%`}}></div>
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
                        <div className={`${cardClass} lg:h-[40%] min-h-[300px] justify-between`}>
                            {/* Inner Gold Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                            
                            {/* Animated Globe Logo Floater */}
                            <div className="absolute -bottom-16 -right-16 opacity-[0.02] group-hover:opacity-[0.15] group-hover:-translate-y-6 group-hover:-translate-x-6 transition-all duration-1000 ease-out z-0 pointer-events-none">
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
                        <div className={`${cardClass} lg:h-full min-h-[550px]`}>
                            {/* Massive Gold Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 via-[#D4AF37]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0" />
                            
                            {/* Animated Background Terminal Floater */}
                            <div className="absolute -top-32 -right-32 opacity-[0.02] group-hover:opacity-[0.1] group-hover:translate-y-12 group-hover:-translate-x-12 transition-all duration-[1.5s] ease-out z-0 pointer-events-none">
                                {impacts.technical.bgIcon}
                            </div>
                            
                            {/* Visual: Hovering Tech Language Badges Cluster */}
                            <div className="w-full flex-1 flex items-center justify-center relative min-h-[350px] mb-auto mt-6 z-10 text-center">
                                <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                                    {/* Core Glowing Orb */}
                                    <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 blur-3xl opacity-50 group-hover:opacity-100 group-hover:scale-[1.8] transition-all duration-1000 ease-out pointer-events-none"></div>
                                    
                                    {/* Center Node */}
                                    <div className="relative w-24 h-24 rounded-3xl border-2 border-[#D4AF37]/40 bg-[#111] flex items-center justify-center z-20 shadow-[0_0_40px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] group-hover:border-[#D4AF37] transition-all duration-700">
                                         <Code2 className="w-10 h-10 text-[#D4AF37] group-hover:scale-110 transition-transform duration-700" strokeWidth={1.5} />
                                    </div>
                                    
                                    {/* Concentric Grid Rings */}
                                    <div className="absolute inset-0 rounded-full border border-[#D4AF37]/5 scale-50 opacity-20"></div>
                                    <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20 scale-75 border-dashed animate-[spin_60s_linear_infinite]"></div>
                                    <div className="absolute inset-0 rounded-full border border-white/5 scale-100"></div>

                                    {/* Hover connecting lines SVG */}
                                    <svg viewBox="0 0 320 320" className="absolute inset-0 w-full h-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-visible pointer-events-none">
                                         <path d="M160,160 L100,50" stroke="rgba(212,175,55,0.3)" strokeWidth="1.5" strokeDasharray="4 4"/>
                                         <path d="M160,160 L240,60" stroke="rgba(212,175,55,0.3)" strokeWidth="1.5" strokeDasharray="4 4"/>
                                         <path d="M160,160 L260,160" stroke="rgba(212,175,55,0.3)" strokeWidth="1.5" strokeDasharray="4 4"/>
                                         <path d="M160,160 L240,260" stroke="rgba(212,175,55,0.3)" strokeWidth="1.5" strokeDasharray="4 4"/>
                                         <path d="M160,160 L80,260" stroke="rgba(212,175,55,0.3)" strokeWidth="1.5" strokeDasharray="4 4"/>
                                         <path d="M160,160 L40,160" stroke="rgba(212,175,55,0.3)" strokeWidth="1.5" strokeDasharray="4 4"/>
                                    </svg>

                                    {/* Orbiting Language Badges */}
                                    {[
                                        { label: 'React.js',  top: '0%', left: '10%', hover: 'group-hover:-translate-x-6 group-hover:-translate-y-4', color: 'from-[#61DAFB]/20', border: 'border-[#61DAFB]/30', text: 'text-[#61DAFB]', shadow: 'group-hover:shadow-[0_0_20px_rgba(97,218,251,0.3)]' },
                                        { label: 'Python',    top: '5%', left: '60%', hover: 'group-hover:translate-x-8 group-hover:-translate-y-2', color: 'from-[#FFE873]/20', border: 'border-[#FFE873]/30', text: 'text-[#FFE873]', shadow: 'group-hover:shadow-[0_0_20px_rgba(255,232,115,0.3)]' },
                                        { label: 'Node',      top: '35%', left: '75%', hover: 'group-hover:translate-x-10', color: 'from-[#339933]/20', border: 'border-[#339933]/30', text: 'text-[#339933]', shadow: 'group-hover:shadow-[0_0_20px_rgba(51,153,51,0.3)]' },
                                        { label: 'AI / ML',   top: '75%', left: '65%', hover: 'group-hover:translate-x-6 group-hover:translate-y-6', color: 'from-[#FF6B6B]/20', border: 'border-[#FF6B6B]/30', text: 'text-[#FF6B6B]', shadow: 'group-hover:shadow-[0_0_20px_rgba(255,107,107,0.3)]' },
                                        { label: 'C++',       top: '75%', left: '5%', hover: 'group-hover:-translate-x-4 group-hover:translate-y-4', color: 'from-[#A855F7]/20', border: 'border-[#A855F7]/30', text: 'text-[#A855F7]', shadow: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' },
                                        { label: 'Design',    top: '40%', left: '-5%', hover: 'group-hover:-translate-x-8 group-hover:-translate-y-2', color: 'from-[#ffffff]/20', border: 'border-white/30', text: 'text-white', shadow: 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]' },
                                    ].map((pill, i) => (
                                        <div key={i} className={`absolute px-4 py-2 rounded-xl border backdrop-blur-md shadow-xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] bg-gradient-to-br transition-colors ${pill.color} to-[#111]/80 ${pill.border} ${pill.hover} ${pill.shadow} cursor-pointer hover:!scale-110 hover:!brightness-125 z-20`} style={{ top: pill.top, left: pill.left }}>
                                            <span className={`text-[11px] font-bold tracking-widest uppercase drop-shadow-md ${pill.text}`}>{pill.label}</span>
                                        </div>
                                    ))}
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
                        <div className={`${cardClass} lg:h-[40%] min-h-[300px] justify-between`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                            
                            <div className="absolute -bottom-16 -right-16 opacity-[0.02] group-hover:opacity-[0.15] group-hover:-translate-y-6 group-hover:-translate-x-6 transition-all duration-1000 ease-out z-0 pointer-events-none">
                                {impacts.leadership.bgIcon}
                            </div>
                            
                            {/* Visual: Avatars */}
                            <div className="flex justify-center items-center flex-1 relative z-10 w-full mb-8">
                                <div className="flex -space-x-4">
                                    {['JD', 'AL', 'MR', 'SK', 'HP'].map((initials, j) => (
                                        <div key={j} className="w-14 h-14 rounded-full border-[3px] border-[#0a0a0a] bg-[#1a1a1a] flex items-center justify-center text-sm font-bold text-white shadow-2xl relative overflow-hidden transition-all duration-500 hover:z-30 hover:-translate-y-2 hover:scale-110 cursor-pointer group/avatar">
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
                        <div className={`${cardClass} lg:h-[60%] min-h-[400px]`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                            
                            <div className="absolute -bottom-20 -right-20 opacity-[0.02] group-hover:opacity-[0.15] group-hover:-translate-y-8 group-hover:-translate-x-8 transition-all duration-1000 ease-out z-0 pointer-events-none">
                                {impacts.networking.bgIcon}
                            </div>
                            
                            {/* Visual: Fanning Contact Cards */}
                            <div className="w-full flex-1 flex items-center justify-center relative min-h-[220px] mb-8 z-10" style={{ perspective: '1000px' }}>
                                {[
                                    { 
                                        rot: '-rotate-12 -translate-x-10 translate-y-6', 
                                        hov: 'group-hover:-rotate-[25deg] group-hover:-translate-x-20 group-hover:translate-y-2 group-hover:opacity-40' 
                                    },
                                    { 
                                        rot: 'rotate-12 translate-x-10 translate-y-6', 
                                        hov: 'group-hover:rotate-[25deg] group-hover:translate-x-20 group-hover:translate-y-2 group-hover:opacity-40' 
                                    },
                                    { 
                                        rot: 'z-30 translate-y-2', 
                                        hov: 'group-hover:-translate-y-6 group-hover:scale-110 group-hover:shadow-[0_20px_40px_rgba(212,175,55,0.25)]' 
                                    },
                                ].map((card, i) => (
                                    <div key={i} className={`absolute w-full max-w-[200px] h-32 bg-[#111111]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl transition-all duration-700 flex flex-col p-4 justify-between transform ${card.rot} ${card.hov} ${i===2 ? 'border-[#D4AF37]/40 ring-1 ring-[#D4AF37]/10' : ''}`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${i===2 ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/50' : 'bg-white/5 border border-white/10'}`}>
                                                <UserPlus className={`w-4 h-4 ${i===2 ? 'text-[#D4AF37]' : 'text-gray-400'}`} />
                                            </div>
                                            <div className="flex-1 space-y-2 w-full">
                                                <div className="w-full h-2 bg-white/20 rounded-full"></div>
                                                <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className={`w-full py-2 rounded-lg border flex items-center justify-center text-[10px] uppercase font-bold tracking-widest transition-colors ${i===2 ? 'bg-[#D4AF37] border-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'bg-transparent border-white/10 text-gray-500'}`}>
                                            {i === 2 ? 'Connected' : 'Connect'}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto z-20 relative">
                                {impacts.networking.icon}
                                <h3 className="text-2xl md:text-3xl font-boldonse font-bold text-white mb-3 tracking-wide">{impacts.networking.title}</h3>
                                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed drop-shadow-md">{impacts.networking.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;