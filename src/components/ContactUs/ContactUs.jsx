'use client';

import React from 'react';
import FormControl from './FormControl';
import Contat from '../assets/Grou.png';
import Phone from '../assets/phone.png';
import Map from '../assets/map.png';
import Mail from '../assets/mail.png';
import './ContactUs.scss';

const ContactUs = () => {
  const getImageSrc = (img) => img?.src || img || '';

  return (
    <section className="contactus pb-12">
      <div className="container mx-auto px-4">
        <div className="bg-contact rounded-2xl px-6 pt-8 pb-8">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
            <h4 className="text-2xl font-semibold">with us</h4>
          </div>

          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {/* Contact Info Card */}
            <div className="w-full lg:w-1/2">
              <div className="card bg-secondary text-white shadow-xl">
                <div className="card-body items-center text-center pt-8">
                  <img 
                    src={getImageSrc(Contat)} 
                    alt="Contact" 
                    className="max-w-full h-auto mb-4"
                  />

                  <div className="w-full flex items-start justify-center gap-4 mb-6 mt-4 pt-4">
                    <div className="w-8">
                      <img src={getImageSrc(Phone)} alt="Phone" className="w-6 h-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="mb-0 text-white">+1 323-913-4688</p>
                      <p className="text-white">+1 323-888-4554</p>
                    </div>
                  </div>

                  <div className="w-full flex items-start justify-center gap-4 mb-6">
                    <div className="w-8">
                      <img src={getImageSrc(Mail)} alt="Mail" className="w-6 h-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="mb-0 text-white">mail@demolimk.org</p>
                      <p className="text-white">info@demolimk.org</p>
                    </div>
                  </div>

                  <div className="w-full flex items-start justify-center gap-4 mb-6">
                    <div className="w-8">
                      <img src={getImageSrc(Map)} alt="Map" className="w-6 h-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="mb-0 text-white">1234 Street Name</p>
                      <p className="text-white">City, State 12345</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <FormControl />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
