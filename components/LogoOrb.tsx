
import React, { useEffect, useRef } from 'react';

const LogoOrb: React.FC<{ size?: number }> = ({ size = 48 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const particles = Array.from({ length: 12 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
      size: Math.random() * 2 + 1,
    }));

    const render = () => {
      time += 0.01;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const baseRadius = (size / 2) * 0.85;

      ctx.clearRect(0, 0, w, h);

      // Core Glow
      const coreGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseRadius);
      const hue1 = (time * 20) % 360;
      const hue2 = (hue1 + 60) % 360;
      coreGradient.addColorStop(0, `hsla(${hue1}, 70%, 60%, 0.8)`);
      coreGradient.addColorStop(0.5, `hsla(${hue2}, 80%, 50%, 0.4)`);
      coreGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius, 0, Math.PI * 2);
      ctx.fill();

      // Swirling Layers
      for (let j = 0; j < 3; j++) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * (j + 1) * 0.5);
        
        ctx.beginPath();
        for (let i = 0; i < 360; i += 5) {
          const angle = (i * Math.PI) / 180;
          const noise = Math.sin(angle * 3 + time * 2) * 2 + Math.cos(angle * 5 - time) * 1.5;
          const r = baseRadius * (0.7 + Math.sin(time + j) * 0.1) + noise;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        
        ctx.strokeStyle = `hsla(${(hue1 + j * 40) % 360}, 100%, 75%, ${0.3 - j * 0.05})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      // Floating "Nodes"
      particles.forEach((p, i) => {
        p.angle += p.speed;
        const pulse = Math.sin(time * 2 + p.phase) * 5;
        const r = baseRadius * p.radius + pulse;
        const x = cx + Math.cos(p.angle) * r;
        const y = cy + Math.sin(p.angle) * r;

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${(hue2 - i * 10) % 360}, 100%, 80%, 0.6)`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${(hue2 - i * 10) % 360}, 100%, 80%, 0.4)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size]);

  return (
    <div className="relative flex items-center justify-center p-1 rounded-full bg-white/5 border border-white/10 shadow-[0_0_25px_rgba(99,102,241,0.2)] overflow-hidden">
      <canvas
        ref={canvasRef}
        width={size * 2}
        height={size * 2}
        style={{ width: size, height: size }}
        className="block"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default LogoOrb;
