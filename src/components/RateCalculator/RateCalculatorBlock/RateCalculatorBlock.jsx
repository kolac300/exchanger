import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { RateInput } from "./RateInput/RateInput";
import { RateSwatch } from "./RateSwatch/RateSwatch";

export const RateCalculatorBlock = forwardRef(
  ({ onInputChange, onSwatchChange }, ref) => {
    const childSwatchRef = useRef(null);
    const childRateInputRef = useRef(null);

    useImperativeHandle(ref, () => ({
      childSwatchRef: childSwatchRef.current,
      childRateInputRef: childRateInputRef.current,
    }));
    return (
      <>
        <RateSwatch ref={childSwatchRef} onChange={onSwatchChange} />
        <RateInput ref={childRateInputRef} onChange={onInputChange} />
      </>
    );
  }
);
