(async function() {
    //1 - récupération du tableau des ours, await cela veut dire que la fontction va attendre d'avoir récuperer le tableau avant de passer sur le for
    const articles = await getArticles()

    //2 - on parcours le tableau et on appele la fonction displayArticle pour savoir ou placer les éléments dans ton fichier html
    for ( article of articles) {
        displayArticle(article)
    }
})()


//1
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

// 2
function displayArticle(article) {
    //get template
    const templateElt = document.getElementById("template-article")
    //clone template
    const cloneElt = document.importNode(templateElt.content, true)
 

    cloneElt.querySelector(".imageUrl").src = article.imageUrl
    cloneElt.getElementById("teddy_link").href += `?id=${article._id}`
    cloneElt.querySelector(".name").textContent = article.name
    cloneElt.querySelector(".price").textContent = article.price/100 + " €"
    cloneElt.querySelector(".description").textContent = article.description

    //Display template
    document.querySelector(".main").appendChild(cloneElt)
}