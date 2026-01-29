'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export function TwoCol({ title, desc, img, reverse = false }) {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  const getImageSrc = (img) => img?.src || img || '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* Text Content */}
      <div 
        className={`relative ${reverse ? 'md:order-2' : ''} transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
        style={{ transitionDelay: reverse ? '200ms' : '0ms' }}
      >
        <div className="relative px-4 sm:px-0">
          {/* Decorative Element */}
          <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#6F8F72]/10 blur-3xl animate-pulse"></div>
          
          {/* Title with enhanced styling */}
          <h4 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#25343F] mb-4 sm:mb-6 leading-tight group">
            <span className="relative z-10 inline-block">
              {title}
            </span>
            <div className="absolute -bottom-2 left-0 h-1 w-0 bg-gradient-to-r from-[#6F8F72] to-[#5a7a5d] group-hover:w-full transition-all duration-500"></div>
          </h4>
        </div>
        
        {/* Description with better typography */}
        <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
          {desc}
        </p>

        {/* Feature highlight indicator */}
        <div className="flex items-center gap-2 text-[#6F8F72] text-xs sm:text-sm font-medium px-4 sm:px-0">
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Key Feature</span>
        </div>
      </div>

      {/* Image Content */}
      <div 
        className={`relative ${reverse ? 'md:order-1' : ''} transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
        style={{ transitionDelay: reverse ? '0ms' : '200ms' }}
      >
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/50 group cursor-pointer mx-4 sm:mx-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-[#6F8F72]/10 via-transparent to-[#25343F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>
          
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image 
              src={getImageSrc(img)} 
              alt={title} 
              width={900} 
              height={650}
              className={`w-full h-auto object-cover transition-all duration-700 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } group-hover:scale-105 md:group-hover:scale-110`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
              quality={90}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
            
            {/* Loading Placeholder */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300 animate-pulse"></div>
            )}
          </div>
          
          {/* Border Effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#6F8F72]/40 transition-all duration-500 rounded-2xl sm:rounded-3xl z-30 pointer-events-none"></div>
          
          {/* Corner Accent */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#6F8F72]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
}


export function Section({ title, bgClass, topRounded, bottomRounded, children, icon, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const Icon = icon || Sparkles;
  
  const isEven = index !== undefined && index % 2 === 0;
  const alternatingBg = isEven ? 'bg-white' : 'bg-gray-50';
  
  const bgColors = {
    'bg-light2': 'bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC]',
    'bg-light6': 'bg-gradient-to-br from-white via-[#F8FAFC] to-white',
    'bg-light7': 'bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC]',
    'bg-light5': 'bg-gradient-to-br from-white via-[#F8FAFC] to-white',
    'bg-light3': 'bg-gradient-to-br from-[#F8FAFC] to-white',
    'bg-light8': 'bg-gradient-to-br from-white to-[#F8FAFC]',
  };

  // Prioritize index-based alternating backgrounds, fallback to bgClass if no index
  const sectionBg = index !== undefined ? alternatingBg : (bgClass && bgColors[bgClass] ? bgColors[bgClass] : 'bg-white');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.05)_50%,transparent_100%)]"></div>
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/5 blur-3xl"></div>
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#25343F]/5 blur-3xl"></div>
      
      <div className={`container relative mx-auto ${sectionBg} ${
        topRounded ? 'rounded-t-2xl sm:rounded-t-3xl' : ''
      } ${
        bottomRounded ? 'rounded-b-2xl sm:rounded-b-3xl' : ''
      } px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 border border-gray-200/50 backdrop-blur-sm transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Enhanced Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 rounded-full bg-linear-to-r from-[#6F8F72]/10 to-[#6F8F72]/5 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-semibold text-[#6F8F72] border border-[#6F8F72]/20 shadow-sm">
            <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{title.split(' ')[0]}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#25343F] mb-3 sm:mb-4 leading-tight px-2 sm:px-0">
            {title}
          </h2>
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
        
        <div className="pt-10 sm:pt-12 md:pt-16 text-center">
          <Link
            href="/ourservice"
            className="group relative inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-linear-to-r from-[#6F8F72] via-[#5a7a5d] to-[#6F8F72] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#6F8F72]/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="relative z-10 whitespace-nowrap">SEE ALL THE SERVICES</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
