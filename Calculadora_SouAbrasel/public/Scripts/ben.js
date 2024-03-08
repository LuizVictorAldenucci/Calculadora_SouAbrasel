var BenA = function TaxaBenA(x)
{
  var result = (x * 3.9)
  var resultB = result / 100
  const formatado = resultB.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

return (formatado);
}

var BenM = function TaxaBenM(x, y)
{
  if(y != 0){
    var result = x * y
    var resultA = result / 100
    const formatado = resultA.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return (formatado);
   }
  return 0;
}

var BenTFB = function TaxaTFBBen()
{
    resultA = 1.10;
    const formatado = resultA.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return(formatado)
}
var BenAnuidade = function AnuidadeBen()
{
    resultA = 120;
    const formatado = resultA.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return(formatado)
}
var BenAdesao = function AdesaoBen()
{
    resultA = 120;
    const formatado = resultA.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return("Isento a Adesão")
}

var TotalBen = function TotalBen(x, y)
{
  if(y != 0)
  {
    var result = ((x * y) - (x * 3.9)) / 100;
    const formatado = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  return 0;
}
var TotalBenAnual = function TotalBen(x, y)
{
  if(y != 0) 
  {
    var result = (((x * y) - (x * 3.9))*12) / 100;
    const formatado = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  return 0
}