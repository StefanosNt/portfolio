function colorChange(){
  var rand1 = (Math.round(Math.random()*15)).toString(16).toUpperCase();
  var rand2 = (Math.round(Math.random()*15)).toString(16).toUpperCase(); 
  var rand3 = (Math.round(Math.random()*15)).toString(16).toUpperCase(); 
  
  var color = "#"+rand1+rand1+rand2+rand2+rand3+rand3;
  var color1 = "#"+rand1+rand1+rand2+rand2+"FF";
  var background = "linear-gradient(to bottom right, " + color+ " 26%, "+color1+" 100%)"
  return {background:background,color:color};
}
function styleChange(){
  var colorHtml = colorChange();
  $("html").css("background",colorHtml.background);
  $("#quoteDiv").css("color",colorHtml.color);    
  $("#author").css("color",colorHtml.color);   
  $("#btnTwitter").css("background-color",colorHtml.color);  
  $("#btnNext").css("background-color",colorHtml.color);  
}
//default quote on page load
function quoteGen(){
  $("#blockQuote").fadeOut("fast");
  var w = $.getJSON("http://quotes.stormconsultancy.co.uk/random.json",function(json){
    $("#quote").html(json.quote);
    $("#author").html(json.author);
    $("#blockQuote").fadeIn("slow");
    $("#hrefTwitter").prop("href","https://twitter.com/intent/tweet?text="+json.quote)
    styleChange();
  });  
}
//default staring state of style

quoteGen();

$(document).ready(function() {
  $("#btnNext").on("click", function(){
    quoteGen();
  });
});   