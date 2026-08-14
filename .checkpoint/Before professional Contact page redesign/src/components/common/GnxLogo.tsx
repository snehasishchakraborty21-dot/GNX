import React, { useState } from 'react';

interface GnxLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'on-dark' | 'on-light';
  height?: number | string;
  width?: number | string;
  alt?: string;
  style?: React.CSSProperties;
}

export const GnxLogo: React.FC<GnxLogoProps> = ({
  className = '',
  height,
  width,
  alt = 'Gulf Northern X',
  style
}) => {
  const [hasError, setHasError] = useState(false);

  const combinedStyle: React.CSSProperties = {
    ...(width ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    ...(height ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
    objectFit: 'contain',
    ...style
  };

  if (hasError) {
    return (
      <div className={`flex items-center gap-2 font-display text-xl sm:text-2xl font-black text-[#062B63] tracking-wider uppercase select-none ${className}`}>
        <span>GULF NORTHERN <span className="text-[#2CB51D]">X</span></span>
      </div>
    );
  }

  return (
    <img
      src="/media/branding/gnx-official-logo-v2.png"
      alt={alt}
      className={`header-logo block object-contain select-none bg-transparent ${className}`}
      style={combinedStyle}
      onError={() => setHasError(true)}
    />
  );
};


