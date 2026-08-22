import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { TrustFooter } from './components/TrustFooter';
import { EligibilityModal } from './components/EligibilityModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-viewport">
      {/* Top Header */}
      <Header />

      {/* Main Hero Section */}
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />

      {/* 3-Step How It Works Guide */}
      <HowItWorks />

      {/* Trust & Security Footer */}
      <TrustFooter />

      {/* Interactive Eligibility Check Questionnaire Modal */}
      <EligibilityModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;
