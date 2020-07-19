import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { connect } from 'react-redux';

export const useScrollControls = (options = {}) => {
  let scrollBarPosition = 0;

  const setState = (slider) => {
    const jump = slider.current.clientWidth;
    return {
      sliderElement: slider.current,
      scrollWidth: slider.current.scrollWidth,
      maxScrollBarPosition: slider.current.scrollWidth - jump,
      jump,
    };
  };

  const scroll = (sliderState) => {
    sliderState.sliderElement.scrollTo(scrollBarPosition, 0);
  };

  const scrollLeft = (event, sliderState) => {
    if (scrollBarPosition > 0) {
      scrollBarPosition -= sliderState.jump;
      scroll(sliderState);
    } else {
      scrollBarPosition = 0;
    }
  };
  const scrollRight = (event, sliderState) => {
    if (scrollBarPosition < sliderState.maxScrollBarPosition) {
      scrollBarPosition += sliderState.jump;
      scroll(sliderState);
    } else {
      scrollBarPosition = sliderState.maxScrollBarPosition;
    }
  };

  return {
    handleLeftScroll: (slider) => {
      return (event) => {
        const state = setState(slider);
        scrollLeft(event, state);
      };
    },
    handleRightScroll: (slider) => {
      return (event) => {
        const state = setState(slider);
        scrollRight(event, state);
      };
    },
  };
};

export const SlideControl = ({ direction, content, onClick, rounded }) => {
  return (
    <div className="hide-until-desktop">
      <div
        className={`flex slide-control ${direction} ${
          rounded ? 'rounded' : ''
        }`}
        onClick={onClick}
      >
        {content || direction === 'left' ? (
          <IoIosArrowBack className="icon" />
        ) : (
          <IoIosArrowForward className="icon" />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SlideControl);
