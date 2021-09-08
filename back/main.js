let carts = document.querySelectorAll(".add-cart");

for (let i=0; i < carts.length; i++ ) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    console.log("<***>", productNumbers);
    productNumbers = parseInt(productNumbers);

    console.log(typeof productNumbers);
    localStorage.setItem('cartNumbers', 1)

        console.log(productNumbers);

}


