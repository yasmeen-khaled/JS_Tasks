//1 create event
const timeoutEvent = new Event("timeout");

var obj= document.getElementById("form");
var timer;

//2 register to event --> object listen to myEvent
//                               hndlr
document.addEventListener("timeout" , function(){
    
    timer = setInterval(action, 10 * 1000);
});

//console.log("HERE");

function action()
{
    //alert("action");
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    if(fname.value=="" && lname.value =="")
    {
        alert("you have not entered any data for 30 seconds");
        //clearInterval(timer);
        //Stimer = setInterval(action, 2 * 1000);

    }
    else
    {
        //alert("else");
        clearInterval(timer);
    }
}
//3 fire event --> hndlr should excecute
document.dispatchEvent(timeoutEvent);


