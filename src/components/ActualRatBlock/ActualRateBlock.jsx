import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function ActualRateBlock({ currency, currencyObj }) {
  const { rateBuy, rateSell } = currencyObj;
  return (
    <>
      <Stack spacing="4">
        <Card boxShadow="none" background={"green"} size={"sm"}>
          <CardHeader>
            <Heading size="md"> {currency}</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Buy rate = {rateBuy} {currency.split("=>")[1]}
            </Text>
            <Text>
              Sell rate = {rateSell} {currency.split("=>")[1]}
            </Text>
            <Text>Update date = {new Date().toLocaleDateString()}</Text>
          </CardBody>
        </Card>
      </Stack>
    </>
  );
}
