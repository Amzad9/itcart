'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin, Mail, Sparkles, Award, Users, TrendingUp, Twitter } from 'lucide-react';
import ContactUs from '../ContactUs/ContactUs';

const OurTeam = () => {
  const leadershipTeam = [
    {
      id: 1,
      name: 'Siraj Uddin',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces',
      bio: 'Visionary leader with 15+ years of experience in digital transformation',
      linkedin: '#',
      email: 'siraj@devora.com',
      twitter: '#'
    },
    {
      id: 2,
      name: 'Rohim Uddin',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=faces',
      bio: 'Tech innovator specializing in cloud architecture and enterprise solutions',
      linkedin: '#',
      email: 'rohim@devora.com',
      twitter: '#'
    },
    {
      id: 3,
      name: 'Ahmed Hassan',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=faces',
      bio: 'Product strategist focused on creating user-centric digital experiences',
      linkedin: '#',
      email: 'ahmed@devora.com',
      twitter: '#'
    }
  ];

  const teamMembers = [
    {
      id: 4,
      name: 'Fatima Ali',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=faces',
      bio: 'Full-stack engineer passionate about scalable and maintainable code',
      linkedin: '#',
      email: 'fatima@devora.com',
      twitter: '#'
    },
    {
      id: 5,
      name: 'Mohammad Khan',
      role: 'Head of Sales',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=faces',
      bio: 'Sales leader with expertise in enterprise software solutions',
      linkedin: '#',
      email: 'mohammad@devora.com',
      twitter: '#'
    },
    {
      id: 6,
      name: 'Ayesha Rahman',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=faces',
      bio: 'Marketing strategist driving brand growth and customer engagement',
      linkedin: '#',
      email: 'ayesha@devora.com',
      twitter: '#'
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Team Members', color: 'secondary' },
    { icon: Award, value: '15+', label: 'Years Experience', color: 'primary' },
    { icon: TrendingUp, value: '500+', label: 'Projects Delivered', color: 'tertiary' },
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
              Meet the Faces Behind{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-white to-[#6F8F72]">
                  Devora
                </span>
                <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#6F8F72]/50 via-white/50 to-[#6F8F72]/50 blur-sm"></div>
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
              We are a group of professionals with a specialized skill-set, developed over years of high functioning work in demanding scenarios! 
              Our team is well equipped with the problem solving expertise and are better able to understand your Business processes, its pivotal points, redundancies, the problem areas and thereby precisely map the process with the reliable and robust technological solution!
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-white via-[#F8FAFC] to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.05)_50%,transparent_100%)]" />
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#25343F]/10 blur-3xl" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#25343F] shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm">
              <Award className="w-4 h-4 text-[#6F8F72]" />
              Leadership Team
            </div>
            
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#25343F] sm:text-5xl lg:text-6xl mb-6">
              Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-[#25343F] to-[#1B3C53]">
                  Leadership
                </span>
                <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#6F8F72]/50 via-[#25343F]/50 to-[#1B3C53]/50 blur-sm"></div>
              </span>
            </h2>
            
            <p className="text-lg leading-relaxed text-[#64748B] max-w-2xl mx-auto">
              The experienced leaders who guide our vision and drive innovation.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-16 lg:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const colorClasses = {
                  primary: 'bg-[#25343F]/10 text-[#25343F]',
                  secondary: 'bg-[#6F8F72]/10 text-[#6F8F72]',
                  tertiary: 'bg-[#1B3C53]/10 text-[#1B3C53]'
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
                        <div className="text-3xl font-bold text-[#25343F]">{stat.value}</div>
                        <div className="text-sm font-medium text-[#64748B]">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Leadership Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {leadershipTeam.map((member) => (
              <div 
                key={member.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Social Links on Hover */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-10">
                    <a 
                      href={member.linkedin}
                      className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-[#6F8F72] hover:text-white transition-all duration-300 shadow-lg"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5 text-[#25343F] group-hover:text-white transition-colors" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-[#6F8F72] hover:text-white transition-all duration-300 shadow-lg"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5 text-[#25343F] group-hover:text-white transition-colors" />
                    </a>
                    <a 
                      href={member.twitter}
                      className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-[#6F8F72] hover:text-white transition-all duration-300 shadow-lg"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-5 h-5 text-[#25343F] group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#25343F] mb-1 group-hover:text-[#6F8F72] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#6F8F72] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#64748B] text-sm leading-relaxed line-clamp-2">
                    {member.bio}
                  </p>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#6F8F72]/30 transition-all duration-500"></div>
                
                {/* Corner Accent */}
                <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-gradient-to-br from-[#6F8F72]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Team Members Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#25343F] mb-4">Our Team</h3>
              <p className="text-[#64748B] max-w-2xl mx-auto">
                The passionate professionals who drive innovation and deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Social Links on Hover */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-10">
                      <a 
                        href={member.linkedin}
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-[#6F8F72] hover:text-white transition-all duration-300"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4 text-[#25343F] group-hover:text-white transition-colors" />
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-[#6F8F72] hover:text-white transition-all duration-300"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4 text-[#25343F] group-hover:text-white transition-colors" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-[#25343F] mb-1 group-hover:text-[#6F8F72] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-[#6F8F72] font-semibold text-sm">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#6F8F72]/30 transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
    </>
  );
};

export default OurTeam;
