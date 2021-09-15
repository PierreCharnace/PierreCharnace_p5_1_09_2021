const button_submit = document.getElementsByClassName("button-submit");
const prices = document.getElementsByClassName("prices");
const storage = document.getElementsByClassName("storage") ;
const products = document.getElementsByClassName("price");

let it = prices.length;
    
let pricesStorage = localStorage.getItem("prices")
? JSON.parse(localStorage.getItem("prices"))
: [];


const tableBuilder = (text) => {
    const price = document.createElement("td");
    price.innerHTML = text + ` <td class="col-1 priceProduct">${document.querySelector(".price")}</td>`;
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
  };    
