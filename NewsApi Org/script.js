let apikey = 'b4791dd711064c538d4428543c177a03'
let url = `http://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`

let card = document.getElementById("accordionExample");

window.onload=function(){
    getNews();
}

function getNews(){
fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    let all = data.articles
    let block = ""
    let iterate = 5
    all.forEach(function(element,index){
        console.log(index,element);
        if(index < iterate){
        let news = `<li class="list-group-item">
                <div class="card">
                    <a>
                        <button class="btn btn-primary btn-block" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            ${element.title}
                        </button>
                    </a>
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordionExample">
                        <div class="card-body">
                            ${element.description}...<a href="${element.url}" target="_blank">Read More</a>
                        </div>
                    </div>
                </div>
                </li>`
        block+=news;
        }
    });
    card.innerHTML = block;
    
  })
  .catch((err) => {
      console.log(err.message)
  })
   setTimeout(getNews,300000);
}

let news = `<li class="list-group-item">
                <div class="card">
                    <a>
                        <button class="btn btn-primary btn-block" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Collapsible Group Item #1
                        </button>
                    </a>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                        </div>
                    </div>
                </div>
                </li>`
