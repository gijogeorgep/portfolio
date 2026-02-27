import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black/90 py-8 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} <span className="text-white">YOUR NAME</span>. All rights reserved.
                    <span className="block mt-2">Built with <span className="text-neon-primary">React</span> & <span className="text-neon-secondary">Tailwind</span></span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
