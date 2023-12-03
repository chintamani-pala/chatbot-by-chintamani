const wrapper = document.querySelector(".wrapper"),
searchInput = wrapper.querySelector("input"),
volume = wrapper.querySelector(".word i"),
infoText = wrapper.querySelector(".info-text"),
synonyms = wrapper.querySelector(".synonyms .list"),
removeIcon = wrapper.querySelector(".search span");
removeIcon.addEventListener('click',()=>{
    searchInput.value="";
})
let audio;
let query="";




function fetchApi(query){
    let resu=document.getElementById("result");
    let info= document.getElementById("info");
    info.innerHTML="Loading..."
    query=query.replace(/ /g,"+") 
    fetch(`https://chatbot-api-chintamanipala.vercel.app/ask?q=${query}`)
        .then(response => response.json())
        .then(response => {
           let info= document.getElementById("info");
           console.log(info);
           info.style.display="none";
            resu.innerHTML=response["answer"];
            if(response["answer"]==undefined){
                resu.innerHTML=`The request to the API has timed out. Please try again later, or if the issue persists, please contact the API provider`
                
            }
        })
        .catch(err => {
        console.log(err)
        
    });
   
}





searchInput.addEventListener("keyup", e =>{
    let word = e.target.value.replace(/\s+/g, ' ');
    searchInput.addEventListener('input',()=>{
            query=searchInput.value;
            console.log(query);
    })
    if(e.key == "Enter" && word){
        
        var res=fetchApi(query);
        
    }
});
