'use client';

import React, { useState } from 'react';
import Banner from '../banner/Banner';
import { ResourcesData } from '../Utility';
import NewsLetter from '../NewsLetter/NewsLetter';
import HelpCenter from './HelpCenter';
import News from './News';
import CaseSudies from './CaseSudies';
import Blog from './Blog';

function Resources() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabContent = [
    { component: <Blog />, label: 'Blogs' },
    { component: <CaseSudies />, label: 'Case Studies' },
    { component: <News />, label: 'News' },
    { component: <HelpCenter />, label: 'Help Center' },
  ];

  return (
    <>
      <Banner
        className="bg-resource"
        subtitle='Make Your Work Efficient With'
        title='Know your Technologies!'
        bodytext='Keep up with our journey in the highly competitive world of Technology and experience our growth through thick and thin!'
      />

      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          {/* DaisyUI Tabs */}
          <div className="tabs tabs-boxed justify-center mb-8 bg-base-200">
            {ResourcesData.map((item, index) => (
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

      <NewsLetter />
    </>
  );
}

export default Resources;
