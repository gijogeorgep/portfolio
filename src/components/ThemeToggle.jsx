import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="relative flex flex-col items-center swinging">
            {/* The Wire */}
            <div className="w-0.5 h-12 bg-gray-400 dark:bg-gray-600 transition-colors duration-500 hidden md:block"></div>

            {/* The Bulb */}
            <button
                onClick={toggleTheme}
                className="group relative flex items-center justify-center -mt-1 focus:outline-none transition-all hover:scale-110 active:scale-90"
                aria-label="Toggle Theme"
            >
                {/* Bulb Base */}
                <div className="absolute -top-1 w-4 h-3 bg-gray-400 dark:bg-gray-600 rounded-sm z-10 transition-colors duration-500"></div>

                {/* Bulb Glass */}
                <div className={`
                    w-10 h-10 rounded-full border-2 
                    ${theme === 'dark'
                        ? 'bg-gray-800/80 border-gray-600 shadow-[0_0_5px_rgba(255,255,255,0.1)]'
                        : 'bg-yellow-100 border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.8)]'
                    }
                    transition-all duration-500 relative flex items-center justify-center
                `}>
                    {/* Filament */}
                    <div className={`w-3 h-4 border-2 rounded-t-full ${theme === 'light' ? 'border-yellow-500' : 'border-gray-700'} transition-colors duration-500`}></div>
                </div>

                {/* Glow Effect */}
                {theme === 'light' && (
                    <div className="absolute -inset-6 bg-yellow-400/20 blur-2xl rounded-full animate-pulse pointer-events-none"></div>
                )}
            </button>

            <style>{`
                @keyframes swing {
                    0% { transform: rotate(5deg); transform-origin: top center; }
                    50% { transform: rotate(-5deg); transform-origin: top center; }
                    100% { transform: rotate(5deg); transform-origin: top center; }
                }
                .swinging {
                    animation: swing 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default ThemeToggle;
