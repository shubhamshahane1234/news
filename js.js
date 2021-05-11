// var obj = {"car":"ford","color":"black","brand":"tiago"}
// var list = ["ford","figo","amaze","honda","vista"]

fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
.then(response => response.json())
.then(data => {
  
  console.log(data.articles)
  arr = data.articles // Prints result from `response.json()` in getRequest
newshtml = ""
for(element in arr){
  console.log(element)
  
  var news = ` 
  
  
  
  
  
  <div class="card" style="width": 100px; "margin": 30px; " >
  <img src = ${arr[element].urlToImage}   style = "width:350px; height:300px;  margin:50px /> 
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


