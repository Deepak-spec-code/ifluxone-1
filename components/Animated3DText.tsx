import React from 'react';
// import Navbar from './Navbar';

const CoreLogo: React.FC = () => {
  return (
    <div className="relative text-center z-20">
      {/* <Navbar/> */}
      <h1
        className="font-black tracking-widest uppercase text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-500 opacity-0"
        style={{
          backgroundSize: '200% auto',
          animation: 'emerge-core 7s ease-out forwards, pulse 4s ease-in-out 7s infinite, gradient-shift 5s ease-in-out 7s infinite',
          willChange: 'transform, text-shadow, opacity, filter, background-position',
        }}
      >
        iFLUXONE
      </h1>
      {/* Plasma ring */}
      <div className="absolute inset-0 -m-8 border-2 border-cyan-300 rounded-full opacity-30 animate-pulse blur-sm"></div>
       <div className="absolute inset-0 -m-12 border border-cyan-500 rounded-full opacity-20 animate-pulse blur-md"></div>
    </div>
  );
};

export default CoreLogo;