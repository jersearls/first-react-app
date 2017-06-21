export function lbToKg (usPounds) {
  return parseFloat(usPounds, 10) * 0.45359237;
}

export function ftInToCm (ftHeight, inHeight) {
  const ftToIn = parseFloat(ftHeight, 10) * 12;
  return (ftToIn + parseFloat(inHeight,10)) * 2.54; 
}

export function bmiMath (kgWeight, cmHeight) {
  const rawBmi = (kgWeight/cmHeight/cmHeight) * 10000;
  return parseFloat( rawBmi.toFixed(1) )
}
