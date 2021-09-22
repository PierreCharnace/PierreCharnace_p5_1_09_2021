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
  //add article to array from LocalStorage and//translate teddyArticle language JS to JSON***************
  const addArticleInLocalStorage = () => {

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
}


const tableCart = document.querySelector('.tableCart') ;
const teddyArticleJSON = localStorage.getItem('teddyArticle');//get teddyArticle in localStorage
const teddyArticle = JSON.parse(teddyArticleJSON);// transform teddyArticle in js value
let cartStructure = [];
const addTeddiesToCart = () => {
  
if (teddyArticle == null ) {
  console.log("empty");

  } else {
    //display teddyArticle in cart if cart is not empty
    for (item = 0; item < teddyArticle.length; item++){
      
      cartStructure = cartStructure + `
      <tr class="bg-white border border rounded">
        <td class="col-1 nameProduct text-center">${teddyArticle[item].name}</td>
        <td class="col-1 quantity text-center">1</td>
        <td class="col-1 priceProduct">${teddyArticle[item].price / 100 + "€"}</td>
        <td class="col-1 removeProduct text-center" colspan="2"><button type="button" class=" btn-del text-danger bg-white border-light">X</button></td>
      </tr>`;
    }
      if (item === teddyArticle.length) {
        tableCart.innerHTML = cartStructure;
      }
       console.log("I'm not empty");
    }
  }
  addTeddiesToCart();

  //********************************************DELETE AN ARTICLE********************************************/
let btnDel = document.querySelectorAll(".btn-del")

for (let i = 0; i < btnDel.length; i++) {
  btnDel[i].addEventListener("click", (e) => {
    console.log(teddyArticle[i]._id);
    e.preventDefault();

    if (teddyArticle[i] != null)

    localStorage.removeItem(teddyArticle[i])
    console.log("ooooo",localStorage.removeItem(teddyArticle[i]));
   
   /* 
      let teddyRemove = JSON.stringify(teddyArticle[i])
      if (teddyArticleJSON.indexOf(teddyRemove) == 0) {
      console.log(teddyRemove.indexOf(teddyRemove));
      localStorage.removeItem(teddyArticleJSON, teddyRemove);
      //console.log(localStorage.removeItem("teddyArticle", teddyRemove));
      //location.reload();
    }



   /* 
      console.log("******>",teddyArticle[i]);
    
      
      window.localStorage.removeItem(teddyRemove);
      localStorage.removeItem("teddyArticle", teddyRemove);
     // location.reload();
     console.log(teddyArticle);*/
     

     // console.log(window.localStorage);
    }
   
  )} 

  

   /*********************************TOTAL PRICE ARTICLE */

   let totalPriceProduct = [];

   for (let item = 0; item < teddyArticle.length; item++) {
     let totalPriceCart = teddyArticle[item].price / 100;
    totalPriceProduct.push(totalPriceCart);
    console.log(totalPriceProduct);

   }

   //***************************add total to cart */


   const reducer = (acc, cur) => acc + cur;
   const totalPrice = totalPriceProduct .reduce(reducer,0);
   console.log(totalPrice);

