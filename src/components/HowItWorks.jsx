import React from 'react';
import { User, ClipboardList, Gift } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: <User size={34} strokeWidth={2} />,
      title: "Get started",
      desc: "Begin the process in just a few clicks."
    },
    {
      number: 2,
      icon: <ClipboardList size={34} strokeWidth={2} />,
      title: "Follow the steps",
      desc: "Complete the required information."
    },
    {
      number: 3,
      icon: <Gift size={34} strokeWidth={2} />,
      title: "Check eligibility",
      desc: "See whether you qualify for the reward."
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="section-title-container">
        <div className="title-line" />
        <h2 className="section-title">How it works</h2>
        <div className="title-line" />
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.number} className="step-card">
            <div className="step-icon-wrapper">
              <div className="step-number-badge">{step.number}</div>
              <div className="step-icon-circle">
                {step.icon}
              </div>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
