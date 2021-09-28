/**************************GET VALUES FORM AND PUT IN LOCALSTORAGE */
const btnSendForm = document.querySelectorAll("#sendForm")

for (let i = 0; i < btnSendForm.length; i++) {
  btnSendForm[i].addEventListener("click", (e) => {
    e.preventDefault();

    class form {
      constructor(){
        this.firstName = document.querySelector("#firstName").value;
        this.lastName = document.querySelector("#lastName").value;
        this.address = document.querySelector("#address").value;
        //this.zip = document.querySelector("#zip").value;
        this.city = document.querySelector("#city").value;
        this.email = document.querySelector("#email").value;
      }
    }
    const formValues = new form();

    //--------------------------------SEND OBJECT TO LOCALSTORAGE---------------------------------------------
    /***************************form VALIDATION***************************************** */
    const firstName = formValues.firstName;
    const lastName = formValues.lastName;
    const address = formValues.address;
    const city = formValues.city;
    const email = formValues.email;

    const textAlert = (value) => {
      return `${value} ERREUR, les chiffres, les symboles et les champs \nvides ne sont pas autorisé`
    }
/********************REGEX RULES************************************** */
    const regExNameCity = (value) => {
      return /^[A-Za-z]{1,100}$/.test(value)
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
    if (lastNameControl() && firstNameControl()  && addressControl() && cityControl() && emailControl() == true && teddyArticle.length>0) {
     // localStorage.setItem("formValues", JSON.stringify(formValues));
    
/***********************API CALL AND SEND DATA WITH POST REQUEST***************************** */
 let idTeddy = [];
 for (let i = 0; i < teddyArticle.quantity; i++) {
   idTeddy.push(teddyArticle.id);
 }

 console.log("-->",idTeddy);
let products = idTeddy;

const order ={
  contact : {
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    email: email,
  },
  products : products
}
console.log("youhou",(order));


   fetch("http://localhost:3000/api/teddies/order", { 
      method: "POST",
      body: JSON.stringify(order),
      headers: {"content-type" : "application/json; charset=utf-8"},
    });

  }
  });
  
  

  /***************************PUT CONTENT LOCAL STORAGE IN FIELD FORM************************************** */
    const dataLocalStorage = JSON.parse(localStorage.getItem("formValues"));

    function keepFieldInput(input) {
      document.querySelector(`#${input}`).value = dataLocalStorage[input];
    };

    keepFieldInput("lastName")
    keepFieldInput("firstName")
    keepFieldInput("address")
    keepFieldInput("city")
    keepFieldInput("zip")
    keepFieldInput("email")
}

