import React from 'react';

interface ModernDividerProps {
  reverse?: boolean;
  className?: string;
}

const ModernDivider: React.FC<ModernDividerProps> = ({ reverse = false, className = '' }) => {
  return (
    <div className={`flex items-center ${reverse ? 'flex-row-reverse' : 'flex-row'} ${className}`}>
      <div className="relative">
        <div className="w-10 h-1 bg-cyan-400 rounded-full" />
        <div 
          className={`absolute top-1/2 h-px w-20 bg-gradient-to-r from-cyan-400 to-transparent 
            ${reverse ? 'right-full' : 'left-full'}`}
        />
      </div>
    </div>
  );
};

export default ModernDivider;