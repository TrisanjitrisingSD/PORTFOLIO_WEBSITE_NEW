// src/components/CursorTrail.jsx
import { useEffect, useState, useRef } from "react";

export const CursorTrail = () => {
  const [snowflakes, setSnowflakes] = useState([]);
  const animationFrameId = useRef(null);
  const snowflakeId = useRef(0); // To give each snowflake a unique key

  useEffect(() => {
    const maxSnowflakes = 30; // Number of snowflakes in the trail
    const trailDensity = 15; // Add a new snowflake every X pixels moved
    const fadeSpeed = 0.03; // How quickly snowflakes fade out
    const shrinkSpeed = 0.02; // How quickly snowflakes shrink

    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      // Calculate distance moved to control density
      const distance = Math.sqrt(
        Math.pow(currentX - lastX, 2) + Math.pow(currentY - lastY, 2)
      );

      if (distance > trailDensity) {
        setSnowflakes((prevSnowflakes) => {
          // Add a new snowflake at the current cursor position
          const newSnowflake = {
            id: snowflakeId.current++,
            x: currentX + (Math.random() - 0.5) * 10, // Slight random offset for scattered look
            y: currentY + (Math.random() - 0.5) * 10, // Slight random offset
            opacity: 1,
            scale: 1,
            rotation: Math.random() * 360, // Random initial rotation
            rotationSpeed: (Math.random() - 0.5) * 5, // Random rotation speed
          };
          const updatedSnowflakes = [newSnowflake, ...prevSnowflakes].slice(
            0,
            maxSnowflakes
          ); // Keep only maxSnowflakes
          return updatedSnowflakes;
        });

        lastX = currentX;
        lastY = currentY;
      }
    };

    const animateSnowflakes = () => {
      setSnowflakes((prevSnowflakes) => {
        return prevSnowflakes
          .map((s) => ({
            ...s,
            opacity: s.opacity - fadeSpeed, // Fade out
            scale: s.scale - shrinkSpeed, // Shrink
            rotation: s.rotation + s.rotationSpeed, // Rotate
            // Add a slight "float" effect (optional, uncomment to enable)
            // y: s.y + 0.5,
          }))
          .filter((s) => s.opacity > 0); // Remove fully faded snowflakes
      });
      animationFrameId.current = requestAnimationFrame(animateSnowflakes);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animateSnowflakes);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <>
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="pointer-events-none fixed top-0 left-0 text-white z-[9999]"
          style={{
            transform: `translate(${snowflake.x}px, ${
              snowflake.y
            }px) scale(${snowflake.scale}) rotate(${snowflake.rotation}deg)`,
            fontSize: "30px", // Base size of the snowflake character
            opacity: snowflake.opacity,
            // A subtle blue glow as seen in the image
            textShadow: `0 0 5px rgba(255,255,255,${
              snowflake.opacity * 0.8
            }), 0 0 15px rgba(0,200,255,${snowflake.opacity * 0.5})`,
            transition: "transform 0.05s linear, opacity 0.05s linear, text-shadow 0.05s linear", // Smoothness
            // Using a Unicode snowflake character
            display: "inline-block", // Important for transform and text-shadow to apply correctly to character
          }}
        >
          {"\u2745"} {/* Unicode snowflake character */}
          {/* You can also try "\u2746" for a different snowflake */}
          {/* If using an image: <img src="/path/to/your/snowflake.png" alt="snowflake" style={{ width: '30px', height: '30px' }} /> */}
        </div>
      ))}
    </>
  );
};