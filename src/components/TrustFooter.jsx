import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';

export const TrustFooter = () => {
  return (
    <footer className="trust-section" id="trust">
      <div className="trust-content-grid">
        {/* Left Block: Safe & Secure */}
        <div className="trust-block">
          <div className="trust-icon-box">
            <ShieldCheck size={22} color="#67c617" />
          </div>
          <div>
            <h4 className="trust-info-title">Safe & Secure</h4>
            <p className="trust-info-desc">
              Your data is encrypted and kept 100% confidential.
            </p>
          </div>
        </div>

        {/* Right Block: Social Proof Stack */}
        <div className="social-proof-block">
          <div className="avatar-group">
            {/* User Avatar 1 */}
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="avatar-img" />
            {/* User Avatar 2 */}
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="avatar-img" />
            {/* User Avatar 3 */}
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="avatar-img" />
          </div>

          <div className="rating-proof-box">
            <div className="stars-row">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#ffc107" color="#ffc107" />
              ))}
            </div>
            <div className="rating-text">
              Join thousands of people claiming their rewards!
            </div>
          </div>
        </div>
      </div>

      {/* Footer legal text */}
      <p className="legal-disclaimer">
        Eligibility and rewards are subject to the offer's terms and conditions.
      </p>
    </footer>
  );
};
