/**************************GET VALUES FORM AND PUT IN LOCALSTORAGE */
const btnSendForm = document.querySelectorAll("#sendForm")
for (let i = 0; i < btnSendForm.length; i++) {
btnSendForm[i].addEventListener("click", (e) => {
  e.preventDefault();

    class form {
      constructor(){
        this.lastName = document.querySelector("#lastName").value;
        this.firstName = document.querySelector("#firstName").value;
        this.address = document.querySelector("#address").value;
        this.zip = document.querySelector("#zip").value;
        this.city = document.querySelector("#city").value;
        this.email = document.querySelector("#email").value;
      }
    }
    const formValues = new form();
    localStorage.setItem("formValues", JSON.stringify(formValues));
    
    /***************************form VALIDATION */
      
    const lastName = formValues.lastName;
    const firstName = formValues.firstName;
    const address = formValues.address;
    const zip = formValues.zip;
    const city = formValues.city;
    const email = formValues.email;

    if (/^[A-Za-z]{3,20}$/.test(firstName)) {
    console.log("ok");
    } else {
      console.log("KO");
    alert("ERREUR, Veuillez remplir le formulaire correctement")
    };

    const toSend = {
      teddyArticle, formValues
    }

    const dataLocalStorage = JSON.parse(localStorage.getItem("formValues"));
    
    document.querySelector("#lastName").setAttribute("value", dataLocalStorage.lastName);

    /*const keepValuesInInput = (input) => {
  
        document.querySelector(`#${input}`).value = dataLocalStorage[input];
        console.log(dataLocalStorage);
    };
      keepValuesInInput("lastName");
      keepValuesInInput("firstName");
      keepValuesInInput("address");
      keepValuesInInput("zip");
      keepValuesInInput("city");
      keepValuesInInput("email");*/
  });
}

