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
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'q9Oh7Lg7J0Hd',
            'X-RapidAPI-Key': '51a90343e7mshd67878af7f4afaap133dc9jsncea325bfab2f',
            'X-RapidAPI-Host': 'random-stuff-api.p.rapidapi.com'
        }
    };

    fetch(`https://random-stuff-api.p.rapidapi.com/ai/response?message=${query}&user_id=420`, options)
        .then(response => response.json())
        .then(response => {
           let info= document.getElementById("info");
           console.log(info);
           info.style.display="none";
           let resu=document.getElementById("result");
            resu.innerHTML=response["message"];
            if(response["message"]==undefined){
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

