'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Sparkles, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'blue',
      hours: 'Mon-Fri, 9am-6pm EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@example.com', 'info@example.com'],
      color: 'emerald',
      hours: '24/7 Response'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Business Street', 'New York, NY 10001'],
      color: 'violet',
      hours: 'Visit by appointment'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday', '9:00 AM - 6:00 PM EST'],
      color: 'amber',
      hours: 'Support available'
    }
  ];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/40 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(111,143,114,0.05)_50%,transparent_100%)]" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#25343F]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#25343F] shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm">
            <MessageSquare className="w-4 h-4 text-[#6F8F72]" />
            Get in Touch
          </div>
          
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#25343F] sm:text-5xl lg:text-6xl mb-6">
            Let's Start a{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#25343F] via-[#6F8F72] to-[#1B3C53]">
                Conversation
              </span>
              <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#25343F]/50 via-[#6F8F72]/50 to-[#1B3C53]/50 blur-sm"></div>
            </span>
          </h2>
          
          <p className="text-lg leading-relaxed text-[#64748B] max-w-2xl mx-auto">
            Ready to transform your business? Get in touch with our team of experts 
            for personalized consultation and innovative solutions.
          </p>
        </div>

        {/* Main Content - Image Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image Section - Left */}
          <div className="relative">
            <div className="relative h-full min-h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1200&fit=crop&q=80"
                alt="Contact Us - Business Team"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              
              {/* Gradient Overlay - Darker at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#25343F]/95 via-[#25343F]/70 via-[#25343F]/40 to-transparent z-[1]"></div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 z-[2]">
                <div className="mb-8 relative">
                
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                    Let's Build Something Amazing Together
                  </h3>
                  <p className="text-white/95 text-lg leading-relaxed mb-8 drop-shadow-md">
                    Our team is ready to help you transform your business with innovative solutions.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="space-y-4 relative">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white/25 backdrop-blur-md p-2.5 border border-white/30">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium drop-shadow-md">24/7 Customer Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white/25 backdrop-blur-md p-2.5 border border-white/30">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium drop-shadow-md">Free Initial Consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white/25 backdrop-blur-md p-2.5 border border-white/30">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium drop-shadow-md">Expert Team Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right */}
          <div className="flex items-center">
            <div className="relative w-full overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
              {/* Success Message */}
              {isSubmitted && (
                <div className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center p-8">
                  <div className="rounded-full bg-[#6F8F72]/10 p-6 mb-6">
                    <CheckCircle className="w-16 h-16 text-[#6F8F72]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#25343F] mb-4">Message Sent Successfully!</h3>
                  <p className="text-[#64748B] text-center max-w-md mb-8">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-xl border-2 border-[#6F8F72] bg-white px-8 py-3 font-semibold text-[#6F8F72] transition-all hover:bg-[#6F8F72] hover:text-white hover:shadow-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#25343F] to-[#6F8F72] p-8 text-white">
                <div className="flex items-center gap-4 mb-2">
                  <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                    <Send className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                    <p className="text-white/90">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="p-8 lg:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-[#25343F]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-[#25343F] placeholder-[#64748B] focus:ring-2 focus:ring-[#6F8F72] focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-[#25343F]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-[#25343F] placeholder-[#64748B] focus:ring-2 focus:ring-[#6F8F72] focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-[#25343F]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-[#25343F] placeholder-[#64748B] focus:ring-2 focus:ring-[#6F8F72] focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-[#25343F]">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-[#25343F] placeholder-[#64748B] focus:ring-2 focus:ring-[#6F8F72] focus:border-transparent outline-none transition-all"
                      placeholder="Your Company Inc."
                    />
                  </div>
                </div>

                <div className="mb-8 space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-[#25343F]">
                      Subject *
                    </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-[#25343F] placeholder-[#64748B] focus:ring-2 focus:ring-[#6F8F72] focus:border-transparent outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="mb-8 space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-[#25343F]">
                      Your Message *
                    </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-[#25343F] placeholder-[#64748B] focus:ring-2 focus:ring-[#6F8F72] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-[#64748B]">
                    <span className="font-medium">Fields marked with * are required</span>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#6F8F72] to-[#5a7a5d] px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info Section - Below Both Columns */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#25343F] mb-4">Contact Information</h3>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Reach out to us through any of these channels. We're here to help!
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const colorClasses = {
                blue: 'bg-[#25343F]/10 text-[#25343F] border-[#25343F]/20',
                emerald: 'bg-[#6F8F72]/10 text-[#6F8F72] border-[#6F8F72]/20',
                violet: 'bg-[#1B3C53]/10 text-[#1B3C53] border-[#1B3C53]/20',
                amber: 'bg-[#6F8F72]/10 text-[#6F8F72] border-[#6F8F72]/20'
              };
              
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 ${colorClasses[item.color].split(' ')[0]} opacity-5 blur-xl`} />
                  
                  <div className="relative z-10 p-6 text-center">
                    <div className={`inline-flex rounded-xl ${colorClasses[item.color].split(' ')[0]} p-4 mb-4`}>
                      <Icon className={`w-6 h-6 ${colorClasses[item.color].split(' ')[1]}`} />
                    </div>
                    
                    <h4 className="font-bold text-[#25343F] mb-3">{item.title}</h4>
                    <div className="space-y-1 mb-4">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-[#64748B] text-sm">{detail}</p>
                      ))}
                    </div>
                    <div className="mt-4">
                      <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-[#64748B]">
                        {item.hours}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#6F8F72]/30 transition-all duration-300`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;