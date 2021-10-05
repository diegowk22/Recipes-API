let searchButton = document.querySelector("#search");

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
let APP_ID = "3b7f49bb"
let API_KEY = "81df855c57f6f5650d68f3a66cb281c4"
let response = await fetch('https://api.edamam.com/search?app_id${APP_ID}&app_key=${API_KEY}&q=pizza');
console.log(response
let data = await response.json()
console.log(data)
useApiData(data)
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {document.querySelector("#content").innerHTML = `
<img src="${data.hits[0]recipe.image}">
<h5>${data.hits[0].recipe.label}</h5>
<p>Source: ${data.hits[0].recipe.source}</p>
<a href="${data.hits[0].recipe.url}">Go conferir</a>
`
}
