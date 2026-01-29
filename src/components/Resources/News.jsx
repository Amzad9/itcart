'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Calendar, User, ArrowRight, Award, TrendingUp } from 'lucide-react';
import NewHeader from './NewHeader';

function News() {
  const newsItems = [
    {
      id: 1,
      title: "Devora Wins Two Business Brilliance Awards",
      subtitle: "SaaS Work Management scale-up wins International Business of the Year and Employer of the Year accolades.",
      content: "Devora was recognized as The International Business of the Year 2021 at the Business Brilliance Awards in London. Devora was judged to have achieved the most impressive overall business performance internationally: in 2021, Devora moved its HQ to facilitate its aggressive international growth agenda and was subsequently rewarded with rapid expansion in its target markets.",
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      date: 'Jan 20, 2024',
      author: 'Liis Milk',
      category: 'Awards'
    },
    {
      id: 2,
      title: "Life in Devora: Story of a Customer Success Intern",
      subtitle: "Discover how our internship program transforms careers and creates opportunities.",
      content: "Over the years, we've shared stories about Devora's company culture, given tips on recruiting world-class talent, and explained how we use Devora to manage daily work. Now, we've decided to raise the curtain again and talk a bit more about our life in Devora.",
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      date: 'Jan 15, 2024',
      author: 'Liis Milk',
      category: 'Company Culture'
    },
    {
      id: 3,
      title: "Devora Achieves Record Growth in Q4 2023",
      subtitle: "Company expands internationally at 'rocket-ship' speed while maintaining exceptional employee satisfaction.",
      content: "Devora also took Gold as The Employer of the Year award in 2021. This accolade recognized Devora as an organization that has created a stimulating and supportive work environment and has a real commitment to the welfare of its employees.",
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      date: 'Jan 10, 2024',
      author: 'Liis Milk',
      category: 'Growth'
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
            Latest News
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#25343F] mb-4">
            Latest Developments
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Stay updated with our upcoming events, product launches and innovations!
          </p>
        </div>

        {/* News Items */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl bg-white border border-gray-200 transition-all duration-500 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Image Section */}
                <div className="relative h-64 lg:h-full lg:min-h-[400px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#6F8F72] px-4 py-2 text-xs font-semibold text-white shadow-lg">
                      {index === 0 && <Award className="w-4 h-4" />}
                      {index === 2 && <TrendingUp className="w-4 h-4" />}
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <NewHeader title={item.title} />
                  
                  <h6 className="font-semibold text-[#25343F] mt-5 mb-4 text-lg">
                    {item.subtitle}
                  </h6>
                  
                  <p className="text-[#64748B] leading-relaxed mb-6">
                    {item.content}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-[#64748B] mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{item.author}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#6F8F72] hover:text-[#5a7a5d] transition-colors group/link"
                  >
                    READ MORE
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#6F8F72]/30 transition-all duration-500"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
