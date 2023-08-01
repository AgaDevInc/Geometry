export function makeQuadrate(d) {
  const figure = []
  for (let i = 0; i <= d; i++) {
    figure.push([i, 0]);
    figure.push([0, i]);
    figure.push([i, d]);
    figure.push([d, i]);
  }
  return figure;
}
export function makeQuadrateFilled(d) {
  const figure = [];
  for (let x = 0; x <= d; x++)
  for (let y = 0; y <= d; y++) {
    figure.push([x, y]);
  }
  return figure;
}
