let cartCount = 0;
let cartTotal = 0;

function addToCart(name, price) {
  cartCount++;
  cartTotal += price;
  document.querySelector('.nav-cart').textContent = 'Cart (' + cartCount + ')';
  showToast(name + ' added — €' + cartTotal + ' total');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}