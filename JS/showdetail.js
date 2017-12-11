function get(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象  
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数  
        if (r != null) return unescape(r[2]); return null; //返回参数值  
}

$.getJSON(" JS/profile.json", function (data){
    
    var $choose=get("str");
     
    $.each(data, function (i, info){
        var str= info["lastName"];
        if($.trim($choose)==$.trim(str)){
            $("#firstname").text(info["firstName"]);
            $("#lastname").text(info["lastName"]);
            $("#phone").text(info["phoneNum"]);
            $("#address").text(info["address"]);
            $("#birthday").text(info["birthday"]);
            $("#image").attr("src",info["image"]);
        }
        
    })
})

$(document).ready(function(){
    $("#back").click(function(){
        
        window.history.back(-1);
    }) 
})
