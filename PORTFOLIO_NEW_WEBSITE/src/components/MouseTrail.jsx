import { useEffect, useRef } from "react";

export const MouseTrail = () => {
  const trailRef = useRef([]);
  const burstRef = useRef(null);

  useEffect(() => {
    const trailLength = 10;
    const trail = Array.from({ length: trailLength }, () => {
      const dot = document.createElement("div");
      dot.style.position = "fixed";
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.borderRadius = "50%";
      dot.style.background = "#00ffff";
      dot.style.pointerEvents = "none";
      dot.style.filter = "blur(4px)";
      dot.style.zIndex = "9999";
      dot.style.transition = "transform 0.1s ease-out";
      document.body.appendChild(dot);
      return dot;
    });
    trailRef.current = trail;

    const positions = Array(trailLength).fill({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      positions.unshift({ x: e.clientX, y: e.clientY });
      positions.pop();

      trail.forEach((dot, idx) => {
        const { x, y } = positions[idx];
        dot.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    const handleClick = (e) => {
      if (!burstRef.current) {
        const burst = document.createElement("div");
        burst.style.position = "fixed";
        burst.style.borderRadius = "50%";
        burst.style.width = "50px";
        burst.style.height = "50px";
        burst.style.background = "radial-gradient(circle, #00ffff88, transparent)";
        burst.style.pointerEvents = "none";
        burst.style.zIndex = "9999";
        burst.style.animation = "burst 0.6s ease-out";
        document.body.appendChild(burst);
        burstRef.current = burst;

        burst.style.left = `${e.clientX - 25}px`;
        burst.style.top = `${e.clientY - 25}px`;

        burst.addEventListener("animationend", () => {
          burst.remove();
          burstRef.current = null;
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      trail.forEach((dot) => dot.remove());
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <style>{`
      @keyframes burst {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        100% {
          transform: scale(2.5);
          opacity: 0;
        }
      }
    `}</style>
  );
};
