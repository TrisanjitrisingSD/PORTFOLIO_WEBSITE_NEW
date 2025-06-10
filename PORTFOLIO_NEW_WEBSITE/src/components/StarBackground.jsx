// import { useEffect, useState } from "react";

// // id, size, x, y, opacity, animationDuration
// // id, size, x, y, delay, animationDuration

// export const StarBackground = () => {
//   const [stars, setStars] = useState([]);
//   const [meteors, setMeteors] = useState([]);

//   useEffect(() => {
//     generateStars();
//     generateMeteors();

//     const handleResize = () => {
//       generateStars();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const generateStars = () => {
//     const numberOfStars = Math.floor(
//       (window.innerWidth * window.innerHeight) / 10000
//     );

//     const newStars = [];

//     for (let i = 0; i < numberOfStars; i++) {
//       newStars.push({
//         id: i,
//         size: Math.random() * 3 + 1,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         opacity: Math.random() * 0.5 + 0.5,
//         animationDuration: Math.random() * 4 + 2,
//       });
//     }

//     setStars(newStars);
//   };

//   const generateMeteors = () => {
//     const numberOfMeteors = 4;
//     const newMeteors = [];

//     for (let i = 0; i < numberOfMeteors; i++) {
//       newMeteors.push({
//         id: i,
//         size: Math.random() * 2 + 1,
//         x: Math.random() * 100,
//         y: Math.random() * 20,
//         delay: Math.random() * 15,
//         animationDuration: Math.random() * 3 + 3,
//       });
//     }

//     setMeteors(newMeteors);
//   };

//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="star animate-pulse-subtle"
//           style={{
//             width: star.size + "px",
//             height: star.size + "px",
//             left: star.x + "%",
//             top: star.y + "%",
//             opacity: star.opacity,
//             animationDuration: star.animationDuration + "s",
//           }}
//         />
//       ))}

//       {meteors.map((meteor) => (
//         <div
//           key={meteor.id}
//           className="meteor animate-meteor"
//           style={{
//             width: meteor.size * 50 + "px",
//             height: meteor.size * 2 + "px",
//             left: meteor.x + "%",
//             top: meteor.y + "%",
//             animationDelay: meteor.delay,
//             animationDuration: meteor.animationDuration + "s",
//           }}
//         />
//       ))}
//     </div>
//   );
// };
import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [fireballs, setFireballs] = useState([]); // NEW STATE for fireballs

  useEffect(() => {
    generateStars();
    generateMeteors();
    generateFireballs(); // Call the new function

    const handleResize = () => {
      generateStars();
      // You might want to regenerate meteors/fireballs on resize too,
      // or at least adjust their positions if they use percentages
      // For simplicity, we'll keep them as is for now, but something to consider
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4; // You can adjust this number
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // Base size
        x: Math.random() * 100, // Starting X position
        y: Math.random() * 20, // Starting Y position (top 20% of screen)
        delay: Math.random() * 15, // Delay before animation starts
        animationDuration: Math.random() * 3 + 3, // Duration of the animation
      });
    }

    setMeteors(newMeteors);
  };

  // NEW FUNCTION for generating fireballs
  const generateFireballs = () => {
    const numberOfFireballs = 2; // Adjust number of fireballs as desired
    const newFireballs = [];

    for (let i = 0; i < numberOfFireballs; i++) {
      newFireballs.push({
        id: i,
        size: Math.random() * 20 + 30, // Larger size for fireballs (e.g., 30-50px)
        x: Math.random() * 80 + 10, // X position (avoiding extreme edges)
        y: Math.random() * 20 - 10, // Start slightly off-screen top or near top
        delay: Math.random() * 10, // Delay before animation starts
        animationDuration: Math.random() * 5 + 5, // Slower animation duration
      });
    }
    setFireballs(newFireballs);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px", // Meteors are long streaks
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s", // Add "s" for delay
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}

      {/* NEW: Rendering Fireballs */}
      {fireballs.map((fireball) => (
        <div
          key={fireball.id}
          className="fireball animate-fireball"
          style={{
            width: fireball.size + "px",
            height: fireball.size + "px",
            left: fireball.x + "%",
            top: fireball.y + "%",
            animationDelay: fireball.delay + "s",
            animationDuration: fireball.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};