'use client';

import React from 'react';
import Img1 from '../assets/service/1.png';
import Img2 from '../assets/service/2.png';
import Img3 from '../assets/service/3.png';
import Img4 from '../assets/service/4.png';
import Img5 from '../assets/service/5.png';
import Img6 from '../assets/service/6.png';
import Img7 from '../assets/service/7.png';
import Img8 from '../assets/service/8.png';
import Img9 from '../assets/service/9.png';
import Img10 from '../assets/service/10.png';
import Img11 from '../assets/service/11.png';
import Img12 from '../assets/service/12.png';
import Adit1 from '../assets/odit1.png';
import Adit2 from '../assets/odit2.png';

const getImageSrc = (img) => img?.src || img || '';

function Web() {
  return (
    <>
      <section>
        <div className="container mx-auto bg-light6 rounded-t-2xl px-6 py-5">
          <div className="text-center pb-5 pt-4">
            <h2 className="text-3xl font-bold">Corporate Intranet Portal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Create your Virtual Office</h4>
              <p>Work from anywhere in the world by making your office mobile with our Intranet systems, without compromising discipline, productivity, vigilance & much needed security!</p>
            </div>
            <div>
              <img src={getImageSrc(Img1)} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-8">
            <div>
              <img src={getImageSrc(Img2)} alt="" className="w-full h-auto" />
            </div>
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Engage employees with Intranet</h4>
              <p>Get things done the right way with individuals & teams on real-time basis through our collaboration tools!</p>
            </div>
          </div>
          <div className="pt-6 text-center">
            <a href="/ourservice" className="link link-primary text-lg">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto bg-light3 px-6 py-5">
          <div className="text-center pb-5 pt-4">
            <h2 className="text-3xl font-bold">Corporate Public Websites</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Create your Online Presence</h4>
              <p>Become accessible to all your potential market by going online and establishing your company's corporate website!</p>
            </div>
            <div>
              <img src={getImageSrc(Img3)} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-8">
            <div>
              <img src={getImageSrc(Img4)} alt="" className="w-full h-auto" />
            </div>
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Position your Brand like never before</h4>
              <p>What better way to blow your trumpet than your corporate website. Create your unique website with us, in cohesion with your brand philosophy!</p>
            </div>
          </div>
          <div className="pt-6 text-center">
            <a href="/ourservice" className="link link-primary text-lg">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto bg-light7 px-6 py-5">
          <div className="text-center pb-5 pt-4">
            <h2 className="text-3xl font-bold">Document Management</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Create your Online Presence</h4>
              <p>Become accessible to all your potential market by going online and establishing your company's corporate website!</p>
            </div>
            <div>
              <img src={getImageSrc(Img5)} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-8">
            <div>
              <img src={getImageSrc(Img6)} alt="" className="w-full h-auto" />
            </div>
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Position your Brand like never before</h4>
              <p>What better way to blow your trumpet than your corporate website. Create your unique website with us, in cohesion with your brand philosophy!</p>
            </div>
          </div>
          <div className="pt-7 text-center">
            <a href="/ourservice" className="link link-primary text-lg">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto bg-light5 px-6 py-5">
          <div className="text-center pb-5 pt-4">
            <h2 className="text-3xl font-bold">Digital Learning Platform</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Create collaborative learning platforms</h4>
              <p>Now you can bring subject matter experts and the students from anywhere in the world into classes in engaging & effective ways!</p>
            </div>
            <div>
              <img src={getImageSrc(Img7)} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-8">
            <div>
              <img src={getImageSrc(Img8)} alt="" className="w-full h-auto" />
            </div>
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Scalable, Organized and Transparent</h4>
              <p>Streamline and track your organization's training & development process with our scalable solutions which is custom created for your learning needs!</p>
            </div>
          </div>
          <div className="pt-6 text-center">
            <a href="/ourservice" className="link link-primary text-lg">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto bg-light3 px-6 py-5">
          <div className="text-center pb-5 pt-4">
            <h2 className="text-3xl font-bold">Digital Process Management</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Establish Visual Workflows</h4>
              <p>We help you create and establish visual workflows of complex processes to enhance process efficiency, effectiveness & productivity</p>
            </div>
            <div>
              <img src={getImageSrc(Img9)} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-8">
            <div>
              <img src={getImageSrc(Img10)} alt="" className="w-full h-auto" />
            </div>
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Track the performance with KPIs</h4>
              <p>Gauge the performance of key elements in the processes with specialized indicators generating reports in real-time</p>
            </div>
          </div>
          <div className="pt-6 text-center">
            <a href="/ourservice" className="link link-primary text-lg">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto bg-light5 px-6 py-5">
          <div className="text-center pb-5 pt-4">
            <h2 className="text-3xl font-bold">Project Management Portal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Complex projects into workable Modules</h4>
              <p>Now plan, schedule and manage development stages easily with our built-in program that ups your project management game!</p>
            </div>
            <div>
              <img src={getImageSrc(Img11)} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-8">
            <div>
              <img src={getImageSrc(Img12)} alt="" className="w-full h-auto" />
            </div>
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Never miss your deadlines again</h4>
              <p>With our real-time progress tracking, resource management & performance indicators, you can always be ahead of delivery date!</p>
            </div>
          </div>
          <div className="pt-6 text-center">
            <a href="/ourservice" className="link link-primary text-lg">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto bg-light8 rounded-b-2xl mb-3 px-6 py-5">
          <div className="text-center pb-5 pt-4">
            <h2 className="text-3xl font-bold">Audit and Quality Management</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Replace the paperwork Auditing</h4>
              <p>Manage your auditing process with our tools that saves lot of paper and efforts by bringing you real-time reports of all your processes from all the branches direct to your system!</p>
            </div>
            <div>
              <img src={getImageSrc(Adit1)} className="w-full h-auto" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-8">
            <div>
              <img src={getImageSrc(Adit2)} className="w-full h-auto" alt="" />
            </div>
            <div className="ps-5">
              <h4 className="mb-4 text-xl font-semibold">Reduce duplication, improve accuracy</h4>
              <p>Eliminate the ambiguity and redundancies with our audit tool and get accurate results!</p>
            </div>
          </div>
          <div className="pt-6 text-center">
            <a href="/ourservice" className="link link-primary text-lg">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Web;
