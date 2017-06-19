export function bmiMath (ftHeight, inHeight, lbWeight) {
  const kgWeight = parseFloat(lbWeight, 10) * 0.45359237;
  const ftToIn = parseFloat(ftHeight, 10) * 12
  const mHeight = (ftToIn + parseFloat(inHeight,10)) * .0254 
  return (kgWeight/(mHeight^2))
}
