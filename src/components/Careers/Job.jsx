'use client';

import React from 'react'
import Banner from '../banner/Banner';
import NewsLetter from '../NewsLetter/NewsLetter'
import Link from 'next/link';

function Job() {
    return (
        <>
             <Banner 
           className="bg-career-bg"
            subtitle='Make Your Work Efficient With' 
            title ='Join Us on Our Thrilling Journey!' 
            bodytext='Become a valuable part of Devora family & fast-track your tech career and go through a trail-blazing experience of digital transformation of Businesses & Institutions in Real-time with Real Impact!' />
            <section>
            <div className="container mx-auto career-section bg-career-bg my-5 rounded-2xl py-8 px-4 border border-base-300 bg-base-100/70">
                      <div className="flex justify-center">
                        
                          <div className="w-full max-w-5xl">
                            <div className="flex flex-col gap-2">
                              <h2 className="text-left mb-1">Senior Software Engineer Android</h2>
                              <p className="opacity-80">
                                at Pivot{' '}
                                <Link href="/careers" className="text-primary font-medium hover:underline">
                                  (View all jobs)
                                </Link>
                              </p>
                              <span className="text-sm opacity-70">Redwood City, CA</span>
                            </div>

                            <h5 className="mt-6 mb-3 font-semibold">JOB DESCRIPTION</h5>
                            <h6 className="text-primary mb-3 font-medium">Summary/Objective</h6>
                            <p className="font-medium">The Senior Android Engineer is responsible for leading and growing the Android team</p>
                          
                            <h6 className="text-primary mb-3 font-medium">Essential Functions</h6>
                            <p>Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions.</p>
                           
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Work closely with product, hardware and design teams to build innovative products for the Android platform</li>
                                <li>Implement custom native user interfaces using the latest native Java Application programming techniques</li>
                                <li>Implement a real-time, scalable coaching and peer-to-peer support system</li>
                                <li>Seamlessly integrate our Bluetooth LE hardware device into the app  experience</li>
                                <li>Participate in design and code reviews</li>
                                <li>Identify and communicate Android best practices</li>
                            </ul>
                            <h6 className="text-primary mb-3 font-medium">Competencies</h6>
                            <ol className="list-decimal pl-6 space-y-1">
                                <li>Business Acumen.</li>
                                <li>Communication.</li>
                                <li>Manage complexity.</li>
                                <li>Decision making.</li>
                                <li>Strong Aptitude.</li>
                                <li>Attention to details.</li>
                            </ol>

                            <h6 className="text-primary mb-4 font-medium">Supervisory Responsibility</h6>
                            <p>None</p>
                            <h6 className="text-primary mb-3 font-medium">Work Environment</h6>
                            <p>This job operates in a professional office environment. This role routinely uses standard office equipment such as laptop computers and smartphones.</p>
                            <h6 className="text-primary mb-4 font-medium">Physical Demands</h6>
                            <p>The physical demands described here are representative of those that must be met by an employee to successfully perform the essential functions of this job.</p>
                            <p>While performing the duties of this job, the employee is occasionally required to stand; walk; sit; use hands to finger, handle, or feel objects, tools, or controls; reach with hands and arms; climb stairs; balance; stoop, kneel, crouch or crawl; talk or hear; and taste or smell. The employee must occasionally lift or move up to 20 pounds. Specific vision abilities required by the job include close vision, distance vision, color vision, peripheral vision, depth perception and the ability to adjust focus. </p>
                            <h6 className="text-primary mb-4 font-medium">AAP/EEO Statement</h6>
                            <p>It is the policy of Carrot Inc. to provide equal employment opportunity (EEO) to all persons regardless of age, color, national origin, citizenship status, physical or mental disability, race, religion, creed, gender, sex, sexual orientation, gender identity and/or expression, genetic information, marital status, status with regard to public assistance, veteran status, or any other characteristic protected by federal, state or local law. In addition, Carrot Inc. will provide reasonable accommodations for qualified individuals with disabilities.</p>
                         
                          </div>
                         
                        </div>
                      
                </div>
                <div className="container mx-auto career-section bg-business my-5 rounded-2xl py-8 px-4 border border-base-300 bg-base-100/70">
                     <div className="flex justify-center">
                        
                         <div className="w-full max-w-5xl">
                             <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
                             <div className="col-span-1 md:col-span-1">
                            <h2 className="text-start">Apply for this Job</h2>
                         </div>
                         <div className="col-span-1 md:col-span-1 text-end">
                            <p className="opacity-70">*Required</p>
                         </div>
                             </div>
                         <div className="grid grid-cols-1 md:grid-cols-2">
                       
                        <div className="col-span-1 md:col-span-1 mb-3 md:mb-3">
                           <input type="text" placeholder="First Name*" className="input input-bordered w-full mb-2" />
                        </div>
                        <div className="col-span-1 md:col-span-1 mb-3 md:mb-3">
                           <input type="text" placeholder="Last Name*" className="input input-bordered w-full mb-2" />
                        </div>
                        <div className="col-span-1 md:col-span-1 mb-3 md:mb-3">
                            <input type="email" placeholder="E-email*" className="input input-bordered w-full mb-2" />
                        </div>
                        <div className="col-span-1 md:col-span-1 mb-3 md:mb-3">
                            <input type="tel" placeholder="Linkedin Profile" className="input input-bordered w-full mb-2" />
                        </div>
                      
                        <div className="col-span-1 attacment">
                           <div className="pt-3">
                           <label className='font-medium'>Resume/CV <span>*</span></label>
                        <input type="file" id="resume" className="sr-only" aria-label="Resume" />
                        <label htmlFor="resume" className="text-secondary font-medium italic ml-5" aria-hidden="true">Attach</label>
                           </div>
                        </div>
                        <div className="col-span-1 attacment mt-5 mb-5">
                           <div className='border-b border-base-300 pb-5'>
                           <label className='font-medium'>Resume/CV <span>*</span></label>
                        <input type="file" id="resume2" className="sr-only" aria-label="Resume" />
                        <label htmlFor="resume2" className="text-secondary font-medium italic ml-5" aria-hidden="true">Attach</label>
                           </div>
                        </div>
                        <div className="col-span-1 mb-3 md:mb-3">
                            <input type="text" placeholder="Company's Name" className="input input-bordered w-full mb-2" />
                        </div>
                        <div className="col-span-1 mb-3 md:mb-3">
                            <input type="text" placeholder="Company's Name" className="input input-bordered w-full mb-2" />
                        </div>
                        <div className="col-span-1 pt-3 md:pt-3 text-end">
                            <button className="btn btn-secondary px-6">Submit Application</button>
                        </div>
                      </div>
                         </div>
                     </div>
                </div>
            </section>
            <NewsLetter />
        </>
    )
}

export default Job
