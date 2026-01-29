'use client';

import React, { useState } from 'react';
import Banner from '../banner/Banner';
import { Solution } from '../Utility';
import PeopleSay from '../PeopleSay/PeopleSay';
import Web from './Web';
import ServiceApp from './ServiceApp';
import Business from './Business';
import Technology from './Technology';
import { Sparkles, ChevronRight } from 'lucide-react';

function OurService() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabContent = [
    { component: <Web />, label: 'Web Development' },
    { component: <ServiceApp />, label: 'App Development' },
    { component: <Business />, label: 'Business Automation' },
    { component: <Technology />, label: 'Technology Consulting' },
  ];

  return (
    <>
      <Banner
        className='bg-light6'
        subtitle='Did you Digitally Streamline your Business?'
        title='Our Services'
        bodytext="Don't worry, Devora does it for you! We cover that extra mile to ensure your technology needs are meet with the best in the class expertise, services & support!"
      />

      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />
        <div className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-emerald-100/30 blur-3xl" />
        <div className="absolute -right-20 bottom-1/3 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="container relative mx-auto px-4">
          {/* Enhanced Tabs Header */}
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Our Expertise
            </div>
            
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              Comprehensive{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600">
                  Digital Solutions
                </span>
                <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-emerald-200 via-blue-200 to-violet-200 blur-sm"></div>
              </span>
            </h2>
            
            <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of technology services designed to transform your business 
              and drive digital innovation.
            </p>
          </div>

          {/* Enhanced DaisyUI Tabs */}
          <div className="relative mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {Solution.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => handleTabChange(index)}
                  className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === index 
                      ? 'text-white shadow-lg' 
                      : 'text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-md'
                  }`}
                  style={{
                    background: activeTab === index 
                      ? 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)' 
                      : ''
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {item.title}
                    {activeTab === index && (
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </span>
                  
                  {/* Active indicator */}
                  {activeTab === index && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Container */}
          <div className="relative">
            {/* Content wrapper with enhanced styling */}
            <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border border-gray-200/50">
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10" />
              
              {/* Active tab indicator */}
              <div className="absolute top-0 left-0 h-1 w-full">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-500"
                  style={{
                    width: '25%',
                    transform: `translateX(${activeTab * 100}%)`
                  }}
                />
              </div>

              {/* Tab Content */}
              <div className="relative z-10 p-8 lg:p-12">
                <div className="animate-fade-in">
                  {tabContent[activeTab]?.component}
                </div>
              </div>

              {/* Navigation help text */}
              <div className="relative z-10 border-t border-gray-200/50 p-6 bg-white/50 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{tabContent[activeTab]?.label}</span>
                    <span className="mx-2">•</span>
                    <span>Service {activeTab + 1} of {tabContent.length}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleTabChange((activeTab - 1 + tabContent.length) % tabContent.length)}
                      className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={activeTab === 0}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => handleTabChange((activeTab + 1) % tabContent.length)}
                      className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
        `}</style>
      </section>

      <PeopleSay />
    </>
  );
}

export default OurService;