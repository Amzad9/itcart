'use client';

import React, { useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import { Award, ChevronLeft, ChevronRight, Shield, Star, TrendingUp, Zap } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-gray-200 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
        aria-label="Next"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-gray-200 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
        aria-label="Previous"
      >
        <div className="relative">
          <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[#6F8F72] transition-colors" />
          <div className="absolute inset-0 bg-[#6F8F72]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </button>
    );
  };

  const CLIENTS_SLIDER_SETTINGS = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  const clients = [
    { 
      name: 'Microsoft', 
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop&crop=center',
      alt: 'Microsoft Partner',
      duration: '5+ years',
      projects: '120+',
      color: 'blue'
    },
    { 
      name: 'Google Cloud', 
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=200&fit=crop&crop=center',
      alt: 'Google Cloud Partner',
      duration: '4+ years',
      projects: '85+',
      color: 'red'
    },
    { 
      name: 'AWS', 
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop&crop=center',
      alt: 'AWS Partner',
      duration: '6+ years',
      projects: '150+',
      color: 'orange'
    },
    { 
      name: 'Salesforce', 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center',
      alt: 'Salesforce Partner',
      duration: '3+ years',
      projects: '65+',
      color: 'blue'
    },
    { 
      name: 'Oracle', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&crop=center',
      alt: 'Oracle Partner',
      duration: '7+ years',
      projects: '95+',
      color: 'red'
    },
    { 
      name: 'IBM', 
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop&crop=center',
      alt: 'IBM Partner',
      duration: '8+ years',
      projects: '110+',
      color: 'blue'
    },
    { 
      name: 'SAP', 
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop&crop=center',
      alt: 'SAP Partner',
      duration: '4+ years',
      projects: '75+',
      color: 'blue'
    },
    { 
      name: 'Adobe', 
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop&crop=center',
      alt: 'Adobe Partner',
      duration: '3+ years',
      projects: '50+',
      color: 'red'
    }
  ];

  const stats = [
    { icon: Shield, value: '98%', label: 'Client Retention', color: 'secondary' },
    { icon: Star, value: '4.9/5', label: 'Average Rating', color: 'primary' },
    { icon: TrendingUp, value: '3.5x', label: 'Growth Rate', color: 'tertiary' },
    { icon: Zap, value: '24/7', label: 'Support', color: 'secondary' },
  ];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.05)_50%,transparent_100%)]" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#25343F]/10 blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:60px_60px] opacity-5" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#25343F] shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm">
            <Award className="w-4 h-4 text-[#6F8F72]" />
            Trusted Partnerships
          </div>
          
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#25343F] sm:text-5xl lg:text-6xl mb-6">
            Trusted by{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#6F8F72] via-[#25343F] to-[#1B3C53]">
                Industry Leaders
              </span>
              <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-linear-to-r from-[#6F8F72]/50 via-[#25343F]/50 to-[#1B3C53]/50 blur-sm"></div>
            </span>
          </h2>
          
          <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
            We collaborate with global technology innovators to deliver exceptional solutions 
            that drive business transformation and sustainable growth.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-16 lg:mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Clients Slider */}
        <div className="relative">
          <div className="relative px-8 lg:px-12">
            <Slider {...CLIENTS_SLIDER_SETTINGS}>
              {clients.map((client, index) => {
                const isActive = index === activeIndex;
                return (
                  <div key={index} className="px-2 lg:px-3">
                    <div className="group relative h-40 lg:h-48 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-[#6F8F72]/30">
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#6F8F72]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      
                      {/* Client Logo */}
                      <div className="relative h-full w-full flex items-center justify-center p-6">
                        <div className="relative w-full h-16 lg:h-20 transition-all duration-500 group-hover:scale-110">
                          <Image
                            src={client.image}
                            alt={client.alt}
                            fill
                            className={`object-contain transition-all duration-500 ${isActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-80'} group-hover:grayscale-0 group-hover:opacity-100`}
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                          />
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        
                        {/* Stats on Hover */}
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="flex items-center justify-between text-xs font-medium text-gray-600">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#6F8F72]"></span>
                              {client.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#25343F]"></span>
                              {client.projects} projects
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#6F8F72] animate-ping"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          {/* Slider Navigation Indicator */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              {clients.slice(0, 6).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'w-8 bg-gradient-to-r from-[#6F8F72] to-[#5a7a5d]' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx global>{`
        .slick-track {
          display: flex !important;
          align-items: center !important;
        }
        .slick-slide {
          height: auto !important;
        }
        .slick-slide > div {
          height: 100%;
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Client;