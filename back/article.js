(async function() {
    const articleId =  getArticleId()
    const article = await getArticle(articleId)
    hydrateArticle(article)
})()

function getArticleId() {
    return new URL(location.href).searchParams.get("id")
}

function getArticle(_articleId) {
    return fetch('http://localhost:3000/api/teddies/$5be9c8541c9d440000665243')
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(articles) {
            return articles
        })

        .catch(function(error) {
            alert(error)
        })

}

function hydrateArticle(article) {
    //document.querySelector(".select-colors-teddy").textContent = article.colors
    //document.querySelector(".imageUrl").src = article.imageUrl
    //document.querySelector(".name").textContent = article.name
    document.querySelector(".price").textContent = article.price/100 + " €"
    document.querySelector(".description").textContent = article.description
}