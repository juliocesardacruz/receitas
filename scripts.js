const recipe = [
    {
        id: 1,
        title: "Arroz à Grega",
        link: "a",
        image: "https://www.bcnoticias.com.br/wp-content/uploads/2023/12/Depositphotos_538074434_S.jpg"
    },
    {
        id: 2,
        title: "Bolinho de arroz",
        link: "a",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZilbkOM-VmT97zn3cllZ_SQ1WKGh63azSg&s"
    }

];

function formatPrice(price){
    return price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}


//criar cards / create
function createRecipeCard(recipe) {

    return `
         <div class="rec-card">
                    <img src="${recipe.image} alt="${recipe.title}" class="rec-image">
                    <h3 class="rec-title">${recipe.title}</h3>
                    <div class="rec-link">${recipe.link}</div>
                </div>

    `

}




//colocar eles na tela /  render


function renderRecipe (recipe) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = recipe.map(createRecipeCard).join('')
    //join
    //innerHTML -> injetar, colocar algo no HTML
    //map -> mapeia, percorre o array, pegando produto por produto
}



document.addEventListener('DOMContentLoaded', () => {
    renderRecipe(recipe)
})