function articleCart(article) {

  const sendToCart = document.querySelectorAll("#button-submit");
  let item = sendToCart.length;//loop for addEventListener
  let articleRegisteredLocal = JSON.parse(localStorage.getItem("teddyArticle"));//translate teddyArticle language JSON to JS
  //PopUpConfirmation for put article in localStorage or not
  const popUpConfirmation = () => {
        if(window.confirm(`L'article ${article.name} a bien été ajouté au panier. 
Continuez vos achats OK ou payez vos produits ANNULER`)){
    window.location.href  = "../front-end/index.html"
    } else{
      window.location.href = "cart.html"
    }
  }
  //**********add article to array from LocalStorage and//translate teddyArticle language JS to JSON***************
  const addArticleInLocalStorage = () => {

    articleRegisteredLocal.push(article);
    localStorage.setItem("teddyArticle", JSON.stringify(articleRegisteredLocal));
  }
  /***************************************ADD AND POP UP********************************************** */
  const addAndPopUp = () => {
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
  addAndPopUp();
}

const tableCart = document.querySelector('.tableCart');
const teddyArticleJSON = localStorage.getItem('teddyArticle');//get teddyArticle in localStorage
const teddyArticle = JSON.parse(teddyArticleJSON);// transform teddyArticle in js value
let cartStructure = [];

const addTeddiesToCart = () => {
if (teddyArticle == null ) {

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
    }
  }
  addTeddiesToCart();

  /***********************DeleteALLCART *********************************************/
  let btnClear = document.querySelectorAll("#deleteAll")

  for (let i = 0; i < btnClear.length; i++) {
    btnClear[i].addEventListener("click", (e) => {
      e.preventDefault();
      function clear() {
      localStorage.removeItem('teddyArticle');
      window.location.reload();
      }
      clear()     
    })
  };
   /*********************************TOTAL PRICE ARTICLE ******************************/
  
   let totalPriceProduct = [];
  const calculateTotalPrice = () => {

   for (let item = 0; item < teddyArticle.length; item++) {
     let totalPriceCart = teddyArticle[item].price / 100;
    totalPriceProduct.push(totalPriceCart);
   }
   //***************************add total to cart */
   const reducer = (acc, cur) => acc + cur;
   const totalPrice = totalPriceProduct.reduce(reducer,0);
   document.querySelector(".totalPriceArticle").textContent = `${totalPrice} €`;
  } 
  calculateTotalPrice ()
  console.log(totalPriceProduct.reduce(reducer,0));
