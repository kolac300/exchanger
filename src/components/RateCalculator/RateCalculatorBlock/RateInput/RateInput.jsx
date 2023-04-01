import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Input, InputGroup } from "@chakra-ui/react";

export const RateInput = forwardRef(({ onChange }, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  return (
    <>
      <InputGroup padding={"7%"} w={"50%"} margin={"auto"}>
        <Input
          onChange={onChange}
          ref={inputRef}
          borderColor={"black.500"}
          placeholder={"0"}
          variant={"filled"}
        />
      </InputGroup>
    </>
  );
});
