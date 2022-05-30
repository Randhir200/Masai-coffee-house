// On clicking remove button the item should be removed from DOM as well as localstorage.
let coffeeArr = JSON.parse(localStorage.getItem('coffee')) || [];
let totalPriceTag = document.querySelector('#total_amount');
let parent = document.querySelector('#bucket');
let totalPrice = 0;
display(coffeeArr);

function display(data) {
  data.forEach(function (el, i) {
    let card = document.createElement('div');
    let title = document.createElement('h3');
    title.innerText = el.title;
    let imgBox = document.createElement('div');
    let img = document.createElement('img');
    img.src = el.image;
    imgBox.append(img);
    let price = document.createElement('p');
    price.innerText = el.price;
    let removeBtn = document.createElement('button');
    removeBtn.id = 'remove_coffee';
    removeBtn.innerText = 'Remove item';
    removeBtn.addEventListener('click', function () {
      remove(i);
    });
    totalPrice += el.price;
    totalPriceTag.innerText = totalPrice;
    card.append(imgBox, title, price, removeBtn);
    parent.append(card);
  });
}

function remove(i) {
  coffeeArr.splice(i, 1);
  localStorage.setItem('coffee', JSON.stringify(coffeeArr));
  window.location.reload();
}

document
  .querySelector('#confirm_checkout')
  .addEventListener('click', function () {
    window.location.href = 'checkout.html';
  });
