import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import RateCalculator from "./RateCalculator/RateCalculator";
import { Grid, GridItem } from "@chakra-ui/react";
import ActualRateBlock from "./ActualRatBlock/ActualRateBlock";
import { filterCurrencyArray, prepearCurrencyArray } from "../Logic/Logic";

function App() {
  const [currencyObj, setCurrencyObj] = useState([]);

  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      const res = [
        {
          currencyCodeA: 840,
          currencyCodeB: 980,
          date: 1680213674,
          rateBuy: 36.65,
          rateCross: 0,
          rateSell: 37.4406,
        },
        {
          currencyCodeA: 978,
          currencyCodeB: 980,
          date: 1680213674,
          rateBuy: 40,
          rateCross: 0,
          rateSell: 41.0998,
        },
        {
          currencyCodeA: 978,
          currencyCodeB: 840,
          date: 1680213674,
          rateBuy: 1.08,
          rateCross: 0,
          rateSell: 1.095,
        },
      ];
      if (res) {
        const filtredCurrencyArray = filterCurrencyArray(res);
        setCurrencyObj(prepearCurrencyArray(filtredCurrencyArray));
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Grid
        h="200px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={5}
      >
        {Object.keys(currencyObj).map((el) => (
          <GridItem border={"2px solid black"} key={el} colSpan={1} bg="green">
            <ActualRateBlock currency={el} currencyObj={currencyObj[el]} />
          </GridItem>
        ))}
        <GridItem colSpan={3} bg="#f8f7f2">
          <RateCalculator currencyObj={currencyObj} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
