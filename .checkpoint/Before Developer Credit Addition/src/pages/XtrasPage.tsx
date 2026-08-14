import React from 'react';
import { DivisionDetailTemplate } from '../components/services/DivisionDetailTemplate';

interface XtrasPageProps {
  onRequestQuote: (division?: 'xpress' | 'xfers' | 'xtras') => void;
}

export const XtrasPage: React.FC<XtrasPageProps> = ({ onRequestQuote }) => {
  return (
    <DivisionDetailTemplate
      divisionId="xtras"
      pageTitle="Xtras Commercial Vehicle Support"
      onRequestQuote={onRequestQuote}
      customSpecs={{
        eyebrow: 'COMMERCIAL SUPPORT & COMPLIANCE SPECIFICATIONS',
        headline: 'FSMA COMPLIANCE, TIRE INTEGRITY & MECHANIC RESPONSE',
        specs: [
          {
            title: 'Washout Sanitation Protocols',
            value: 'High-pressure hot water sanitization with food-grade FSMA & FDA certification'
          },
          {
            title: 'Commercial Tire Inventory',
            value: 'Tier-1 steer, drive & trailer positions with computerized mounting & balancing'
          },
          {
            title: 'Mobile Diagnostics & Repairs',
            value: 'Heavy-duty certified diesel mechanics & mobile roadside service trucks'
          }
        ]
      }}
    />
  );
};
