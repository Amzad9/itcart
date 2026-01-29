'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TrendingUp, Sparkles, Zap, Shield, Check, X, ArrowRight, Target, BarChart3, Users, Cpu, Globe } from 'lucide-react';

function Business() {
  const [activeTab, setActiveTab] = useState('digital');

  const categories = [
    { 
      name: 'Dependency', 
      icon: Users,
      description: 'Reliance on personnel versus automated systems'
    },
    { 
      name: 'Possibility of Error', 
      icon: Shield,
      description: 'Human error risk vs system accuracy'
    },
    { 
      name: 'Growth', 
      icon: TrendingUp,
      description: 'Scalability and expansion capabilities'
    },
    { 
      name: 'Tracking KPI\'s', 
      icon: BarChart3,
      description: 'Performance measurement and monitoring'
    },
    { 
      name: 'Generating Reports', 
      icon: Target,
      description: 'Data analysis and reporting processes'
    },
    { 
      name: 'Administration', 
      icon: Cpu,
      description: 'Management and operational efficiency'
    },
    { 
      name: 'Engaging employees in Unison',
      icon: Globe,
      description: 'Team collaboration and synchronization'
    }
  ];

  const traditionalValues = [
    'Human',
    'High',
    'Difficult',
    'Difficult',
    'Manually',
    'In person',
    'Difficult'
  ];

  const digitalValues = [
    'System',
    'Low',
    'Easy to Scale',
    'Measured in real time',
    'Automatically',
    'From anywhere',
    'Easy'
  ];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/40 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.05)_50%,transparent_100%)]" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-red-100/30 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#25343F] shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-[#6F8F72]" />
            Digital Transformation
          </div>
          
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#25343F] sm:text-5xl lg:text-6xl mb-6">
            Transforming Businesses into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-[#25343F] to-[#1B3C53]">
              Digital Enterprises
            </span>
          </h2>
          
          <p className="text-lg leading-relaxed text-[#64748B] max-w-3xl mx-auto">
            Devora helps businesses evolve into technologically systematized enterprises that automate 
            processes for optimal performance, scalability, and sustainable growth.
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl bg-white/80 p-2 backdrop-blur-sm shadow-lg ring-1 ring-gray-200/50">
            <button
              onClick={() => setActiveTab('traditional')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'traditional' 
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md' 
                : 'text-[#25343F] hover:text-[#1B3C53]'}`}
            >
              Traditional Business
            </button>
            <button
              onClick={() => setActiveTab('digital')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'digital' 
                ? 'bg-gradient-to-r from-[#6F8F72] to-[#5a7a5d] text-white shadow-md' 
                : 'text-[#25343F] hover:text-[#1B3C53]'}`}
            >
              Digital Enterprise
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-200">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Categories Header */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-white/10 p-2">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Comparison Categories</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Key business aspects transformed through digital innovation
              </p>
            </div>

            {/* Traditional Header */}
            <div className={`p-8 transition-all duration-300 ${activeTab === 'traditional' ? 'bg-red-50' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`rounded-full ${activeTab === 'traditional' ? 'bg-red-100' : 'bg-gray-100'} p-2`}>
                    <X className={`w-5 h-5 ${activeTab === 'traditional' ? 'text-red-600' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Traditional Format</h3>
                </div>
                {activeTab === 'traditional' && (
                  <div className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                    Common Challenges
                  </div>
                )}
              </div>
              <p className="text-gray-600 text-sm">
                Manual processes with higher operational overhead
              </p>
            </div>

            {/* Digital Header */}
            <div className={`p-8 transition-all duration-300 ${activeTab === 'digital' ? 'bg-emerald-50' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`rounded-full ${activeTab === 'digital' ? 'bg-emerald-100' : 'bg-gray-100'} p-2`}>
                    <Check className={`w-5 h-5 ${activeTab === 'digital' ? 'text-emerald-600' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Digital Enterprise</h3>
                </div>
                {activeTab === 'digital' && (
                  <div className="text-sm font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                    Optimal Solution
                  </div>
                )}
              </div>
              <p className="text-gray-600 text-sm">
                Automated systems with enhanced efficiency
              </p>
            </div>
          </div>

          {/* Table Content */}
          <div className="divide-y divide-gray-100">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 md:grid-cols-3 gap-0 transition-all duration-300 hover:bg-gray-50/50 ${isEven ? 'bg-gray-50/30' : ''}`}
                >
                  {/* Category */}
                  <div className="p-6 md:p-8 flex items-start gap-4">
                    <div className="shrink-0 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 p-3">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{category.name}</h4>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  {/* Traditional Value */}
                  <div className={`p-6 md:p-8 flex items-center justify-center border-l border-gray-100 ${activeTab === 'traditional' ? 'bg-red-50/50' : ''}`}>
                    <div className="text-center">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === 'traditional' ? 'bg-red-100' : 'bg-gray-100'}`}>
                        <X className={`w-4 h-4 ${activeTab === 'traditional' ? 'text-red-600' : 'text-gray-600'}`} />
                        <span className={`font-semibold ${activeTab === 'traditional' ? 'text-red-700' : 'text-gray-700'}`}>
                          {traditionalValues[index]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Digital Value */}
                  <div className={`p-6 md:p-8 flex items-center justify-center border-l border-gray-100 ${activeTab === 'digital' ? 'bg-emerald-50/50' : ''}`}>
                    <div className="text-center">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === 'digital' ? 'bg-emerald-100' : 'bg-gray-100'}`}>
                        <Check className={`w-4 h-4 ${activeTab === 'digital' ? 'text-emerald-600' : 'text-gray-600'}`} />
                        <span className={`font-semibold ${activeTab === 'digital' ? 'text-emerald-700' : 'text-gray-700'}`}>
                          {digitalValues[index]}
                        </span>
                      </div>
                      {index === 2 && activeTab === 'digital' && (
                        <div className="mt-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                          +300% Scalability
                        </div>
                      )}
                      {index === 3 && activeTab === 'digital' && (
                        <div className="mt-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                          Real-time Analytics
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Table Footer */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Ready to Transform Your Business?</h4>
                <p className="text-gray-600">
                  Discover how digital transformation can optimize your operations and drive growth
                </p>
              </div>
              <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#6F8F72] to-[#5a7a5d] px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center gap-3">
                  Start Digital Transformation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}

export default Business;