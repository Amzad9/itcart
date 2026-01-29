'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Sparkles, Quote, ArrowRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CaseSudies() {
  const [activeSlide, setActiveSlide] = useState(0);

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-gray-200 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
        aria-label="Next case study"
      >
        <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-[#6F8F72] transition-colors" />
      </button>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-gray-200 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
        aria-label="Previous case study"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[#6F8F72] transition-colors" />
      </button>
    );
  };

  const SLIDER_SETTINGS = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    beforeChange: (current, next) => setActiveSlide(next),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    customPaging: (i) => (
      <div className={`w-12 h-1 rounded-full transition-all duration-500 ${activeSlide === i ? 'bg-[#6F8F72] scale-110' : 'bg-gray-300'}`}></div>
    ),
    appendDots: (dots) => (
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20">
        <ul className="flex gap-3">{dots}</ul>
      </div>
    ),
  };

  const caseStudies = [
    {
      id: 1,
      title: "StrategiQ Chose Devora's Work Management Platform to Underpin Growth Ambitions",
      company: "StrategiQ",
      industry: "Digital Marketing Agency",
      employees: "50 employees",
      location: "UK",
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      quote: "We feel that we finally have a tool that enables us to grow – and that will scale as we add more people to the team.",
      author: "Tyler Webb-Harding",
      role: "Operations Director",
      content: {
        problem: "In 2020, StrategiQ's Operations Director identified that existing project management tools would not scale with the company's ambitious growth plans. Their tools only provided coarse metrics, such as how time was spent and if projects were completed.",
        needs: "The StrategiQ Operations team wanted full visibility of every task, as well as the ability to send and track purchase orders, invoices, communications, and meetings, all in one platform. The Leadership team needed a more effective way to track business metrics and create reports.",
        solution: "After considering more than 20 tools, StrategiQ selected Devora as the only solution able to deliver the level of reporting and data tracking needed to fuel the agency's growth.",
        results: [
          "Time spent on projects",
          "Time spent in meetings",
          "Project profitability",
          "Resource utilization"
        ]
      }
    },
    {
      id: 2,
      title: "How Devora Transformed a Growing Agency's Operations",
      company: "Digital Agency",
      industry: "Marketing & Advertising",
      employees: "75 employees",
      location: "London, UK",
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      quote: "The pandemic made people work in a different way. Everybody is now working from home, and it's changed how clients expect to work with us too.",
      author: "Sarah Mitchell",
      role: "CEO",
      content: {
        problem: "The agency struggled with remote work coordination and maintaining team productivity during the transition.",
        needs: "A comprehensive solution that supports remote collaboration and real-time project tracking.",
        solution: "Devora enabled employees to continue tracking time and collaborating on projects in real-time, centralizing key business data into one location.",
        results: [
          "Improved remote collaboration",
          "Real-time project tracking",
          "Centralized business data",
          "Enhanced team productivity"
        ]
      }
    }
  ];

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
            Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#25343F] mb-4">
            Stories That Inspire!
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            A Transformative study showcasing the journey of companies with Devora!
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          <Slider {...SLIDER_SETTINGS} className="case-studies-slider">
            {caseStudies.map((study) => (
              <div key={study.id} className="px-4">
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-200">
                  {/* Hero Section with Image */}
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#25343F]/90 via-[#25343F]/70 to-transparent" />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 text-white z-10">
                      <div className="max-w-4xl">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 drop-shadow-lg">
                          {study.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
                          <span>{study.company}</span>
                          <span>•</span>
                          <span>{study.industry}</span>
                          <span>•</span>
                          <span>{study.employees}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    {/* Quote Section */}
                    <div className="bg-gradient-to-r from-[#6F8F72]/10 to-[#25343F]/10 rounded-2xl p-8 mb-8 border border-[#6F8F72]/20">
                      <Quote className="w-8 h-8 text-[#6F8F72] mb-4" />
                      <p className="text-xl font-semibold text-[#25343F] mb-4 italic">
                        "{study.quote}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#6F8F72]/20 flex items-center justify-center">
                          <span className="text-[#6F8F72] font-bold text-lg">
                            {study.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-[#25343F]">{study.author}</p>
                          <p className="text-sm text-[#64748B]">{study.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* Problem Section */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-[#25343F] mb-4">The Challenge</h4>
                      <p className="text-[#64748B] leading-relaxed">{study.content.problem}</p>
                    </div>

                    {/* Needs Section */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-[#25343F] mb-4">Agency Needs and Wants</h4>
                      <p className="text-[#64748B] leading-relaxed mb-3">{study.content.needs}</p>
                    </div>

                    {/* Solution Section */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-[#25343F] mb-4">The Solution</h4>
                      <p className="text-[#64748B] leading-relaxed">{study.content.solution}</p>
                    </div>

                    {/* Results Section */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-[#25343F] mb-4">Key Results</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.content.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#6F8F72]/20 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-[#6F8F72]"></div>
                            </div>
                            <span className="text-[#25343F] font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default CaseSudies;
