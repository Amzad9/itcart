'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { NavData } from '../Utility';
import { ChevronRight, Sparkles, Building,BarChart3, Check, ArrowRight, Zap, Target, Users, Cpu, Shield, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      title: 'Digital Collaboration Portal',
      description: 'Centralized platform for seamless team collaboration and project management',
      icon: Users,
      features: ['Real-time Collaboration', 'Document Management', 'Video Conferencing', 'Task Tracking']
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      title: 'Enterprise Solutions',
      description: 'Comprehensive business solutions for digital transformation',
      icon: Building,
      features: ['Process Automation', 'Data Analytics', 'System Integration', 'Cloud Migration']
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      title: 'Cloud Infrastructure',
      description: 'Secure and scalable cloud solutions for modern businesses',
      icon: Cpu,
      features: ['Cloud Architecture', 'Security Management', 'Performance Optimization', 'Cost Control']
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for business growth',
      icon: BarChart3,
      features: ['BI Dashboards', 'Predictive Analytics', 'Real-time Reporting', 'Data Visualization']
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full px-4 py-2.5 text-sm font-medium bg-[#25343F]/10 text-[#25343F] shadow-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#6F8F72]" />
            Our Services
          </div>
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#25343F] sm:text-5xl lg:text-6xl mb-6">
          Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-[#25343F] to-[#1B3C53]">
              Digital Solutions
            </span>
          </h2>
        
          
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-[#64748B]">
            Delivering innovative technology solutions that drive business growth and operational excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 border border-gray-100"
              >
                {/* Decorative Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6F8F72]/5 via-transparent to-[#25343F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Icon Badge with Enhanced Design */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#6F8F72] rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative rounded-2xl p-4 shadow-2xl bg-gradient-to-br from-[#6F8F72] to-[#5a7a5d] border border-white/20">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Title Overlay on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 relative">
                  {/* Description */}
                  <p className="mb-8 leading-relaxed text-[#64748B] text-base">
                    {service.description}
                  </p>

                  {/* Action Button with Enhanced Design */}
                  <button className="group/btn relative w-full overflow-hidden rounded-xl px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#6F8F72] to-[#5a7a5d] hover:from-[#5a7a5d] hover:to-[#6F8F72] shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative flex items-center justify-center gap-3">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#6F8F72]/30 transition-all duration-500 pointer-events-none"></div>
                
                {/* Corner Accent */}
                <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-gradient-to-br from-[#6F8F72]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;