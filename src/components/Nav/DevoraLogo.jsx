'use client';

import React from 'react';

const DevoraLogo = ({ className = "h-10 w-auto", showText = true }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <svg 
        viewBox="0 0 120 120" 
        className="h-10 w-10 shrink-0"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cart Base */}
        <rect 
          x="20" 
          y="60" 
          width="70" 
          height="40" 
          rx="8" 
          fill="url(#gradient1)"
          className="transition-all duration-300"
        />
        
        {/* Cart Handle */}
        <path 
          d="M30 60 Q30 40, 50 40 Q70 40, 70 60" 
          stroke="url(#gradient2)" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        
        {/* Tech Grid Pattern */}
        <g opacity="0.3">
          <line x1="35" y1="75" x2="35" y2="85" stroke="white" strokeWidth="2"/>
          <line x1="45" y1="75" x2="45" y2="85" stroke="white" strokeWidth="2"/>
          <line x1="55" y1="75" x2="55" y2="85" stroke="white" strokeWidth="2"/>
          <line x1="65" y1="75" x2="65" y2="85" stroke="white" strokeWidth="2"/>
          <line x1="35" y1="75" x2="75" y2="75" stroke="white" strokeWidth="2"/>
          <line x1="35" y1="85" x2="75" y2="85" stroke="white" strokeWidth="2"/>
        </g>
        
        {/* Digital Arrow/Connection */}
        <path 
          d="M75 80 L95 80 L95 60 L110 75 L95 90 L95 80" 
          fill="url(#gradient2)" 
          stroke="url(#gradient2)" 
          strokeWidth="2"
          className="transition-all duration-300"
        />
        
        {/* Tech Dots */}
        <circle cx="50" cy="50" r="4" fill="url(#gradient2)"/>
        <circle cx="65" cy="45" r="3" fill="url(#gradient2)"/>
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6F8F72" />
            <stop offset="100%" stopColor="#5a7a5d" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#25343F" />
            <stop offset="100%" stopColor="#1B3C53" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-[#25343F] leading-tight">
            Devora
          </span>
          <span className="text-xs text-[#64748B] leading-tight -mt-0.5">
            Digital Solutions
          </span>
        </div>
      )}
    </div>
  );
};

export default DevoraLogo;
