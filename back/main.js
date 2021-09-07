/*main()

async function main() {
    const articles = await getArticles()

    for (article of articles) {
    displayArticle(article)
    }
}

function getArticles() {
    return fetch("http://localhost:3000/api/teddies")
        .then(function(httpBodyResponse) {
           return httpBodyResponse.json()
        })
        .then(function(articles){
            return articles
        })
        .catch(function(error) {
            alert(error)
        })
}

function displayArticle(article) {
    const teddies1Elt = document.getElementById("teddies1")
    const clone = document.importeNode(teddies1Elt.content, true)
    console.log(importNode)

    cloneElt.getElementById("name").textContent = article.name
    console.log("name");
    cloneElt.getElementById("main").appendChild(cloneElt)
};


let carts = document.querySelectorAll('.add-cart');

$.getScript(teddy.js, function(){
    alert('Le script a bien été chargé.');
   })

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
    cartNumbers();
    })
}


function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    localStorage.setItem('cartNumbers', 1);
}
*/

