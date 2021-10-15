import "./autoslide.css";
import { useState, useEffect, useRef } from "react";
import { sliderItems } from '../data';

const AutoplaySlider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2500;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>{
            {sliderItems.map(item => (
                prevIndex === item.length - 1 ? 0 : prevIndex + 1
            ))}
        }
        
          
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {sliderItems.map((item) => (
            
          <div key={item.id} className="slide">
                        <div>
                         <img src={item.img} style={{ height: "200px"}}/>
                         </div>
                         <div>
                             <h1>{item.title}</h1>
                             <p>{item.desc}</p>
                             <button>SHOP NOW</button>
                         </div>
                     
         </div>
        ))}
      </div>

      <div className="slideshowDots">
        {sliderItems.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default AutoplaySlider;