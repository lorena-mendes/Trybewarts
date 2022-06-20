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
