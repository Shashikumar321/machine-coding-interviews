import { useEffect, useRef, useState } from "react";

const OTP_INPUT_LENGTH = 5;

const OTPInput = () => {
  const [inputArr, setInputArr] = useState(
    new Array(OTP_INPUT_LENGTH).fill("")
  );

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (e, index) => {
    const val = e.target.value.trim();

    if (isNaN(val)) return;

    const newArr = [...inputArr];
    newArr[index] = val.slice(-1);

    setInputArr(newArr);
    val && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
    if (!e.target.value && e.key === "ArrowLeft") {
      refArr.current[index - 1]?.focus();
    }
    if (!e.target.value && e.key === "ArrowRight") {
      refArr.current[index + 1]?.focus();
    }
  };

  const handleReset = () => {
    setInputArr(new Array(OTP_INPUT_LENGTH).fill(""));
    refArr.current[0]?.focus();
  };

  return (
    <div className="otp-input-container">
      <div className="otp-input-text">
        Enter the {OTP_INPUT_LENGTH} digit OTP
      </div>
      {inputArr.map((inp, index) => {
        return (
          <input
            className="otp-input-box"
            key={index}
            type="text"
            ref={(input) => (refArr.current[index] = input)}
            value={inputArr[index]}
            onChange={(e) => handleOnChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
      <div>
        <button className="opt-input-reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default OTPInput;
