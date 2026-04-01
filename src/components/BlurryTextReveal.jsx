import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlurryTextReveal = ({ children, className, delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    gsap.fromTo(
      element,
      { filter: 'blur(15px)', opacity: 0, y: 40 },
      {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
        duration: 1.8,
        delay: delay,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [delay]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default BlurryTextReveal;
