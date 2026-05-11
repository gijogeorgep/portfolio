import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white/10 dark:bg-black/90 py-12 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} <span className="text-gray-900 dark:text-white font-bold">Gijo George P</span>. All rights reserved.
                    <span className="block mt-2">Built with <span className="text-neon-primary">React</span> & <span className="text-neon-secondary">Tailwind</span></span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
