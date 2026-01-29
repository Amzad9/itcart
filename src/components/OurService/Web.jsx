'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles, Building2, Globe, FileText, GraduationCap, Workflow, FolderKanban, Shield } from 'lucide-react';
// Splash images for Web Development
const Img1 = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=650&fit=crop';
const Img2 = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=650&fit=crop';
const Img3 = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=650&fit=crop';
const Img4 = 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&h=650&fit=crop';
const Img5 = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=650&fit=crop';
const Img6 = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=650&fit=crop';
const Img7 = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=650&fit=crop';
const Img8 = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=650&fit=crop';
const Img9 = 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&h=650&fit=crop';
const Img10 = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=650&fit=crop';
const Img11 = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop';
const Img12 = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=650&fit=crop';
const Adit1 = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=650&fit=crop';
const Adit2 = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=650&fit=crop';

const getImageSrc = (img) => img?.src || img || '';

// Icon mapping for sections
const sectionIcons = {
  'Corporate Intranet Portal': Building2,
  'Corporate Public Websites': Globe,
  'Document Management': FileText,
  'Digital Learning Platform': GraduationCap,
  'Digital Process Management': Workflow,
  'Project Management Portal': FolderKanban,
  'Audit and Quality Management': Shield,
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

function Web() {
  const sections = [
    {
      title: "Corporate Intranet Portal",
      bgClass: "bg-light6",
      items: [
        {
          title: "Create your Virtual Office",
          desc: "Work from anywhere in the world by making your office mobile with our Intranet systems, without compromising discipline, productivity, vigilance & much needed security!",
          img: Img1,
          reverse: false
        },
        {
          title: "Engage employees with Intranet",
          desc: "Get things done the right way with individuals & teams on real-time basis through our collaboration tools!",
          img: Img2,
          reverse: true
        }
      ]
    },
    {
      title: "Corporate Public Websites",
      bgClass: "bg-light3",
      items: [
        {
          title: "Create your Online Presence",
          desc: "Become accessible to all your potential market by going online and establishing your company's corporate website!",
          img: Img3,
          reverse: false
        },
        {
          title: "Position your Brand like never before",
          desc: "What better way to blow your trumpet than your corporate website. Create your unique website with us, in cohesion with your brand philosophy!",
          img: Img4,
          reverse: true
        }
      ]
    },
    {
      title: "Document Management",
      bgClass: "bg-light7",
      items: [
        {
          title: "Organize and manage documents efficiently",
          desc: "Streamline your document workflow with our comprehensive document management system that ensures easy access, version control, and secure storage!",
          img: Img5,
          reverse: false
        },
        {
          title: "Secure document access and collaboration",
          desc: "Control access permissions and enable seamless collaboration on documents while maintaining security and compliance standards!",
          img: Img6,
          reverse: true
        }
      ]
    },
    {
      title: "Digital Learning Platform",
      bgClass: "bg-light5",
      items: [
        {
          title: "Create collaborative learning platforms",
          desc: "Now you can bring subject matter experts and the students from anywhere in the world into classes in engaging & effective ways!",
          img: Img7,
          reverse: false
        },
        {
          title: "Scalable, Organized and Transparent",
          desc: "Streamline and track your organization's training & development process with our scalable solutions which is custom created for your learning needs!",
          img: Img8,
          reverse: true
        }
      ]
    },
    {
      title: "Digital Process Management",
      bgClass: "bg-light3",
      items: [
        {
          title: "Establish Visual Workflows",
          desc: "We help you create and establish visual workflows of complex processes to enhance process efficiency, effectiveness & productivity",
          img: Img9,
          reverse: false
        },
        {
          title: "Track the performance with KPIs",
          desc: "Gauge the performance of key elements in the processes with specialized indicators generating reports in real-time",
          img: Img10,
          reverse: true
        }
      ]
    },
    {
      title: "Project Management Portal",
      bgClass: "bg-light5",
      items: [
        {
          title: "Complex projects into workable Modules",
          desc: "Now plan, schedule and manage development stages easily with our built-in program that ups your project management game!",
          img: Img11,
          reverse: false
        },
        {
          title: "Never miss your deadlines again",
          desc: "With our real-time progress tracking, resource management & performance indicators, you can always be ahead of delivery date!",
          img: Img12,
          reverse: true
        }
      ]
    },
    {
      title: "Audit and Quality Management",
      bgClass: "bg-light8",
      items: [
        {
          title: "Replace the paperwork Auditing",
          desc: "Manage your auditing process with our tools that saves lot of paper and efforts by bringing you real-time reports of all your processes from all the branches direct to your system!",
          img: Adit1,
          reverse: false
        },
        {
          title: "Reduce duplication, improve accuracy",
          desc: "Eliminate the ambiguity and redundancies with our audit tool and get accurate results!",
          img: Adit2,
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

            <div className={`container relative mx-auto ${sectionBg} ${sectionIndex === 0 ? 'rounded-t-3xl' : ''} ${sectionIndex === sections.length - 1 ? 'rounded-b-3xl mb-3' : ''} px-6 lg:px-12 py-16 lg:py-20 border border-gray-200/50 backdrop-blur-sm`}>
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
  );
}

export default Web;
