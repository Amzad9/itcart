'use client';

import React from 'react';
import { TwoCol, Section } from './SharedComponents';
import { TrendingUp, Home, Award, Workflow, Heart, ShoppingCart, Truck } from 'lucide-react';

// Splash images for Enterprise Solutions
const Img1 = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=650&fit=crop';
const Img2 = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=650&fit=crop';
const Img3 = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=650&fit=crop';
const Img4 = 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&h=650&fit=crop';
const Img5 = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=650&fit=crop';
const Img6 = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=650&fit=crop';
const Img7 = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=650&fit=crop';
const Img8 = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=650&fit=crop';
const Img9 = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=650&fit=crop';
const Img10 = 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&h=650&fit=crop';
const Img11 = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=650&fit=crop';
const Img12 = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=650&fit=crop';
const Img13 = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop';
const Img14 = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=650&fit=crop';

export default function Enterprise() {
  const sections = [
    { title: "360° Digital Transformation", icon: TrendingUp, topRounded: true },
    { title: "Real-Estate Solutions", icon: Home },
    { title: "Performance Management Automation", icon: Award },
    { title: "Automation Process Automation", icon: Workflow },
    { title: "Healthcare Management", icon: Heart },
    { title: "Procurement Management", icon: ShoppingCart },
    { title: "Freight Billing System", icon: Truck, bottomRounded: true },
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
          title="Create a digital Realty solution"
          desc="We help you create an online real-estate agency which helps you create requirements and post them on social media and realty advertisement portals!"
          img={Img3}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Schedule visits and manage leads"
            desc="Manage your leads and create, schedule and notify them of their visits and engage with them with our pipeline management features!"
            img={Img4}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[2].title} index={2} icon={sections[2].icon}>
        <TwoCol
          title="KPI based appraisals"
          desc="Now you can judge the performance of your team objectively with predefined KPIs, thereby ensuring merit based appraisals!"
          img={Img5}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Clear & Transparent Tracking"
            desc="Employees and management can track real-time analytics of the key performance indicators and calibrate the efforts accordingly!"
            img={Img6}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[3].title} index={3} icon={sections[3].icon}>
        <TwoCol
          title="Create custom process workflows"
          desc="You can customize and create unique visual workflows based on your specific production processes with our enterprise solutions!"
          img={Img7}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Identify Failures instantly"
            desc="Instantly manage and implement corrective measures if and when failures are identified with our system!"
            img={Img8}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[4].title} index={4} icon={sections[4].icon}>
        <TwoCol
          title="Transform your healthcare system!"
          desc="Monitor & Manage the doctors, support staff, patients' data, operations and accounts on your fingertips with our digital healthcare app!"
          img={Img9}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Manage the pharmacy, digitally"
            desc="Create and organize the inventory of medicine on real-time and manage renewal of stock based on inventory consumption!"
            img={Img10}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[5].title} index={5} icon={sections[5].icon}>
        <TwoCol
          title="Automate orders to prevent crises"
          desc="Our systems enable automated orders via email & SMS when the inventory reaches a certain threshold thereby alleviating the crises before it arises!"
          img={Img11}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Supplier Management made easy"
            desc="Assign the suppliers for various deliverables and manage them on the predefined performance metric, helping you eliminate poor suppliers and manage resourceful suppliers!"
            img={Img12}
            reverse
          />
        </div>
      </Section>

      <Section title={sections[6].title} index={6} bottomRounded icon={sections[6].icon}>
        <TwoCol
          title="Transform your freight business"
          desc="Manage your freight contracts, penalties and finances with our freight billing management system!"
          img={Img13}
        />
        <div className="mt-12 lg:mt-16">
          <TwoCol
            title="Generate real-time reports & analytics"
            desc="Understand your business performance in real-time with immediate reporting and business analytics and take decisions accordingly!"
            img={Img14}
            reverse
          />
        </div>
      </Section>
    </>
  );
}
