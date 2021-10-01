/******************************Display OrderId in command_successfull.html */
;(() => {
    const orderId = new URL(location.href).searchParams.get('orderId')
    document.querySelector("#orderId").textContent = orderId;
    document.querySelector(".totalPrice").textContent = `${totalPriceProduct.reduce(reducer,0)} €`;
  })() 
