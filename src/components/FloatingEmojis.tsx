
import { useEffect } from "react";

type Emoji = {
  id: number;
  symbol: string;
  left: string;
  top: string;
  size: string;
  delay: string;
  duration: string;
};

const emojis: Emoji[] = [
  { id: 1, symbol: "💻", left: "5%", top: "15%", size: "2rem", delay: "0s", duration: "15s" },
  { id: 2, symbol: "⚛️", left: "10%", top: "50%", size: "2.5rem", delay: "2s", duration: "20s" },
  { id: 3, symbol: "🚀", left: "20%", top: "80%", size: "1.8rem", delay: "5s", duration: "18s" },
  { id: 4, symbol: "☕", left: "80%", top: "10%", size: "2.2rem", delay: "0s", duration: "14s" },
  { id: 5, symbol: "🔥", left: "75%", top: "60%", size: "2rem", delay: "3s", duration: "16s" },
  { id: 6, symbol: "📱", left: "90%", top: "30%", size: "1.5rem", delay: "6s", duration: "12s" },
  { id: 7, symbol: "🌐", left: "30%", top: "5%", size: "2.3rem", delay: "4s", duration: "19s" },
  { id: 8, symbol: "🎮", left: "60%", top: "85%", size: "1.7rem", delay: "1s", duration: "17s" },
];

export default function FloatingEmojis() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const emojiElements = document.querySelectorAll('.floating-emoji-interactive');
      
      emojiElements.forEach((emoji, index) => {
        const moveX = (e.clientX - window.innerWidth / 2) * (0.005 + (index * 0.001));
        const moveY = (e.clientY - window.innerHeight / 2) * (0.005 + (index * 0.001));
        
        emoji.setAttribute('style', `transform: translate(${moveX}px, ${moveY}px)`);
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-15 overflow-hidden">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className="floating-emoji-interactive absolute transition-transform duration-300"
          style={{
            left: emoji.left,
            top: emoji.top,
            fontSize: emoji.size,
            animationDelay: emoji.delay,
            animationDuration: emoji.duration,
          }}
        >
          <div className="animate-float">{emoji.symbol}</div>
        </div>
      ))}
    </div>
  );
}
