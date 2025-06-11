// // src/components/CursorTrail.jsx
// import { useEffect, useState, useRef } from "react";

// export const CursorTrail = () => {
//   const [snowflakes, setSnowflakes] = useState([]);
//   const animationFrameId = useRef(null);
//   const snowflakeId = useRef(0); // To give each snowflake a unique key

//   useEffect(() => {
//     const maxSnowflakes = 30; // Number of snowflakes in the trail
//     const trailDensity = 15; // Add a new snowflake every X pixels moved
//     const fadeSpeed = 0.03; // How quickly snowflakes fade out
//     const shrinkSpeed = 0.02; // How quickly snowflakes shrink

//     let lastX = 0;
//     let lastY = 0;

//     const handleMouseMove = (e) => {
//       const currentX = e.clientX;
//       const currentY = e.clientY;

//       // Calculate distance moved to control density
//       const distance = Math.sqrt(
//         Math.pow(currentX - lastX, 2) + Math.pow(currentY - lastY, 2)
//       );

//       if (distance > trailDensity) {
//         setSnowflakes((prevSnowflakes) => {
//           // Add a new snowflake at the current cursor position
//           const newSnowflake = {
//             id: snowflakeId.current++,
//             x: currentX + (Math.random() - 0.5) * 10, // Slight random offset for scattered look
//             y: currentY + (Math.random() - 0.5) * 10, // Slight random offset
//             opacity: 1,
//             scale: 1,
//             rotation: Math.random() * 360, // Random initial rotation
//             rotationSpeed: (Math.random() - 0.5) * 5, // Random rotation speed
//           };
//           const updatedSnowflakes = [newSnowflake, ...prevSnowflakes].slice(
//             0,
//             maxSnowflakes
//           ); // Keep only maxSnowflakes
//           return updatedSnowflakes;
//         });

//         lastX = currentX;
//         lastY = currentY;
//       }
//     };

//     const animateSnowflakes = () => {
//       setSnowflakes((prevSnowflakes) => {
//         return prevSnowflakes
//           .map((s) => ({
//             ...s,
//             opacity: s.opacity - fadeSpeed, // Fade out
//             scale: s.scale - shrinkSpeed, // Shrink
//             rotation: s.rotation + s.rotationSpeed, // Rotate
//             // Add a slight "float" effect (optional, uncomment to enable)
//             // y: s.y + 0.5,
//           }))
//           .filter((s) => s.opacity > 0); // Remove fully faded snowflakes
//       });
//       animationFrameId.current = requestAnimationFrame(animateSnowflakes);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     animationFrameId.current = requestAnimationFrame(animateSnowflakes);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId.current);
//     };
//   }, []);

//   return (
//     <>
//       {snowflakes.map((snowflake) => (
//         <div
//           key={snowflake.id}
//           className="pointer-events-none fixed top-0 left-0 text-white z-[9999]"
//           style={{
//             transform: `translate(${snowflake.x}px, ${
//               snowflake.y
//             }px) scale(${snowflake.scale}) rotate(${snowflake.rotation}deg)`,
//             fontSize: "30px", // Base size of the snowflake character
//             opacity: snowflake.opacity,
//             // A subtle blue glow as seen in the image
//             textShadow: `0 0 5px rgba(255,255,255,${
//               snowflake.opacity * 0.8
//             }), 0 0 15px rgba(0,200,255,${snowflake.opacity * 0.5})`,
//             transition: "transform 0.05s linear, opacity 0.05s linear, text-shadow 0.05s linear", // Smoothness
//             // Using a Unicode snowflake character
//             display: "inline-block", // Important for transform and text-shadow to apply correctly to character
//           }}
//         >
//           {"\u2745"} {/* Unicode snowflake character */}
//           {/* You can also try "\u2746" for a different snowflake */}
//           {/* If using an image: <img src="/path/to/your/snowflake.png" alt="snowflake" style={{ width: '30px', height: '30px' }} /> */}
//         </div>
//       ))}
//     </>
//   );
// };
// src/components/CursorTrail.jsx
import { useEffect, useState, useRef } from "react";

export const CursorTrail = () => {
  const [stars, setStars] = useState([]); // Changed from snowflakes to stars
  const animationFrameId = useRef(null);
  const starId = useRef(0); // Changed from snowflakeId to starId

  useEffect(() => {
    const maxStars = 30; // Number of stars in the trail (adjustable)
    const trailDensity = 15; // Add a new star every X pixels moved (adjustable)
    const fadeSpeed = 0.03; // How quickly stars fade out
    const shrinkSpeed = 0.02; // How quickly stars shrink

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
        setStars((prevStars) => { // Changed from setSnowflakes to setStars
          // Add a new star at the current cursor position
          const newStar = { // Changed from newSnowflake to newStar
            id: starId.current++,
            x: currentX + (Math.random() - 0.5) * 10, // Slight random offset for scattered look
            y: currentY + (Math.random() - 0.5) * 10, // Slight random offset
            opacity: 1,
            scale: 1,
            rotation: Math.random() * 360, // Random initial rotation
            rotationSpeed: (Math.random() - 0.5) * 5, // Random rotation speed
          };
          const updatedStars = [newStar, ...prevStars].slice(
            0,
            maxStars
          ); // Keep only maxStars
          return updatedStars;
        });

        lastX = currentX;
        lastY = currentY;
      }
    };

    const animateStars = () => { // Changed from animateSnowflakes to animateStars
      setStars((prevStars) => { // Changed from setSnowflakes to setStars
        return prevStars
          .map((s) => ({
            ...s,
            opacity: s.opacity - fadeSpeed, // Fade out
            scale: s.scale - shrinkSpeed, // Shrink
            rotation: s.rotation + s.rotationSpeed, // Rotate
            // Add a slight "float" effect (optional, uncomment to enable)
            // y: s.y + 0.5,
          }))
          .filter((s) => s.opacity > 0); // Remove fully faded stars
      });
      animationFrameId.current = requestAnimationFrame(animateStars);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animateStars);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <>
      {stars.map((star) => ( // Changed from snowflakes to stars
        <div
          key={star.id}
          className="pointer-events-none fixed top-0 left-0 z-[9999]"
          style={{
            transform: `translate(${star.x}px, ${
              star.y
            }px) scale(${star.scale}) rotate(${star.rotation}deg)`,
            fontSize: "30px", // Base size of the star character
            color: "gold", // <--- CHANGED: Set the base color to gold
            opacity: star.opacity,
            // <--- CHANGED: Adjusted textShadow for a golden glow
            textShadow: `
              0 0 5px rgba(255, 215, 0, ${star.opacity}),    /* Gold glow */
              0 0 10px rgba(255, 165, 0, ${star.opacity * 0.7}), /* Orange glow */
              0 0 15px rgba(255, 69, 0, ${star.opacity * 0.4}) /* Reddish glow for depth */
            `,
            transition: "transform 0.05s linear, opacity 0.05s linear, text-shadow 0.05s linear", // Smoothness
            display: "inline-block", // Important for transform and text-shadow to apply correctly to character
          }}
        >
          {"\u2B50"} {/* <--- CHANGED: Unicode star character */}
          {/* You can also try "\u2605" (Black Star, then `color` will make it yellow) or "\u2606" (White Star) */}
          {/* If using an image: <img src="/path/to/your/star.png" alt="star" style={{ width: '30px', height: '30px' }} /> */}
        </div>
      ))}
    </>
  );
};