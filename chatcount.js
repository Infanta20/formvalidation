var textarea=document.getElementById("textarea")

textarea.addEventListener("input", function(event){
    var textnum=textarea.value.length
    document.getElementById("charCount").textContent=`${textnum}/200`
    if(textnum==200){
       document.querySelector(".warning").style.display="block" 
    }
    else{
        document.querySelector(".warning").style.display="none" 
    }
})