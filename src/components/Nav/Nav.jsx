'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import W from '../assets/w.png';
import A from '../assets/a.png';
import B from '../assets/b.png';
import T from '../assets/t.png';
import Hrms from '../assets/hrms.png';
import Eservices from '../assets/e-services.png';
import Mis from '../assets/mis.png';
import Tnterp from '../assets/enterp.png';
import News from '../assets/news.png';
import Customer from '../assets/customer.png';
import Case from '../assets/case.png';
import Meet from '../assets/meet.png';
import Contact from '../assets/contact.png';
import Logo from '../assets/Website-Logo-ITCart/Website-Logo-27.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getImageSrc = (img) => {
    return img?.src || img || '';
  };

  return (
    <nav className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <img 
              src={getImageSrc(Logo)} 
              alt="logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        
        <div className="flex-none lg:hidden">
          <button 
            className="btn btn-square btn-ghost"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`flex-none ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="menu menu-horizontal px-1 gap-2">
            {/* Services Dropdown */}
            <li>
              <details className="dropdown dropdown-end">
                <summary className="btn btn-ghost">Services</summary>
                <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow-lg border border-base-300">
                  <li>
                    <Link href="/ourservice" className="flex items-center gap-3">
                      <img src={getImageSrc(W)} alt="" className="w-6 h-6" />
                      <span>Web Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ourservice" className="flex items-center gap-3">
                      <img src={getImageSrc(A)} alt="" className="w-6 h-6" />
                      <span>App Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ourservice" className="flex items-center gap-3">
                      <img src={getImageSrc(B)} alt="" className="w-6 h-6" />
                      <span>Business Automation</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ourservice" className="flex items-center gap-3">
                      <img src={getImageSrc(T)} alt="" className="w-6 h-6" />
                      <span>Technology Consulting</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Solutions Dropdown */}
            <li>
              <details className="dropdown dropdown-end">
                <summary className="btn btn-ghost">Solutions</summary>
                <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow-lg border border-base-300">
                  <li>
                    <Link href="/cartsolution" className="flex items-center gap-3">
                      <img src={getImageSrc(Hrms)} alt="" className="w-6 h-6" />
                      <span>HRMS Automation</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cartsolution" className="flex items-center gap-3">
                      <img src={getImageSrc(Eservices)} alt="" className="w-6 h-6" />
                      <span>E-Services Automation</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cartsolution" className="flex items-center gap-3">
                      <img src={getImageSrc(Mis)} alt="" className="w-6 h-6" />
                      <span>MIS Solution</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cartsolution" className="flex items-center gap-3">
                      <img src={getImageSrc(Tnterp)} alt="" className="w-6 h-6" />
                      <span>Enterprise Solution</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Resources Dropdown */}
            <li>
              <details className="dropdown dropdown-end">
                <summary className="btn btn-ghost">Resources</summary>
                <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow-lg border border-base-300">
                  <li>
                    <Link href="/resources" className="flex items-center gap-3">
                      <img src={getImageSrc(Customer)} alt="" className="w-6 h-6" />
                      <span>Blogs</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="flex items-center gap-3">
                      <img src={getImageSrc(Case)} alt="" className="w-6 h-6" />
                      <span>Case Studies</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="flex items-center gap-3">
                      <img src={getImageSrc(News)} alt="" className="w-6 h-6" />
                      <span>News</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="flex items-center gap-3">
                      <img src={getImageSrc(News)} alt="" className="w-6 h-6" />
                      <span>Help Center</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Careers Link */}
            <li>
              <Link href="/careers" className="btn btn-ghost">Careers</Link>
            </li>

            {/* Get in Touch Dropdown */}
            <li>
              <details className="dropdown dropdown-end">
                <summary className="btn btn-ghost">Get in touch</summary>
                <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow-lg border border-base-300">
                  <li>
                    <Link href="/ourteam" className="flex items-center gap-3">
                      <img src={getImageSrc(Meet)} alt="" className="w-6 h-6" />
                      <span>Meet the Team</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="flex items-center gap-3">
                      <img src={getImageSrc(Contact)} alt="" className="w-6 h-6" />
                      <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
