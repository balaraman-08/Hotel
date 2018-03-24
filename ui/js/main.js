console.log('Loaded main.js');

var date = document.getElementById("date");

date.addEventListener("focus", function(){
    date.setAttribute("type", "date")
    date.setAttribute("data-placeholder", "Date")
});

date.addEventListener("focusout", function(){
    date.setAttribute("type", "text")
    
});
