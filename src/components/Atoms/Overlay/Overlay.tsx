import React from 'react';
interface IOverlayProps {
  color: string;
}

const Overlay: React.FC<IOverlayProps> = ({ color }) => {
  return <div className={`absolute inset-0 pointer-events-none ${color}`} />;
};

export default Overlay;
