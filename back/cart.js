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
  
  const elementPosition = document.querySelector(".tableCart");
  const cloneTable = document.importNode(elementPosition.content, true);
  
  if (articleRegisteredLocal === null) {

    const emptyCart = `<tr><td class="empty-cart"><p>Vous n'avez rien dans votre panier!<p></td></tr>`;
    cloneTable.querySelector(".article_Name").textContent = emptyCart;
    elementPosition.innerHtml += emptyCart;
    console.log("-------->>>>",elementPosition );
  
  } else {
    console.log("kikou2");
 
    }


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
//class selection to injected html code