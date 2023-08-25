//beregner areal
function udregnRektangelAreal(width, height) {
  return width * height;
}

const areal = udregnRektangelAreal(2, 5);

console.log(areal);

//omregner areal: 10 til ft2
function convertSquareMToSquareFt(areal) {
  return areal * 10.76;
}

const value = convertSquareMToSquareFt(areal);

console.log(value);
