import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Raven1 } from '../assets/ravens_dots_and_clouds/raven1.svg';
import "./range-slider.css";

function RangeSlider({ min, max, value, step }) {
  const [sliderRange, setSliderRange] = useState(value);
  const [inputValue, setInputValue] = useState(value);
  const sliderRef = useRef(null);

  const navigate = useNavigate();

  const submitButtonClick = () => {
    console.log(inputValue)
    sessionStorage.setItem("guess", inputValue)
    navigate("/showResults")
  }

  function handleSliderInput() {
    //Get range between max & min values
    const range = max - min;
    //Get distance between value and min value
    const distance = sliderRef.current.value - min;
    //Turn into percentage
    const percentage = (distance / range) * 100;
    //Set slider range to percentage
    setSliderRange(percentage);
    //Set input value for number input to slider value
    setInputValue(sliderRef.current.value);
  }

  function handleNumberInput(e) {
    //Set number input value to a new variable
    const newValue = parseInt(e.target.value);
    //Check if it's below the min value
    if (newValue < min) {
      //Set it to the min value
      setInputValue(min)
      //Set slider to the beginning
      setSliderRange(0)
      //Check if it's above the max value
    } else if (newValue > max) {
      //Set it to the max value
      setInputValue(max)
      //Set slider to the end
      setSliderRange(100)
    } else {
      //Set number input value to the new variable
      setInputValue(newValue);
      //Redo calculation from before for the slider range
      const range = max - min;
      const distance = newValue - min;
      const percentage = (distance / range) * 100;
      setSliderRange(percentage);
    }
  }

  /*Run function when slider reference is set*/
  useEffect(() => {
    handleSliderInput();
  }, [sliderRef]);

  return (

    <>

      <div>
        <h1>What percentage of researchers do you think</h1>
        <h1>believe that there is a reproducibility crisis?</h1>
      </div>
      <div>
        <Raven1 />
      </div>

      <div className="range-slider">
        <div className="slider-values">
          <small>{min}</small>
          <input
            type="number"
            value={inputValue}
            onInput={handleNumberInput}
            min={min} max={max}
            className="number-input"
            step={step}
          />
          <small>{max}</small>
        </div>
        <div className="slider-container">
          <input
            type="range"
            onInput={handleSliderInput}
            value={inputValue}
            className="slider"
            min={min}
            max={max}
            ref={sliderRef}
            step={step}
          />
          <div
            className="slider-thumb"
            style={{ left: `calc(${sliderRange}% - 0.5em)` }}
          ></div>
          <div
            className="progress"
            style={{ width: `${sliderRange}%` }}
          ></div>
        </div>
      </div>

      <input
        type="button"
        onClick={submitButtonClick}
        value="SUBMIT" />

    </>
  );
}

export default RangeSlider;