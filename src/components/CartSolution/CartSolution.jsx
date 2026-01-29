'use client';

import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { Sparkles, Users, Globe, BarChart3, Building, ChevronLeft, ChevronRight } from 'lucide-react';
import Hrms from './Hrms';
import Eservice from './Eservice';
import Mis from './Mis';
import Enterprise from './Enterprise';
import PeopleSay from '../PeopleSay/PeopleSay';

/**
 * CartSolution Component
 * 
 * A comprehensive solutions showcase component featuring tabbed navigation
 * for HRMS, E-Services, MIS, and Enterprise Solutions.
 * 
 * Features:
 * - Smooth tab transitions with animations
 * - Keyboard navigation support
 * - Accessibility compliant
 * - Responsive design
 * - Performance optimized
 */
function CartSolution() {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const tabButtonRefs = useRef([]);

  const tabs = useMemo(() => [
    { id: 0, label: 'HRMS', icon: Users, Component: Hrms, description: 'Human Resource Management System' },
    { id: 1, label: 'E-Services', icon: Globe, Component: Eservice, description: 'Digital Service Solutions' },
    { id: 2, label: 'MIS', icon: BarChart3, Component: Mis, description: 'Management Information System' },
    { id: 3, label: 'Enterprise Solutions', icon: Building, Component: Enterprise, description: 'Enterprise-grade Solutions' },
  ], []);

  // Intersection Observer for hero section animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Handle tab change with smooth transition
  const handleTabChange = useCallback((newTab) => {
    if (newTab === activeTab || isTransitioning || newTab < 0 || newTab >= tabs.length) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(newTab);
      setIsTransitioning(false);
    }, 150);
  }, [activeTab, isTransitioning, tabs.length]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e, tabId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabChange(tabId);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const direction = e.key === 'ArrowRight' ? 1 : -1;
      const nextTab = (activeTab + direction + tabs.length) % tabs.length;
      handleTabChange(nextTab);
      // Focus management
      setTimeout(() => {
        tabButtonRefs.current[nextTab]?.focus();
      }, 200);
    } else if (e.key === 'Home') {
      e.preventDefault();
      handleTabChange(0);
      tabButtonRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      handleTabChange(tabs.length - 1);
      tabButtonRefs.current[tabs.length - 1]?.focus();
    }
  }, [activeTab, handleTabChange, tabs.length]);

  // Navigation helpers
  const goToPreviousTab = useCallback(() => {
    handleTabChange((activeTab - 1 + tabs.length) % tabs.length);
  }, [activeTab, handleTabChange, tabs.length]);

  const goToNextTab = useCallback(() => {
    handleTabChange((activeTab + 1) % tabs.length);
  }, [activeTab, handleTabChange, tabs.length]);

  return (
    <>
      {/* Hero Banner Section */}
      <section 
        ref={heroRef}
        className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-[#25343F] via-[#1B3C53] to-[#25343F]"
        aria-label="Solutions Hero Section"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/20 blur-3xl animate-pulse"></div>
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-white/90 animate-fade-in border border-white/20">
              <Sparkles className="w-4 h-4 text-[#6F8F72] animate-spin-slow" />
              Did you Digitally Streamline your Business?
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-white to-[#6F8F72] animate-gradient">
                  Solutions
                </span>
                <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#6F8F72]/50 via-white/50 to-[#6F8F72]/50 blur-sm"></div>
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
              Don't worry, Devora does it for you! We cover that extra mile to ensure your technology needs are met with the best in class expertise, services & support!
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section 
        className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-white via-[#F8FAFC] to-white"
        aria-label="Solutions Tabs"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.05)_50%,transparent_100%)]" />
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#25343F]/10 blur-3xl" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Modern Tabs */}
          <div className="flex flex-col items-center mb-16">
            {/* Tab Navigation - Redesigned */}
            <div 
              className="relative w-full max-w-4xl mx-auto"
              role="tablist"
              aria-label="Solution Categories"
            >
              {/* Background Container */}
              <div className="relative rounded-3xl bg-white/90 backdrop-blur-md shadow-2xl border border-gray-200/50 p-2 lg:p-3">
                {/* Active Tab Indicator with Glow */}
                <div 
                  className="absolute rounded-2xl bg-gradient-to-r from-[#6F8F72] via-[#5a7a5d] to-[#6F8F72] transition-all duration-500 ease-out shadow-lg shadow-[#6F8F72]/30"
                  style={{
                    width: `calc(${100 / tabs.length}% - 8px)`,
                    height: 'calc(100% - 8px)',
                    transform: `translateX(${activeTab * 100}%)`,
                    left: '4px',
                    top: '4px',
                  }}
                  aria-hidden="true"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
                
                {/* Tab Buttons Grid */}
                <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {tabs.map((tab, index) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        ref={(el) => (tabButtonRefs.current[index] = el)}
                        onClick={() => handleTabChange(tab.id)}
                        onKeyDown={(e) => handleKeyDown(e, tab.id)}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`tabpanel-${tab.id}`}
                        id={`tab-${tab.id}`}
                        tabIndex={isActive ? 0 : -1}
                        className={`group relative z-10 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 rounded-2xl font-semibold transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 ${
                          isActive 
                            ? 'text-white shadow-lg scale-[1.02]' 
                            : 'text-[#25343F] hover:text-[#6F8F72] hover:bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-[#6F8F72] focus:ring-offset-2'
                        }`}
                      >
                        {/* Icon with enhanced styling */}
                        <div className={`relative transition-all duration-300 ${
                          isActive ? 'scale-110' : 'group-hover:scale-110'
                        }`}>
                          <Icon 
                            className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                              isActive ? 'drop-shadow-lg' : ''
                            }`} 
                            aria-hidden="true" 
                          />
                          {isActive && (
                            <div className="absolute inset-0 bg-white/20 rounded-full blur-md -z-10"></div>
                          )}
                        </div>
                        
                        {/* Label */}
                        <span className="text-sm sm:text-base font-semibold whitespace-nowrap">
                          {tab.label}
                        </span>
                        
                        {/* Active indicator dot */}
                        {isActive && (
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-white/80"></div>
                        )}
                        
                        {/* Hover effect for inactive tabs */}
                        {!isActive && (
                          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#6F8F72]/20 transition-all duration-300"></div>
                        )}
                        
                        {/* Screen reader description */}
                        {tab.description && (
                          <span className="sr-only">{tab.description}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Navigation Arrows - Enhanced */}
            <div className="flex items-center gap-4 mt-8 sm:hidden">
              <button
                onClick={goToPreviousTab}
                aria-label="Previous solution"
                className="p-3 rounded-xl bg-white shadow-lg border border-gray-200 text-[#25343F] hover:bg-[#6F8F72] hover:text-white hover:border-[#6F8F72] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#25343F]"
                disabled={activeTab === 0}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm shadow-md border border-gray-200">
                <span className="text-sm font-bold text-[#6F8F72]">{activeTab + 1}</span>
                <span className="text-sm text-gray-400">/</span>
                <span className="text-sm font-medium text-[#25343F]">{tabs.length}</span>
              </div>
              <button
                onClick={goToNextTab}
                aria-label="Next solution"
                className="p-3 rounded-xl bg-white shadow-lg border border-gray-200 text-[#25343F] hover:bg-[#6F8F72] hover:text-white hover:border-[#6F8F72] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#25343F]"
                disabled={activeTab === tabs.length - 1}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop Navigation Help - Enhanced */}
            <div className="hidden sm:flex items-center gap-2 mt-6 px-4 py-2 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-200/50">
              <Sparkles className="w-4 h-4 text-[#6F8F72]" />
              <p className="text-sm text-gray-600">
                Use <kbd className="px-2 py-1 bg-white rounded border border-gray-300 text-xs font-mono">←</kbd> <kbd className="px-2 py-1 bg-white rounded border border-gray-300 text-xs font-mono">→</kbd> arrow keys to navigate
              </p>
            </div>
          </div>

          {/* Tab Content - Enhanced */}
          <div 
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className={`relative transition-all duration-500 ${
              isTransitioning 
                ? 'opacity-0 translate-y-4' 
                : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Content Container with Glass Effect */}
            <div className="relative rounded-3xl bg-white/60 backdrop-blur-sm shadow-xl border border-gray-200/50 overflow-hidden">
              {/* Top Border Indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6F8F72] via-[#5a7a5d] to-[#6F8F72]"></div>
              
              <div className="relative p-6 sm:p-8 lg:p-12 min-h-[400px]">
                {(() => {
                  const ActiveComponent = tabs[activeTab]?.Component;
                  return ActiveComponent ? <ActiveComponent /> : null;
                })()}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6F8F72]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#25343F]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      <PeopleSay />
    </>
  );
}

export default CartSolution;
