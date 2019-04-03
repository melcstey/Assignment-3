window.onload = init;

function init() {


    var main; 
    var input = document.getElementById("button"); 
    input.addEventListener("click", function(){
        var main_array=["friday","fridaynight", "TGIF", "nightout"]
        var rand = Math.floor(Math.random() * 4);
        console.log(main_array[rand]);
        callAjax(main_array[rand]);
    }); 


  function callAjax(friday){
	var xhr = new XMLHttpRequest();
    xhr.open("GET", "get_tweets.php?q=" + friday, true); //this changes the state of xmlhttp
    xhr.send(null);
    xhr.onload = function() {
        if(xhr.status == 200){
            var tweets = JSON.parse(xhr.responseText);
            console.log(tweets)

            var tweetHTML = "<div class='pink'><h2>"+ tweets.statuses[0].full_text + "</h2><img src='" + tweets.statuses[0].user.profile_banner_url + "'></div>";

            
            document.getElementById("tweet").innerHTML = tweetHTML
           
    		
    	} else {
            console.log(xhr);
            
        }
    }
}
}





/*TYPING TEXT*/
/* Code by: https://codepen.io/ConnorGaunt/pen/OReXZB*/
function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1500);
}

$(document).ready(function(){
  autoType(".type-js",200);
});


