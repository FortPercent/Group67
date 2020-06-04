/**
 * Created by admin on 2020/5/18.
 */
$(document).ready(function(){
    var New=document.getElementsByName("radio_1");
    var strNew;
    for(var i=0;i<New.length;i++)
    {
        if(New[i].checked) strNew=New[i].value;
    }


});