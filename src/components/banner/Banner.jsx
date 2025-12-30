'use client';

import React from 'react';

const Banner = (props) => {
  return (
    <section className={`py-12 common-banner ${props.className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="mb-3 mt-3 font-black text-4xl md:text-5xl">{props.title}</h1>
          <h4 className="mb-5 text-2xl md:text-3xl font-semibold">{props.subtitle}</h4>
          <p className="max-w-2xl mx-auto text-lg">{props.bodytext}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
