var TicketA = function TaxaTicketA(x)
{
  
    var result = x * 3.5
    var resultB = result / 100
    const formatado = resultB.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (formatado);
}

var TicketM = function TaxaTicketM(x, y)
{
  if(y != 0){
    var result = x * y
    var resultA = result / 100
    const formatado = resultA.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return (formatado);
   }
  return 0;
}

var TicketTFB = function TaxaTFBTicekt()
{
    resultA = 8.37;
    const formatado = resultA.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return(formatado)
}
var TicketAnuidade = function AnuidadeTicket()
{
    return("Isento")
}

var TicketAdesao = function AdesaoTicket()
{
    resultA = 385.00 ;
    const formatado = resultA.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return(formatado)
}
var TotalTicket = function TicketTotal(x, y)
{
  if(y != 0)
  {
    var result = ((x * y) - (x * 3.5)) / 100;
    const formatado = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  return 0;
}
var TotalATicketA = function TicketTotal(x, y)
{
  if(y != 0) 
  {
    var result = (((x * y) - (x * 3.5))*12) / 100;
    const formatado = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  return 0
}