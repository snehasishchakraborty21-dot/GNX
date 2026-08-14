import React from 'react';

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
  const combinedStyle: React.CSSProperties = {
    ...(width ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    ...(height ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
    objectFit: 'contain',
    ...style
  };

  return (
    <img
      src="/assets/brand/gnx-official-logo-v2.png"
      alt={alt}
      className={`header-logo block object-contain select-none bg-transparent ${className}`}
      style={combinedStyle}
    />
  );
};


