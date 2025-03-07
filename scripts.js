// Cart functionality
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.getAttribute('data-product');
    const price = parseFloat(button.getAttribute('data-price'));
    cart.push({ product, price });
    updateOrderForm();
  });
});

function updateOrderForm() {
  const itemsTextarea = document.getElementById('items');
  const totalInput = document.getElementById('total');
  
  let itemsList = '';
  let totalAmount = 0;

  cart.forEach(item => {
    itemsList += `${item.product} - ₹${item.price}\n`;
    totalAmount += item.price;
  });

  itemsTextarea.value = itemsList;
  totalInput.value = `₹${totalAmount}`;
}

// Order form submission
document.getElementById('order-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Order placed successfully!');
  cart = [];
  updateOrderForm();
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully!');
  document.getElementById('contact-form').reset();
});