var sort=new Array();
var i=0;
$(document).ready(function(){
    $.getJSON(" JS/profile.json", function (data){
                var $personframe = $("#profile");
                $personframe.empty();
                //清空内容 
                $.each(data, function (i, info){
                    var str= info["lastName"];
                    sort[i]=str;
                    i++;
                })
                sort=sort.sort();
                $.each(sort, function (i, info){
                    
                    $personframe.append($("<div class='jsondata'></div>").text(info));
                })
                 
        })
    })
