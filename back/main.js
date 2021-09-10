let carts = document.querySelectorAll(".add-cart");

//localStorage.setItem()
  //console.log("--->", products);

for (let i=0; i < carts.length; i++ ) {
    carts[i].addEventListener('click', () => {
        cartNumbers();//
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }//modifie le nombre dans le panier, dans la balise span
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
   
} console.log("-->",);
//********************************cart gestion******************

    //const idArticle = document.querySelector("");
     
            `<tr>
                <td class="col-1 nameProduct">${document.querySelector(".name")}</td>
                <td class="col-1 quantity">${document.querySelector(".name")}</td>
                <td class="col-1 priceProduct">${document.querySelector(".price")}</td>
                <td class="col-1 totalPriceProduct">${document.querySelector(".price")}</td>
                <td class="col-1 removeProduct text-center text-danger">X</td>
            </tr>`
        




//document.querySelector("#teddy_link").addEventListener("click", (e) => {
   // e.preventDefault();

//})

//console.log(idArticle);

//Form recovery

/*let recoveryProduct = {

}*/

//**************************************local-Storage *****************/


