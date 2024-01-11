
const form = document.querySelector('[data-form]');
const input = document.querySelector('[data-input]');
const btn = document.querySelector('[data-btn]');
const parentEle = document.querySelector("#one");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const newEle = document.createElement("li");
    const btn1 = document.createElement("button");
    btn1.classList.add("delete-btn");
    btn1.classList.add("delete-btn1");
    btn1.innerText = "delete";
    newEle.innerHTML = input.value;
    parentEle.append(newEle);
    newEle.append(btn1);
    input.value = "";
    btn1.addEventListener("click", function(){
        newEle.remove();
        console.log("gghh", this);
    })
    
})



