// Grab dom elements
const toyContainer = document.getElementById('toy-collection');
const toyForm = document.getElementById('toy-form');
const newToyName = document.getElementById('new-toy-name');
const newToyImg = document.getElementById('new-toy-img');

// Callback functions
const getToys = () => {
  fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toys => {
      console.log(toys);
      toys.forEach(toy => {
        // elements to add to card
        const newH2 = document.createElement('h2');
        const newImg = document.createElement('img');
        const newP = document.createElement('p');
        const newBtn = document.createElement('button');

        // giving elements their values
        newH2.innerText = toy.name;
        newImg.src = toy.image;
        newImg.className = 'toy-avatar';
        newP.innerText = `${toy.likes} likes`;
        newBtn.className = 'like-btn';
        newBtn.id = toy.id;
        newBtn.innerText = 'Like <3';

        // creating and adding things to card
        const newCard = document.createElement('div');
        newCard.className = 'card';

        // add elements to the new div
        newCard.append(newH2);
        newCard.append(newImg);
        newCard.append(newP);
        newCard.append(newBtn);

        toyContainer.append(newCard);
      });
    });
};

const addNewToy = () => {
  const newToy = {
    name: newToyName.value,
    image: newToyImg.value
  };

  fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(newToy)
  })
    .then(res => res.json())
    .then(toy => {
      // elements to add to card
      const newH2 = document.createElement('h2');
      const newImg = document.createElement('img');
      const newP = document.createElement('p');
      const newBtn = document.createElement('button');

      // giving elements their values
      newH2.innerText = toy.name;
      newImg.src = toy.image;
      newImg.className = 'toy-avatar';
      newP.innerText = `${toy.likes} likes`;
      newBtn.className = 'like-btn';
      newBtn.id = toy.id;
      newBtn.innerText = 'Like <3';

      // creating and adding things to card
      const newCard = document.createElement('div');
      newCard.className = 'card';

      // add elements to the new div
      newCard.append(newH2);
      newCard.append(newImg);
      newCard.append(newP);
      newCard.append(newBtn);

      toyContainer.append(newCard);
    });
};

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
  getToys();
});

toyForm.addEventListener('submit', e => {
  e.preventDefault();
  addNewToy();
});

// GIVEN CODE
let addToy = false;

document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('#new-toy-btn');
  const toyFormContainer = document.querySelector('.container');
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = 'block';
    } else {
      toyFormContainer.style.display = 'none';
    }
  });
});