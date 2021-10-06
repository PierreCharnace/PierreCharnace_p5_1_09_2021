/******************************Display OrderId in command_successfull.html */
let priceTotal = JSON.parse(localStorage.getItem("totalPrice"))//get total price in localStorage

;(() => {
    const orderId = new URL(location.href).searchParams.get('orderId')//get orderId in URL
    document.querySelector("#orderId").textContent = orderId;
    document.querySelector(".totalPrice").textContent = `${priceTotal} €`;
    localStorage.clear()
  })() 
 