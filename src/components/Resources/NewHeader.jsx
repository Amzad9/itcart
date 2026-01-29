'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin, Twitter, Share2 } from 'lucide-react';

function NewHeader(props) {
  return (
    <div className="mb-6">
      {/* Title with Border */}
      <div className="border-b-2 border-[#25343F]/20 pb-3 mb-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#25343F] text-start">
          {props.title}
        </h2>
      </div>
      
      {/* Author and Share Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
              alt="Author"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-[#25343F]">Liis Milk</p>
            <p className="text-sm text-[#64748B]">Content Writer</p>
          </div>
        </div>
        
        {/* Share Buttons */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-[#64748B] mr-2">SHARE</span>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#6F8F72] flex items-center justify-center transition-all duration-300 group"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#6F8F72] flex items-center justify-center transition-all duration-300 group"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
          </a>
          <button 
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#6F8F72] flex items-center justify-center transition-all duration-300 group"
            aria-label="Share"
          >
            <Share2 className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewHeader;
