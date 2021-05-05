console.log("hey im connected")
var form = document.querySelector("#form");
var img =document.querySelector("#img")
var url;
img.addEventListener("change", e =>{
    var file = img.files[0];
    console.log(file)
    var fileReader = new FileReader();
    fileReader.onload =  (e)=>{
        var result = e.target.result;
        img.src = result
        url = result;
    }
    fileReader.readAsDataURL(file)
})
form.addEventListener("submit", (e)=>{
    e.preventDefault();
})

    function collect(){
        var tittle = document.querySelector("#tittle").value;
         var skills = document.querySelector("#skills").value;
         console.log(tittle)
         console.log(skills)
         function playing(str){
            var strr = str.split(",");
            for(i = 0;i < strr.length; i++){
                var word = strr[i].trim(" ")
                console.log(word)
            }
         }
         playing(skills)
    }