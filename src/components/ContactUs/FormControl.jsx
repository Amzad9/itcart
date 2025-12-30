'use client';

import React, { useState } from 'react';
import './FormControl.scss';

function FormControl() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: ""
  });

  const { name, email, phone, message, company } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" && phone !== "" && company !== "") {
      try {
        await fetch("https://v1.nocodeapi.com/shadab/google_sheets/MwiXzprYYAROCodp?tabId=Sheet1", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[name, email, phone, message, company]]),
        });
        alert("Successfully submitted");
      } catch (err) {
        console.log(err);
        alert("Submission failed");
      }
    } else {
      alert('Please fill the required details');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name*"
            className="input input-bordered w-full"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              placeholder="E-mail*"
              className="input input-bordered w-full"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone*"
              className="input input-bordered w-full"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Company's Name*"
              className="input input-bordered w-full"
              name="company"
              value={company}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <details className="dropdown w-full">
              <summary className="btn btn-outline w-full justify-between">
                Size of your company
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow border border-base-300">
                <li><a>0</a></li>
                <li><a>11-50</a></li>
                <li><a>51-250</a></li>
                <li><a>251-500</a></li>
                <li><a>501+</a></li>
              </ul>
            </details>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <details className="dropdown w-full">
              <summary className="btn btn-outline w-full justify-between">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow border border-base-300">
                <li><label className="label cursor-pointer justify-between"><span>Web Development</span><input type="checkbox" className="checkbox" /></label></li>
                <li><label className="label cursor-pointer justify-between"><span>App Development</span><input type="checkbox" className="checkbox" /></label></li>
                <li><label className="label cursor-pointer justify-between"><span>Business Automation</span><input type="checkbox" className="checkbox" /></label></li>
                <li><label className="label cursor-pointer justify-between"><span>Technology Consulting</span><input type="checkbox" className="checkbox" /></label></li>
              </ul>
            </details>
          </div>
          <div>
            <details className="dropdown w-full">
              <summary className="btn btn-outline w-full justify-between">
                Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow border border-base-300">
                <li><label className="label cursor-pointer justify-between"><span>HRMS Automation</span><input type="checkbox" className="checkbox" /></label></li>
                <li><label className="label cursor-pointer justify-between"><span>E-Services Automation</span><input type="checkbox" className="checkbox" /></label></li>
                <li><label className="label cursor-pointer justify-between"><span>MIS Automation</span><input type="checkbox" className="checkbox" /></label></li>
                <li><label className="label cursor-pointer justify-between"><span>Enterprise Solutions</span><input type="checkbox" className="checkbox" /></label></li>
              </ul>
            </details>
          </div>
        </div>

        <div>
          <textarea
            className="textarea textarea-bordered w-full min-h-[150px]"
            placeholder="Tell us all about it...."
            name="message"
            value={message}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-4">
          <div>
            <h4 className="text-secondary text-lg font-semibold">We shall get back to you shortly</h4>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-secondary text-white px-8 py-3 rounded-2xl"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormControl;
