
let carts = document.querySelectorAll(".add-cart");

//localStorage.setItem()
  //console.log("--->", products);

for (let i=0; i < carts.length; i++ ) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
        setArticles();
    });

   
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.nav-link span').textContent = productNumbers;
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
   
}

onLoadCartNumbers();//Laisse le nombre total de produit dans le panier


//********************************put item selected in localeStorage******************

function setArticles() {
    let localStorageArticle = localStorage.getItem('setArticle');
    localStorageArticle = JSON.stringify(localStorageArticle);
    //s'il y a deja des produits enregistré dans le localStorage
  
    if (localStorageArticle) {
        localStorage.setItem('setArticle', localStorageArticle + 1);
        document.querySelector('quantity').textcontent = localStorageArticle + 1;
        
    } else {
        localStorage.setItem('setArticle', 1)
        
        document.querySelector('.injectedArticle').innerHTML += `<tr>
        <td class="col-1 nameProduct">${document.querySelector(".name")}</td>
        <td class="col-1 quantity">
            <select>
                <option value="1">1<option>
                <option value="2">2<option>
                <option value="3">3<option>
            </select>
        </td>
        <td class="col-1 priceProduct">${document.querySelector(".price")}</td>
        <td class="col-1 totalPriceProduct">${document.querySelector(".price")}</td>
        <td class="col-1 removeProduct text-center text-danger">X</td>
    </tr>`
    }console.log("--->",localStorageArticle);
  }


//document.querySelector("#teddy_link").addEventListener("click", (e) => {
   // e.preventDefault();

//})

//console.log(idArticle);

//Form recovery

/*let recoveryProduct = {

}*/


