// Add the coffee to local storage with key "coffee"
let coffeeArr = JSON.parse(localStorage.getItem('coffee')) || [];
let parent = document.querySelector('#menu');
let coffeeCounter = document.querySelector('#coffee_count');
async function getItem() {
  let url = 'https://masai-mock-api.herokuapp.com/coffee/menu';
  let res = await fetch(url);
  let data = await res.json();
  append(data.menu.data);
}
getItem();

function append(data) {
  //   console.log(data);
  coffeeCounter.innerText = coffeeArr.length;
  data.forEach(function (el) {
    let card = document.createElement('div');
    let title = document.createElement('h3');
    title.innerText = el.title;
    let imgBox = document.createElement('div');
    let img = document.createElement('img');
    img.src = el.image;
    imgBox.append(img);
    let price = document.createElement('p');
    price.innerText = el.price;
    let addBtn = document.createElement('button');
    addBtn.id = 'add_to_bucket';
    addBtn.innerText = 'Add to bucket';
    addBtn.addEventListener('click', function () {
      storeData(el);
    });
    card.append(imgBox, title, price, addBtn);
    parent.append(card);
  });
}

function Item(t, p, img) {
  this.title = t;
  this.price = p;
  this.image = img;
}

function storeData(el) {
  let c = new Item(el.title, el.price, el.image);
  coffeeArr.push(c);
  coffeeCounter.innerText = coffeeArr.length;
  localStorage.setItem('coffee', JSON.stringify(coffeeArr));
}
