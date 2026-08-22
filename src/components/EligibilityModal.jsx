import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const EligibilityModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [answers, setAnswers] = useState({
    userStatus: '',
    payoutMethod: ''
  });

  // Handle choice selection for step 1 & 2
  const handleSelectOption = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3); // Go to verification loading step
    }
  };

  // Simulate verification calculation loading in step 3
  useEffect(() => {
    if (step === 3) {
      setLoadingProgress(0);
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setStep(4);
              // Trigger celebratory confetti effect
              confetti({
                particleCount: 120,
                spread: 70,
                origin: { y: 0.6 }
              });
            }, 300);
            return 100;
          }
          return prev + 10;
        });
      }, 150);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleReset = () => {
    setStep(1);
    setLoadingProgress(0);
    setAnswers({ userStatus: '', payoutMethod: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleReset}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleReset} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Step 1: Account Status */}
        {step === 1 && (
          <div>
            <div className="modal-step-indicator">Step 1 of 2</div>
            <h3 className="modal-heading">Are you an active PayPal account holder?</h3>
            <div className="modal-options-list">
              <button className="modal-option-btn" onClick={() => handleSelectOption('userStatus', 'Active User')}>
                <span>Yes, I use PayPal regularly</span>
                <ChevronRight size={18} color="#67c617" />
              </button>
              <button className="modal-option-btn" onClick={() => handleSelectOption('userStatus', 'Occasional User')}>
                <span>Yes, but I rarely use it</span>
                <ChevronRight size={18} color="#67c617" />
              </button>
              <button className="modal-option-btn" onClick={() => handleSelectOption('userStatus', 'New User')}>
                <span>No, I will create a free account</span>
                <ChevronRight size={18} color="#67c617" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Preferred Payout */}
        {step === 2 && (
          <div>
            <div className="modal-step-indicator">Step 2 of 2</div>
            <h3 className="modal-heading">Select your preferred reward payout method:</h3>
            <div className="modal-options-list">
              <button className="modal-option-btn" onClick={() => handleSelectOption('payoutMethod', 'Instant Payout')}>
                <span>⚡ Instant PayPal Deposit</span>
                <ChevronRight size={18} color="#67c617" />
              </button>
              <button className="modal-option-btn" onClick={() => handleSelectOption('payoutMethod', 'Gift Card Code')}>
                <span>🎁 Digital Reward Code</span>
                <ChevronRight size={18} color="#67c617" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Checking Database Animation */}
        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div className="spinner-ring" />
            <h3 className="modal-heading" style={{ marginBottom: '8px' }}>Checking Eligibility...</h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '16px' }}>
              Verifying your profile against today's allocation quota.
            </p>
            <div style={{ background: '#f1f5f9', borderRadius: '10px', height: '10px', overflow: 'hidden', width: '100%' }}>
              <div 
                style={{ 
                  width: `${loadingProgress}%`, 
                  height: '100%', 
                  background: 'linear-gradient(90deg, #74d41e, #58b012)', 
                  transition: 'width 0.15s ease-in-out' 
                }} 
              />
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#58b012', marginTop: '8px' }}>
              {loadingProgress}% Complete
            </div>
          </div>
        )}

        {/* Step 4: Qualified Congratulations Result */}
        {step === 4 && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#eefbe8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <CheckCircle2 size={38} color="#58b012" />
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(103, 198, 23, 0.15)', color: '#438a0c', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '12px' }}>
              <Sparkles size={14} /> ELIGIBILITY CONFIRMED
            </div>

            <h3 className="modal-heading" style={{ fontSize: '1.4rem', marginBottom: '6px' }}>
              You Qualify For $500!
            </h3>
            
            <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '20px' }}>
              Congratulations! Your profile has been approved for today's $500 PayPal reward voucher.
            </p>

            <div style={{ background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '12px', padding: '12px', marginBottom: '20px' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>Claim Reference Code</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#003087', letterSpacing: '0.1em' }}>PP-500-QUALIFIED</div>
            </div>

            <button 
              className="cta-button" 
              onClick={handleReset} 
              style={{ width: '100%', fontSize: '1rem', padding: '16px' }}
            >
              CLAIM YOUR REWARD NOW
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '12px', fontSize: '0.78rem', color: '#64748b' }}>
              <ShieldCheck size={14} color="#67c617" />
              <span>100% Free & Verified Process</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
