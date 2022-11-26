var body = document.body;

//pic
var src = getCookie('src');
var imgTag = document.createElement("img");
imgTag.src = src;
imgTag.style.height = '450px';
imgTag.style.width = '450px';
body.appendChild(imgTag);

//msg
var pTag = document.createElement("p");
var msg = getCookie('msg');
pTag.innerText = msg;
pTag.style.textAlign = 'center';
pTag.style.color = 'cadetblue';
pTag.style.fontWeight = 'bold';
body.appendChild(pTag);

//button
var btn = document.createElement("input");
btn.type="button";
btn.value = "Close Preview";
btn.style.display="block";
btn.style.margin="auto";
btn.setAttribute('onclick' , 'window.close()');
body.appendChild(btn);
