import { useEffect, useState } from "react";
import RateCalculator from "./RateCalculator/RateCalculator";
import { Grid, GridItem } from "@chakra-ui/react";
import ActualRateBlock from "./ActualRatBlock/ActualRateBlock";
import { filterCurrencyArray, prepearCurrencyArray } from "../Logic/Logic";
import { actualRate } from "../API/monobankAPI";
import fakeRes from "../API/monobankFakeApi.json";

function App() {
  const [currencyObj, setCurrencyObj] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await actualRate();
      res = res ? res : fakeRes; /// monobank has visit limit
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
