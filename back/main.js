

//Laisse le nombre total de produit dans le panier

//********************************put item selected in localeStorage******************

/*
console.log(carts)
for (let i = 0; i < carts.length; i++) {
  let button = carts[i];
  button.addEventListener('click', function() {
  })
}
*/

/*
async function main() {

  const articleId =  getArticleId();

  const article = await getArticle(articleId);

  displayCart(article)
}


function getArticleId() {

  return new URL(location.href).searchParams.get("id")
}

function getArticle(articleId) {
  return fetch(`http://localhost:3000/api/cart/${articleId}`)
      .then(function(httpBodyResponse) {
          return httpBodyResponse.json()
      })
      .then(function(articles) {
          return articles
      })

      //si article ok retour à la ligne 5

      .catch(function() {
          alert("Erreur de connexion au serveur")
      })     
}

function displayCart(article) {

  document.querySelector('.injectedArticle').innerHTML += `<tr>
  <td class="col-1 nameProduct">${article.name}</td>
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
  
}
*/




/*let cartLocal = document.getElementById("teddy_link")
console.log(cartLocal);

function getArticleId() {
  return new URL(location.href).searchParams.get("id")
}

cartLocal.addEventListener('click', function (add) {                 //Add item to when click AddBtn localStorage
    add.preventDefault() // Avoid default action.
  
    let cartArticles = JSON.parse(localStorage.getItem('cartArticles'));   // Parse data from localstorage
  
    let articleImageUrl = article.imageUrl;                     // element.imageUrl is a part of backend data received from JSON file
    let articleId = article._id;                                // element._id is a part of backend data received from JSON file
    let articleName = article.name;                             // element.name is a part of backend data received from JSON file
    let articlePrice = article.price;                           // element.price is a part of backend data received from JSON file
    let articleQuantity = 1;
  
    if (!cartArticles) {
      cartArticles = [];
    }
  
    // find the index of the item if already in basket
    const itemIndexInCart = cartArticles.findIndex(cartEntry => cartEntry.articleId === articleId);
    if (itemIndexInCart !== -1) {
      cartArticles[itemIndexInCart].articleQuantity++;
    } else {
      cartArticles.push({articleId, articleName, articlePrice, articleQuantity, articleImageUrl});    // Push not existing data to localstorage
    } 
    localStorage.setItem('cartArticles', JSON.stringify(cartArticles));
  });
*/

/*function setArticles() {
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
        <td class="col-1 priceProduct" id="price-product"></td>
        <td class="col-1 totalPriceProduct" id="total-price-product">${document.querySelector(".price")}</td>
        <td class="col-1 removeProduct text-center text-danger">X</td>
    </tr>`
    }console.log("--->",localStorageArticle);
  }

*/
//document.querySelector("#teddy_link").addEventListener("click", (e) => {
   // e.preventDefault();

//})

//console.log(idArticle);

//Form recovery

/*let recoveryProduct = {

}*/


