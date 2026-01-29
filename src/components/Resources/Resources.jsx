'use client';

import React, { useState } from 'react';
import { Sparkles, BookOpen, FileText, Newspaper, HelpCircle } from 'lucide-react';
import NewsLetter from '../NewsLetter/NewsLetter';
import HelpCenter from './HelpCenter';
import News from './News';
import CaseSudies from './CaseSudies';
import Blog from './Blog';

function Resources() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Blogs', icon: BookOpen, component: <Blog /> },
    { id: 1, label: 'Case Studies', icon: FileText, component: <CaseSudies /> },
    { id: 2, label: 'News', icon: Newspaper, component: <News /> },
    { id: 3, label: 'Help Center', icon: HelpCircle, component: <HelpCenter /> },
  ];

  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-[#25343F] via-[#1B3C53] to-[#25343F]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/20 blur-3xl"></div>
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/20 blur-3xl"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-white/90">
              <Sparkles className="w-4 h-4 text-[#6F8F72]" />
              Make Your Work Efficient With
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              Know Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-white to-[#6F8F72]">
                  Technologies
                </span>
                <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#6F8F72]/50 via-white/50 to-[#6F8F72]/50 blur-sm"></div>
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
              Keep up with our journey in the highly competitive world of Technology and experience our growth through thick and thin!
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-b from-white via-[#F8FAFC] to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.05)_50%,transparent_100%)]" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-2xl bg-white/80 p-2 backdrop-blur-sm shadow-lg ring-1 ring-gray-200/50">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.id 
                        ? 'bg-gradient-to-r from-[#6F8F72] to-[#5a7a5d] text-white shadow-md scale-105' 
                        : 'text-[#25343F] hover:text-[#1B3C53] hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {tabs[activeTab]?.component}
          </div>
        </div>
      </section>

      <NewsLetter />
    </>
  );
}

export default Resources;
