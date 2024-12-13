// ParticlesEffect.js
import { useEffect } from 'react';

const ParticlesEffect = () => {
  useEffect(() => {
    const particleContainer = document.getElementById('particle-container');

    const createParticle = (event) => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = `${event.clientX - 4}px`;
      particle.style.top = `${event.clientY - 4}px`;

      const randomX = (Math.random() - 0.5) * 100;
      const randomY = (Math.random() - 0.5) * 100;

      particle.style.setProperty('--x', `${randomX}px`);
      particle.style.setProperty('--y', `${randomY}px`);

      particleContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1500);
    };

    document.addEventListener('mousemove', createParticle);

    return () => {
      document.removeEventListener('mousemove', createParticle);
    };
  }, []);

  return <div id="particle-container"></div>;
};

export default ParticlesEffect;
