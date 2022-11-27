if (navigator.userAgent.includes('chrome')) {
    // the user is running Safari
    // do something useful
    alert("chrome");
  }
  alert("test");
var queryString = location.search.substring(1);
console.log(queryString);
var attributes = queryString.split('&');
console.log(attributes[0]);

//create Map
var mapArray = new Array();
for(i in attributes)
{
    var pair = attributes[i].split('=');
    //console.log(pair[0]);
    mapArray[pair[0]] = pair[1];
}
for (key in mapArray) 
{
    console.log(key,'       ',mapArray[key]);
}

// display body
var pstart = "<p>" , pend = "</p>";
var sstart = "<span>" , send = "</span>";
var displayBody="";
var title = mapArray["gender"] == "female"?"Miss ":"Mister";
for (key in mapArray) 
{
    if(key == "name")
        displayBody +=pstart + "welcome "+ title +mapArray["name"] + pend;
    else
        displayBody += pstart + key +" : " + mapArray[key] + pend;
}
document.getElementById("displayBody").innerHTML = displayBody;

// //changing HTML content
// var attNames = document.getElementsByClassName("attName");
// var attVals = document.getElementsByClassName("attVal");
// var sz = attNames.length;
// console.log("size" , sz);
// // for(var i=0;i< sz ; i++)
// // {
// //     console.log(attNames[i].innerHTML);
// //     console.log("loop");
// // }
// //console.log(attNames[0].innerHTML);

