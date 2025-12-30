'use client';

import React, { useState } from 'react';
import Banner from '../banner/Banner';
import { SolutionData } from '../Utility';
import Hrms from './Hrms';
import Eservice from './Eservice';
import Mis from './Mis';
import Enterprise from './Enterprise';
import PeopleSay from '../PeopleSay/PeopleSay';

function CartSolution() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabContent = [
    { component: <Hrms />, label: 'HRMS' },
    { component: <Eservice />, label: 'E-Services' },
    { component: <Mis />, label: 'MIS' },
    { component: <Enterprise />, label: 'Enterprise Solutions' },
  ];

  return (
    <>
      <Banner
        className='bg-light8'
        subtitle='Did you Digitally Streamline your Business?'
        title='Our Solutions'
        bodytext="Don't worry, IT Cart does it for you! We cover that extra mile to ensure your technology needs are meet with the best in the class expertise, services & support!"
      />

      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          {/* DaisyUI Tabs */}
          <div className="tabs tabs-boxed justify-center mb-8 bg-base-200">
            {SolutionData.map((item, index) => (
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

export default CartSolution;
