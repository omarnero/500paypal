import React, { useState } from 'react';
import { Menu, X, ShieldCheck, HelpCircle, FileText, Gift } from 'lucide-react';

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="logo-wrapper">
          <img src="https://www.paypalobjects.com/webstatic/i/logo/rebrand/ppcom-white.svg" alt="PayPal" className="paypal-logo-svg" style={{ height: '28px', width: 'auto' }} />
        </div>

        <button 
          className="menu-btn" 
          onClick={() => setIsDrawerOpen(!isDrawerOpen)} 
          aria-label="Toggle Navigation Menu"
        >
          {isDrawerOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      {isDrawerOpen && (
        <>
          <div className="drawer-backdrop" onClick={() => setIsDrawerOpen(false)} />
          <nav className="drawer-menu">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>Menu</span>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li>
                <a href="#eligibility" onClick={() => setIsDrawerOpen(false)} style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
                  <Gift size={18} color="#67c617" /> Check Eligibility
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={() => setIsDrawerOpen(false)} style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
                  <FileText size={18} color="#67c617" /> How It Works
                </a>
              </li>
              <li>
                <a href="#trust" onClick={() => setIsDrawerOpen(false)} style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
                  <ShieldCheck size={18} color="#67c617" /> Security & Privacy
                </a>
              </li>
              <li>
                <a href="#faq" onClick={() => setIsDrawerOpen(false)} style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
                  <HelpCircle size={18} color="#67c617" /> Help Center
                </a>
              </li>
            </ul>

            <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#8ea3c7' }}>
              Official $500 Reward Promotion Program
            </div>
          </nav>
        </>
      )}
    </>
  );
};
