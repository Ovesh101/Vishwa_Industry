import { useEffect, useRef, useState } from "react";

function FadeInSection(props) {
  // Default delay is 0 if not provided
  const delay = props.delay || 0; 
  const [isVisible, setVisible] = useState(false); // Start with false to hide initially
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Set visibility based on intersection
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current); // Observe the current ref
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current); // Clean up observer
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms`, opacity: isVisible ? 1 : 0 }} // Control opacity
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
