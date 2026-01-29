'use client';

import React, { useState } from 'react';
import { TrendingUp, Sparkles, Shield, Check, X, ArrowRight, Target, Zap, Users, BarChart3, Award } from 'lucide-react';

const Comparison = () => {
  const [activeComparison, setActiveComparison] = useState(0);

  const comparisons = [
    { 
      regular: { 
        title: 'Traditional IT Solutions', 
        icon: X, 
        color: 'red',
        items: ['High Implementation Cost', 'Complex User Experience', 'Irregular Support', 'Slow Deployment', 'Rigid Systems']
      },
      devora: { 
        title: 'Devora Solutions', 
        icon: Check, 
        color: 'emerald',
        items: ['Cost-Effective Pricing', 'Intuitive User Interface', '24/7 Dedicated Support', 'Rapid Deployment', 'Flexible & Scalable']
      }
    },
    { 
      regular: { 
        title: 'Manual Processes', 
        icon: X, 
        color: 'red',
        items: ['Error-Prone Operations', 'Time-Consuming Tasks', 'Inconsistent Results', 'Limited Scalability', 'High Maintenance']
      },
      devora: { 
        title: 'Automated Solutions', 
        icon: Check, 
        color: 'emerald',
        items: ['Error-Free Automation', 'Time-Efficient Processes', 'Consistent Quality', 'Easy Scaling', 'Low Maintenance']
      }
    },
    { 
      regular: { 
        title: 'Outdated Systems', 
        icon: X, 
        color: 'red',
        items: ['Slow Performance', 'Poor Security', 'No Updates', 'Limited Features', 'High Downtime']
      },
      devora: { 
        title: 'Modern Platform', 
        icon: Check, 
        color: 'emerald',
        items: ['High Performance', 'Enterprise Security', 'Regular Updates', 'Feature-Rich', '99.9% Uptime']
      }
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '70%', label: 'Cost Reduction', color: 'emerald' },
    { icon: Users, value: '3x', label: 'Faster Deployment', color: 'blue' },
    { icon: Shield, value: '98%', label: 'Satisfaction Rate', color: 'violet' },
    { icon: BarChart3, value: '4.5x', label: 'ROI Improvement', color: 'amber' },
  ];

  const currentComparison = comparisons[activeComparison];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-white via-[#F8FAFC] to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.05)_50%,transparent_100%)]" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-red-100/20 blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#25343F] shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#6F8F72]" />
            Why Choose Us
          </div>
          
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#25343F] sm:text-5xl lg:text-6xl mb-6">
            The Clear{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-[#6F8F72]">
                Advantage
              </span>
              <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-red-200 via-orange-200 to-[#6F8F72]/50 blur-sm"></div>
            </span>
          </h2>
          
          <p className="text-lg leading-relaxed text-[#64748B] max-w-2xl mx-auto">
            Discover why leading businesses choose Devora over traditional IT solutions 
            for superior performance, cost efficiency, and exceptional results.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-16 lg:mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = {
                emerald: 'bg-[#6F8F72]/10 text-[#6F8F72]',
                blue: 'bg-[#25343F]/10 text-[#25343F]',
                violet: 'bg-[#1B3C53]/10 text-[#1B3C53]',
                amber: 'bg-[#6F8F72]/10 text-[#6F8F72]'
              };
              
              return (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-2xl bg-white/80 p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 ${colorClasses[stat.color].split(' ')[0]} opacity-10 blur-xl`} />
                  <div className="relative z-10 flex flex-col items-center text-center gap-3">
                    <div className={`rounded-xl ${colorClasses[stat.color].split(' ')[0]} p-3`}>
                      <Icon className={`w-6 h-6 ${colorClasses[stat.color].split(' ')[1]}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#25343F]">{stat.value}</div>
                      <div className="text-sm font-medium text-[#64748B]">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl bg-white/80 p-2 backdrop-blur-sm shadow-lg ring-1 ring-gray-200/50">
            {comparisons.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveComparison(index)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeComparison === index 
                    ? 'bg-linear-to-r from-[#6F8F72] to-[#5a7a5d] text-white shadow-md scale-105' 
                    : 'text-[#25343F] hover:text-[#1B3C53] hover:bg-gray-50'
                }`}
              >
                Comparison {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Main Comparison */}
        <div className="relative max-w-6xl mx-auto">
          {/* VS Badge - Enhanced */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-[#6F8F72] rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="relative bg-white rounded-full px-8 py-4 shadow-2xl border-2 border-gray-100">
                <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-[#6F8F72] bg-clip-text text-transparent">
                  VS
                </span>
              </div>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Traditional Solutions */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-red-200/50 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 via-transparent to-transparent"></div>
              
            
              
              {/* Header */}
              <div className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-8 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                <div className="relative flex items-center gap-4">
                  <div className="rounded-xl bg-white/20 p-4 backdrop-blur-sm border border-white/30">
                    <X className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-white">{currentComparison.regular.title}</h3>
                    <p className="text-red-100 text-sm">Traditional Approach</p>
                  </div>
                </div>
              </div>

              <div className="p-8 relative">
                <ul className="space-y-3.5">
                  {currentComparison.regular.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                        <X className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-[#25343F] leading-relaxed pt-0.5">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Footer */}
              <div className="border-t-2 border-red-100 p-6 bg-gradient-to-r from-red-50/50 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-[#64748B]">Common Issues</div>
                  <div className="text-sm font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full">High Complexity</div>
                </div>
              </div>
            </div>

            {/* Devora Solutions */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#6F8F72]/40 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 lg:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6F8F72]/10 via-transparent to-transparent"></div>
              
           

              {/* Header */}
              <div className="relative bg-gradient-to-br from-[#6F8F72] via-[#5a7a5d] to-[#6F8F72] p-8 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]"></div>
                <div className="relative flex items-center gap-4">
                  <div className="rounded-xl bg-white/20 p-4 backdrop-blur-sm border border-white/30">
                    <Check className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-white">{currentComparison.devora.title}</h3>
                    <p className="text-white/90 text-sm">Modern Solution</p>
                  </div>
                </div>
              </div>

              <div className="p-8 relative">
                <ul className="space-y-3.5">
                  {currentComparison.devora.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#6F8F72]/20 flex items-center justify-center mt-0.5 group-hover/item:scale-110 group-hover/item:bg-[#6F8F72]/30 transition-all">
                        <Check className="w-4 h-4 text-[#6F8F72]" />
                      </div>
                      <span className="text-[#25343F] leading-relaxed pt-0.5 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Footer */}
              <div className="border-t-2 border-[#6F8F72]/20 p-6 bg-gradient-to-r from-[#6F8F72]/5 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-[#64748B]">Key Benefits</div>
                  <div className="text-sm font-bold text-[#6F8F72] bg-[#6F8F72]/10 px-3 py-1 rounded-full">Optimal Solution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;