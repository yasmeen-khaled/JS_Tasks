//[1] first img

 var topDiv = document.getElementById("header");
 topDiv.style.textAlign = "right";

//[2] list
 var listDiv = document.getElementById("navigation");
 listDiv.style.verticalAlign = "center";
 listDiv.firstElementChild.style.listStyleType = "circle";


//[1] last img
 var mainDiv = document.body.firstElementChild;
 var imgNode = document.createElement("img");
 imgNode.src = "./dom.jpg";
 var childDiv = document.createElement("div");
 childDiv.appendChild(imgNode);
 mainDiv.appendChild(childDiv);
 imgNode.style.float = "left";
