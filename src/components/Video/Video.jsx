'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Sparkles, Zap, Target, Clock, CheckCircle, ArrowRight, Volume2 } from 'lucide-react';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const features = [
    { icon: Zap, title: 'Fast Implementation', desc: 'Deploy solutions in weeks, not months' },
    { icon: Target, title: 'Proven Results', desc: '98% client satisfaction rate' },
    { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock expert assistance' },
    { icon: CheckCircle, title: 'Quality Guaranteed', desc: 'Industry-leading standards' },
  ];

  const handlePlay = () => {
    setIsPlaying(true);
    setShowOverlay(false);
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(111,143,114,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(37,52,63,0.15),transparent_50%)]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#6F8F72]/20"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-white/90">
            <Sparkles className="w-4 h-4 text-[#6F8F72]" />
            Experience Our Expertise
          </div>
          
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            See{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-white to-[#6F8F72]">
                Innovation
              </span>
              <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#6F8F72]/50 via-white/50 to-[#6F8F72]/50 blur-sm"></div>
            </span>{" "}
            in Action
          </h2>
          
          <p className="text-xl leading-relaxed text-gray-300 max-w-2xl mx-auto">
            Discover how our cutting-edge solutions transform businesses and drive 
            measurable results through innovation and expertise.
          </p>
        </div>

        {/* Main Video Container */}
        <div className="relative mb-16 lg:mb-20">
          <div className="relative mx-auto max-w-5xl">
            {/* Video Player */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Video Container */}
              <div className="relative aspect-video bg-gray-900">
                {showOverlay && (
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-blue-900/30 to-violet-900/30 z-20" />
                )}
                
                <iframe
                  src={`https://www.youtube.com/embed/i5nbUr0kNF0${isPlaying ? '?autoplay=1' : ''}`}
                  title="Devora Solutions Overview"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setShowOverlay(false)}
                />
                
                {/* Custom Play Button Overlay */}
                {showOverlay && (
                  <div 
                    className="absolute inset-0 z-30 flex items-center justify-center cursor-pointer"
                    onClick={handlePlay}
                  >
                    <div className="relative group/play">
                      {/* Pulsing Ring */}
                      <div className="absolute inset-0 animate-ping rounded-full bg-[#6F8F72]/40 blur-md"></div>
                      
                      {/* Play Button */}
                      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#6F8F72] to-[#5a7a5d] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover/play:scale-110">
                        <Play className="w-10 h-10 text-white ml-2" fill="white" />
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#6F8F72]/30 via-white/20 to-[#6F8F72]/30 rounded-full blur-xl opacity-0 group-hover/play:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Overlay Text */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white/80 mb-2">Click to play overview video</div>
                        <div className="text-xs text-white/60">3:24 min • 4K Quality</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/10 pointer-events-none"></div>
              
              {/* Corner Accents */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#6F8F72] to-[#5a7a5d] blur-sm"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#25343F] to-[#1B3C53] blur-sm"></div>
            </div>
            
            {/* Video Controls Bar (Desktop) */}
            <div className="hidden lg:flex items-center justify-between mt-8 px-8">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  <Volume2 className="w-5 h-5" />
                  <span>Adjust Volume</span>
                </button>
                <div className="text-sm text-gray-400">Interactive Demo</div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#6F8F72] animate-pulse"></div>
                  <span className="text-sm text-gray-300">Live Preview</span>
                </div>
                <button className="text-sm font-medium text-[#6F8F72] hover:text-[#5a7a5d] transition-colors">
                  Full Screen
                </button>
              </div>
            </div>
          </div>
        </div>

      

      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-10px) translateX(10px); }
          66% { transform: translateY(5px) translateX(-5px); }
        }
      `}</style>
    </section>
  );
};

export default Video;