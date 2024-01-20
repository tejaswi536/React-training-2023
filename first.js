
// //async await
import  data from "./src/user.js";  
const name1 = "teja";

async function getUsers(i){
       const response = await fetch('https://jsonplaceholder.typicode.com/posts')
       const data = await response.json();
       console.log(data);
        const filtereData = data.filter(obj => obj.userId === i);
     return filtereData;
       
}


async function createAccordian(i){
    const xx =   await getUsers(i);
    const accordian = document.getElementById("accordian");
    const accordianItem =  document.createElement('div');
    accordianItem.classList.add("accordian-item");
    const accordianTitle = document.createElement('div');
    accordianTitle.innerHTML =  `title-${i}`;
    accordianTitle.classList.add("accordian-title");
    const accordianContent = document.createElement('div');
    accordianContent.innerHTML = "content"
    accordianContent.classList.add("accordian-content");

    accordianItem.appendChild(accordianTitle);
    accordianItem.appendChild(accordianContent);
    accordian.appendChild(accordianItem);

    accordianTitle.addEventListener("click", async()=>{
        accordianContent.innerHTML = xx.map((ele)=>{return ele.title}).join('<br>')
        console.log(xx);
        
        accordianContent.style.display == 'block' ? accordianContent.style.display = 'none' : accordianContent.style.display = 'block';
    })

}

for(let i=1; i<9; i++){
    createAccordian(i);

}


//local storage, session storage, cookie

localStorage.setItem("name", "teja");
sessionStorage.setItem("time", "evening");

data.printName("teja from first js");

console.log(data.me)


