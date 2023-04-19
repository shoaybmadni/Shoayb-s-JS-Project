let recipeData = [];
let result_sec = document.querySelector('.result-section');
let search_btn = document.querySelector('.search-btn');

search_btn.addEventListener("click", searchFunction);


async function searchFunction() {
  let search_bar = document.querySelector('.search-bar');
  if(search_bar.value !== "") {
    let fetchUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=c8ab899b17bc4dcfa14ba1d66d1f3f40&query=" + search_bar.value;
    const respData = await fetch(fetchUrl);
    const Data = await respData.json();
    if(Data.results.length > 0) {
      recipeData = Data.results;
      let result_data='';
      for (i = 0; i < recipeData.length; i++) {
        result_data  += `
          <div class="recipe-card">
            <div class="recipe-img">
              <img src="${recipeData[i].image}" alt="">
            </div>
            <div class="recipe-text">
              <div class="recipe-name">
                ${recipeData[i].title}
              </div>
            </div>
          </div>`
      }
      result_sec.innerHTML = result_data;      
      } else {
        result_sec.innerHTML = "No results";
      }
    } else {
    location.reload();
  }
}

