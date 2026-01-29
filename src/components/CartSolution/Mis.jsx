'use client';

import React from 'react';
import { TwoCol, Section } from './SharedComponents';
import { BarChart3, FolderOpen, Database, Cpu, Shield, Users, CreditCard } from 'lucide-react';

// Splash images for MIS
const Img1 = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop';
const Img2 = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=650&fit=crop';
const Img3 = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=650&fit=crop';
const Img4 = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=650&fit=crop';
const Img5 = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=650&fit=crop';
const Img6 = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=650&fit=crop';
const Img7 = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=650&fit=crop';
const Img8 = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=650&fit=crop';
const Img9 = 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&h=650&fit=crop';
const Img10 = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=650&fit=crop';
const Img11 = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=650&fit=crop';
const Img12 = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=650&fit=crop';
const Img13 = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=650&fit=crop';
const Img14 = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=650&fit=crop';

export default function Mis() {
  const sections = [
    { title: "Digital Transformation Management", icon: BarChart3, topRounded: true },
    { title: "Document Management", icon: FolderOpen },
    { title: "Data Management", icon: Database },
    { title: "IT Asset Management", icon: Cpu },
    { title: "KYC Management", icon: Shield },
    { title: "Venders Management", icon: Users },
    { title: "Salary & Payroll Processing", icon: CreditCard, bottomRounded: true },
  ];

  return (
    <>
      <Section title={sections[0].title} index={0} topRounded icon={sections[0].icon}>
        <TwoCol
          title="Let Technology take over your Business"
          desc="We deploy latest technological solutions to your organizations processes, data and the resources to align them optimally into a systematic digital business!"
          img={Img1}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Let Data dictate your key decisions"
            desc="Your Business will start to grow tremendously once you implement data driven changes in the business, allowing performance indicate the direction!"
            img={Img2}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[1].title} index={1} icon={sections[1].icon}>
        <TwoCol
          title="Never misplace important files again!"
          desc="You can now search any documents within an organization within seconds with the help of AI-based search algorithms in our MIS"
          img={Img3}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Secure your documents with our MIS"
            desc="Permit and block access from users based on their position within the organizational hierarchies in order to safeguard the confidential files!"
            img={Img4}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[2].title} index={2} icon={sections[2].icon}>
        <TwoCol
          title="We structure & organize your data"
          desc="The MIS creates the database management system that collects, organizes, reports and analyzes data within a framework created specifically for your organization!"
          img={Img5}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="MIS enables Data driven decisions"
            desc="Your Business will start to grow tremendously once you implement data driven changes in the business, allowing performance indicate the direction"
            img={Img6}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[3].title} index={3} icon={sections[3].icon}>
        <TwoCol
          title="Track and manage your IT assets"
          desc="Know, at any given time, the status of IT assets allocated to the teams and individuals within each department!"
          img={Img7}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Repair or Replace process"
            desc="In case of a requirement a request form can be filled and processed and the responder can decide whether to repair the asset or replace it entirely!"
            img={Img8}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[4].title} index={4} icon={sections[4].icon}>
        <TwoCol
          title="Role based processing"
          desc="Tickets traverse through the proper channel within our system based off of your organizational needs and decisions can be made by the assigned roles!"
          img={Img9}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Organize issue handling"
            desc="Segment and prioritize the issues and then put it in a proper workflow to ensure timely solution!"
            img={Img10}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[5].title} index={5} icon={sections[5].icon}>
        <TwoCol
          title="Understand Business Requirement with MIS"
          desc="Our systems enable business need analysis through series of predefined templates and helps you document and process it!"
          img={Img11}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Vendor Management made easy"
            desc="Assign the vendors for various deliverables and manage them on the predefined performance metric, helping you eliminate poor vendors and manage resourceful vendors!"
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
