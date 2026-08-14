import React from 'react';
import { DivisionDetailTemplate } from '../components/services/DivisionDetailTemplate';

interface XfersPageProps {
  onRequestQuote: (division?: 'xpress' | 'xfers' | 'xtras') => void;
}

export const XfersPage: React.FC<XfersPageProps> = ({ onRequestQuote }) => {
  return (
    <DivisionDetailTemplate
      divisionId="xfers"
      pageTitle="Xfers Transfers & Storage"
      onRequestQuote={onRequestQuote}
      customSpecs={{
        eyebrow: 'OPERATIONAL FIELD SPECIFICATIONS',
        headline: 'SPECIALIZED RIGGING, TRANSFER PUMPS & CLIMATE STORAGE',
        specs: [
          {
            title: 'Fluid Pumping Standards',
            value: 'High-CFM liquid transfer units with continuous pressure monitoring & spill containment'
          },
          {
            title: 'Extraction Rigging Capacity',
            value: 'Heavy-duty winch systems & off-road power recovery units for challenging terrain'
          },
          {
            title: 'Warehouse Climate Management',
            value: 'Multi-zone cold storage (-15°F to 45°F) with automated backup generators & security'
          }
        ]
      }}
    />
  );
};
