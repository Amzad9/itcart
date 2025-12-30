'use client';

import React from 'react';
import Banner from '../banner/Banner';
import Link from 'next/link';
import Image from 'next/image';
import Carrer from '../assets/career.png';

function Careers() {
  const getImageSrc = (img) => img?.src || img || '';

  return (
    <>
      <Banner 
        className="bg-career-bg"
        subtitle='Make Your Work Efficient With' 
        title='Join Us on Our Thrilling Journey!' 
        bodytext='Become a valuable part of IT Cart family & fast-track your tech career and go through a trail-blazing experience of digital transformation of Businesses & Institutions in Real-time with Real Impact!'
      />
           
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="career-section bg-career-bg my-5 rounded-2xl py-12">
            <div className="flex justify-center mb-8">
              <img 
                src={getImageSrc(Carrer)} 
                alt="Career" 
                className="max-w-full h-auto"
              />
            </div>
           
            <div className="max-w-4xl mx-auto space-y-8 text-center px-4">
              <div>
                <h2 className="text-3xl font-bold mb-3">Internships – College to Corporate</h2>
                <p className="font-medium text-base-content/80 mt-3">
                  A golden opportunity for graduates to jump on the tech-wagon and get hands-on experience on real projects!
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-3">Development – Coders & Problems Solvers</h2>
                <p className="font-medium text-base-content/80 mt-3">
                  We call on the best developers around Globe to join IT Cart family on a journey to solve world problems through coding!
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-3">Sales & Marketing – People | Product | Promotion</h2>
                <p className="font-medium text-base-content/80 mt-3">Do you just love selling a technology solution?</p>
                <p className="font-medium text-base-content/80 mt-3">Are you a marketing researcher keen on exploring IT Market?</p>
                <p className="font-medium text-base-content/80 mt-3">Then IT Cart might just be your working home!</p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-3">Management – Leadership Roles</h2>
                <p className="font-medium text-base-content/80 mt-3">
                  "Vision, Initiative, and a seasoned Leader with loads and loads of top tier management experience!"
                </p>
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto mt-12 px-4">
              <h2 className="text-3xl font-bold mb-8 text-left">Current Job Openings</h2>
              
              <div className="space-y-6">
                <div>
                  <h5 className="mb-4 font-semibold text-xl">Engineering</h5>
                  <div className="space-y-4">
                    <div>
                      <Link href="/job" className="text-primary mb-1 font-medium hover:underline block">
                        Senior Software Engineer Android
                      </Link>
                      <p className="font-medium text-base-content/70">Redwood City, CA</p>
                    </div>
                    <div>
                      <Link href="/job" className="text-primary mb-1 font-medium hover:underline block">
                        Senior Software Engineer - iOS
                      </Link>
                      <p className="font-medium text-base-content/70">Redwood City, CA</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="mb-4 font-semibold text-xl">Product</h5>
                  <div>
                    <Link href="/job" className="text-primary mb-1 font-medium hover:underline block">
                      Senior Product Manager
                    </Link>
                    <p className="font-medium text-base-content/70">Redwood City, CA</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="mb-4 font-semibold text-xl">R&D</h5>
                  <div className="space-y-4">
                    <div>
                      <Link href="/job" className="text-primary mb-1 font-medium hover:underline block">
                        Quality Engineer
                      </Link>
                      <p className="font-medium text-base-content/70">Redwood City, CA</p>
                    </div>
                    <div>
                      <Link href="/job" className="text-primary mb-1 font-medium hover:underline block">
                        Public Sector - National Sales Director
                      </Link>
                      <p className="font-medium text-base-content/70">Redwood City, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
