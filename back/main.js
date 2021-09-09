let carts = document.querySelectorAll(".add-cart");

//localStorage.setItem()
  //console.log("--->", products);

for (let i=0; i < carts.length; i++ ) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers ) {
        
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.nav-link span').textContent = productNumbers + 1;
        //ajoute les produits    
    }   else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.nav-link span').textContent = 1;
        //met le premier produit
    }
}
