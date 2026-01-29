'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Sparkles, BookOpen, Video, FileText, Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';

function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      id: 1,
      title: 'Getting Started',
      description: 'The basic things you need to know to start working smarter.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      icon: BookOpen,
      articles: 12,
      color: 'primary'
    },
    {
      id: 2,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides to help you master Devora features.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
      icon: Video,
      articles: 25,
      color: 'secondary'
    },
    {
      id: 3,
      title: 'Documentation',
      description: 'Comprehensive guides and manuals for all Devora features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      icon: FileText,
      articles: 45,
      color: 'tertiary'
    }
  ];

  const colorClasses = {
    primary: 'bg-[#25343F]/10 text-[#25343F] border-[#25343F]/20',
    secondary: 'bg-[#6F8F72]/10 text-[#6F8F72] border-[#6F8F72]/20',
    tertiary: 'bg-[#1B3C53]/10 text-[#1B3C53] border-[#1B3C53]/20'
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-white via-[#F8FAFC] to-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.05)_50%,transparent_100%)]" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#25343F]/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#25343F] shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#6F8F72]" />
            Help Center
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#25343F] mb-4">
            Help Center - Tech Tutorials
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed mb-8">
            Our whitepaper library, manuals and product guides to help end-users better utilize our solutions and services!
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                <Search className="w-5 h-5 text-[#64748B]" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for anything..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 bg-white text-[#25343F] placeholder-[#64748B] focus:ring-2 focus:ring-[#6F8F72] focus:border-transparent outline-none transition-all shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Help Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {helpCategories.map((category) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color];
            
            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 z-10 rounded-xl ${colors.split(' ')[0]} p-3 shadow-lg`}>
                    <Icon className={`w-6 h-6 ${colors.split(' ')[1]}`} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#25343F] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-[#64748B] mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#64748B]">
                      {category.articles} articles
                    </span>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#6F8F72] hover:text-[#5a7a5d] transition-colors group/link"
                    >
                      Start today
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#6F8F72]/30 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-[#25343F] mb-8 text-center">
              Can't find what you are looking for?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email Support */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-[#25343F]/5 to-transparent border border-gray-200 hover:border-[#6F8F72]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#25343F]/10 p-3 flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#25343F]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#25343F] mb-2">E-mail us</h4>
                    <a 
                      href="mailto:help@devora.com" 
                      className="text-[#6F8F72] font-semibold hover:text-[#5a7a5d] transition-colors"
                    >
                      help@devora.com
                    </a>
                    <p className="text-sm text-[#64748B] mt-2">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Phone Support */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-[#6F8F72]/5 to-transparent border border-gray-200 hover:border-[#6F8F72]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#6F8F72]/10 p-3 flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#6F8F72]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#25343F] mb-2">Request a call-back</h4>
                    <a 
                      href="tel:+442033184599" 
                      className="text-[#6F8F72] font-semibold hover:text-[#5a7a5d] transition-colors"
                    >
                      UK +44 20 3318 4599
                    </a>
                    <p className="text-sm text-[#64748B] mt-2">Mon-Fri, 9am-6pm GMT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { icon: CheckCircle, text: '24/7 Support Available' },
                  { icon: CheckCircle, text: 'Expert Team Ready' },
                  { icon: CheckCircle, text: 'Quick Response Time' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-[#6F8F72]" />
                      <span className="text-sm text-[#64748B]">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpCenter;
