import React, { useState, useEffect } from 'react';
import CosmicBackground from './components/CosmicBackground';
import CoreLogo from './components/Animated3DText';

const LANGUAGES = [
  "COMING SOON", "TULOSSA PIAN", "VARSTI TULEMAS", "BIENTÔT DISPONIBLE",
  "BALD VERFÜGBAR", "PRÓXIMAMENTE", "PROSSIMAMENTE", "EM BREVE", "СКОРО",
  "即将推出", "近日公開", "곧 공개됩니다", "قريباً", "जल्द आ रहा है",
  "ÇOK YAKINDA", "BINNENKORT BESCHIKBAAR", "KOMMER SNART",
  "WKRÓTCE DOSTĘPNE", "ΣΥΝΤΟΜΑ ΚΟΝΤΑ ΣΑΣ", "เร็ว ๆ นี้"
];

interface Burst {
  id: number;
  text: string;
  style: React.CSSProperties;
}

const LanguageBurst: React.FC<{ text: string; style: React.CSSProperties; }> = ({ text, style }) => {
  return (
    <div
      className="absolute text-2xl md:text-4xl font-bold text-cyan-200 opacity-0"
      style={{
        ...style,
        animationName: 'language-burst',
        animationDuration: '2.5s',
        animationTimingFunction: 'ease-out',
        animationFillMode: 'forwards',
        willChange: 'transform, opacity, filter',
        textShadow: '0 0 5px #0ff, 0 0 10px #0ff'
      }}
    >
      {text}
    </div>
  );
};


const App: React.FC = () => {
  const [bursts, setBursts] = useState<Burst[]>([]);
  
  useEffect(() => {
    // Initial delay before first burst
    const initialTimeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        setBursts(prevBursts => {
          // Keep a limited number of burst elements in the DOM
          const filteredBursts = prevBursts.filter(b => Date.now() - b.id < 3000);
          
          const newBurst: Burst = {
            id: Date.now(),
            text: LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)],
            style: {
              top: `${25 + Math.random() * 50}%`,
              left: `${25 + Math.random() * 50}%`,
              transform: `rotate(${Math.random() * 60 - 30}deg) skew(${Math.random() * 20 - 10}deg)`,
              animationDelay: '0s',
            }
          };
          return [...filteredBursts, newBurst];
        });
      }, 2000); // New language every 2 seconds

      return () => clearInterval(intervalId);
    }, 10000); // Start language bursts after 10 seconds

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center">
      <div 
        className="absolute inset-0 w-full h-full transform-gpu"
        style={{ animation: 'scene-drift 30s ease-in-out infinite' }}
      >
        <CosmicBackground />
        <div className="absolute inset-0 flex items-center justify-center perspective-container" style={{ transformStyle: 'preserve-3d' }}>
            {bursts.map(burst => (
                <LanguageBurst key={burst.id} text={burst.text} style={burst.style} />
            ))}
            <CoreLogo />
        </div>
      </div>
    </main>
  );
};

export default App;











// =============================New code===============================







// "use client";

// import React, { useState, useEffect } from "react";
// import CosmicBackground from "./components/CosmicBackground";
// import CoreLogo from "./components/Animated3DText";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// const LANGUAGES = [
//   "COMING SOON", "TULOSSA PIAN", "VARSTI TULEMAS", "BIENTÔT DISPONIBLE",
//   "BALD VERFÜGBAR", "PRÓXIMAMENTE", "PROSSIMAMENTE", "EM BREVE", "СКОРО",
//   "即将推出", "近日公開", "곧 공개됩니다", "قريباً", "जल्द आ रहा है",
//   "ÇOK YAKINDA", "BINNENKORT BESCHIKBAAR", "KOMMER SNART",
//   "WKRÓTCE DOSTĘPNE", "ΣΥΝΤΟΜΑ ΚΟΝΤΑ ΣΑΣ", "เร็ว ๆ นี้"
// ];

// interface Burst {
//   id: number;
//   text: string;
//   style: React.CSSProperties;
// }

// const LanguageBurst: React.FC<{ text: string; style: React.CSSProperties }> = ({
//   text,
//   style,
// }) => {
//   return (
//     <div
//       className="absolute text-2xl md:text-4xl font-bold text-cyan-200 opacity-0"
//       style={{
//         ...style,
//         animationName: "language-burst",
//         animationDuration: "2.5s",
//         animationTimingFunction: "ease-out",
//         animationFillMode: "forwards",
//         willChange: "transform, opacity, filter",
//         textShadow: "0 0 5px #0ff, 0 0 10px #0ff",
//       }}
//     >
//       {text}
//     </div>
//   );
// };

// const App: React.FC = () => {
//   const [bursts, setBursts] = useState<Burst[]>([]);

//   useEffect(() => {
//     // Start language bursts after 10 seconds
//     const initialTimeout = setTimeout(() => {
//       const intervalId = setInterval(() => {
//         setBursts((prevBursts) => {
//           // Keep only recent bursts
//           const filteredBursts = prevBursts.filter(
//             (b) => Date.now() - b.id < 3000
//           );

//           const newBurst: Burst = {
//             id: Date.now(),
//             text: LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)],
//             style: {
//               top: `${25 + Math.random() * 50}%`,
//               left: `${25 + Math.random() * 50}%`,
//               transform: `rotate(${Math.random() * 60 - 30}deg) skew(${
//                 Math.random() * 20 - 10
//               }deg)`,
//               animationDelay: "0s",
//             },
//           };
//           return [...filteredBursts, newBurst];
//         });
//       }, 2000);

//       return () => clearInterval(intervalId);
//     }, 10000);

//     return () => clearTimeout(initialTimeout);
//   }, []);

//   return (
//     <main className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center">
//       {/* Animated background container */}
//       <div
//         className="absolute inset-0 w-full h-full transform-gpu"
//         style={{ animation: "scene-drift 30s ease-in-out infinite" }}
//       >
//         {/* ✅ Navbar fixed on top layer */}
//         <div className="absolute top-0 left-0 w-full z-50">
//           <Navbar />
//         </div>

//         {/* Background stars / cosmic visuals */}
//         <CosmicBackground />

//         {/* 3D logo + language animation */}
//         <div
//           className="absolute inset-0 flex items-center justify-center perspective-container"
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           {bursts.map((burst) => (
//             <LanguageBurst key={burst.id} text={burst.text} style={burst.style} />
//           ))}
//           <CoreLogo />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default App;
