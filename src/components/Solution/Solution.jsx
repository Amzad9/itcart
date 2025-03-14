import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Button from '../Button/button';
import TabContainer from '../Tabs/TabContainer';
import Tabs from '../Tabs/Tabs';
import NavLink from '../Tabs/NavLink';
import SlideCard from '../Card/SlideCard';
import { SolutionData } from '../Utility';
import '../Client/Client.scss';
import styles from './solution.module.css';

import Emp from '../assets/hrms/1.png';
import Recru from '../assets/hrms/2.png';
import Onboarding from '../assets/hrms/3.png';
import Attendance from '../assets/hrms/4.png';
import Employee from '../assets/hrms/5.png';
import Travel from '../assets/hrms/6.png';

import Document from '../assets/EService/1.png';
import Business from '../assets/EService/2.png';
import Non from '../assets/EService/3.png';
import Service from '../assets/EService/4.png';
import Capital from '../assets/EService/5.png';
import KYC from '../assets/EService/6.png';

import Digital from '../assets/MIS/1.png';
import Corporate from '../assets/MIS/3.png';
import Department from '../assets/MIS/3.png';
import Asset from '../assets/MIS/4.png';
import Management from '../assets/MIS/5.png';
import Customer from '../assets/MIS/6.png';

import degree from '../assets/EnterP/1.png';
import Real from '../assets/EnterP/3.png';
import Performance from '../assets/EnterP/3.png';
import Industrial from '../assets/EnterP/4.png';
import Healthcare from '../assets/EnterP/5.png';
import Procurement from '../assets/EnterP/6.png';

const Solution = () => {
    const [index, setIndex] = useState(0);

    const hrm = [
        { id: 1, img: Emp, title: 'Employee Management', items: ['Employee Database', 'Documentation', 'Birthdays & Social Events', 'Search & Find Filters', 'Employee Roster', 'Notes'] },
        { id: 2, img: Recru, title: 'Recruitment Process Management', items: ['Job Description', 'Job Board Integration', 'Sourcing', 'References', 'Interview Process', 'Internal Hiring'] },
        { id: 3, img: Onboarding, title: 'Onboarding Process Management', items: ['Background Check', 'Documentation', 'Salary Break-down', 'Joining Letter', 'Probation Process', 'Asset Allocation'] },
        { id: 4, img: Attendance, title: 'Attendance & Time Logs Management', items: ['Check-in/out Tracker ', 'Attendance Tracking', 'Project Time Tracking', 'Overtime Tracking', 'Rounding Rules & Exceptions', 'GPS Tracking '] },
        { id: 5, img: Employee, title: 'Employee Leave Management', items: ['Time-off Requests', 'Leave Application', 'Online Leave Management', 'Holiday Calendar', 'Vacation Tracking', 'Leave Tracking'] },
        { id: 6, img: Travel, title: 'Travel & Expense Claims Processing', items: ['Travel Policies', 'Pre-approved Trips', 'Travel Booking', 'Scan & Attach Receipts', 'Expense Review', 'Reimbursement'] }
    ];

    const cms = [
        { id: 1, img: Document, title: 'Document Change Request (DCR)', items: ['Change Request Form', 'Change Control', 'Request a Change', 'Review & Analyze', 'Submit the Request', 'Approval'] },
        { id: 2, img: Business, title: 'Business Change Request (BCR)', items: ['Requester Details', 'Requested Change', 'Functional Specifications', 'Intended Outcome', 'Assessment of Viability', 'Implementation'] },
        { id: 3, img: Non, title: 'Non-Conformity Reporting (NCR)', items: ['Failure/Deviation Identification', 'Statement of NCR', 'Audit Evidence', 'Acceptance of NCR', 'Actions Required', 'Correction Accepted'] },
        { id: 4, img: Service, title: 'IT Services Management', items: ['Incident Management', 'Problem Management', 'Change request', 'Ticket Management', 'Request Approval', 'Service Delivery'] },
        { id: 5, img: Capital, title: 'Capital Expenditure Note Approval (CapEx)', items: ['CapEx Buy/Lease Request', 'Request Review', 'Request Submitted', 'Request Rejected', 'Multilevel Approval', 'Purchase order released'] },
        { id: 6, img: KYC, title: 'KYC Update Request and Approval', items: ['Customer Acceptance Policy', 'Identification Procedures', 'Address Verification', 'Bank Verification', 'Legal Verification', 'Risk & Compliance'] }
    ];

    const businE = [
        { id: 1, img: Digital, title: 'Digital Transformation ', items: ['Technology Makeover', 'Process Automation', 'Customer Experience', 'Data Driven Changes', 'System Integration', 'Organizational Enhancement'] },
        { id: 2, img: Corporate, title: 'Document Management', items: ['Workflow Automation', 'Document Indexing', 'Keyword Search', 'Document Editing', 'Document Security', 'Document Processing'] },
        { id: 3, img: Department, title: 'Data Management', items: ['Collecting & organizing data', 'Master Data Management', 'Metadata Rules', 'Data Privacy & Security', 'Real-time Reports & Analytics', 'Data-driven Decisionss'] },
        { id: 5, img: Management, title: 'IT Asset Management', items: ['Monitor Assets in Real-Time', 'Request Assessment', 'Asset Deployment', 'Server Management ', 'Permission-based access', 'Reporting'] },
        { id: 6, img: Customer, title: 'KYC Management', items: ['Customer Acceptance Policy', 'Identification Procedures', 'Address Verification', 'Bank Verification', 'Legal Verification', 'Risk & Compliance'] },
        { id: 4, img: Asset, title: 'Ticket Management', items: ['Customizable Ticket Templates', 'Ticket Submission Form', 'Ticket Automation', 'Ticket Tags', 'Role-Based Access', 'Ticket Resolution/Deflection'] }
    ];

    const enterP = [
        { id: 1, img: degree, title: '360* Digital Transformation', items: ['Complete Technology Makeover', 'Business Process Automation', 'Improved Customer Experience', 'Data Driven Changes', 'System Integration', '360* Organizational Change'] },
        { id: 2, img: Real, title: 'Real-Estate Solutions', items: ['Lead generation', 'Marketing Automation', 'Digital Makeover', 'Schedule Visits', 'Documentation ', 'Legal Verification/Support'] },
        { id: 3, img: Performance, title: 'Performance Management', items: ['Goal Management', 'Flexible Review forms', 'Continuous Performance Review', '360* feedback', 'Rewards & Recognition', 'Improvement Plans'] },
        { id: 4, img: Industrial, title: 'Process Automation', items: ['Process Mapping', 'Automated Workflows', 'Workflow Tracking', 'Alerts & Notifications', 'Data Security', 'Reports & Analytics'] },
        { id: 5, img: Healthcare, title: 'Healthcare Management', items: ['Staff Management', 'Asset/Equipment Management', 'Patient Databases', 'Pharmacy Inventory', 'Account Management', 'Reports & Analytics '] },
        { id: 6, img: Procurement, title: 'Procurement Management System', items: ['Requirement analysis', 'Purchase Requisition', 'Evaluation & Contract', 'Order Management', 'Invoice, Approvals & Disputes', 'Performance Review'] }
    ];


    return (
        <section className="clients service solution pb-20">
            <div className="container mx-auto bg-gray-100 rounded-lg px-6 pt-5 pb-4">
                <div className="text-center mb-5">
                    <h2 className="text-3xl font-bold">Our Solution</h2>
                </div>
                <div className="my-5 pb-4">
                    <div className="tabs"></div>
                        <div className="flex justify-center space-x-4 mb-4">
                            <button onClick={() => setIndex(0)} className={`px-4 py-2 rounded-full ${index === 0 ? 'bg-black text-white' : 'bg-gray-200'}`}>HRMS</button>
                            <button onClick={() => setIndex(1)} className={`px-4 py-2 rounded-full ${index === 1 ? 'bg-black text-white' : 'bg-gray-200'}`}>CMS</button>
                            <button onClick={() => setIndex(2)} className={`px-4 py-2 rounded-full ${index === 2 ? 'bg-black text-white' : 'bg-gray-200'}`}>MIS</button>
                            <button onClick={() => setIndex(3)} className={`px-4 py-2 rounded-full ${index === 3 ? 'bg-black text-white' : 'bg-gray-200'}`}>EnterPrise</button>
                    </div>
                </div>
                <div className={styles.tabContent}>
                    {index === 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {hrm.map((item, idx) => (
                                <div key={idx} className="border-0 bg-white shadow-lg p-4 rounded-lg">
                                    <img src={item.img} alt={item.title} className="w-full h-32 object-cover mb-4 rounded" />
                                    <h6 className="text-lg font-semibold">{item.title}</h6>
                                </div>
                            ))}
                        </div>
                    )}
                    {index === 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {cms.map((item, idx) => (
                                <div key={idx} className="border-0 bg-white shadow-lg p-4 rounded-lg">
                                    <img src={item.img} alt={item.title} className="w-full h-32 object-cover mb-4 rounded" />
                                    <h6 className="text-lg font-semibold">{item.title}</h6>
                                </div>
                            ))}
                        </div>
                    )}
                    {index === 2 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {businE.map((item, idx) => (
                                <div key={idx} className="border-0 bg-white shadow-lg p-4 rounded-lg">
                                    <img src={item.img} alt={item.title} className="w-full h-32 object-cover mb-4 rounded" />
                                    <h6 className="text-lg font-semibold">{item.title}</h6>
                                </div>
                            ))}
                        </div>
                    )}
                    {index === 3 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {enterP.map((item, idx) => (
                                <div key={idx} className="border-0 bg-white shadow-lg p-4 rounded-lg">
                                    <img src={item.img} alt={item.title} className="w-full h-32 object-cover mb-4 rounded" />
                                    <h6 className="text-lg font-semibold">{item.title}</h6>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Solution;
