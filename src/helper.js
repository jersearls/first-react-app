export function convertWeight (lbWeight) {
  return lbWeight * 0.45359237
}

export function convertHeight (ftHeight, inHeight) {
  return ((ftHeight * 12) + inHeight) * .0254 
}

export function bmiMath (mHeight, kgWeight) {
  return (kgWeight/(mHeight^2))
}
