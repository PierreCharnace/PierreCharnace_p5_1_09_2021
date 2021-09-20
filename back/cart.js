(async function() {
    //1 collect ID from article
    const articleId =  getArticleId();
    //2 call fonction getArticle to collected info in localHost
    const article = await getArticle(articleId);
    // article is returned , because await is waiting before hydrateArticle.
    articleCart(article)
})()

function getArticleId() {
    return new URL(window.location.href).searchParams.get("id")
}//get the id in url

function getArticle(articleId) {
    return fetch(`http://localhost:3000/api/teddies/${articleId}`)
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(article) {
            return article
        })

        //if article is ok return to begining

        .catch(function() {
            alert("Erreur de connexion au serveur")
        })     
}

function articleCart(article) {

  const sendToCart = document.querySelectorAll("#button-submit");
  let item = sendToCart.length;//loop for addEventListener
  
  //translate teddyArticle language JSON to JS
  let articleRegisteredLocal = JSON.parse(localStorage.getItem("teddyArticle"));

  //PopUpConfirmation for put article in localStorage
  const popUpConfirmation = () => {
    if(window.confirm(`L'article ${article.name} a bien été ajouter au panier 
Continuer vos achats OK ou payer vos produits ANNULER`)){
    window.location.href  = "../front-end/index.html"
    } else{
      window.location.href = "cart.html"
    }
  }
  
  const addArticleInLocalStorage = () => {//add article to array from LocalStorage and   //translate teddyArticle language JS to JSON

        articleRegisteredLocal.push(article);
        localStorage.setItem("teddyArticle", JSON.stringify(articleRegisteredLocal));
  }
  
  /**************************************************** */
  while(item--)
    sendToCart[item].addEventListener("click", (e) => {
      e.preventDefault();

      if(articleRegisteredLocal){//put more articles in localStorage
        addArticleInLocalStorage();
        popUpConfirmation();
    
      } else {//put the first article in localStorage
        articleRegisteredLocal = [];
        addArticleInLocalStorage();
        popUpConfirmation();
      };
    });

  /*const prices = document.getElementsByClassName("prices");
  const storage = document.getElementsByClassName("storage") ;
  const products = document.getElementsByClassName("price");

let it = prices.length;
    
let pricesStorage = localStorage.getItem("articles")
? JSON.parse(localStorage.getItem("articles"))
: [];


const tableBuilder = (text) => {
    const price = document.createElement("td");
    price.innerHTML = text + ` <td class="col-1 priceProduct"></td>`;
    while(it--)
      prices[it].appendChild(price);
  };
  
  const getPrices = JSON.parse(localStorage.getItem("prices"));
  console.log(prices);
  getPrices.forEach(price => {
    tableBuilder(price);
  });
  
  const deletePrice = (btn) => {
    let el = btn.parentNode;
    const index = [...el.parentElement.children].indexOf(el);
     pricesStorage.splice(index, 1);
    localStorage.setItem("prices", JSON.stringify(pricesStorage));
    el.remove();
  };*/
}


const tableCart = document.querySelectorAll('.tableCart') ;
const teddyArticleJSON = localStorage.getItem('teddyArticle');//get teddyArticle in localStorage
const teddyArticle = JSON.parse(teddyArticleJSON);// transform teddyArticle in js value
console.log("<>",tableCart);
console.log("*****",teddyArticle);

function addTeddiesToCart() {
  
if (teddyArticle === null) {
  console.log("empty");
  let newEmpty = document.createElement('tr');
  newEmpty.innerHTML = '<td class="bg-white text-center border" colspan = 5>Votre panier est vide</td>';
  for (let i=0; i<tableCart.length; i++){
  tableCart[i].before(newEmpty)};

  console.log("--->",newEmpty);
  } else {
    console.log(teddyArticle);
    let cartStructure = [];
    //display article in cart if cart is not empty
    let newFull = document.createElement('tr');

    for (let item=0; item < tableCart.length; item++){
      tableCart[item].before(newFull)};

      console.log("Youhou",teddyArticle);
    newFull.innerHTML = `<td class="col-1 nameProduct">${teddyArticle.name}</td>
    <td class="col-1 quantity">
        <select>
            <option value="1">1<option>
            <option value="2">2<option>
            <option value="3">3<option>
        </select>
    </td>
    <td class="col-1 priceProduct">${teddyArticle.price}</td>
    <td class="col-1 totalPriceProduct"></td>
    <td class="col-1 removeProduct text-center text-danger">X</td>
  </tr>
    `;
   

    console.log("I'm not empty");

    }
  }
  addTeddiesToCart();