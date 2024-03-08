var SodexoA = function TaxaSodexoA(x, y)
{
  var result = (x * 3.5)
  var resultB = result / 100
  const formatado = resultB.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

return (formatado);
}

var SodexoM = function TaxaSodexoM(x, y) 
{
 if(y != 0){
  var result = x * y
  var resultA = result / 100
  const formatado = resultA.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (formatado);
 }
return 0;
}

var TotalSodexo = function TotalSodexo(x, y)
{
  if(y != 0)
  {
    var result = ((x * y) - (x * 3.5)) / 100;
    const formatado = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  return 0;

}
var TotalSodexoA = function TotalAnualSodexo(x, y)
{
  if(y != 0) 
  {
    var result = (((x * y) - (x * 3.5))*12) / 100;
    const formatado = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  return 0
}
