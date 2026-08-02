import React from 'react';

interface ERPLogoProps {
  height?: number;
  showText?: boolean;
}

export default function ERPLogo({ height = 32, showText = true }: ERPLogoProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, height }}>
      {/* Icon Mark */}
      <svg
        width={height}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Center hex */}
        <polygon points="20,8 28,13 28,23 20,28 12,23 12,13" fill="#0D6E4F" />
        {/* Top-right node */}
        <polygon points="32,4 37,7 37,13 32,16 27,13 27,7" fill="#1E3A8A" opacity="0.85" />
        {/* Bottom-right node */}
        <polygon points="32,24 37,27 37,33 32,36 27,33 27,27" fill="#1E3A8A" opacity="0.85" />
        {/* Left node */}
        <polygon points="8,16 13,19 13,25 8,28 3,25 3,19" fill="#1E3A8A" opacity="0.85" />
        {/* Connector lines */}
        <line x1="28" y1="13" x2="27" y2="13" stroke="#0D6E4F" strokeWidth="1.5" />
        <line x1="28" y1="23" x2="27" y2="27" stroke="#0D6E4F" strokeWidth="1.5" />
        <line x1="12" y1="18" x2="13" y2="19" stroke="#0D6E4F" strokeWidth="1.5" />
      </svg>

      {/* Wordmark */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{
            fontSize: height * 0.4,
            fontWeight: 800,
            color: '#0B1E43',
            letterSpacing: '-0.03em',
            fontFamily: 'Inter, system-ui, sans-serif',
            whiteSpace: 'nowrap',
          }}>
            NexaCore
          </span>
          <span style={{
            fontSize: height * 0.28,
            fontWeight: 700,
            color: '#0D6E4F',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}>
            Business Suite
          </span>
        </div>
      )}
    </div>
  );
}
