
let carts = document.querySelectorAll('.add-cart');

$.getScript(teddy.js, function(){
    alert('Le script a bien été chargé.');
   })

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
    cartNumbers();
    })
}


function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    localStorage.setItem('cartNumbers', 1);
}

