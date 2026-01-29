'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Sparkles } from 'lucide-react';

function Blog() {
  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=600&fit=crop',
      title: 'How Devora Accelerates Digital Transformation',
      excerpt: 'See how modern teams use Devora to streamline operations, improve visibility, and scale with confidence.',
      tag: 'Digital Strategy',
      date: 'Jan 15, 2024',
      author: 'Sarah Johnson'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=600&fit=crop',
      title: 'Building High‑Performance Remote Teams',
      excerpt: 'Practical tips and tools to keep distributed teams aligned, engaged, and accountable.',
      tag: 'Remote Work',
      date: 'Jan 10, 2024',
      author: 'Michael Chen'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&h=600&fit=crop',
      title: 'From Spreadsheets to Smart Workflows',
      excerpt: 'Move beyond spreadsheets with automation, dashboards, and real‑time reporting.',
      tag: 'Automation',
      date: 'Jan 5, 2024',
      author: 'Emma Rodriguez'
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-[#F8FAFC] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#25343F] shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#6F8F72]" />
            Resources
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#25343F] mb-4">
            What We Do
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Know about Devora offerings with expert analysis and domain‑specific guides tailored for growing businesses.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {/* Featured card on the left */}
          <article className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-gray-200 transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              
              {/* Tag Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="inline-flex items-center rounded-full bg-[#6F8F72] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
                  {posts[0].tag}
                </span>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10">
                <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                  {posts[0].title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-white/90 max-w-2xl mb-4 drop-shadow-md">
                  {posts[0].excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-white/80 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{posts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{posts[0].author}</span>
                  </div>
                </div>
                
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#6F8F72] transition-colors group/link"
                >
                  Read the full story
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>

          {/* Two smaller cards on the right */}
          <div className="space-y-6">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  
                  {/* Tag Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center rounded-full bg-[#6F8F72] px-3 py-1 text-xs font-semibold text-white shadow-lg">
                      {post.tag}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#25343F] mb-2 group-hover:text-[#6F8F72] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#64748B] line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-xs text-[#64748B] mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#6F8F72] hover:text-[#5a7a5d] transition-colors group/link"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#6F8F72]/30 transition-all duration-500"></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
