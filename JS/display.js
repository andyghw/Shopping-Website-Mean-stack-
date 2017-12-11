$(document).ready(function(){
    $("#profile").on("click",".jsondata",function(){
        var str=$(this).text();
        window.location.href="display.html?str="+str;
    })
})