var list=new Array;
var i=0;
$(document).ready(function(){
    $(".add-icon").click(function(){
        $("#input").show();
        $("#profile").hide();
        $("#submit").show();
        $("#back").show();
        $("#newdetail").hide();
        
    })
    $("#back").click(function(){
        $("#profile").show();
        $("#input").hide();
        $("#submit").hide();
        $("#back").hide();
        $("#newdetail").hide();
        
    })
    $("#submit").click(function(){
        var fn=$("#fn").val();
        var ln=$("#ln").val();
        var ph=$("#ph").val();
        var ad=$("#ad").val();
        var br=$("#br").val();
        
        list[i]={"fn":fn,"ln":ln,"ph":ph,"ad":ad,"br":br};
        i++;
        $("#profile").append($("<div class='new'></div>").html(ln));
        $("#profile").show();
        $("#input").hide();
        $("#submit").hide();
        $("#back").hide();
        
    })
    $("#profile").on("click",".new",function(){
        var choose=$(this).html();
        $.each(list, function (i, info){
            var str= info["ln"];
            
            if($.trim(choose)==$.trim(str)){
                $("#profile").hide();
                
                
                $("#firstname").html("first name:"+info["fn"]);
                $("#lastname").html("last name:"+info["ln"]);
                $("#phone").html("phone number:"+info["ph"]);
                $("#address").html("address:"+info["ad"]);
                $("#birthday").html("birthday:"+info["br"]);
                $("#newdetail").show();
                
                $("#back").show();
            }
        })
    })
})