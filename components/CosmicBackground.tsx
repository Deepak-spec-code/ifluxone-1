import React, { useMemo } from 'react';

interface Star {
  id: number;
  style: React.CSSProperties;
}

interface DataParticle {
    id: number;
    style: React.CSSProperties;
}

const DATA_PARTICLE_COLORS = ['#00ffff', '#ff00ff', '#ffff00', '#ff007f', '#ffffff'];
const VIDEO_URL = 'https://cdn.pixabay.com/video/2023/05/23/163539-829212474_large.mp4';


const CosmicBackground: React.FC = () => {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 200 }).map((_, i) => {
      const size = Math.random() * 2 + 1;
      const animationDuration = Math.random() * 3 + 2;
      const animationDelay = Math.random() * 5;

      return {
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `twinkle ${animationDuration}s ease-in-out infinite`,
          animationDelay: `${animationDelay}s`,
        },
      };
    });
  }, []);

  const dataParticles = useMemo<DataParticle[]>(() => {
      return Array.from({ length: 80 }).map((_, i) => {
          const angle = Math.random() * 2 * Math.PI;
          const distance = 60 * (Math.random() * 0.4 + 0.6); // 60-100% of 60vmin
          const tx = Math.cos(angle) * distance;
          const ty = Math.sin(angle) * distance;
          const duration = Math.random() * 3 + 2; // 2s to 5s
          const delay = Math.random() * 5;
          const color = DATA_PARTICLE_COLORS[Math.floor(Math.random() * DATA_PARTICLE_COLORS.length)];
          const size = Math.random() * 2.5 + 1; // 1px to 3.5px
          return {
              id: i,
              style: {
                  '--tx': `${tx}vmin`,
                  '--ty': `${ty}vmin`,
                  width: `${size}px`,
                  height: `${size}px`,
                  background: color,
                  boxShadow: `0 0 8px ${color}, 0 0 12px ${color}`,
                  borderRadius: '50%',
                  animation: `data-particle-shoot ${duration}s ease-out ${delay}s infinite`,
              } as React.CSSProperties,
          }
      });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Background Video */}
      <video
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
      ></video>

      {/* Data Particles */}
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center z-10">
        {dataParticles.map(particle => (
          <div key={particle.id} className="absolute" style={particle.style}></div>
        ))}
      </div>

      {/* Stars */}
      <div className="absolute inset-0 z-10">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={star.style}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CosmicBackground;