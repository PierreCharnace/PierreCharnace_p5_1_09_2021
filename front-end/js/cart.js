function articleCart(article) {

  const sendToCart = document.querySelectorAll("#button-submit");
  let item = sendToCart.length;//array for addEventListener
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
  //**********add article to array from LocalStorage and//translate teddyArticle JS to JSON***************
  const addArticleInLocalStorage = () => {

    articleRegisteredLocal.push(article);
    localStorage.setItem("teddyArticle", JSON.stringify(articleRegisteredLocal));
  }
  /***************************************ADD AND POP UP********************************************** */
  const addAndPopUp = () => {
  while(item--)//loop for addEventListener
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
 localStorage.setItem("totalPrice", JSON.stringify(totalPrice));

} 
calculateTotalPrice ()

/**************************GET VALUES FORM AND PUT IN LOCALSTORAGE ********/
const btnSendForm = document.querySelectorAll("#sendForm")
/*********************************************Form creation */
for (let i = 0; i < btnSendForm.length; i++) {
  btnSendForm[i].addEventListener("click", (e) => {
    e.preventDefault();

    class form {
      constructor(){
        this.firstName = document.querySelector("#firstName").value;
        this.lastName = document.querySelector("#lastName").value;
        this.address = document.querySelector("#address").value;
        this.zip = document.querySelector("#zip").value;
        this.city = document.querySelector("#city").value;
        this.email = document.querySelector("#email").value;
      }
    }
    const formValues = new form();
    /***************************form VALIDATION***************************************** */
    const firstName = formValues.firstName;
    const lastName = formValues.lastName;
    const address = formValues.address;
    const zip = formValues.zip;
    const city = formValues.city;
    const email = formValues.email;

    let contact = {firstName, lastName, address, city, email}

    const textAlert = (value) => {
      return `${value} ERREUR, les chiffres, les symboles et les champs \nvides ne sont pas autorisé`
    }
    /********************REGEX RULES************************************** */
    const regExNameCity = (value) => {
      return /^[A-Za-zéèàê]{1,100}$/.test(value)
    };

    const regExZip = (value) => {
      return /^[0-9]{5}$/.test(value)
    };

    const regExAddress = (value) => {
      return /^[0-9A-Za-z\s]{1,50}$/.test(value)
    };

    const regExEmail = (value) => {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    };
    /*********************FUNCTIONS CONTROL******************************************************* */
    function lastNameControl() {
      if (regExNameCity(lastName)) {
        return true;
        } else {
          alert(textAlert("Nom"))
          return false;
        }
    };
    
    function firstNameControl() {
      if (regExNameCity(firstName)) {
      return true;
        } else {
          alert(textAlert("Prénom "))
          return false;
        }
    };

    function zipControl() {
      if (regExZip(zip)) {
        return true;
          } else {
            alert("Le code postale doit être uniquement composé de 5 chiffres. ")
            return false;
          }
    };

    function addressControl() {
      if (regExAddress(address)) {
        return true;
          } else {
            alert (("L'adresse ne doit pas contenir de caratères spéciaux"))
            return false;
          }
    };

    function cityControl() {
      if (regExNameCity(city)) {
        return true;
          } else {
            alert(textAlert("Ville"))
            return false;
          }
    }

    function emailControl() {
      if (regExEmail(email) && regExAddress(address)) {
        return true;
          } else {
            alert("L'e-mail, doit comporter un '@' et un '.' après, pour être valide")
            return false;
          }
    }
    /******************************FORM VALIDATION SECOND PART*************************************************************** */
    if (lastNameControl() && firstNameControl()  && addressControl() && cityControl() && zipControl() && emailControl() == true && teddyArticle.length>0) {
      localStorage.setItem("formValues", JSON.stringify(formValues));
    
    /***********************ARRAY CREATION FOR ID TEDDY, API CALL AND SEND DATA WITH POST REQUEST***************************** */
      let products = [];

      for (let i = 0; i < teddyArticle.length; i++) {
        products.push(teddyArticle[i]._id)
      }

    /*********************************************************** */  
    //const totalPrice = document.querySelector(".totalPriceArticle".value);
      const order = { contact, products
      }
      fetch("http://localhost:3000/api/teddies/order", { 
        method: "POST",
        body: JSON.stringify(order),
        headers: {"content-type" : "application/json; charset=utf-8"},
      })
      .then((response) => response.json())
      .then((json) => {
        window.location.assign(`command_successfull.html?orderId=${json.orderId}`)
      })
      .catch(() => {
        alert("ERREUR") 
      })       
    } 
  });
}
