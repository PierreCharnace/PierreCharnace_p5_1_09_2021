/**************************GET VALUES FORM AND PUT IN LOCALSTORAGE */
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
      const order = { contact, products
      }

      fetch("http://localhost:3000/api/teddies/order", { 
        method: "POST",
        body: JSON.stringify(order),
        headers: {"content-type" : "application/json; charset=utf-8"},
      })
      .then((response) => response.json())
      .then((json) => {
        localStorage.clear()
        window.location.assign(`command_successfull.html?orderId=${json.orderId}`)

      })
      .catch(() => {
        alert("ERREUR")
    
      })       
    } 
  });
}

/******************************Display OrderId in command_successfull.html */
;(() => {
  const orderId = new URL(location.href).searchParams.get('orderId')
  document.querySelector("#orderId").textContent = orderId
})() 
