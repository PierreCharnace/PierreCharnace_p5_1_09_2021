(async function() {
    const articles = await getArticles()
    for ( article of articles) {
        displayArticle(article)
    }
})()


function getArticles() {
    return fetch("http://localhost:3000/api/teddies")
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(articles) {
            return articles
        })

        .catch(function(error) {
            alert("problème de connexion au serveur")
        })
}

function displayArticle(article) {
    //get template
    templateElt = document.getElementById("template-article")
    //clone template
    const cloneElt = document.importNode(templateElt.content, true)
    //hydrate template
    cloneElt.querySelector(".select-colors-teddy").textContent = article.colors
    cloneElt.querySelector(".imageUrl").src = article.imageUrl
    cloneElt.getElementById("teddy_link").href += '?id=$' + article._id
    cloneElt.querySelector(".name").textContent = article.name
    cloneElt.querySelector(".price").textContent = article.price/100 + " €"
    cloneElt.querySelector(".description").textContent = article.description

    //Display template
    document.getElementById("main").appendChild(cloneElt)
}