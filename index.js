

let source='bbc-news';
let apiKey='1cf3a523608d4162838acb91598cc71d';
let newsAccordian=document.getElementById('newsAccordian');

const xhr=new XMLHttpRequest();
xhr.open('GET','http://newsapi.org/v2/top-headlines?country=in&apiKey=1cf3a523608d4162838acb91598cc71d', true);
xhr.onload =function(){
   
if(this.status === 200){

   let json=JSON.parse(this.responseText);
   let articles=json.articles;
   //console.log(articles);
  
  let newsHtml="";
  articles.forEach(function(element) {
    
   

let news =`
<div class="card-group">
  <div class="card"  style="margin-left: 100px;" >
        <img class="card-img-top" src="${element.urlToImage}" alt="Card image" style="width:400px">
        <div class="card-body">
          <h4 class="card-title">${element.title}" </h4>
          <p class="card-text font-size:20px" >${element.description}</p>
          <a href="${element.url}" class="btn btn-primary">Read More</a>
        </div>
      </div>
    
      </div>
      
      `
    



newsHtml +=news;
   })

   newsAccordian.innerHTML=newsHtml;

  }
  }

 

xhr.send();
