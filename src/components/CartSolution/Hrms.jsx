'use client';

import React from 'react';
import { TwoCol, Section } from './SharedComponents';
import { Users, Briefcase, UserCheck, Clock, Calendar, Receipt, CreditCard } from 'lucide-react';

// Splash images for HRMS
const Adit1 = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop';
const Adit2 = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=650&fit=crop';
const Img1 = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=650&fit=crop';
const Img2 = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=650&fit=crop';
const Img3 = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=650&fit=crop';
const Img4 = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=650&fit=crop';
const Img5 = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=650&fit=crop';
const Img6 = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=650&fit=crop';
const Img7 = 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&h=650&fit=crop';
const Img8 = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=650&fit=crop';
const Img9 = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=650&fit=crop';
const Img10 = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop';
const Img11 = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=650&fit=crop';
const Img12 = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=650&fit=crop';

export default function Hrms() {
  const sections = [
    { title: "Employee Management", icon: Users, topRounded: true },
    { title: "Recruitment Process", icon: Briefcase },
    { title: "Onboarding Process", icon: UserCheck },
    { title: "Attendance and Time Logs", icon: Clock },
    { title: "Employee Leaves", icon: Calendar },
    { title: "Travel & Expense Claims", icon: Receipt },
    { title: "Salary & Payroll Processing", icon: CreditCard, bottomRounded: true },
  ];

  return (
    <>
      <Section title={sections[0].title} index={0} topRounded icon={sections[0].icon}>
        <TwoCol
          title="Never forget important events"
          desc="Be at the forefront of important events of your employees with our HRMS, giving your notifications & reminders of such events!"
          img={Img1}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="All Employment data in one place"
            desc="The employment information can be difficult to organize in one place, however with our HRMS it becomes automatically gets organized in a proper format!"
            img={Img2}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[1].title} index={1} icon={sections[1].icon}>
        <TwoCol
          title="Source candidates seamlessly"
          desc="Create Job descriptions with our master templates and post them across social media and Job portals. Get the sourced candidates directly from your mail into the system with our HRMS"
          img={Img3}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Engage in Real Time"
            desc="Organize, schedule and manage interviews in real-time with reminders and notifications to the candidates and the recruiters/hiring managers!"
            img={Img4}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[2].title} index={2} icon={sections[2].icon}>
        <TwoCol
          title="Streamline your Hiring & Firing!"
          desc="We help you create digital employment processes that is custom designed to your organizational needs!"
          img={Img5}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Easy Documentation"
            desc="Create and customize your company's offer letters, joining letters and experience cum release letters from our library of templates!"
            img={Img6}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[3].title} index={3} icon={sections[3].icon}>
        <TwoCol
          title="Know their whereabouts in Real-time"
          desc="Now track the whereabouts of your workforce whether they're in office, on break or gone out for a client meet!"
          img={Img7}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Create & assess project involvements"
            desc="Customize project based resource deployment and track their log-ins & log-offs from the projects!"
            img={Img8}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[4].title} index={4} icon={sections[4].icon}>
        <TwoCol
          title="Online leave application"
          desc="Employees can create a leave request and the manager has the option to approve or disapprove the same!"
          img={Img9}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Track & manage overall leaves"
            desc="The HR and the employees can track their leave quota across several major headings like casual & sick leaves!"
            img={Img10}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[5].title} index={5} icon={sections[5].icon}>
        <TwoCol
          title="Accurate Travel Reimbursement"
          desc="Our HRMS allows accurate assessment of the travel expenses and provides immediate reimbursement options!"
          img={Img11}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Business Trip Management"
            desc="Whether it is individual travel or group trips, made for company purposes our HRMS provides measures to properly account for transportation and stay expenses!"
            img={Img12}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[6].title} index={6} bottomRounded icon={sections[6].icon}>
        <TwoCol
          title="Manage salary, deductions & incentives"
          desc="Get a proper breakdown of employee salaries in a designated format accounting for the tax & other deductions and perks/incentives with our HRMS!"
          img={Adit1}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Generate reports & pay slips"
            desc="Create salary slips from our predefined customizable templates and get reports and analytics on CTC of employees!"
            img={Adit2}
            reverse
          />
        </div>
      </Section>
    </>
  );
}
