(async function() {

    //1 on récupère l'id de l'article
    const articleId =  getArticleId();
    //2 on appel la fonction getArtcile pour récupérer les infos de l'article contenu dans le fichier model
    const article = await getArticle(articleId);
    // article retourné, comme il y à un await il attend avant de passer à hydrateArticle
    hydrateArticle(article)
})()

function getArticleId() {

    return new URL(window.location.href).searchParams.get("id")
}

function getArticle(articleId) {

    return fetch(`http://localhost:3000/api/teddies/${articleId}`)
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(articles) {
            return articles
        })

        //si article ok retour à la ligne 5

        .catch(function() {
            alert("Erreur de connexion au serveur")
        })     
}

function hydrateArticle(article) {

    const templateElt = document.getElementById("templateArticle")
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.querySelector(".name").textContent = article.name
    cloneElt.querySelector(".imageUrl").src = article.imageUrl
    cloneElt.querySelector(".price").textContent = `${article.price /100} €`
    cloneElt.getElementById("description").textContent = article.description
    // cloneElt est un object existant, ensuite on fait correspondre la description avec la description, et ainsi de suite
    for (let color of article.colors){
        cloneElt.getElementById('select-colors-teddy').innerHTML+=`<option value="1">${color}</option>`
      }//affiche les couleurs des oursons.

    document.querySelector(".main").appendChild(cloneElt)
    //et ensuite la page se construit avec les éléments
}

(async function() {
    //1 collect ID from article
    const articleId =  getArticleId();
    //2 call fonction getArticle to collected info in localHost
    const article = await getArticle(articleId);
    // article is returned , because await is waiting before hydrateArticle.
    articleCart(article)
  })()
  
  function getArticleId() {
    return new URL(window.location.href).searchParams.get("id")
  }//get the id in url
  
  function getArticle(articleId) {
    return fetch(`http://localhost:3000/api/teddies/${articleId}`)
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(article) {
            return article
        })
        //if article is ok return to begining
        .catch(function() {
            alert("Erreur de connexion au serveur")
        })     
  }