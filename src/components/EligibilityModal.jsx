import React, { useState } from 'react';
import { X, ShieldCheck, ArrowRight, User, Mail } from 'lucide-react';
let url = "https://script.google.com/macros/s/AKfycbzzny7J7NODDzN6sEuSlrQXJ0qsyLG2R0nQELX1Vm8pjOtP9uUOpq7xGJs3yHXbSu30ow/exec";
let redirectUrl = "https://app.hawktrk.com/click?pid=2&offer_id=11788&sub2=u624544&sub5=s1SUBID1HERE";
function redirect() {
  if (redirectUrl) {
    window.location.href = redirectUrl;
  }
}

export const EligibilityModal = ({ isOpen, onClose }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const [isloading, setIsLoaing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = fullname;
    console.log("Registration submitted:", { name, email });
    setIsLoaing(true);
    fetch(url, {
      method: "POST",

      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${name}&Email=${email}`,
    })
      .then((res) => res.text())
      .then((data) => {
        redirect();
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoaing(false));
  };
  const handleClose = () => {
    setFullname('');
    setEmail('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '420px',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,0,0,0.55)',
          animation: 'slideUp 0.32s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
        }}
      >
        {/* ── Dark navy hero top ── */}
        <div
          style={{
            background: 'radial-gradient(circle at 50% 10%, #062b7e 0%, #011646 60%, #000c2c 100%)',
            padding: '28px 24px 32px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Confetti particles */}
          {[
            { top: '12%', left: '8%', w: 8, h: 5, rot: -30, color: '#ffd700', delay: '0s' },
            { top: '20%', left: '78%', w: 6, h: 10, rot: 20, color: '#ffd700', delay: '0.4s' },
            { top: '8%', left: '55%', w: 10, h: 5, rot: 10, color: '#38bdf8', delay: '0.8s' },
            { top: '35%', left: '88%', w: 6, h: 6, rot: 45, color: '#ffd700', delay: '1.2s' },
            { top: '5%', left: '35%', w: 7, h: 4, rot: -15, color: '#ffd700', delay: '0.6s' },
          ].map((p, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: p.top,
                left: p.left,
                width: `${p.w}px`,
                height: `${p.h}px`,
                background: p.color,
                borderRadius: '2px',
                transform: `rotate(${p.rot}deg)`,
                animation: `floatSparkle 4s ${p.delay} ease-in-out infinite`,
                opacity: 0.85,
                pointerEvents: 'none',
              }}
            />
          ))}

          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <X size={16} />
          </button>

          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              background: 'rgba(103,198,23,0.15)',
              border: '1px solid rgba(103,198,23,0.4)',
              borderRadius: '20px',
              padding: '5px 12px',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#8ce438',
              marginBottom: '14px',
            }}
          >
            {/* shield icon inline */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Limited Time Opportunity
          </div>

          {/* Hero row: text + reward card */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
            {/* Left text */}
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  marginBottom: '10px',
                  letterSpacing: '-0.02em',
                }}
              >
                See If You{' '}
                <span style={{ color: '#61A631' }}>Qualify</span>{' '}
                Today
              </h2>
              <p style={{ fontSize: '0.83rem', color: '#b0c4de', lineHeight: 1.45, maxWidth: '200px' }}>
                Take a few simple steps to check your eligibility for today's reward opportunity.
              </p>
            </div>

            {/* Right: Reward card */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div
                style={{
                  width: '120px',
                  background: '#ffffff',
                  borderRadius: '14px',
                  padding: '12px 10px 36px',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.5)',
                  animation: 'gentleFloat 5s ease-in-out infinite',
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'center',
                }}
              >
                {/* PayPal logo text */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', marginBottom: '6px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5 8.5C19.5 13 16 15.5 11.5 15.5H10L9 20H6L8.5 7H14C17.5 7 19.5 8.5 19.5 11.5z" fill="#009cde" />
                    <path d="M16.5 5.5C16.5 10 13 12.5 8.5 12.5H7L6 17H3L5.5 4H11C14.5 4 16.5 5.5 16.5 8.5z" fill="#003087" />
                  </svg>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#003087', letterSpacing: '-0.01em' }}>PayPal</span>
                </div>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                  REWARD
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#61A631', lineHeight: 1, letterSpacing: '-0.03em' }}>
                  $500
                </div>
                {/* Ribbon */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '28px',
                    background: 'linear-gradient(90deg, #0050cd, #0070ba, #0050cd)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Bow SVG */}
                  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" style={{ position: 'absolute', top: '-10px' }}>
                    <ellipse cx="8" cy="10" rx="8" ry="6" fill="#1a6fd4" opacity="0.9" />
                    <ellipse cx="24" cy="10" rx="8" ry="6" fill="#1a6fd4" opacity="0.9" />
                    <circle cx="16" cy="10" r="4" fill="#2c82e0" />
                  </svg>
                </div>
              </div>
              {/* Podium base */}
              <div
                style={{
                  width: '130px',
                  height: '22px',
                  background: 'radial-gradient(ellipse at 50% 30%, #0c4ad0 0%, #02206d 70%, #00103a 100%)',
                  borderRadius: '50%',
                  marginTop: '-6px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
                }}
              />
            </div>
          </div>
        </div>

        {/* ── White form section ── */}
        <div style={{ background: '#ffffff', padding: '24px 24px 28px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

            {/* Full Name field */}
            <div style={{ position: 'relative' }}>
              <label
                htmlFor="modal-fullname"
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Full Name
              </label>
              <div style={{ position: 'relative' }}>
                <User
                  size={16}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: focusedField === 'name' ? '#61A631' : '#94a3b8',
                    transition: 'color 0.2s',
                    pointerEvents: 'none',
                  }}
                />
                <input
                  id="modal-fullname"
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your full name"
                  required
                  style={{
                    width: '100%',
                    padding: '13px 14px 13px 40px',
                    borderRadius: '12px',
                    border: `1.5px solid ${focusedField === 'name' ? '#61A631' : '#e2e8f0'}`,
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    color: '#0f1d38',
                    background: '#f8fafc',
                    outline: 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    boxShadow: focusedField === 'name' ? '0 0 0 3px rgba(97,166,49,0.12)' : 'none',
                  }}
                />
              </div>
            </div>

            {/* Email field */}
            <div style={{ position: 'relative' }}>
              <label
                htmlFor="modal-email"
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail
                  size={16}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: focusedField === 'email' ? '#61A631' : '#94a3b8',
                    transition: 'color 0.2s',
                    pointerEvents: 'none',
                  }}
                />
                <input
                  id="modal-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your email address"
                  required
                  style={{
                    width: '100%',
                    padding: '13px 14px 13px 40px',
                    borderRadius: '12px',
                    border: `1.5px solid ${focusedField === 'email' ? '#61A631' : '#e2e8f0'}`,
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    color: '#0f1d38',
                    background: '#f8fafc',
                    outline: 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    boxShadow: focusedField === 'email' ? '0 0 0 3px rgba(97,166,49,0.12)' : 'none',
                  }}
                />
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="cta-button"
              disabled={isloading}
              aria-busy={isloading}
              style={{
                width: '100%',
                fontSize: '1rem',
                padding: '16px',
                marginTop: '4px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: isloading ? '#9ca3af' : undefined,
                color: isloading ? '#e5e7eb' : undefined,
                cursor: isloading ? 'not-allowed' : undefined,
                boxShadow: isloading ? 'none' : undefined,
                opacity: isloading ? 0.7 : undefined,
              }}
            >
              {isloading ? 'PLEASE WAIT...' : 'ENTER NOW'}
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Trust line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginTop: '14px',
              fontSize: '0.78rem',
              color: '#94a3b8',
              fontWeight: 500,
            }}
          >
            <ShieldCheck size={13} color="#61A631" />
            <span>Secure</span>
            <span style={{ color: '#cbd5e1' }}>•</span>
            <span>Fast</span>
            <span style={{ color: '#cbd5e1' }}>•</span>
            <span>Easy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
