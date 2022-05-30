let confirm = document.querySelector('#confirm');
confirm.addEventListener('click', order);
let cName = document.querySelector('#name');
let num = document.querySelector('#number');
let address = document.querySelector('#address');
function order(event) {
  event.preventDefault();
  setTimeout(function () {
    alert('Your order is accepted');
  }, 0);
  setTimeout(function () {
    alert('Your order is being Prepared');
  }, 1000);
  setTimeout(function () {
    alert('Your order is being packed');
  }, 8000);
  setTimeout(function () {
    alert('Your order is out for delivery');
  }, 10000);
  setTimeout(function () {
    alert('Order delivered');
  }, 12000);

  cName.value = null;
  num.value = null;
  address.value = null;
}
