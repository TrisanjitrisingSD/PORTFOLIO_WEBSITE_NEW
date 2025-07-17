import React, { useState, useEffect, useRef } from 'react';

const LogoToggle = () => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const logoRef = useRef(null);

  const handleClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  const handleOutsideClick = (e) => {
    if (isEnlarged && logoRef.current && !logoRef.current.contains(e.target)) {
      setIsEnlarged(false);
    }
  };

  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      setIsEnlarged(false);
    }
  };

  useEffect(() => {
    if (isEnlarged) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEsc);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isEnlarged]);

  return (
    <>
      {isEnlarged && (
        <div className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300" />
      )}
      <img
        ref={logoRef}
        src="/vite.svg" // replace with your actual path
        alt="Logo"
        onClick={handleClick}
        className={`transition-all duration-500 cursor-pointer rounded-full bg-white p-1 shadow-xl z-50 ${
          isEnlarged
            ? 'w-100 h-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            : 'w-8 h-8'
        }`}
      />
    </>
  );
};

export default LogoToggle;
