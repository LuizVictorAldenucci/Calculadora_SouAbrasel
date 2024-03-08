var AleloA = function TaxaAleloA(x)
{
    var result = (x * 3.5)
    var resultB = result / 100
    const formatado = resultB.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (formatado);
}

var AleloM = function TaxaAleloM(x, y)
{
  if(y != 0){
    var result = x * y
    var resultA = result / 100
    const formatado = resultA.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return (formatado);
   }
  return 0;
}

var AleloTFB = function TaxaTFBAlelo()
{
  resultA = 0.90;
  const formatado = resultA.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return(formatado)
}
var AleloAnuidade = function AnuidadeAlelo()
{
  resultA = 190.0 ;
  const formatado = resultA.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return(formatado)
}
var AleloAdesao = function AdesaoAlelo()
{
  resultA = 120.0 ;
  const formatado = resultA.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return(formatado)
}

var TotalAlelo = function TotalAlelo(x, y)
{
  if(y != 0)
  {
    var result = ((x * y) - (x * 3.5)) / 100;
    const formatado = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  return 0;
}
var TotalAleloAnual = function TotalAleloAnual(x, y)
{
  if(y != 0) 
  {
    var result = (((x * y) - (x * 3.5))*12) / 100;
    const formatado = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  return 0
}