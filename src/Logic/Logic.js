export const convertISOcodeToCurrency = (code) => {
  const lookup = {
    840: "USD",
    978: "EUR",
    980: "UAH",
  };
  return lookup[code];
};

export const filterCurrencyArray = (currencyArr) => {
  return currencyArr.filter(
    // 840 ----> USD    978 -----> EUR   980 ----->UAH
    //recieve only EUR/USD to UAH rate
    (el) => el.currencyCodeA === 840 || el.currencyCodeA === 978
  );
};

export const prepearCurrencyArray = (fltrdArr) => {
  return fltrdArr.reduce((obj, el) => {
    obj[
      convertISOcodeToCurrency(el.currencyCodeA) +
        "=>" +
        convertISOcodeToCurrency(el.currencyCodeB)
    ] = el;
    return obj;
  }, {});
};

export const handleReverseValues = (ref1, fef2) => {
  //chanhe itput values
  const saveValue_input = ref1.current.childRateInputRef.value;
  ref1.current.childRateInputRef.value = fef2.current.childRateInputRef.value;
  fef2.current.childRateInputRef.value = saveValue_input;
  //chanhe swatch values
  const saveValue_swatch = ref1.current.childSwatchRef.value;
  ref1.current.childSwatchRef.value = fef2.current.childSwatchRef.value;
  fef2.current.childSwatchRef.value = saveValue_swatch;
};

export const handleSwatchChange = (ref1, obj, e, ref2) => {
  let targetValue, refValue;

  if (!e) targetValue = ref2.current.childSwatchRef.value;
  else targetValue = e.target.value;

  refValue = ref1.current.childSwatchRef.value;

  let key = `${targetValue}=>${refValue}`;
  if (obj[key]) return obj[key].rateBuy;
  if (targetValue === refValue) return 1;
  if (!obj[key]) key = `${refValue}=>${targetValue}`;
  return 1 / obj[key].rateBuy;
};
