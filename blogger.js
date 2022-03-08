
function Redirect()
{
var currentURL = window.location.href;
var url = currentURL .replace(&quot;www.hongocnam.xyz&quot;,&quot;www.blogspot.com&quot;);
window.location=url;
}
$(document).ready(function(){
var currentURL = window.location.href;
var url = currentURL .replace(&quot;www.hongocnam.xyz&quot;,&quot;www.blogspot.com&quot;);
$("").html("");
 setTimeout('Redirect()', 1);
});
