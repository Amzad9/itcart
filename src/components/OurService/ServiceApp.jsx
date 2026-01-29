'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles, Smartphone, Users, Workflow, ShoppingCart, GraduationCap, FileText, Heart } from 'lucide-react';

// Splash images for App Development
const Img1 = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=650&fit=crop';
const Img2 = 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&h=650&fit=crop';
const Img3 = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=650&fit=crop';
const Img4 = 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&h=650&fit=crop';
const Img5 = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=650&fit=crop';
const Img6 = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=650&fit=crop';
const Img7 = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=650&fit=crop';
const Img8 = 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&h=650&fit=crop';
const Img9 = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=650&fit=crop';
const Img10 = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=650&fit=crop';
const Img11 = 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&h=650&fit=crop';
const Img12 = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=650&fit=crop';
const Adit1 = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=650&fit=crop';
const Adit2 = 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&h=650&fit=crop';

const getImageSrc = (img) => img?.src || img || '';

// Icon mapping for sections
const sectionIcons = {
  'Customer Service Apps': Smartphone,
  'Business Process Apps': Workflow,
  'Utility & Tools Apps': Sparkles,
  'E-Commerce Apps': ShoppingCart,
  'Digital Learning Apps': GraduationCap,
  'E-Services Apps': FileText,
  'Digital Healthcare Apps': Heart,
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
            <div className="absolute -bottom-2 left-0 h-1 w-0 bg-gradient-to-r from-[#6F8F72] to-[#5a7a5d] group-hover:w-full transition-all duration-500"></div>
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

function ServiceApp() {
    const sections = [
        {
            title: "Customer Service Apps",
            bgClass: "bg-light6",
            items: [
                {
                    title: "Take your service Business to the cloud",
                    desc: "No need to rent an office when you can offer your services direct to customer at designated spaces!",
                    img: Img1,
                    reverse: false
                },
                {
                    title: "Promote and scale your services",
                    desc: "We create highly scalable app solutions that are robust in nature and provide proper growth consultation!",
                    img: Img2,
                    reverse: true
                }
            ]
        },
        {
            title: "Business Process Apps",
            bgClass: "bg-light3",
            items: [
                {
                    title: "Manage workflows on your fingertips",
                    desc: "Now create, start, assign, & remove a workflows directly from your app and put things into immediate effect!",
                    img: Img3,
                    reverse: false
                },
                {
                    title: "Communicate and Collaborate",
                    desc: "Now engage your teams on a certain process in real-time with the mobile app custom created to suit your business needs!",
                    img: Img4,
                    reverse: true
                }
            ]
        },
        {
            title: "Utility & Tools Apps",
            bgClass: "bg-light7",
            items: [
                {
                    title: "Custom create smart features",
                    desc: "Our experts can help turn your business idea of any utility feature in a smart phone into reality, thereby building a brand for you!",
                    img: Img5,
                    reverse: false
                },
                {
                    title: "Effortless Management",
                    desc: "You can now manage your app user onboarding, payments, engagements & reporting seamlessly!",
                    img: Img6,
                    reverse: true
                }
            ]
        },
        {
            title: "E-Commerce Apps",
            bgClass: "bg-light5",
            items: [
                {
                    title: "Take your Products out to the World",
                    desc: "Now whole world can be your market and you can make it a reality with e-commerce apps, custom created to your business!",
                    img: Img7,
                    reverse: false
                },
                {
                    title: "Scale up with Sales automation",
                    desc: "The robust development enables thousands of customers to purchase your products simultaneously in real-time saving some dreaded effort on your sales/billing team!",
                    img: Img8,
                    reverse: true
                }
            ]
        },
        {
            title: "Digital Learning Apps",
            bgClass: "bg-light3",
            items: [
                {
                    title: "Create collaborative learning platforms",
                    desc: "Now you can bring subject matter experts and the students from anywhere in the world into classes in engaging & effective ways!",
                    img: Img9,
                    reverse: false
                },
                {
                    title: "Scalable, Organized and Transparent",
                    desc: "Streamline and track your organization's training & development process with our scalable solutions which is custom created for your learning needs!",
                    img: Img10,
                    reverse: true
                }
            ]
        },
        {
            title: "E-Services Apps",
            bgClass: "bg-light5",
            items: [
                {
                    title: "Create your custom e-services app",
                    desc: "We help you develop various e-services app ranging from commercial e-services app for your clients, corporate e-services app for your employees and even consumer e-services app for end-users!",
                    img: Img11,
                    reverse: false
                },
                {
                    title: "Vendor management",
                    desc: "For commercial e-services we provide a separate module for clients/vendors for exchanging services and manage progress in real-time!",
                    img: Img12,
                    reverse: true
                }
            ]
        },
        {
            title: "Digital Healthcare Apps",
            bgClass: "bg-light3",
            items: [
                {
                    title: "Digitally Transform your healthcare system!",
                    desc: "Monitor & Manage the doctors, support staff, patients' data, operations and accounts on your fingertips with our digital healthcare app!",
                    img: Adit1,
                    reverse: false
                },
                {
                    title: "Scheduling doctors' appointments",
                    desc: "Now enable your patients with the tool to book their respective visits to the requested doctors directly from their phones!",
                    img: Adit2,
                    reverse: true
                }
            ]
        }
    ];

    return (
        <>
            {sections.map((section, sectionIndex) => {
                const SectionIcon = sectionIcons[section.title] || Smartphone;
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

export default ServiceApp
