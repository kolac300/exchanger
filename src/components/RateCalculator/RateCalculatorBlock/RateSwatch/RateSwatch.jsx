import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Select, Stack } from "@chakra-ui/react";
export const RateSwatch = forwardRef(({ onChange }, ref) => {
  const selectRef = useRef(null);
  useImperativeHandle(ref, () => selectRef.current);
  return (
    <>
      <Stack
        onChange={onChange}
        padding={"7%"}
        margin={"auto"}
        spacing={3}
        w={"50%"}
      >
        <Select ref={selectRef} border={"2px solid black"}>
          <option value={"USD"}>{"USD"}</option>
          <option value={"UAH"}>{"UAH"}</option>
          <option value={"EUR"}>{"EUR"}</option>
        </Select>
      </Stack>
    </>
  );
});
