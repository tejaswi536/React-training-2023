
// //async await



async function getUsers(){
       const response = await fetch('https://jsonplaceholder.typicode.com/posts')
       const data = await response.json();
        const filtereData = data.filter(obj => obj.userId === 2);
     return filtereData;
       
}


async function createAccordian(){
    const xx =   await getUsers();
    const accordian = document.getElementById("accordian");
    const accordianItem =  document.createElement('div');
    accordianItem.classList.add("accordian-item");
    const accordianTitle = document.createElement('div');
    accordianTitle.innerHTML = "Title"
    accordianTitle.classList.add("accordian-title");
    const accordianContent = document.createElement('div');
    accordianContent.innerHTML = "content"
    accordianContent.classList.add("accordian-content");

    accordianItem.appendChild(accordianTitle);
    accordianItem.appendChild(accordianContent);
    accordian.appendChild(accordianItem);

    accordianTitle.addEventListener("click", async()=>{
    
        console.log(xx);
        accordianContent.style.display == 'block' ? accordianContent.style.display = 'none' : accordianContent.style.display = 'block';
    })

}

createAccordian()
