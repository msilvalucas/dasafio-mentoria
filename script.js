const URL = 'https://api.github.com/users';

const userOne = document.querySelector('#user_one');
const userTwo = document.querySelector('#user_two');

const btn = document.querySelector('#btn');
const form = document.querySelector('form');

let pointsOneTotal = 0;
let pointsTwoTotal = 0;

let gists_publics_one = 0;
let repos_publics_one = 0;
let followers_one = 0;

let gists_publics_two = 0;
let repos_publics_two = 0;
let followers_two = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(userOne.value, userTwo.value);

  if (userOne.value === '' || userTwo.value === '') {
    alert('Preencha os campos para jogar!');
  }

  Promise.all([
    fetch(`${URL}/${userOne.value}`).then((response) => response.json()),
    fetch(`${URL}/${userTwo.value}`).then((response) => response.json()),
  ])
    .then(([dataUserOne, dataUserTwo]) => {
      console.log(dataUserOne, dataUserTwo);

      gists_publics_one = dataUserOne.public_gists * 5;
      repos_publics_one = dataUserOne.public_repos * 10;
      followers_one = dataUserOne.followers * 20;

      gists_publics_two = dataUserTwo.public_gists * 5;
      repos_publics_two = dataUserTwo.public_repos * 10;
      followers_two = dataUserTwo.followers * 20;

      pointsOneTotal = gists_publics_one + repos_publics_one + followers_one;
      pointsTwoTotal = gists_publics_two + repos_publics_two + followers_two;

      if (pointsOneTotal > pointsTwoTotal) {
        alert(`O Jogador ${dataUserOne.name} Ganhou!`);

        return;
      }

      if (pointsOneTotal === pointsTwoTotal) {
        alert(`O Jogo empatou!`);

        return;
      }

      alert(`O Jogador ${dataUserTwo.name} Ganhou!`);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      userOne.value = '';
      userTwo.value = '';
    });
});
