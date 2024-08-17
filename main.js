const btn=document.getElementById("btn");
const filter=document.getElementById("blur");
const modal=document.getElementById("modal");

// btn.addEventListener("click",()=>{
//     filter.style="filter: blur(18px);";
//     modal.style="display:block";
// })
window.addEventListener("click",(e)=>{
    if(e.target.id=="btn"){
        filter.style="filter: blur(18px);";
    modal.style="display:block";
    }else{
        filter.style="filter: blur(0);";
        modal.style="display:none";
    }
})