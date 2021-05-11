

fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
.then(response => response.json())
.then(data => {
  
  console.log(data.articles)
  arr = data.articles // Prints result from `response.json()` in getRequest
newshtml = ""
for(element in arr){
  console.log(element)
  
  var news = ` 
  
  
  
  
  
  <div class="card" style="width": 75%; "margin": 30px; " >
  <img src = ${arr[element].urlToImage}   style = "width:100%; height:400px;  margin:50px /> 
  <div class="card-body">

  
   
  
  <h5 class="card-title">${arr[element].title}</h5>
    
    <p class="card-text">${arr[element].description}</p>
    <a href="${arr[element].url}" class="card-link">read more</a>
   
  </div>
</div><br><br>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  `
 newshtml += news
document.getElementById("news").innerHTML = newshtml


}

  

















  
})
.catch(error => console.error(error))


