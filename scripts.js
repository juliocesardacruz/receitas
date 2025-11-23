const recipe = [
    {
        id: 1,
        title: "Arroz à Grega",       
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR78V8gmMbSq7_G7r8fb-Fj-JOO79AxJvO3Sw&s"
    },
    {
        id: 2,
        title: "Bolinho de arroz",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZilbkOM-VmT97zn3cllZ_SQ1WKGh63azSg&s"
    },
    {
        id: 3,
        title: "Arroz Doce Cremoso",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPw8R-10RuFSSF586vB4NP5UEbr1OXdjfdQ&s"
    },
    {
        id: 4,
        title: "Bife a Milanesa",        
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SDp6JEzr--Q9BL6kUHz_4R2aD2xbLYrAT1gHK3l41v5aRFaIJL6e6RZsMkPxddqufI0&usqp=CAU"
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