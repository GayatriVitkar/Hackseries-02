import { motion } from "framer-motion";
import { BookOpen, ChevronUpIcon } from "lucide-react";


const RoadmapTemplate = ({ roadmap, heading }) => {
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = (index) => ({
        hidden: {
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30,
            y: 20
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    });

    const iconVariants = {
        hidden: { scale: 0, rotate: -45 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 12
            }
        }
    };

    const Icon = ({ src, alt }) => {
        return <img src={src} alt={alt} className="size-6" />;
    };

    return (
        <div className="bg-[#010101] min-h-screen text-white selection:bg-[#D4AF37]/30">
            {/* Header Section */}
            <div className="relative py-16 md:py-24 px-6 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#D4AF37]/5 blur-[120px] rounded-full -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <span className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
                        Roadmap for
                    </span>
                    <h1 className="text-4xl md:text-6xl font-boldonse font-bold tracking-tight mb-6">
                        {heading.split(' ').map((word, i) => (
                            <span key={i} className={i === 0 ? "text-white" : "text-[#D4AF37]"}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>
                    <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full" />
                </motion.div>
            </div>

            {/* Resources Action Area */}
            <div className="flex justify-center mb-20 relative z-10 px-6">
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-3 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
                >
                    <BookOpen size={18} className="group-hover:animate-pulse" />
                    Resources
                </motion.button>
            </div>

            {/* Content List */}
            <div className="w-full px-6 md:px-[6vw] pb-32">
                <div className="relative">
                    {/* Central Vertical Line (Gradient) */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-0.5 bg-linear-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent transform md:-translate-x-1/2 z-0" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-16 md:space-y-24"
                    >
                        {roadmap.map((item, index) => (
                            <div key={index} className="relative flex items-center md:justify-center">
                                {/* Timeline Node (Icon) */}
                                <motion.div
                                    variants={iconVariants}
                                    className="absolute left-8 md:left-1/2 w-14 h-14 bg-[#0a0a0a] border-2 border-[#D4AF37] rounded-full flex items-center justify-center transform -translate-x-1/2 z-20 shadow-[0_0_20px_rgba(212,175,55,0.1)] group"
                                >
                                    <div className="text-[#D4AF37] text-2xl transition-transform duration-300">
                                        <Icon
                                            src={item.icon}
                                            alt="X"
                                        />
                                    </div>
                                </motion.div>

                                {/* Content Card Wrapper */}
                                <div className={`w-full flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"} justify-start`}>
                                    <motion.div
                                        variants={itemVariants(index)}
                                        className={`ml-12 md:ml-0 w-full md:w-[45%] group relative ${index % 2 === 0 ? "md:translate-x-0" : "md:translate-x-0"
                                            }`}
                                    >
                                        {/* Card Decoration */}
                                        {/*  <div className="absolute -inset-0.5 bg-linear-to-r from-[#D4AF37]/50 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" /> */}

                                        <div className="relative bg-[#0a0a0a] border-white/10 p-8 rounded-2xl shadow-2xl transition-all duration-300 group-hover:border-[#D4AF37]/40"
                                            style={index % 2 === 0 ? {
                                                clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)",
                                                paddingRight: "4rem"
                                            } : {
                                                clipPath: "polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0 50%)",
                                                paddingLeft: "5rem"
                                            }}>
                                            {/* Decorative Corner */}
                                            {/* <div className="absolute top-0 right-0 w-16 h-16 bg-[#D4AF37]/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" /> */}

                                            {/* <div className="flex items-center gap-2 mb-4">
                                                <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                                                    Step {index + 1}
                                                </div>
                                            </div> */}

                                            <h3 className="text-2xl font-boldonse font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                                                {item.title}
                                            </h3>

                                            <p className="text-gray-400 leading-relaxed font-medium">
                                                {item.desc}
                                            </p>

                                            {/* Connecting connector for desktop (The "Beak") */}
                                            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-[#D4AF37]/40
                                                ${index % 2 === 0 ? "left-full ml-1" : "right-full mr-1"}`}
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Final Finish Indicator */}
                    <div className="flex flex-col items-center mt-30">
                        <div
                            className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                        >
                            <ChevronUpIcon size={16} />
                        </div>
                        <span className="mt-4 text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4AF37]">
                            Scroll Up
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadmapTemplate;