'use client';

import React from 'react';
import './Newsletter.scss';

function NewsLetter() {
  return (
    <section className="bg-info py-12 newslatter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Join our Newsletter</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <form className="flex gap-2 mt-8">
              <input
                type="email"
                placeholder="E-Mail*"
                className="input input-bordered flex-1"
                required
              />
              <button
                type="submit"
                className="btn btn-outline btn-secondary bg-white font-semibold px-6"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
