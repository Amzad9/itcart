'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Users, Globe, BarChart3, Building, ArrowRight, Zap, Shield, Target, Cpu } from 'lucide-react';

const solutions = [
  {
    title: 'HRMS Automation',
    description: 'Streamline employee lifecycle management with a centralized, secure platform.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
    icon: Users,
    color: 'blue'
  },
  {
    title: 'E-Services Automation',
    description: 'Digitally transform customer-facing services with self‑service portals and workflows.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    icon: Globe,
    color: 'emerald'
  },
  {
    title: 'MIS Solution',
    description: 'Get real‑time insights with tailored dashboards and KPIs for data‑driven decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    icon: BarChart3,
    color: 'violet'
  },
  {
    title: 'Enterprise Solutions',
    description: 'Unify processes across departments with scalable enterprise solutions.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    icon: Building,
    color: 'amber'
  },
];

function Solution() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const colorClasses = {
    primary: { 
      bg: 'bg-[#25343F]/10', 
      text: 'text-[#25343F]', 
      border: 'border-[#25343F]/20',
      gradient: 'from-[#25343F] to-[#1B3C53]',
      light: 'bg-[#25343F]/10'
    },
    secondary: { 
      bg: 'bg-[#6F8F72]/10', 
      text: 'text-[#6F8F72]', 
      border: 'border-[#6F8F72]/20',
      gradient: 'from-[#6F8F72] to-[#5a7a5d]',
      light: 'bg-[#6F8F72]/10'
    },
    tertiary: { 
      bg: 'bg-[#1B3C53]/10', 
      text: 'text-[#1B3C53]', 
      border: 'border-[#1B3C53]/20',
      gradient: 'from-[#1B3C53] to-[#25343F]',
      light: 'bg-[#1B3C53]/10'
    },
    blue: { 
      bg: 'bg-[#25343F]/10', 
      text: 'text-[#25343F]', 
      border: 'border-[#25343F]/20',
      gradient: 'from-[#25343F] to-[#1B3C53]',
      light: 'bg-[#25343F]/10'
    },
    emerald: { 
      bg: 'bg-[#6F8F72]/10', 
      text: 'text-[#6F8F72]', 
      border: 'border-[#6F8F72]/20',
      gradient: 'from-[#6F8F72] to-[#5a7a5d]',
      light: 'bg-[#6F8F72]/10'
    },
    violet: { 
      bg: 'bg-[#1B3C53]/10', 
      text: 'text-[#1B3C53]', 
      border: 'border-[#1B3C53]/20',
      gradient: 'from-[#1B3C53] to-[#25343F]',
      light: 'bg-[#1B3C53]/10'
    },
    amber: { 
      bg: 'bg-[#6F8F72]/10', 
      text: 'text-[#6F8F72]', 
      border: 'border-[#6F8F72]/20',
      gradient: 'from-[#6F8F72] to-[#5a7a5d]',
      light: 'bg-[#6F8F72]/10'
    }
  };

  const stats = [
    { icon: Zap, value: '40%', label: 'Faster Deployment', color: 'secondary' },
    { icon: Shield, value: '99.9%', label: 'Uptime Guarantee', color: 'primary' },
    { icon: Target, value: '3.5x', label: 'ROI Improvement', color: 'tertiary' },
    { icon: Cpu, value: '50+', label: 'Pre-built Modules', color: 'secondary' },
  ];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/40 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.05)_50%,transparent_100%)]" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#25343F]/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#25343F] shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#6F8F72]" />
            Enterprise Solutions
          </div>
          
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#25343F] sm:text-5xl lg:text-6xl mb-6">
            Ready‑to‑Deploy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-[#25343F] to-[#1B3C53]">
              Digital Solutions
            </span>
          </h2>
          
          <p className="text-lg leading-relaxed text-[#64748B] max-w-2xl mx-auto">
            Accelerate your digital transformation with our pre‑built solution stacks, 
            delivering enterprise‑grade reliability, faster deployment, and measurable ROI.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-16 lg:mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const colors = colorClasses[stat.color];
              
              return (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-2xl bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 ${colors.bg} opacity-10 blur-xl`} />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`rounded-xl ${colors.bg} p-3`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
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

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const colors = colorClasses[solution.color];
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-500 group-hover:-translate-y-3`}>
                  {/* Decorative Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    
                    {/* Icon Badge with Enhanced Design */}
                    <div className="absolute top-6 right-6 z-20">
                      <div className="relative">
                        <div className={`absolute inset-0 ${colors.bg} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                        <div className={`relative rounded-2xl ${colors.bg} p-4 shadow-2xl border border-white/20`}>
                          <Icon className={`w-7 h-7 ${colors.text}`} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-1">{solution.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    <p className="text-[#64748B] mb-6 leading-relaxed text-sm">
                      {solution.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <a 
                      href="#" 
                      className={`group/link inline-flex items-center gap-2 text-sm font-semibold ${colors.text} hover:gap-3 transition-all duration-300`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#6F8F72]/30 transition-all duration-500 pointer-events-none`}></div>
                </div>
                
                {/* Floating Number Badge */}
                <div className="absolute -top-3 -left-3 z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#25343F] to-[#1B3C53] font-bold text-white text-sm shadow-xl border-2 border-white">
                    {index + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

     
      </div>
    </section>
  );
}

export default Solution;