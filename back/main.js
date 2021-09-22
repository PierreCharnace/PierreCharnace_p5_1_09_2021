/**************************GET VALUES FORM AND PUT IN LOCALSTORAGE */
const btnSendForm = document.querySelector("#sendForm")

btnSendForm.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("lastName", document.querySelector("#lastName").value);
  localStorage.setItem("firstName", document.querySelector("#firstName").value);
  localStorage.setItem("address", document.querySelector("#address").value);
  localStorage.setItem("zip", document.querySelector("#zip").value);
  localStorage.setItem("city", document.querySelector("#city").value);
  localStorage.setItem("email", document.querySelector("#email").value);

  console.log("youhou",document.querySelector("#lastName").value);
  
  const form = {
    lastName: localStorage.getItem("lastName"),
    firstName: localStorage.getItem("firstName"),
    address: localStorage.getItem("address"),
    address: localStorage.getItem("zip"),
    address: localStorage.getItem("city"),
    address: localStorage.getItem("email")
  }
  console.log("**********",form);
  
})


  /*
    let articleImageUrl = article.imageUrl;                     // element.imageUrl is a part of backend data received from JSON file
    let articleId = article._id;                                // element._id is a part of backend data received from JSON file
    let articleName = article.name;                             // element.name is a part of backend data received from JSON file
    let articlePrice = article.price;                           // element.price is a part of backend data received from JSON file
    let articleQuantity = 1;
*/