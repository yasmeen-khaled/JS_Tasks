function setCookie(cookieName,cookieValue ,expiryDays)
{
    var expires = "";
    if(expiryDays)
    {
        var date = new Date();
        date.setTime(date.getTime() + (expiryDays*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
}
function allCookieList()
{
    var cookieMap=[];
    var cookiePairs = document.cookie.split(";");
    for(i in cookiePairs)
    {
        var pair = cookiePairs[i].split("=");
        cookieMap[pair[0].trim()] = pair[1];
    }
    return cookieMap;
}
function getCookie(cookieName)
{
    var cookieMap = allCookieList();
    return cookieMap[cookieName];
}
function hasCookie(cookieName)
{
    var cookieMap = allCookieList();
    if(cookieName in cookieMap)
        return true;
    return false;
}
function deleteCookie(cookieName)
{
    setCookie(cookieName , "" , -1);
}











