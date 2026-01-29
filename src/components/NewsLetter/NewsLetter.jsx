'use client';

import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle, ArrowRight, Send } from 'lucide-react';

function NewsLetter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setEmail('');
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-[#25343F] via-[#1B3C53] to-[#25343F]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Gradient Orbs */}
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/20 blur-3xl"></div>
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#6F8F72]/20 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-white/90">
              <Sparkles className="w-4 h-4 text-[#6F8F72]" />
              Stay Updated
            </div>
            
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Join Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6F8F72] via-white to-[#6F8F72]">
                  Newsletter
                </span>
                <div className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#6F8F72]/50 via-white/50 to-[#6F8F72]/50 blur-sm"></div>
              </span>
            </h2>
            
            <p className="text-xl leading-relaxed text-white/80 max-w-2xl mx-auto">
              Get the latest insights, industry news, and exclusive updates delivered straight to your inbox.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="relative">
            {isSubmitted ? (
              <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#6F8F72]/20 mb-6">
                  <CheckCircle className="w-10 h-10 text-[#6F8F72]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Successfully Subscribed!</h3>
                <p className="text-white/80 mb-8">
                  Thank you for subscribing. Check your inbox for our latest updates.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3 font-semibold text-white transition-all hover:border-white/50 hover:bg-white/20"
                >
                  Subscribe Another Email
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="relative rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 lg:p-12 shadow-2xl"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Mail className="w-6 h-6 text-white/60" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-14 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#6F8F72] focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#6F8F72] to-[#5a7a5d] px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed min-w-[180px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Mail, title: 'Weekly Updates', desc: 'Get curated content every week' },
              { icon: Sparkles, title: 'Exclusive Content', desc: 'Access to premium resources' },
              { icon: CheckCircle, title: 'No Spam', desc: 'We respect your privacy' }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="group rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#6F8F72]/20 mb-4">
                    <Icon className="w-6 h-6 text-[#6F8F72]" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-white/70 text-sm">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
