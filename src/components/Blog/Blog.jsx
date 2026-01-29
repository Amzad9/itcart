'use client';

import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import Link from 'next/link';
import NextArrow from '../Client/NextArrow';  
import PrevArrow from '../Client/PrevArrow';

const Blog = () => {
    const SERVICE_SLIDER_SETTINGS = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerPadding: '0px',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
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

    const blogPosts = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
            title: 'Digital Transformation in Modern Business',
            excerpt: 'Discover how digital transformation is reshaping the business landscape and creating new opportunities.',
            date: 'March 15, 2024',
            category: 'Technology'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
            title: 'Cloud Computing: The Future of IT Infrastructure',
            excerpt: 'Explore the benefits and challenges of migrating to cloud-based solutions for your organization.',
            date: 'March 10, 2024',
            category: 'Cloud'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
            title: 'AI and Machine Learning: Practical Applications',
            excerpt: 'Learn how artificial intelligence and machine learning are revolutionizing business processes.',
            date: 'March 5, 2024',
            category: 'AI/ML'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
            title: 'Cybersecurity Best Practices for 2024',
            excerpt: 'Essential cybersecurity strategies to protect your business from evolving threats.',
            date: 'February 28, 2024',
            category: 'Security'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
            title: 'Remote Work Solutions and Collaboration Tools',
            excerpt: 'Best practices and tools for managing remote teams and maintaining productivity.',
            date: 'February 20, 2024',
            category: 'Workplace'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
            title: 'Data Analytics: Turning Information into Insights',
            excerpt: 'How to leverage data analytics to make informed business decisions and drive growth.',
            date: 'February 15, 2024',
            category: 'Analytics'
        }
    ];
      
    return (
        <section className="py-16 bg-base-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-secondary bg-secondary/10 rounded-full">
                        Latest Insights
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Blog
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        Stay updated with the latest trends, insights, and best practices in technology and business
                    </p>
                </div>
            
                {/* Blog Slider */}
                <div className="relative">
                    <Slider {...SERVICE_SLIDER_SETTINGS}>
                        {blogPosts.map((post) => (
                            <div key={post.id} className="px-3">
                                <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-base-300">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image 
                                            src={post.image} 
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 text-xs font-semibold text-white bg-secondary rounded-full backdrop-blur-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm text-secondary/70 mb-2">{post.date}</p>
                                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:opacity-90 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <Link
                                            href="/resources"
                                            className="inline-flex items-center text-secondary font-semibold hover:opacity-80 transition-colors group/link"
                                        >
                                            Read More
                                            <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </Slider>
                </div>
                
                {/* View All Link */}
                <div className="text-center mt-12">
                    <Link
                        href="/resources"
                        className="btn btn-secondary px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                        View All Posts
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Blog