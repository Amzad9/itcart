'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, ShoppingCart, Share2, Cloud, Server, Code, Database } from 'lucide-react';

// Splash images for Technology Consulting
const Img1 = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=650&fit=crop';
const Img2 = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=650&fit=crop';
const Img3 = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=650&fit=crop';
const Img4 = 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&h=650&fit=crop';
const Img5 = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=650&fit=crop';
const Img6 = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=650&fit=crop';
const Img7 = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=650&fit=crop';
const Img8 = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=650&fit=crop';
const Img9 = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=650&fit=crop';
const Img10 = 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&h=650&fit=crop';
const Img11 = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=650&fit=crop';
const Img12 = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=650&fit=crop';
const Img13 = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop';
const Img14 = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=650&fit=crop';

const getImageSrc = (img) => img?.src || img || '';

// Icon mapping for sections
const sectionIcons = {
  'Digital Transformation (DX)': TrendingUp,
  'E-Commerce Platform': ShoppingCart,
  'SharePoint Online': Share2,
  'Office 365 Solution': Cloud,
  'SharePoint On Premise': Server,
  'Azure Cloud Solutions': Cloud,
  'Microsoft Full Stack': Code,
};

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

function Technology() {
    const sections = [
        {
            title: "Digital Transformation (DX)",
            bgClass: "bg-light6",
            items: [
                {
                    title: "Let Technology take over your Business",
                    desc: "We deploy latest technological solutions to your organizations processes, data and the resources to align them optimally into a systematic digital business!",
                    img: Img1,
                    reverse: false
                },
                {
                    title: "Let Data dictate your key decisions",
                    desc: "Your Business will start to grow tremendously once you implement data driven changes in the business, allowing performance indicate the direction!",
                    img: Img2,
                    reverse: true
                }
            ]
        },
        {
            title: "E-Commerce Platform",
            bgClass: "bg-light3",
            items: [
                {
                    title: "From traditional trade to E-commerce",
                    desc: "We work with traditional trade business and employ necessary functional & technological changes to take them on their e-commerce journey, thereby opening global horizons for them!",
                    img: Img3,
                    reverse: false
                },
                {
                    title: "Process Management & Support",
                    desc: "We don't just create the system and leave you to it, rather we become your technology consultant and every pivotal moment in your digital journey, by managing and aligning business processes to your growing market demand!",
                    img: Img4,
                    reverse: true
                }
            ]
        },
        {
            title: "SharePoint Online",
            bgClass: "bg-light7",
            items: [
                {
                    title: "Microsoft's secure Intranet",
                    desc: "We take pride in our years of expertise with working MS SharePoint for creating some of the secure intranet systems in the industry!",
                    img: Img5,
                    reverse: false
                },
                {
                    title: "Scalable Intranet Solutions",
                    desc: "The Intranet system is tailored to suit your company's structure, however we can always scale it up and revamp it to match your anticipated changes & growth!",
                    img: Img6,
                    reverse: true
                }
            ]
        },
        {
            title: "Office 365 Solution",
            bgClass: "bg-light5",
            items: [
                {
                    title: "Ideal Document management services",
                    desc: "We deliver, deploy and give expert consultation on the best document management system in the world, ie. MS Office solutions for your company's document management needs",
                    img: Img7,
                    reverse: false
                },
                {
                    title: "Data Migration & System Integration Support",
                    desc: "We provide cloud data migration and implement system support with the technology systems in function esp. Microsoft systems!",
                    img: Img8,
                    reverse: true
                }
            ]
        },
        {
            title: "SharePoint On Premise",
            bgClass: "bg-light3",
            items: [
                {
                    title: "Customized SharePoint Intranet",
                    desc: "We can customize your SharePoint Intranet to a greater degree of organizational fitment and provide support and maintenance services!",
                    img: Img9,
                    reverse: false
                },
                {
                    title: "Deploy on your private server",
                    desc: "Depending upon your needs we can deploy the SharePoint Intranet to your on premise server giving you direct and singular control over your precious data!",
                    img: Img10,
                    reverse: true
                }
            ]
        },
        {
            title: "Azure Cloud Solutions",
            bgClass: "bg-light5",
            items: [
                {
                    title: "Business assessment & Server Consulting",
                    desc: "Let our experts assess your business requirements & give you a proper fitment report on the server requisites, deployment and maintenance!",
                    img: Img11,
                    reverse: false
                },
                {
                    title: "Platform Development Consulting",
                    desc: "We can provide platform based native development services if the situation so demands thereby enabling smooth functioning of your system during the development time!",
                    img: Img12,
                    reverse: true
                }
            ]
        },
        {
            title: "Microsoft Full Stack",
            bgClass: "bg-light8",
            items: [
                {
                    title: "Microsoft full-stack Consulting",
                    desc: "We take great pride in having in-house technology experts offering full spectrum of Microsoft services & support!",
                    img: Img13,
                    reverse: false
                },
                {
                    title: "Integrate Systems & data migration",
                    desc: "We help companies manage their data accurately preventing duplication and erroneous entries across all the platforms with robust system integration!",
                    img: Img14,
                    reverse: true
                }
            ]
        }
    ];

    return (
        <>
            {sections.map((section, sectionIndex) => {
                const SectionIcon = sectionIcons[section.title] || Sparkles;
                // Alternating background colors for odd/even sections
                const sectionBg = sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50';

                return (
                    <section key={sectionIndex} className="relative overflow-hidden">
                        {/* Background decorative elements */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.03)_50%,transparent_100%)]"></div>
                        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/5 blur-3xl"></div>
                        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#25343F]/5 blur-3xl"></div>

                        <div className={`container relative mx-auto ${sectionBg} ${sectionIndex === 0 ? 'rounded-t-3xl' : ''} px-6 lg:px-12 py-16 lg:py-20 border border-gray-200/50 backdrop-blur-sm`}>
                            {/* Enhanced Section Header */}
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-gradient-to-r from-[#6F8F72]/10 to-[#6F8F72]/5 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-[#6F8F72] border border-[#6F8F72]/20 shadow-sm">
                                    <SectionIcon className="w-4 h-4" />
                                    <span>{section.title}</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#25343F] mb-4 leading-tight">
                                    {section.title}
                                </h2>
                            </div>

                            {/* Enhanced Content Items */}
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
                                    className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#6F8F72] via-[#5a7a5d] to-[#6F8F72] px-10 py-5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#6F8F72]/30 overflow-hidden"
                                >
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    
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

export default Technology
