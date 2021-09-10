(async function() {
    //1 on récupère l'id de l'article
    const articleId =  getArticleId()
    //2 on appel la fonction getArtcile pour récupérer les infos de l'article contenu dans le fichier model
    const article = await getArticle(articleId)
    // article retourné, comme il y à un await il attend avant de passer à hydrateArtcile
    hydrateArticle(article)
})()

function getArticleId() {
    return new URL(location.href).searchParams.get("id")
}

function getArticle(articleId) {
  // console.log('get article -->', articleId)
    return fetch(`http://localhost:3000/api/teddies/${articleId}`)
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(articles) {
            return articles
        })

        //si article ok retour à la ligne 5

        .catch(function(error) {
            alert(error)
        })
        
}


function hydrateArticle(article) {
    // le console.log est ton ami, cela permet de savoir ce qui rentre et sort dans une fonction :)
    // comme nous sommes au début de la fonction, c'est si il rentre 
    //console.log('article ->', article.description) // il entre bien dans la fonction
    //on récupére les données de la page html, ceci afin de créer un object qui va recevoir les données issues de l'article
    const templateElt = document.getElementById("templateArticle")
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.querySelector(".name").textContent = article.name
    cloneElt.querySelector(".imageUrl").src = article.imageUrl
    cloneElt.querySelector(".price").textContent = `${article.price /100} €`
    // cloneElt est un object existant, ensuite on fait correspondre la description avec la description, et ainsi de suite
    cloneElt.getElementById("description").textContent = article.description
    
    for (let color of article.colors){
        cloneElt.getElementById('select-colors-teddy').innerHTML+=`<option value="1">${color}</option>`
      }//affiche les éléments du tableau


    document.querySelector(".main").appendChild(cloneElt)

    //et ensuite la page se construit avec les éléments

}


