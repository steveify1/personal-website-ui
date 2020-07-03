import React, { useRef } from 'react';
import SlideControl, {
  useScrollControls,
} from '../Slider/SlideControl/SlideControl';

function HScrollSlider({ children }) {
  const slider = useRef('');

  const { handleLeftScroll, handleRightScroll } = useScrollControls({
    jump: 1,
  });

  return (
    <div className="h-scroll-slider__parent">
      <div ref={slider} className="flex slider scroll-slider h-scroll-slider">
        {children.map((child) => (
          <span className="h-scroll-slider__child">{child}</span>
        ))}
      </div>
      <SlideControl
        direction="left"
        rounded={true}
        onClick={handleLeftScroll(slider)}
      />
      <SlideControl
        direction="right"
        rounded={true}
        onClick={handleRightScroll(slider)}
      />
    </div>
  );
}

export default HScrollSlider;
