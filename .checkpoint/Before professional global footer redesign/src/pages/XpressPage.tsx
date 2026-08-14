import React from 'react';
import { DivisionDetailTemplate } from '../components/services/DivisionDetailTemplate';

interface XpressPageProps {
  onRequestQuote: (division?: 'xpress' | 'xfers' | 'xtras') => void;
}

export const XpressPage: React.FC<XpressPageProps> = ({ onRequestQuote }) => {
  return (
    <DivisionDetailTemplate
      divisionId="xpress"
      pageTitle="Xpress Freight & Leasing"
      onRequestQuote={onRequestQuote}
      customSpecs={{
        eyebrow: 'TECHNICAL FLEET SPECIFICATIONS',
        headline: '53FT HIGH-CUBE & TEMPERATURE-CONTROLLED TRAILERS',
        specs: [
          {
            title: 'Refrigeration Thermal Range',
            value: '-20°F to +70°F Continuous Remote Telematics Logging'
          },
          {
            title: 'Payload Weight Capacity',
            value: 'Up to 45,000 lbs (Dry Van / Reefer) & 48,000 lbs (Flatbed)'
          },
          {
            title: 'Safety & Tracking',
            value: '24/7 Satellite GPS Milestone & Door Sensor Telematics'
          }
        ]
      }}
    />
  );
};
