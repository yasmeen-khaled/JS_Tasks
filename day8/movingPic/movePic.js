var timer;
var dis = 10;
var sign = 1;
var left_img = document.querySelector(".left-img");
var right_img = document.querySelector(".right-img");
var top_img = document.querySelector(".top-img");
var div = document.querySelector(".frame");

function horizontalMove(obj , dis)
{
    var current = getComputedStyle(obj).left;
    current = parseInt(current);
    obj.style.left = (current + dis).toString() +"px";

}
function verticalMove(obj , dis)
{
    var current = getComputedStyle(obj).top;
    current = parseInt(current);
    obj.style.top = (current + dis).toString() +"px";
}
function moveAll()
{
    var curr_leftBorder = parseInt(getComputedStyle(left_img).left) + parseInt(getComputedStyle(left_img).width);
    var curr_rightBorder = parseInt(getComputedStyle(right_img).left) + parseInt(getComputedStyle(right_img).width);
    if(curr_leftBorder >= parseInt(getComputedStyle(div).width) - parseInt(getComputedStyle(left_img).width))
        sign = -1;
    else if(curr_rightBorder >= parseInt(getComputedStyle(div).width) - parseInt(getComputedStyle(right_img).width))
        sign = 1;
    horizontalMove(left_img , dis * sign);
    horizontalMove(right_img , -dis * sign);
    verticalMove(top_img , -dis * sign);
}

function animateAll()
{
    timer = setInterval(moveAll , 50);
}
function stop()
{
    clearInterval(timer);
}


