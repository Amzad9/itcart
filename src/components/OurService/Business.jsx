'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, TrendingUp, BarChart, Workflow, MessageSquare, Shield, FileText, CheckCircle2 } from 'lucide-react';

// Splash images for Business Automation
const Img1 = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=650&fit=crop';
const Img2 = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=650&fit=crop';
const Img3 = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=650&fit=crop';
const Img4 = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=650&fit=crop';
const Img5 = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=650&fit=crop';
const Img6 = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=650&fit=crop';
const Img7 = 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&h=650&fit=crop';
const Img8 = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=650&fit=crop';
const Img9 = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=650&fit=crop';
const Img10 = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop';
const Img11 = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=650&fit=crop';
const Img12 = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=650&fit=crop';
const Adit1 = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=650&fit=crop';

const getImageSrc = (img) => img?.src || img || '';

/**
 * Enhanced Two Column Component with animations
 */
function EnhancedTwoCol({ title, desc, img, reverse = false, index = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 mb-12 lg:mb-16 ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* Text Content */}
      <div 
        className={`relative ${reverse ? 'lg:order-2' : ''} transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
        style={{ transitionDelay: reverse ? '200ms' : '0ms' }}
      >
        <div className="relative">
          {/* Decorative Element */}
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#6F8F72]/10 blur-3xl animate-pulse"></div>
          
          {/* Title with enhanced styling */}
          <h4 className="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-[#25343F] mb-6 leading-tight group">
            <span className="relative z-10 inline-block">
              {title}
            </span>
          </h4>
        </div>
        
        {/* Description with better typography */}
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-6">
          {desc}
        </p>

        {/* Feature highlight indicator */}
        <div className="flex items-center gap-2 text-[#6F8F72] text-sm font-medium">
          <CheckCircle2 className="w-5 h-5" />
          <span>Key Feature</span>
        </div>
      </div>

      {/* Image Content */}
      <div 
        className={`relative ${reverse ? 'lg:order-1' : ''} transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
        style={{ transitionDelay: reverse ? '0ms' : '200ms' }}
      >
        <div className="relative rounded-3xl overflow-hidden border border-gray-200/50 group cursor-pointer">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6F8F72]/10 via-transparent to-[#25343F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>
          
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image 
              src={getImageSrc(img)} 
              alt={title} 
              width={900} 
              height={650}
              className={`w-full h-auto object-cover transition-all duration-700 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } group-hover:scale-110`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
              quality={90}
            />
            
            {/* Loading Placeholder */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
            )}
          </div>
          
          {/* Border Effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#6F8F72]/40 transition-all duration-500 rounded-3xl z-30 pointer-events-none"></div>
          
          {/* Corner Accent */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-[#6F8F72]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
}

function Business() {
    const sections = [
        {
            title: "Employment Process",
            bgClass: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
            icon: Users,
            color: "blue",
            items: [
                {
                    title: "Streamline your Hiring & Firing!",
                    desc: "We help you create digital employment processes that is custom designed to your organizational needs!",
                    img: Img1,
                    reverse: false
                },
                {
                    title: "Manage Payroll effectively",
                    desc: "Our systems help you manage the salaries and payrolls across all the divisions and branches of your employees and your client's resources in case of staffing services!",
                    img: Img2,
                    reverse: true
                }
            ]
        },
        {
            title: "Supply Chain Process",
            bgClass: "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50",
            icon: TrendingUp,
            color: "emerald",
            items: [
                {
                    title: "Automate orders to prevent crises",
                    desc: "Our systems enable automated orders via email & SMS when the inventory reaches a certain threshold thereby alleviating the crises before it arises!",
                    img: Img3,
                    reverse: false
                },
                {
                    title: "Vendor Management made easy",
                    desc: "Assign the vendors for various deliverables and manage them on the predefined performance metric, helping you eliminate poor vendors and manage resourceful vendors!",
                    img: Img4,
                    reverse: true
                }
            ]
        },
        {
            title: "Business Workflow",
            bgClass: "bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50",
            icon: Workflow,
            color: "violet",
            items: [
                {
                    title: "Custom Create your workflows",
                    desc: "We enable you to create a visual workflow from a series of predefined templates to fit your processes properly!",
                    img: Img5,
                    reverse: false
                },
                {
                    title: "Manage workflows in Real-Time",
                    desc: "Track the process performance based off of the predefined KPIs and manage the resources assigned accordingly!",
                    img: Img6,
                    reverse: true
                }
            ]
        },
        {
            title: "Customer Support Tickets",
            bgClass: "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50",
            icon: MessageSquare,
            color: "amber",
            items: [
                {
                    title: "Role based processing",
                    desc: "Tickets traverse through the proper channel within our system based off of your organizational needs and decisions can be made by the assigned roles!",
                    img: Img7,
                    reverse: false
                },
                {
                    title: "Organize issue handling",
                    desc: "Segment and prioritize the issues and then put it in a proper workflow to ensure timely solution!",
                    img: Img8,
                    reverse: true
                }
            ]
        },
        {
            title: "Business Automation",
            bgClass: "bg-gradient-to-br from-rose-50 via-pink-50 to-red-50",
            icon: BarChart,
            color: "rose",
            items: [
                {
                    title: "Create Organizational Cohesion!",
                    desc: "Interdepartmental review systems allows companies to get together and work as a unit by working on the inhibiting factors and improving on the favourable!",
                    img: Img9,
                    reverse: false
                },
                {
                    title: "Complete feedback circle!",
                    desc: "Get an outsider take on processes to understand dependencies and improve overall effectiveness within the organization!",
                    img: Img10,
                    reverse: true
                }
            ]
        },
        {
            title: "Document Workflow",
            bgClass: "bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50",
            icon: FileText,
            color: "sky",
            items: [
                {
                    title: "Find documents in simple search",
                    desc: "Discover documents easily with simple search options like filters and structured indexing!",
                    img: Img11,
                    reverse: false
                },
                {
                    title: "Organize and manage document access",
                    desc: "Now your confidential documents will be safe & secure as you can give limited access to users based on their positions in organizational hierarchies!",
                    img: Img12,
                    reverse: true
                }
            ]
        },
        {
            title: "SLA Tracking",
            bgClass: "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50",
            icon: Shield,
            color: "green",
            items: [
                {
                    title: "Customize your SLA parameters",
                    desc: "Create case based legal compliance & performance criteria for your SLA from our predefined templates!",
                    img: Adit1,
                    reverse: false
                },
                {
                    title: "Manage critical failures",
                    desc: "Prescribe predefined remedial measures for any deviation or failure from the set parameters in SLA and system shall implement it in such cases!",
                    img: Adit1,
                    reverse: true
                }
            ]
        }
    ];

    return (
        <>
            {sections.map((section, sectionIndex) => {
                const Icon = section.icon;
                const colorClasses = {
                    blue: 'bg-blue-100 text-blue-700 border-blue-200',
                    emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200',
                    violet: 'bg-violet-100 text-violet-700 border-violet-200',
                    amber: 'bg-amber-100 text-amber-700 border-amber-200',
                    rose: 'bg-rose-100 text-rose-700 border-rose-200',
                    sky: 'bg-sky-100 text-sky-700 border-sky-200',
                    green: 'bg-green-100 text-green-700 border-green-200'
                };

                return (
                    <section key={sectionIndex} className="relative overflow-hidden">
                        {/* Background decorative elements */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.03)_50%,transparent_100%)]"></div>
                        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/5 blur-3xl"></div>
                        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#25343F]/5 blur-3xl"></div>

                        <div className={`container relative mx-auto ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} px-6 lg:px-12 py-16 lg:py-20 border border-gray-200/50 backdrop-blur-sm`}>
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-linear-to-r from-[#6F8F72]/10 to-[#6F8F72]/5 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-[#6F8F72] border border-[#6F8F72]/20 shadow-sm">
                                    <Icon className="w-4 h-4" />
                                    <span>{section.title}</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#25343F] mb-4 leading-tight">
                                    {section.title}
                                </h2>
                            </div>
 
                            {section.items.map((item, itemIndex) => (
                                <EnhancedTwoCol
                                    key={itemIndex}
                                    title={item.title}
                                    desc={item.desc}
                                    img={item.img}
                                    reverse={item.reverse}
                                    index={itemIndex}
                                />
                            ))}

                            {/* Enhanced CTA Link */}
                            <div className="pt-16 text-center">
                                <Link
                                    href="/ourservice"
                                    className="group relative inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-[#6F8F72] via-[#5a7a5d] to-[#6F8F72] px-10 py-5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#6F8F72]/30 overflow-hidden"
                                >
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    
                                    {/* Button Content */}
                                    <span className="relative z-10">SEE ALL THE SERVICES</span>
                                    <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                                    
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                                </Link>
                            </div>
                        </div>

                    </section>
                );
            })}
        </>
    )
}

export default Business