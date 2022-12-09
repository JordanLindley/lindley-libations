const home = document.querySelector('.logo');
const signUp = document.querySelector('.btn');

const subscribe = () => {
  fetch(`http://localhost:8080/`)
    .then(response => response.json())
    .then((response) => signUp.textContent = response.firstName);
}

signUp.addEventListener('click', subscribe);
