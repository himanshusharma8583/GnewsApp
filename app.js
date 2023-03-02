const form = document.querySelector("form");
const btn = document.querySelector("button");



const image = document.querySelector(".image");
const publishedAt= document.querySelector(".publishedAt");
const title= document.querySelector(".title");
const content= document.querySelector(".content");
const figure= document.querySelector(".figure");
const result= document.querySelector(".result");


// const baseUrl = "https://gnews.io/api/v4/search?q=example&token=91cdbb38a977a7215342b4afe52584f0";
const baseUrl = "https://gnews.io";

async function getNews(searchText){
    try{
    const res = await axios.get(`${baseUrl}/api/v4/search?q=${searchText}&token=91cdbb38a977a7215342b4afe52584f0`);
    const data = res.data;
    const articleData =data.articles;
console.log(articleData);   
  



for(list of articleData){
    const image = document.createElement('img');
    const title = document.createElement('h2');
    const publishedAt = document.createElement('span');
    const content = document.createElement('p');
    const contentUrl = document.createElement('a');



    image.setAttribute('src', list.image);

    title.innerText = list.title;
    publishedAt.innerText = list.publishedAt;
    content.innerText = list.description;
    contentUrl.setAttribute('href',list.url);
    contentUrl.setAttribute('target',"_blank");
    contentUrl.innerText= `To Read More, Visit: ${list.url}`;
// contentUrl = document.querySelector('a').style.color='60%';
    result.append(image,publishedAt,title,content,contentUrl);

}



}
catch(err){
    swal("Oops..! Try Again","Something Went Wrong", "error");
   console.log("Something Went Wrong"); 
   console.log(err);
}

}

function removeResults() {
    while (result.firstChild) {
        result.firstChild.remove();
    }
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText=form.elements[0].value;
    removeResults();
    getNews(searchText);
    form.elements[0].value = "";
})