'use client';

import React, { useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Award, TrendingUp, Users, CheckCircle } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PeopleSay = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-gray-200 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
        aria-label="Next testimonials"
      >
        <div className="relative">
          <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-[#6F8F72] transition-colors" />
          <div className="absolute inset-0 bg-[#6F8F72]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </button>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-gray-200 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
        aria-label="Previous testimonials"
      >
        <div className="relative">
          <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[#6F8F72] transition-colors" />
          <div className="absolute inset-0 bg-[#6F8F72]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </button>
    );
  };

  const SERVICE_SLIDER_SETTINGS = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 2,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    beforeChange: (current, next) => setActiveSlide(next),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    customPaging: (i) => (
      <div className={`w-12 h-1 rounded-full transition-all duration-500 ${Math.floor(activeSlide / 2) === i ? 'bg-gradient-to-r from-[#6F8F72] to-[#5a7a5d] scale-110' : 'bg-gray-300'}`}></div>
    ),
    appendDots: (dots) => (
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20">
        <ul className="flex gap-3">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  };

  const testimonials = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=faces',
      quote: "Devora has transformed how we manage projects. The platform's breadth of features exceeded all our expectations.",
      name: "Attila Probáld",
      role: "CEO",
      company: "feat. Agency",
      rating: 5,
      stats: { projects: 45, efficiency: '68%' }
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop&crop=faces',
      quote: "The intuitive interface and powerful features have significantly improved our team's productivity and efficiency.",
      name: "Sarah Johnson",
      role: "Operations Director",
      company: "Tech Innovations Inc.",
      rating: 5,
      stats: { projects: 28, efficiency: '52%' }
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=faces',
      quote: "Their team's expertise and the platform's capabilities have exceeded our expectations at every step.",
      name: "Michael Chen",
      role: "CTO",
      company: "Global Solutions Ltd.",
      rating: 5,
      stats: { projects: 62, efficiency: '74%' }
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&crop=faces',
      quote: "The digital transformation journey with Devora has streamlined our operations beyond imagination.",
      name: "Robert Williams",
      role: "Digital Transformation Lead",
      company: "Innovate Corp",
      rating: 5,
      stats: { projects: 37, efficiency: '61%' }
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop&crop=faces',
      quote: "Outstanding support and feature-rich platform that has scaled perfectly with our growing business.",
      name: "Emma Rodriguez",
      role: "Head of Operations",
      company: "ScaleFast Solutions",
      rating: 5,
      stats: { projects: 53, efficiency: '71%' }
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=800&fit=crop&crop=faces',
      quote: "From implementation to daily use, Devora has been instrumental in our operational excellence.",
      name: "David Kim",
      role: "VP of Technology",
      company: "Enterprise Dynamics",
      rating: 5,
      stats: { projects: 41, efficiency: '65%' }
    }
  ];

  const overallStats = [
    { icon: Users, value: '98%', label: 'Client Satisfaction', color: 'secondary' },
    { icon: TrendingUp, value: '3.5x', label: 'Average ROI', color: 'primary' },
    { icon: Award, value: '4.9/5', label: 'Average Rating', color: 'secondary' },
    { icon: Star, value: '500+', label: 'Happy Clients', color: 'tertiary' },
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
            Client Success Stories
          </div>
          
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#25343F] sm:text-5xl lg:text-6xl mb-6">
            Trusted by{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-[#25343F] to-[#1B3C53]">
                Industry Leaders
              </span>
              <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#6F8F72]/50 via-[#25343F]/50 to-[#1B3C53]/50 blur-sm"></div>
            </span>
          </h2>
          
          <p className="text-lg leading-relaxed text-[#64748B] max-w-2xl mx-auto">
            Discover how our solutions have transformed businesses and delivered 
            measurable results for industry-leading organizations worldwide.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="mb-16 lg:mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {overallStats.map((stat, index) => {
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
                  <div className="relative z-10 flex items-center gap-4">
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

        {/* Testimonials Slider - 2 at a time */}
        <div className="relative max-w-6xl mx-auto px-8 lg:px-12">
          <Slider {...SERVICE_SLIDER_SETTINGS}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="px-3 lg:px-4">
                <div className="group relative h-full overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* Glass Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10" />
                  
                  <div className="relative p-6 lg:p-8">
                    {/* Header with Image and Info */}
                    <div className="flex items-start gap-4 mb-6">
                      {/* Client Image */}
                      <div className="relative flex-shrink-0">
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                          <Image 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        {/* Verified Badge */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#6F8F72] border-2 border-white flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      
                      {/* Client Info */}
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-[#6F8F72] font-semibold text-sm">{testimonial.role}</p>
                        <p className="text-gray-600 text-sm">{testimonial.company}</p>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Quote Icon */}
                      <div className="flex-shrink-0">
                        <div className="rounded-xl bg-[#6F8F72]/10 p-3">
                          <Quote className="w-5 h-5 text-[#6F8F72]" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial Quote */}
                    <p className="text-gray-700 leading-relaxed italic mb-6 line-clamp-4">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-xl font-bold text-[#6F8F72]">{testimonial.stats.projects}</div>
                        <div className="text-xs text-[#64748B]">Projects</div>
                      </div>
                      <div className="h-8 w-px bg-gray-200"></div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-[#25343F]">{testimonial.stats.efficiency}</div>
                        <div className="text-xs text-[#64748B]">Efficiency Gain</div>
                      </div>
                      <div className="h-8 w-px bg-gray-200"></div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-[#1B3C53]">Success</div>
                        <div className="text-xs text-[#64748B]">Story</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#6F8F72]/30 transition-all duration-500"></div>
                  
                  {/* Corner Accent */}
                  <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-[#6F8F72]/20 to-transparent blur-xl"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

    

     
      </div>

      {/* Custom Slider Styles */}
      <style jsx global>{`
        .slick-slide {
          height: auto !important;
        }
        .slick-slide > div {
          height: 100%;
        }
        .slick-list {
          padding: 20px 0 !important;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default PeopleSay;