import { useEffect, useRef, useState } from "react";

function FadeInSection(props) {
    const [delay , setDelay] = useState(props.delay ? props.delay : 0)
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        style={{transitionDelay:delay + "ms"}}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  export default FadeInSection