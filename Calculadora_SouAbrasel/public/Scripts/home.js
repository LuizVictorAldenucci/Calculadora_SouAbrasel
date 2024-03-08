// SELECIONANDO ELEMENTOS NO DOM
const detailsBtn = document.querySelector("#detalhar-btn")
const closeModalBtn = document.querySelector("#fechar-modal") // update this line
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')
const body = document.querySelector('body');

// Valores das taxas
let TaxaSodexoM = document.querySelector("#TxSodexo")
let TaxaTicketM = document.querySelector("#TxTicket")
let TaxaAleloM = document.querySelector("#TxAlelo")
let TaxaBenM = document.querySelector("#TxBen")

// Bandeiras dentro do modal
const sodexoModal = document.querySelector('.sodexo-modal')
const aleloModal = document.querySelector('.alelo-modal')
const ticketModal = document.querySelector('.ticket-modal')
const benModal = document.querySelector('.ben-modal')


// MODAL
// Escondendo cada bandeira no modal:
const hideBandeira = () => {
  if (parseFloat(TaxaSodexoM.value.replace("%", "")) == 0 || TaxaSodexoM.value.replace("%", "") === "") {
    sodexoModal.classList.add('bandeira-hidden')
  }else{
    sodexoModal.classList.remove('bandeira-hidden')
  }
  if (parseFloat(TaxaTicketM.value.replace("%", "")) == 0 || TaxaTicketM.value.replace("%", "") === "") {
    ticketModal.classList.add('bandeira-hidden')
  }else{
    ticketModal.classList.remove('bandeira-hidden')
  }
  if (parseFloat(TaxaAleloM.value.replace("%", "")) == 0 || TaxaAleloM.value.replace("%", "") === "") {
    aleloModal.classList.add('bandeira-hidden')
  }else{
    aleloModal.classList.remove('bandeira-hidden')
  }
  if (parseFloat(TaxaBenM.value.replace("%", "")) === 0 || TaxaBenM.value.replace("%", "") === "") {
    benModal.classList.add('bandeira-hidden')
  }else{
    benModal.classList.remove('bandeira-hidden')
  }
}

// Abrindo e fechando o modal
const toggleModal = () => {
 
  hideBandeira()

  modal.classList.toggle('displaynone')

  setTimeout(() => {
    modal.classList.toggle('hidden')
  }, 200)

  const isModalOpen = !modal.classList.contains('displaynone');

  body.classList.toggle('modal-open', isModalOpen);

 if (isModalOpen) {
    const modalHeight = modal.offsetHeight;
    body.classList.add('modal-open');
    body.style.height = `${modalHeight + 300}px`;
    console.log('oi' + modalHeight)
  } else {
    body.classList.remove('modal-open');
    body.style.height = '';
  }
  
  fade.classList.toggle('hidden')
}

// Fechando o modal quando clica fora dele ou no botao de fechar
const elements = [detailsBtn, closeModalBtn, fade]
elements.forEach((el) => {
  el.addEventListener('click', toggleModal)
})

// MASCARAS NOS INPUTS
// Colocando amscara de dinheiro
document.querySelector('.mask-money').addEventListener('input', function (event) {
  
  let inputValue = event.target.value;

  // Remove caracteres nao numericos do valor do input
  inputValue = inputValue.replace(/\D/g, '');

  // Formata valor do input
  inputValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue / 100);

  event.target.value = inputValue;
});

// Colocando mascara de porcentagem
const percentInputs = document.querySelectorAll('.mask-percent');

percentInputs.forEach(function (input) {
  input.addEventListener('input', function (event) {
    let cleanedValue = input.value.replace(/[^0-9]/g, '');
    const key = event.data;

    if (key === null && cleanedValue.length > 0) {
      // Handle the Backspace key
      cleanedValue = cleanedValue.slice(0, -1);
    }

    if (cleanedValue.length >= 3) {
      let formattedValue = parseInt(cleanedValue.slice(0, -2)) + '.' + cleanedValue.slice(-2) + '%';

      input.value = formattedValue;
    } else if (cleanedValue.length === 2) {
      let formattedValue = '0.' + cleanedValue + '%';
      input.value = formattedValue;
    } else if (cleanedValue.length === 1) {
      let formattedValue = '0.0' + cleanedValue + '%';
      input.value = formattedValue;
    } else {
      input.value = '';
    }
  });
});


// ESTILIZACAO
// Selecionando elementos no DOM
const headerCalc = document.querySelector('.header-calc')
const headerLogo = document.querySelector('.logo-header')
const headerLogoDark = document.querySelector('.logo-header-dark')
const mainFormCalc = document.querySelector('.main-form')
const allFieldCalc = document.querySelectorAll('.field')
const modalHeader = document.querySelector('.modal-header')
const modalForm = document.querySelector('.modal-form')
const allResultCalc = document.querySelectorAll('.results')
const toggleMode = document.querySelector('#toggle')
const bodyCalc = document.querySelector('body')
const allButtonsCalc = document.querySelectorAll('button')


// Alternando modos claro e escuro
toggleMode.addEventListener("click", () => {

  headerCalc.classList.toggle('header-calc-dark')
  bodyCalc.classList.toggle('body-dark')
  mainFormCalc.classList.toggle('main-form-dark')
  closeModalBtn.classList.toggle('fechar-modal-dark')
  allButtonsCalc.forEach(button => {
    button.classList.toggle('button-dark')
  })
  allFieldCalc.forEach(field => {
    field.classList.toggle('field-dark')
  })
  allResultCalc.forEach(result => {
    result.classList.toggle('result-dark')
  })

  modalHeader.classList.toggle('modal-header-dark')
  modalForm.classList.toggle('modal-form-dark')
  modal.classList.toggle('modal-dark')
  headerLogo.classList.toggle('displaynone')
  headerLogoDark.classList.toggle('displaynone')
  
})

// Mostrando footer
window.addEventListener("scroll", function() {
  var footer = document.querySelector("footer");
  var position = footer.getBoundingClientRect().top;

  if (position < window.innerHeight) {
      footer.classList.add("show-footer");
  } else {
      footer.classList.remove("show-footer");
  }
});