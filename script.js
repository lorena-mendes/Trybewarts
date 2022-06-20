const buttonLogin = document.querySelector('#submit');

function login(event) {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}
buttonLogin.addEventListener('click', login);

const buttonValidation = document.querySelector('#submit-btn');
buttonValidation.disabled = true;

const inputAgreement = document.querySelector('#agreement');
inputAgreement.addEventListener('change', () => {
  if (inputAgreement.checked) {
    buttonValidation.disabled = false;
  } else {
    buttonValidation.disabled = true;
  }
});
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const fullNumber = 500;
textArea.addEventListener('keyup', (event) => {
  counter.innerText = fullNumber - event.target.value.length;
});

const imprimeNome = document.querySelector('#print-name');
const inputSobrenome = document.querySelector('#input-lastname');
const inputName = document.querySelector('#input-name');
const evaluationForm = document.querySelector('#evaluation-form');
const formResultado = document.querySelector('#form-data');
const imprimeEmail = document.querySelector('#print-email');
const inputEmail = document.querySelector('#input-email');
const imprimeCasa = document.querySelector('#print-casa');
const casa = document.querySelector('#house');
const imprimeFamilia = document.querySelector('#print-familia');
const imprimeMaterias = document.querySelector('#print-materias');
const imprimeAvaliacao = document.querySelector('#print-avaliacao');
const imprimeObservacao = document.querySelector('#print-observacao');
const observacao = document.querySelector('#textarea');

function materiasSelecionadas() {
  const listaDeMaterias = document.querySelectorAll('input[name="materia"]:checked');
  let listaPronta = '';
  for (let index = 0; index < listaDeMaterias.length; index += 1) {
    listaPronta = `${listaPronta} ${listaDeMaterias[index].value}, `;
  }
  return listaPronta;
}

const botaoEnviarFormulario = document.querySelector('#submit-btn');
botaoEnviarFormulario.addEventListener('click', (event) => {
  event.preventDefault();
  evaluationForm.style.display = 'none';
  formResultado.style.width = '675px';
  imprimeNome.innerText = `Nome: ${inputName.value} ${inputSobrenome.value}`;
  imprimeEmail.innerText = `Email: ${inputEmail.value}`;
  imprimeCasa.innerText = `Casa: ${casa.value}`;
  const familia = document.querySelector('input[name="family"]:checked');
  imprimeFamilia.innerText = familia ? `Família: ${familia.value}` : 'Família:';
  const listaMateriasPronta = materiasSelecionadas();
  imprimeMaterias.innerText = `Matérias: ${listaMateriasPronta}`;
  const avaliacao = document.querySelector('input[name="rate"]:checked');
  imprimeAvaliacao.innerText = avaliacao ? `Avaliação: ${avaliacao.value}` : 'Avaliação:';
  imprimeObservacao.innerText = `Observações: ${observacao.value}`;
});
