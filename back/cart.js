(async function() {

    //1 on récupère l'id de l'article
    const articleId =  getArticleId();
    //2 on appel la fonction getArtcile pour récupérer les infos de l'article contenu dans le fichier model
    const article = await getArticle(articleId);
    // article retourné, comme il y à un await il attend avant de passer à hydrateArticle
    articleCart(article)
})()

function getArticleId() {

    return new URL(window.location.href).searchParams.get("id")
}

function getArticle(articleId) {
    return fetch(`http://localhost:3000/api/teddies/${articleId}`)
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(article) {
            return article
        })

        //si article ok retour à la ligne 5

        .catch(function() {
            alert("Erreur de connexion au serveur")
        })     
}

function articleCart(article) {

  let articleregisteredlocal = JSON.parse(localStorage.getItem("article"));

  if(articleregisteredlocal){


  } else {

    articleregisteredlocal = [];

  };

  const sendToCart = document.querySelectorAll("#button-submit");
  let item = sendToCart.length;

  console.log(sendToCart);

  while(item--)
    sendToCart[item].addEventListener("click", (e) => {
      e.preventDefault();
      //objet ourson pour le manier et le local storage
      let articleArray = {
        article_Name : article.name,
        article_Quantity : 1,
        article_Price : article.price / 100,
        article_Id : article._id,
      }
      console.log( articleArray);
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