const submitButton = document.getElementsByTagName("button")[0];

submitButton.addEventListener("click", ()=>{
    document.getElementsByClassName("container")[0].style.visibility = "hidden";

});

const listLi = document.getElementsByTagName("li");



for( let i = 0; i < listLi.length; i++ ){
  
    listLi[i].addEventListener("click", ()=>{
        listLi[i].style.background = "Orange";
        document.getElementsByTagName("changeValue")[0].innerHTML = `${i+1}`;
        
    })
}
 