'use client';

import React, { useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import { ArrowRight, Play, Star, TrendingUp } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    

    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop',
            title: 'Digital Transformation Solutions',
            subtitle: 'Accelerate your business growth with cutting-edge technology solutions tailored to your unique needs.',
            gradientClass: 'bg-gradient-to-r from-tertiary/90 via-tertiary/80 to-transparent',
            stats: [
                { value: '98%', label: 'Client Satisfaction' },
                { value: '250+', label: 'Projects Delivered' },
                { value: '15+', label: 'Years Experience' }
            ]
        },
        {
            image: '',
            title: 'Innovative Business Strategies',
            subtitle: 'Transform your vision into reality with our comprehensive business consulting and strategy development services.',
            gradientClass: 'bg-gradient-to-r from-primary/90 via-primary/80 to-transparent',
            stats: [
                { value: '3.5x', label: 'Average Growth' },
                { value: '500+', label: 'Happy Clients' },
                { value: '24/7', label: 'Support' }
            ]
        },
        {
            image: '',
            title: 'Technology That Drives Success',
            subtitle: 'Harness the power of advanced technology to optimize operations and maximize your business potential.',
            gradientClass: 'bg-gradient-to-r from-secondary/90 via-secondary/80 to-transparent',
            stats: [
                { value: '95%', label: 'On-time Delivery' },
                { value: '50+', label: 'Industries Served' },
                { value: 'Award', label: 'Winning Team' }
            ]
        }
    ];

    return (
        <header className="relative w-full h-screen min-h-[700px] bg-[#c0efd2] max-h-[900px] overflow-hidden">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#6F8F72]/30 blur-3xl animate-pulse z-0"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse z-0" style={{ animationDelay: '0.5s' }}></div>
            
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl animate-pulse z-0" style={{ animationDelay: '1s' }}></div>
         
            <div className="absolute inset-0 z-10 bg-linear-to-r from-black-200/90 via-black/10 to-transparent backdrop-blur-[2px]"></div>

            <div className="relative z-20 h-full flex items-center">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                                <div className="max-w-2xl lg:max-w-5xl mx-auto text-center  rounded-2xl p-8 sm:p-10 md:p-12">
                                    <h1 className="md:text-5xl text-4xl text-[#25343F] lg:text-6xl font-bold mb-8 leading-[1.1] animate-slide-up">
                                       
                                    Empowering Growth Through Digital Transformation
                                    </h1>

                                    <p className="text-xl sm:text-2xl mx-auto text-[#25343F] mb-12 max-w-3xl leading-relaxed animate-slide-up-delay drop-shadow-lg">
                                       Accelerate your business growth with cutting-edge technology solutions tailored to your unique needs.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay">
                                        <button 
                                            className="group relative overflow-hidden rounded-xl px-10 py-5 text-lg font-semibold text-white bg-[#6F8F72] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#5a7a5d]"
                                        >
                                            <div className="absolute inset-0 bg-[#25343F] -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                            <div className="flex items-center justify-center gap-3 relative z-10">
                                                <span>Get Started</span>
                                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </button>
                                        
                                        <button className="group rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-lg px-10 py-5 text-lg font-semibold text-[#25343F] transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:shadow-xl">
                                            <div className="flex items-center justify-center gap-3">
                                                <Play className="w-5 h-5" />
                                                <span>Watch Demo</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
        </header>
    );
};

export default Header;