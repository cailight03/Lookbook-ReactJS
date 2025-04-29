import React from 'react';
import { useParams } from 'react-router-dom';

// Import components for each team
import ConsumerHero from '../ConsumerCare/ConsumerHero';
import ConsumerServices from '../ConsumerCare/ConsumerServices';
import ConsumerFooter from '../ConsumerCare/ConsumerFooter';

import WebHero from '../WebStudio/HeroSection';
import WebServices from '../WebStudio/Services';
import WebFooter from '../WebStudio/Footer';

import OrderHero from '../OrderBudget/HeroSection';
import OrderServices from '../OrderBudget/Services';
import OrderFooter from '../OrderBudget/Footer';

import SalesHero from '../SalesExcellence/HeroSection';
import SalesServices from '../SalesExcellence/Services';
import SalesFooter from '../SalesExcellence/Footer';

import DigitalHero from '../DigitalSupport/HeroSection';
import DigitalServices from '../DigitalSupport/Services';
import DigitalFooter from '../DigitalSupport/Footer';

import MarketHero from '../MarketIntelligence/HeroSection';
import MarketServices from '../MarketIntelligence/Services';
import MarketFooter from '../MarketIntelligence/Footer';

import CommunityHero from '../CommunityManagement/HeroSection';
import CommunityServices from '../CommunityManagement/Services';
import CommunityFooter from '../CommunityManagement/Footer';

import ReviewHero from '../ReviewManagement/HeroSection';
import ReviewServices from '../ReviewManagement/Services';
import ReviewFooter from '../ReviewManagement/Footer';


const TeamPage = () => {
  const { teamName } = useParams();

  const renderContent = () => {
    switch (teamName) {
      case 'ConsumerCare':
        return (
          <>
            <ConsumerHero />
            <ConsumerServices />
            <ConsumerFooter />
          </>
        );
        case 'CommunityManagement':
        return (
          <>
            <CommunityHero />
            <CommunityServices />
            <CommunityFooter />
          </>
        );
        case 'ReviewManagement':
        return (
          <>
            <ReviewHero />
            <ReviewServices />
            <ReviewFooter />
          </>
        );
        case 'MarketIntelligence':
        return (
          <>
            <MarketHero />
            <MarketServices />
            <MarketFooter />
          </>
        );
      case 'WebStudio':
        return (
          <>
            <WebHero />
            <WebServices />
            <WebFooter />
          </>
        );
        case 'OrderBudget':
        return (
          <>
            <OrderHero />
            <OrderServices />
            <OrderFooter />
          </>
        );
        case 'SalesExcellence':
        return (
          <>
            <SalesHero />
            <SalesServices />
            <SalesFooter />
          </>
        );
        case 'DigitalSupport':
        return (
          <>
            <DigitalHero />
            <DigitalServices />
            <DigitalFooter />
          </>
        );
      default:
        return <p>Team not found.</p>;
    }
  };

  return <>{renderContent()}</>;
};

export default TeamPage;
