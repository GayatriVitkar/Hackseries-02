import React from 'react';
import AcesLogo from '../assets/logo (1).png';

const Footer = () => {
    return (
        <footer className="bg-[#050505] text-white pt-16 pb-8 border-t border-[#D4AF37]/10 w-full font-boldonse">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* 1. Branding & Address */}
                    <div className="md:col-span-2 flex items-start gap-6">
                        <img
                            src={AcesLogo}
                            alt="ACES Logo"
                            className="w-20 h-20 md:w-24 md:h-24 object-contain brightness-90 grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-tight">
                                Association of Computer <br /> Engineering Students
                            </h2>
                            <p className="text-gray-500 text-sm md:text-base font-light tracking-wide">
                                Dr. D.Y. Patil Institute of Technology, <br /> Pimpri, Pune
                            </p>
                        </div>
                    </div>

                    {/* 2. Socials with Hyperlinks */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[#D4AF37] text-lg font-bold tracking-[0.2em] mb-2 uppercase">Socials</h3>
                        <ul className="flex flex-col gap-3 text-gray-400 text-sm md:text-base tracking-widest">
                            <li className="hover:text-white transition-colors">
                                <a href="https://www.instagram.com/aces.dit/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </li>
                            <li className="hover:text-white transition-colors">
                                <a href="https://www.linkedin.com/company/acesdit/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </li>
                            <li className="hover:text-white transition-colors">
                                <a href="https://github.com/acesdit" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </li>
                        </ul>
                    </div>

                    {/* 3. Other Links with Hyperlinks */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[#D4AF37] text-lg font-bold tracking-[0.2em] mb-2 uppercase">Other Links</h3>
                        <ul className="flex flex-col gap-3 text-gray-400 text-sm md:text-base tracking-widest">
                            <li className="hover:text-white transition-colors">
                                <a href="https://www.youtube.com/@ACESDIT" target="_blank" rel="noopener noreferrer">YouTube</a>
                            </li>
                            <li className="hover:text-white transition-colors">
                                <a href="https://aces.dypvp.edu.in/blog" target="_blank" rel="noopener noreferrer">Blog</a>
                            </li>
                            <li className="hover:text-white transition-colors">
                                <a href="https://linktr.ee/acesdit" target="_blank" rel="noopener noreferrer">Linktree</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-600 text-[10px] md:text-xs tracking-[0.3em] uppercase">
                        © 2026 Association of Computer Engineering Students, DIT. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;