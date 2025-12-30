'use client';

import React, { useState } from 'react';
import Banner from '../banner/Banner';
import { Solution } from '../Utility';
import PeopleSay from '../PeopleSay/PeopleSay';
import Web from './Web';
import ServiceApp from './ServiceApp';
import Business from './Business';
import Technology from './Technology';

function OurService() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabContent = [
    { component: <Web />, label: 'Web Development' },
    { component: <ServiceApp />, label: 'App Development' },
    { component: <Business />, label: 'Business Automation' },
    { component: <Technology />, label: 'Technology Consulting' },
  ];

  return (
    <>
      <Banner
        className='bg-light6'
        subtitle='Did you Digitally Streamline your Business?'
        title='Our Services'
        bodytext="Don't worry, IT Cart does it for you! We cover that extra mile to ensure your technology needs are meet with the best in the class expertise, services & support!"
      />

      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          {/* DaisyUI Tabs */}
          <div className="tabs tabs-boxed justify-center mb-8 bg-base-200">
            {Solution.map((item, index) => (
              <button
                key={item.key}
                className={`tab tab-lg ${activeTab === index ? 'tab-active' : ''}`}
                onClick={() => handleTabChange(index)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {tabContent[activeTab]?.component}
          </div>
        </div>
      </section>

      <PeopleSay />
    </>
  );
}

export default OurService;
