// src/components/CursorTrail.jsx
import { useEffect, useState } from "react";

export const CursorTrail = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const numDots = 10;
    const initialDots = new Array(numDots).fill({ x: 0, y: 0 });
    setDots(initialDots);

    const handleMouseMove = (e) => {
      setDots((prevDots) => {
        const newDots = [...prevDots];
        newDots[0] = { x: e.clientX, y: e.clientY };

        for (let i = 1; i < newDots.length; i++) {
          const prev = newDots[i - 1];
          const curr = newDots[i];
          newDots[i] = {
            x: curr.x + (prev.x - curr.x) * 0.2,
            y: curr.y + (prev.y - curr.y) * 0.2,
          };
        }
        return newDots;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {dots.map((dot, idx) => (
        <div
          key={idx}
          className="pointer-events-none fixed top-0 left-0 w-3 h-3 rounded-full z-[9999]"
          style={{
            transform: `translate(${dot.x - 6}px, ${dot.y - 6}px)`,
            backgroundColor: `hsl(${(idx * 36) % 360}, 100%, 70%)`,
            opacity: 1 - idx * 0.1,
            transition: "transform 0.03s linear",
          }}
        />
      ))}
    </>
  );
};
