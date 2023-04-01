import { Button, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRef } from "react";
import { handleReverseValues, handleSwatchChange } from "../../Logic/Logic";
import { RateCalculatorBlock } from "./RateCalculatorBlock/RateCalculatorBlock";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
export default function RateCalculator({ currencyObj }) {
  const [currencyСoefficient, setcurrencyСoefficient] = useState(1);

  const childOneRef = useRef(null);
  const childTwoRef = useRef(null);

  const handleInputChange1 = (e) => {
    const value = e.target.value;
    childOneRef.current.childRateInputRef.value = value / currencyСoefficient;
  };
  const handleInputChange2 = (e) => {
    const value = e.target.value;
    childTwoRef.current.childRateInputRef.value = value * currencyСoefficient;
  };

  return (
    <>
      <Grid templateColumns={"repeat(3, 1fr)"} gap={15}>
        <GridItem w={"100%"}>
          <RateCalculatorBlock
            ref={childOneRef}
            onInputChange={handleInputChange2}
            onSwatchChange={(e) => {
              const calcedCoef = handleSwatchChange(
                childTwoRef,
                currencyObj,
                e
              );
              setcurrencyСoefficient(calcedCoef);
              childTwoRef.current.childRateInputRef.value =
                childOneRef.current.childRateInputRef.value * calcedCoef;
            }}
          />
        </GridItem>
        <GridItem w={"100%"} margin={"auto"} textAlign={"center"}>
          <Button
            alignItems={"center"}
            onClick={() => {
              const recalcedCoficient = handleSwatchChange(
                childOneRef,
                currencyObj,
                null,
                childTwoRef
              );
              setcurrencyСoefficient(recalcedCoficient);
              handleReverseValues(childOneRef, childTwoRef);
            }}
            colorScheme={"teal"}
            variant={"solid"}
          >
            <ArrowLeftIcon color={"black"} /> Reverse
            <ArrowRightIcon color={"black"} />
          </Button>
        </GridItem>
        <GridItem w={"100%"}>
          <RateCalculatorBlock
            ref={childTwoRef}
            onInputChange={handleInputChange1}
            onSwatchChange={(e) => {
              const calcedCoef = handleSwatchChange(
                childOneRef,
                currencyObj,
                e
              );
              setcurrencyСoefficient(calcedCoef);
              childOneRef.current.childRateInputRef.value =
                childTwoRef.current.childRateInputRef.value * calcedCoef;
            }}
          />
        </GridItem>
      </Grid>
    </>
  );
}
