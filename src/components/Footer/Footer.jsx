'use client';

import React from 'react';
import Link from 'next/link';

import Logo from '../assets/Website-Logo-ITCart/Website-Logo-27.svg';
import Insta from '../assets/insta.png';
import Facebook from '../assets/facebook.png';
import Linkedin from '../assets/linkedin.png';
import YouTube from '../assets/youtube.png';

function Footer() {
  const getImageSrc = (img) => {
    return img?.src || img || '';
  };

  return (
    <footer className="bg-base-200 text-base-content py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="block mb-4">
              <img 
                src={getImageSrc(Logo)} 
                alt="Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-primary font-semibold mb-4">Services</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/ourservice" className="link link-hover text-base-content/70">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/ourservice" className="link link-hover text-base-content/70">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/ourservice" className="link link-hover text-base-content/70">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="/ourservice" className="link link-hover text-base-content/70">
                  Technology Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="text-secondary font-semibold mb-4">Solutions</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/cartsolution" className="link link-hover text-base-content/70">
                  HRMS Automation
                </Link>
              </li>
              <li>
                <Link href="/cartsolution" className="link link-hover text-base-content/70">
                  E-Services
                </Link>
              </li>
              <li>
                <Link href="/cartsolution" className="link link-hover text-base-content/70">
                  MIS Solution
                </Link>
              </li>
              <li>
                <Link href="/cartsolution" className="link link-hover text-base-content/70">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-warning font-semibold mb-4">Resources</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="link link-hover text-base-content/70">
                  News, Help Center
                </Link>
              </li>
              <li>
                <Link href="/resources" className="link link-hover text-base-content/70">
                  Customer Blogs
                </Link>
              </li>
              <li>
                <Link href="/resources" className="link link-hover text-base-content/70">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h5 className="text-primary font-semibold mb-4">Careers</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/careers" className="link link-hover text-base-content/70">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch & Social */}
          <div>
            <h5 className="text-secondary font-semibold mb-4">Get in Touch</h5>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/ourteam" className="link link-hover text-base-content/70">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link link-hover text-base-content/70">
                  Contact Us
                </Link>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="btn btn-circle btn-ghost" aria-label="Instagram">
                <img src={getImageSrc(Insta)} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="btn btn-circle btn-ghost" aria-label="Facebook">
                <img src={getImageSrc(Facebook)} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="btn btn-circle btn-ghost" aria-label="LinkedIn">
                <img src={getImageSrc(Linkedin)} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" className="btn btn-circle btn-ghost" aria-label="YouTube">
                <img src={getImageSrc(YouTube)} alt="YouTube" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="divider"></div>
        <div className="text-center pt-4">
          <p className="text-base-content/70">
            Copyright &copy; {new Date().getFullYear()} IT Cart - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
