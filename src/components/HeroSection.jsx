import React from 'react';
import { ShieldCheck, ArrowRight, Lock } from 'lucide-react';

export const HeroSection = ({ onOpenModal }) => {
  return (
    <section className="hero-section" id="eligibility">
      {/* Background Animated Floating Particles & Confetti Sparkles */}
      <div className="sparkles-container">
        <div className="sparkle-particle gold" style={{ top: '15%', left: '10%', width: '8px', height: '12px', animationDelay: '0s' }} />
        <div className="sparkle-particle gold" style={{ top: '25%', right: '15%', width: '10px', height: '10px', animationDelay: '0.8s' }} />
        <div className="sparkle-particle blue" style={{ top: '50%', left: '8%', width: '6px', height: '14px', animationDelay: '1.5s' }} />
        <div className="sparkle-particle gold" style={{ top: '70%', right: '12%', width: '12px', height: '8px', animationDelay: '2.2s' }} />
        <div className="sparkle-particle blue" style={{ top: '35%', left: '85%', width: '8px', height: '8px', animationDelay: '1.1s' }} />
      </div>

      <div className="hero-content">
        <div className="hero-top-row">
          <div className="hero-text-block">
            {/* Badge */}
            <div className="hero-badge">
              <ShieldCheck className="hero-badge-icon" />
              <span>Limited Time Opportunity</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              See If You <br />
              <span className="highlight">Qualify </span>
              Today
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Take a few simple steps to check your eligibility for today’s reward opportunity.
            </p>
          </div>

          {/* 3D PayPal Reward Card on Stage */}
          <div className="reward-card-stage">
            <div className="paypal-reward-card">
              <div className="card-header-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
                />
              </div>

              <div className="card-divider" />

              <div className="card-reward-label">REWARD</div>
              <div className="card-amount">$500</div>

              {/* Blue Ribbon Bow */}
              <div className="card-ribbon">
                <div className="ribbon-bow" />
              </div>
            </div>

            {/* Podium Stage Base */}
            <div className="podium-stage" />
          </div>
        </div>

        {/* CTA Button */}
        <div className="cta-button-container">
          <button className="cta-button" onClick={onOpenModal}>
            <span>CHECK ELIGIBILITY</span>
            <ArrowRight size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Lock Trust Subtext */}
        <div className="cta-subtext">
          <Lock size={15} />
          <span>Secure • Fast • Easy</span>
        </div>
      </div>
    </section>
  );
};
