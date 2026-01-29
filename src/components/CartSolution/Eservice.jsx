'use client';

import React from 'react';
import { TwoCol, Section } from './SharedComponents';
import { FileText, ClipboardCheck, AlertTriangle, Settings, DollarSign, UserCheck, CreditCard } from 'lucide-react';

// Splash images for E-Services
const Img1 = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=650&fit=crop';
const Img2 = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=650&fit=crop';
const Img3 = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=650&fit=crop';
const Img4 = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=650&fit=crop';
const Img5 = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=650&fit=crop';
const Img6 = 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&h=650&fit=crop';
const Img7 = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=650&fit=crop';
const Img8 = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=650&fit=crop';
const Img9 = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop';
const Img10 = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=650&fit=crop';
const Img11 = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=650&fit=crop';
const Img12 = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=650&fit=crop';
const Img13 = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=650&fit=crop';
const Img14 = 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&h=650&fit=crop';

export default function Eservice() {
  const sections = [
    { title: "Document Change Request", icon: FileText, topRounded: true },
    { title: "Business Change Request (BCR)", icon: ClipboardCheck },
    { title: "Non-Conformity Reporting (NCR)", icon: AlertTriangle },
    { title: "IT Service Request & Approval", icon: Settings },
    { title: "Capital Expenditure Note Approval (CapEx)", icon: DollarSign },
    { title: "KYC Update Request and Approval", icon: UserCheck },
    { title: "Salary & Payroll Processing", icon: CreditCard, bottomRounded: true },
  ];

  return (
    <>
      <Section title={sections[0].title} index={0} topRounded icon={sections[0].icon}>
        <TwoCol
          title="Prevent Document Corruption"
          desc="Document Change request ensures that no unauthorized access can make any changes to the key documents!"
          img={Img1}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Organize change Request"
            desc="The document change request process can be formulated based on your organizational needs from predefined formats!"
            img={Img2}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[1].title} index={1} icon={sections[1].icon}>
        <TwoCol
          title="Format Business changes"
          desc="Organize your business change request with our workflow templates which can be customizable to fit your criteria!"
          img={Img3}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Enable request & approval"
            desc="Give user based access to submit request form and have the separate access to project coordinator or vendor for approval of requested changes!"
            img={Img4}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[2].title} index={2} icon={sections[2].icon}>
        <TwoCol
          title="Identify Failures instantly"
          desc="With our Non conformity reporting module you can immediately identify glitches or failures from the conformed set of guidelines!"
          img={Img5}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Process remedial actions"
            desc="Once the failures are identified, remedial prescriptions can be properly communicated and processed!"
            img={Img6}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[3].title} index={3} icon={sections[3].icon}>
        <TwoCol
          title="Organize IT service requests"
          desc="With our system you can easily identify and organize the request type and nature of urgency it demands, so as to process it accordingly!"
          img={Img7}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Process service delivery"
            desc="Clear set of procedures are in place to approve/disapprove and assign the request to the process owner in order to resolve it successfully!"
            img={Img8}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[4].title} index={4} icon={sections[4].icon}>
        <TwoCol
          title="Raising Capital Requirement Made Easy"
          desc="No need to go through series of long shot mails to all stakeholders to approve a purchase of an asset, now you can raise the request in our form and all stakeholders will receive the request in proper format!"
          img={Img9}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Approval and Purchase Order"
            desc="Based on the predefined parameters the stakeholders can approve or disapprove the request and process it further, in case of approval by raising purchase order through predefined channel!"
            img={Img10}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[5].title} index={5} icon={sections[5].icon}>
        <TwoCol
          title="Never misidentify your people"
          desc="Whether you are a recruitment firm dealing with thousands of job applicants or a big organization doing a background check on its people, our system would help you organize and manage their KYC in a format that fits your criteria!"
          img={Img11}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Risk & Compliance assessment"
            desc="You can now record and assess their credit worthiness and the legal liabilities so as to take better decisions in assigning resources to them!"
            img={Img12}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[6].title} index={6} bottomRounded icon={sections[6].icon}>
        <TwoCol
          title="Manage salary, deductions & incentives"
          desc="Get a proper breakdown of employee salaries in a designated format accounting for the tax & other deductions and perks/incentives with our HRMS!"
          img={Img13}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Generate reports & pay slips"
            desc="Create salary slips from our predefined customizable templates and get reports and analytics on CTC of employees!"
            img={Img14}
            reverse
          />
        </div>
      </Section>
    </>
  );
}
