'use client';

import React from 'react';
import styles from './Business.module.css';

import Dislike from '../assets/dislike.png';
import Like from '../assets/like.png';

function Business() {
  const getImageSrc = (img) => img?.src || img || '';

  return (
    <section className={`${styles.business} py-12`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-5">How we help Businesses Grow!</h2>
          <p className="max-w-4xl mx-auto text-lg">
            IT Cart helps a Business develop into an Enterprise that is technologically systematized to automate most of its processes in order to perform at its optimally best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Basic Card */}
          <div className={`${styles.basic} card bg-base-100 shadow-xl`}>
            <div className="card-body">
              <table className="table table-zebra w-full">
                <tbody>
                  <tr><td>Dependency</td></tr>
                  <tr><td>Possibility of Error</td></tr>
                  <tr><td>Growth</td></tr>
                  <tr><td>Tracking KPI's</td></tr>
                  <tr><td>Generating Reports</td></tr>
                  <tr><td>Administration</td></tr>
                  <tr><td>Engaging employees in Unison</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Traditional Business Format */}
          <div className={`${styles.formatCard} card bg-base-100 shadow-xl`}>
            <div className="card-header bg-primary text-white text-center py-4 rounded-t-2xl">
              <h4 className="text-xl font-semibold">Traditional Business Format</h4>
            </div>
            <div className="card-body">
              <table className="table table-zebra w-full text-center">
                <tbody>
                  <tr><td>Human</td></tr>
                  <tr><td>High</td></tr>
                  <tr><td>Difficult</td></tr>
                  <tr><td>Difficult</td></tr>
                  <tr><td>Manually</td></tr>
                  <tr><td>In person</td></tr>
                  <tr><td>Difficult</td></tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer bg-white flex justify-center items-center py-3 rounded-b-2xl">
              <img src={getImageSrc(Dislike)} alt="Dislike" className="w-8 h-8" />
            </div>
          </div>

          {/* Digitally Transformed Enterprise */}
          <div className={`${styles.enterprice} card bg-base-100 shadow-xl`}>
            <div className="card-header bg-secondary text-white text-center py-6 rounded-t-2xl">
              <h4 className="text-xl font-semibold">Digitally Transformed Enterprise</h4>
            </div>
            <div className="card-body">
              <table className="table table-zebra w-full text-center">
                <tbody>
                  <tr><td>System</td></tr>
                  <tr><td>Low</td></tr>
                  <tr><td>Easy to Scale</td></tr>
                  <tr><td>Measured in real time</td></tr>
                  <tr><td>Automatically</td></tr>
                  <tr><td>From anywhere</td></tr>
                  <tr><td>Easy</td></tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer bg-white flex justify-center items-center py-4 rounded-b-2xl">
              <img src={getImageSrc(Like)} alt="Like" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Business;
