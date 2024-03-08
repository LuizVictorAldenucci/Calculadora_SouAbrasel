function main()
{

  // MOSTRAR DIV RESULTADO
  const resultadoDiv= document.getElementById('result')
  resultadoDiv.classList.remove('hidden')

  //Taxas Sodexo Input.
   let SodexoAb = document.getElementById('SodexoA'); //Sodexo Abrasel Valor da Taxa Administrativa
   let SodexoMe = document.getElementById('SodexoM'); //Sodexo Mercado Valor da Taxa Administrativa
   let TotalSodexoe = document.getElementById('TSodexo'); //Total Sodexo Mensal
   let TotalSodexoAnuale = document.getElementById('TASodexo'); //Total Sodexo Anual

   //Taxas Ticket Input.
   let TicketAb = document.getElementById('TicketA');
   let TicketMe = document.getElementById('TicketM');
   let TicketTFBa = document.getElementById('TicketTFB');
   let TicketAA = document.getElementById('TicketAA');
   let TTickeAD = document.getElementById('ADTicket');
   let TTicket = document.getElementById('TTicket');
   let TATicket = document.getElementById('TATicket');
  //Taxas Alelo Input.
   let AleloAb = document.getElementById('AleloA');
   let AleloMe = document.getElementById('AleloM');
  // let AleloTFBa = document.getElementById('AleloTFB');
  // let AleloAA = document.getElementById('AleloAA');
  // let AleloAD = document.getElementById('AleloAD');
   let TTAlelo = document.getElementById('AleloT');
   let TAlelo = document.getElementById('TAlelo');
  //Taxas Ben Input.
  let BenAb = document.getElementById('BenA');
  let BenMe = document.getElementById('BenM');
  //let BenTFBa = document.getElementById('BenTFB');
  //let BenAA = document.getElementById('BenAA');
  //let BenAD = document.getElementById('BenAD');
  let TBen = document.getElementById('TBen');
  let TTBen = document.getElementById('TABen');
  //fim das taxas.

  //Total Economizado com Abrasel em cada Voucher
  let TotalV = document.getElementById('TotalV');
  let TotalVA = document.getElementById('TotalVA');


  //Valores Inseridos
 let ValorFaturado = document.getElementById("VF").value.replace("R", "").replace("$", "").replace(/\./g, "").replace(",", ".");
 let TaxaSodexoM = document.getElementById("TxSodexo").value.replace("%", "");
 let TaxaTicketM = document.getElementById("TxTicket").value.replace("%", "");
 let TaxaAleloM = document.getElementById("TxAlelo").value.replace("%", "");
 let TaxaBenM = document.getElementById("TxBen").value.replace("%", "");

  //Sodexo Logica - Taxas
  let TxSodexA=0;
  let TxSodexM= 0;
  let TxSodexTT=0;
  let TxSodexTA=0;
  
  //Sodexo Logica - Taxas
  TxSodexM = SodexoM(ValorFaturado, TaxaSodexoM);
  TxSodexA = SodexoA(ValorFaturado);
  TxSodexTT = TotalSodexo(ValorFaturado, TaxaSodexoM )
  TxSodexTA = TotalSodexoA(ValorFaturado, TaxaSodexoM )

  SodexoAb.innerHTML = TxSodexA;
  SodexoMe.innerHTML = TxSodexM;
  TotalSodexoe.innerHTML = TxSodexTT;
  TotalSodexoAnuale.innerHTML = TxSodexTA;

  //Ticket Logica - Taxas
  let TxTicketA=0;
  let TxTicketM=0;
  let TxTicketTT=0;
  let TxTicketTA=0;
  
  //Ticket Logica - Taxas
  TxTicketA = TicketA(ValorFaturado);
  TxTicketM = TicketM(ValorFaturado, TaxaTicketM);
  TxTicketTFB = TicketTFB()
  TxTicketAA = TicketAnuidade("não paga")
  TxTicketDA = TicketAdesao("não paga")
  TxTicketTT = TotalTicket(ValorFaturado, TaxaTicketM)
  TxTicketTA = TotalATicketA(ValorFaturado, TaxaTicketM)

  TicketAb.innerHTML = TxTicketA;
  TicketMe.innerHTML = TxTicketM;
  TicketTFBa.innerHTML = TxTicketTFB;
  TicketAA.innerHTML = TxTicketAA;
  TTickeAD.innerHTML = TxTicketDA;
  TTicket.innerHTML = TxTicketTT;
  TATicket.innerHTML = TxTicketTA;


  //Ticket Logica - Taxas
  let TxAleloA=0;
  let TxTAleloM=0;
  let TxAleloTFB=0;
  //let TxAleloAA=0;
  //let TxAleloDA=0;
  let TxAleloTT=0;
  let TxAleloTA=0;
  
  //Ticket Logica - Taxas
  TxTAleloM = AleloM(ValorFaturado, TaxaAleloM);
  TxAleloA = AleloA(ValorFaturado);
  //TxAleloTFB = AleloTFB();
  //TxAleloAA = AleloAnuidade();
  //TxAleloDA = AleloAdesao();
  TxAleloTT = TotalAlelo(ValorFaturado, TaxaAleloM)
  TxAleloTA = TotalAleloAnual(ValorFaturado, TaxaAleloM)

  AleloAb.innerHTML = TxAleloA;
  AleloMe.innerHTML = TxTAleloM;
  //AleloTFBa.innerHTML = TxAleloTFB;
  //AleloAA.innerHTML = TxAleloAA;
  //AleloAD.innerHTML = TxAleloDA;
  TTAlelo.innerHTML = TxAleloTT;
  TAlelo.innerHTML = TxAleloTA;

  //Ticket Logica - Taxas
  let TxBenA=0;
  let TxBenM=0;
  let TxBenTFB=0;
  let TxBenAA=0;
  let TxBenDA=0;
  let TxBenTT=0;
  let TxBenTA=0;
  
  //Ticket Logica - Taxas
  TxBenM = BenM(ValorFaturado, TaxaBenM);
  TxBenA = BenA(ValorFaturado);
  TxBenTFB = BenTFB()
  TxBenAA = BenAnuidade()
  TxBenDA = BenAdesao()
  TxBenTT = TotalBen(ValorFaturado, TaxaBenM)
  TxBenTA = TotalBenAnual(ValorFaturado, TaxaBenM);

  BenAb.innerHTML = TxBenA;
  BenMe.innerHTML = TxBenM;
  // BenTFBa.innerHTML = TxBenTFB;
  // BenAA.innerHTML = TxBenAA;
  //BenAD.innerHTML = TxBenDA;
  TBen.innerHTML = TxBenTT;
  TTBen.innerHTML = TxBenTA;  



  //VALOR TOTAL DE VENDAS POR VOUCHER
 let TotalVendas= 0;
 let TotalVendasAnual=0;
 TotalVendasAnual = TotalResultAnual(ValorFaturado,TaxaSodexoM,TaxaAleloM, TaxaTicketM, TaxaBenM);
 TotalVendas = TotalResult(ValorFaturado,TaxaSodexoM, TaxaAleloM, TaxaTicketM, TaxaBenM);
 TotalV.innerText = TotalVendas;
 TotalVA.innerText = TotalVendasAnual;
}

function TotalResult(a, b, c, d, e, f)
{
  if(b != 0 && c != 0 && d != 0 && e != 0)
  {
    let superbaskara = (((((a*b + a*c + a*d + a*e)- (a *3.5 + a*3.5 + a * 3.5 + a *3.9)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }

  if(b == 0 && c == 0 && d == 0 && e == 0)
  {
    return 0 
  }
  if(c != 0 && d != 0 && e != 0)
  {
    let superbaskara = (((((a*c + a*d + a*e)- (a*3.5 + a * 3.5 + a *3.9)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && d != 0 && e != 0)
  {
    let superbaskara = (((((a*b + a*d + a*e)- (a *3.5 + a * 3.5 + a *3.9)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && c != 0 && e != 0)
  {
    let superbaskara = (((((a*b + a*c + a*e)- (a *3.5 + a*3.5 + a *3.9)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && c != 0 && d != 0)
  {
    let superbaskara = (((((a*b + a*c + a*d)- (a *3.5 + a*3.5 + a * 3.5)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && c != 0)
  {
    let superbaskara = (((((a*b + a*c )- (a *3.5 + a*3.5)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && c != 0 && d != 0)
  {
    let superbaskara = (((((a*b + a*c + a*d)- (a *3.5 + a*3.5 + a * 3.5)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && c != 0)
  {
    let superbaskara = (((((a*b + a*c )- (a *3.5 + a*3.5)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && e != 0)
  {
    let superbaskara = (((((a*b + a*e )- (a *3.5 + a*3.9)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && d != 0)
  {
    let superbaskara = (((((a*b + a*d )- (a *3.5 + a*3.5)))) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0)
  {
    let superbaskara = (((((a*b)- (a *3.5)))) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(c != 0 && b != 0)
  {
    let superbaskara = (((((a*b + a*c )- (a *3.5 + a*3.5)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(c != 0 && e != 0)
  {
    let superbaskara = (((((a*c + a*e )- (a *3.5 + a*3.9)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(c != 0 && d != 0)
  {
    let superbaskara = (((((a*c + a*d )- (a *3.5 + a*3.5)))) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(c != 0)
  {
    let superbaskara = (((((a*c)- (a *3.5)))) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(d != 0 && c != 0)
  {
    let superbaskara = (((((a*d + a*c )- (a *3.5 + a*3.5)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(d != 0 && e != 0)
  {
    let superbaskara = (((((a*d + a*e )- (a *3.5 + a*3.9)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(d != 0 && b != 0)
  {
    let superbaskara = (((((a*d + a*b )- (a *3.5 + a*3.5)))) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(d != 0)
  {
    let superbaskara = (((((a*d)- (a *3.5)))) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(e != 0 && c != 0)
  {
    let superbaskara = (((((a*e + a*c )- (a *3.9 + a*3.5)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(e != 0 && d != 0)
  {
    let superbaskara = (((((a*e + a*d )- (a *3.9 + a*3.5)))) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(e != 0 && b != 0)
  {
    let superbaskara = (((((a*e + a*b )- (a *3.9 + a*3.5)))) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(e != 0)
  {
    let superbaskara = (((((a*e)- (a *3.9)))) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
}
function TotalResultAnual(a, b, c, d, e, f)
{
  if(b != 0 && c != 0 && d != 0 & e != 0)
  {
    let superbaskara = (((((a*b + a*c + a*d + a*e)- (a *3.9 + a*3.9 + a * 3.99 + a *3.9))*12)) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }

  if(b == 0 && c == 0 && d == 0 && e == 0)
  {
    return 0 
  }
  if(c != 0&& d != 0 && e != 0)
  {
    let superbaskara = (((((a*c + a*d + a*e)- (a*3.5 + a * 3.5 + a *3.9))*12)) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && d != 0 && e != 0)
  {
    let superbaskara = (((((a*b + a*d + a*e)- (a *3.5 + a * 3.5 + a *3.9))*12)) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && c != 0 && e != 0)
  {
    let superbaskara = (((((a*b + a*c + a*e)- (a *3.5 + a*3.5 + a *3.9))*12)) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && c != 0 && d != 0)
  {
    let superbaskara = (((((a*b + a*c + a*d)- (a *3.5 + a*3.5 + a * 3.5))*12)) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && c != 0)
  {
    let superbaskara = (((((a*b + a*c )- (a *3.5 + a*3.5))*12)) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && e != 0)
  {
    let superbaskara = (((((a*b + a*e )- (a *3.9 + a*3.9))*12)) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0 && d != 0)
  {
    let superbaskara = (((((a*b + a*d )- (a *3.5 + a*3.5))*12)) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(b != 0)
  {
    let superbaskara = (((((a*b)- (a *3.5))*12)) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(c != 0 && b != 0)
  {
    let superbaskara = (((((a*b + a*c )- (a *3.5 + a*3.5))*12)) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(c != 0 && e != 0)
  {
    let superbaskara = (((((a*c + a*e )- (a *3.5 + a*3.5))*12)) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(c != 0 && d != 0)
  {
    let superbaskara = (((((a*c + a*d )- (a *3.5 + a*3.5))*12)) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(c != 0)
  {
    let superbaskara = (((((a*c)- (a *3.5))*12)) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(d != 0 && c != 0)
  {
    let superbaskara = (((((a*d + a*c )- (a *3.5 + a*3.5))*12)) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(d != 0 && e != 0)
  {
    let superbaskara = (((((a*d + a*e )- (a *3.5 + a*3.9))*12)) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(d != 0 && b != 0)
  {
    let superbaskara = (((((a*d + a*b )- (a *3.5 + a*3.5))*12)) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(d != 0)
  {
    let superbaskara = (((((a*d)- (a *3.5))*12)) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(e != 0 && c != 0)
  {
    let superbaskara = (((((a*e + a*c )- (a *3.9 + a*3.5))*12)) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(e != 0 && d != 0)
  {
    let superbaskara = (((((a*e + a*d )- (a *3.9+ a*3.5))*12)) /100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(e != 0 && b != 0)
  {
    let superbaskara = (((((a*b + a*e )- (a *3.5 + a*3.9))*12)) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
  if(e != 0)
  {
    let superbaskara = (((((a*e)- (a *3.9))*12)) / 100)
    const formatado = superbaskara.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(formatado)
  }
}