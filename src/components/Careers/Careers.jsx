'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  Briefcase, 
  Code, 
  Users, 
  TrendingUp, 
  MapPin, 
  Clock, 
  ArrowRight,
  GraduationCap,
  Target,
  Zap,
  Award
} from 'lucide-react';

function Careers() {
  const [activeCategory, setActiveCategory] = useState('all');

  const careerCategories = [
    {
      id: 'internships',
      title: 'Internships',
      subtitle: 'College to Corporate',
      icon: GraduationCap,
      description: 'A golden opportunity for graduates to jump on the tech-wagon and get hands-on experience on real projects!',
      color: 'primary'
    },
    {
      id: 'development',
      title: 'Development',
      subtitle: 'Coders & Problem Solvers',
      icon: Code,
      description: 'We call on the best developers around Globe to join Devora family on a journey to solve world problems through coding!',
      color: 'secondary'
    },
    {
      id: 'sales',
      title: 'Sales & Marketing',
      subtitle: 'People | Product | Promotion',
      icon: Users,
      description: 'Do you just love selling a technology solution? Are you a marketing researcher keen on exploring IT Market? Then Devora might just be your working home!',
      color: 'tertiary'
    },
    {
      id: 'management',
      title: 'Management',
      subtitle: 'Leadership Roles',
      icon: Target,
      description: 'Vision, Initiative, and a seasoned Leader with loads and loads of top tier management experience!',
      color: 'primary'
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Software Engineer - Android',
      department: 'Engineering',
      location: 'Redwood City, CA',
      type: 'Full-time',
      category: 'development'
    },
    {
      id: 2,
      title: 'Senior Software Engineer - iOS',
      department: 'Engineering',
      location: 'Redwood City, CA',
      type: 'Full-time',
      category: 'development'
    },
    {
      id: 3,
      title: 'Senior Product Manager',
      department: 'Product',
      location: 'Redwood City, CA',
      type: 'Full-time',
      category: 'management'
    },
    {
      id: 4,
      title: 'Quality Engineer',
      department: 'R&D',
      location: 'Redwood City, CA',
      type: 'Full-time',
      category: 'development'
    },
    {
      id: 5,
      title: 'Public Sector - National Sales Director',
      department: 'R&D',
      location: 'Redwood City, CA',
      type: 'Full-time',
      category: 'sales'
    },
    {
      id: 6,
      title: 'Software Engineering Intern',
      department: 'Engineering',
      location: 'Remote',
      type: 'Internship',
      category: 'internships'
    }
  ];

  const benefits = [
    { icon: Zap, title: 'Fast Growth', desc: 'Accelerate your career' },
    { icon: Award, title: 'Competitive Pay', desc: 'Industry-leading salaries' },
    { icon: Users, title: 'Great Team', desc: 'Work with experts' },
    { icon: TrendingUp, title: 'Learning', desc: 'Continuous development' }
  ];

  const filteredJobs = activeCategory === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === activeCategory);

  const colorClasses = {
    primary: 'bg-[#25343F]/10 text-[#25343F] border-[#25343F]/20',
    secondary: 'bg-[#6F8F72]/10 text-[#6F8F72] border-[#6F8F72]/20',
    tertiary: 'bg-[#1B3C53]/10 text-[#1B3C53] border-[#1B3C53]/20'
  };

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
              Join Us on Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-white to-[#6F8F72]">
                  Thrilling Journey
                </span>
                <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#6F8F72]/50 via-white/50 to-[#6F8F72]/50 blur-sm"></div>
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-white/80 max-w-3xl mx-auto mb-8">
              Become a valuable part of Devora family & fast-track your tech career and go through a trail-blazing experience of digital transformation of Businesses & Institutions in Real-time with Real Impact!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#openings"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6F8F72] to-[#5a7a5d] px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#categories"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 font-semibold text-white transition-all hover:border-white/50 hover:bg-white/20"
              >
                Explore Categories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Career Categories Section */}
      <section id="categories" className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-white via-[#F8FAFC] to-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80"
            alt="Career Background"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90"></div>
        </div>
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.05)_50%,transparent_100%)] z-[1]" />
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/10 blur-3xl z-[1]" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#25343F]/10 blur-3xl z-[1]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#25343F] shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm">
              <Briefcase className="w-4 h-4 text-[#6F8F72]" />
              Career Opportunities
            </div>
            
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#25343F] sm:text-5xl lg:text-6xl mb-6">
              Explore{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-[#25343F] to-[#1B3C53]">
                  Career Paths
                </span>
                <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#6F8F72]/50 via-[#25343F]/50 to-[#1B3C53]/50 blur-sm"></div>
              </span>
            </h2>
            
            <p className="text-lg leading-relaxed text-[#64748B] max-w-2xl mx-auto">
              Discover the perfect role that matches your skills and passion.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {careerCategories.map((category) => {
              const Icon = category.icon;
              const colors = colorClasses[category.color];
              
              return (
                <div
                  key={category.id}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 ${colors.split(' ')[0]} opacity-5 blur-xl`}></div>
                  
                  <div className="relative p-8">
                    <div className={`inline-flex rounded-2xl ${colors.split(' ')[0]} p-4 mb-6`}>
                      <Icon className={`w-8 h-8 ${colors.split(' ')[1]}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#25343F] mb-2">
                      {category.title}
                    </h3>
                    <p className="text-[#6F8F72] font-semibold text-sm mb-4">
                      {category.subtitle}
                    </p>
                    <p className="text-[#64748B] leading-relaxed text-sm">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:${colors.split(' ')[2]}/30 transition-all duration-500`}></div>
                </div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="rounded-3xl bg-gradient-to-r from-[#25343F] to-[#1B3C53] p-12 lg:p-16 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Why Join Devora?</h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                We offer an exceptional work environment with amazing benefits and growth opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="inline-flex rounded-xl bg-white/20 p-3 mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-white/80 text-sm">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-white via-[#F8FAFC] to-white">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.05)_50%,transparent_100%)]" />
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#25343F]/10 blur-3xl" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#25343F] shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm">
              <Briefcase className="w-4 h-4 text-[#6F8F72]" />
              Current Openings
            </div>
            
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#25343F] sm:text-5xl lg:text-6xl mb-6">
              Current Job{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-[#25343F] to-[#1B3C53]">
                  Openings
                </span>
                <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#6F8F72]/50 via-[#25343F]/50 to-[#1B3C53]/50 blur-sm"></div>
              </span>
            </h2>
            
            <p className="text-lg leading-relaxed text-[#64748B] max-w-2xl mx-auto">
              Find your perfect role and join our team of innovators.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-2xl bg-white/80 p-2 backdrop-blur-sm shadow-lg ring-1 ring-gray-200/50">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === 'all' 
                    ? 'bg-gradient-to-r from-[#6F8F72] to-[#5a7a5d] text-white shadow-md' 
                    : 'text-[#25343F] hover:text-[#1B3C53]'
                }`}
              >
                All Positions
              </button>
              {careerCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-gradient-to-r from-[#6F8F72] to-[#5a7a5d] text-white shadow-md' 
                      : 'text-[#25343F] hover:text-[#1B3C53]'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <Link
                  key={job.id}
                  href="/job"
                  className="group block relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-[#25343F] group-hover:text-[#6F8F72] transition-colors">
                            {job.title}
                          </h3>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#6F8F72]/10 text-[#6F8F72]">
                            {job.department}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-[#64748B]">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{job.type}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <ArrowRight className="w-5 h-5 text-[#6F8F72] transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#6F8F72]/30 transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[#64748B] text-lg">No positions available in this category at the moment.</p>
                <p className="text-[#64748B] mt-2">Check back soon for new opportunities!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
