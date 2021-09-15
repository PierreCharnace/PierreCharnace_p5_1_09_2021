const button_submit = document.getElementsByClassName("button-submit");
    const prices = document.getElementsByClassName("prices");
    const storage = document.getElementsByClassName("storage") ;
    const products = document.getElementsByClassName("price");

    let it = prices.length;
    
    let pricesStorage = localStorage.getItem("prices")
    ? JSON.parse(localStorage.getItem("prices"))
    : [];


    
      
      
const tableBuilder = (text) => {
    const price = document.createElement("p");
    price.innerHTML = text + '<button onclick="deletePrice(this)">X</button>';
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

/*class CartObject {
    get products() {
      return JSON.parse(localStorage.getItem('shoppingCart') || '{}')
    }
  
    set products(products) {
      localStorage.setItem('shoppingCart', JSON.stringify(products))
    }
  
    addProduct(productObject) {
      let products = this.products
  
      const productAlreadyInCarte = !!products[productObject._id]
  
      if (productAlreadyInCarte) {
        // Increase quantity
        products[productObject._id].quantity++
      } else {
        // Add product
        products[productObject._id] = {
          quantity: 1,
          ...productObject,
        }
      }
  
      this.products = products
    }
  
    getProductQuantity(productId) {
      const products = this.products
      return products[productId].quantity
    }
  
    updateProductQuantity(productId, quantity) {
      const products = this.products
      products[productId].quantity = quantity
      console.log(products)
      this.products = products
    }
  
    getTotalPrice() {
      const products = this.products
      const totalPrice = Object.values(products).reduce((acc, curr) => {
        return acc + (curr.price * curr.quantity) / 100
      }, 0)
      return totalPrice
    }
  }
  
  const Cart = new CartObject()*/