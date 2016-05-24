// This is the triggers for all animation
// animate consistently on left so that animate effect will not compete
$(document).ready(function() {
  $("input").on("click", function() {
    $("h3").fadeOut(100, function() {
      $("#random").fadeOut(200, function() {
        $("input").animate({
          left: "60%"
        }, 200, function() {
          $(".control-label").css("color", "transparent");
        });
      });
    });
  })
  $("input").blur(function(){
    $(this).animate({left:"-1%"},200, function(){
      $("h3").fadeIn(200, function(){
        $("#random").fadeIn(200, function(){
          $(".control-label").css("color", "black");
        })
      })
    })
  })
})

//The code below is for Ajax for search
//2 global variables 1 for search, the other to contain the result
var input = '';
var arr =[];

//define your function for outcome

function result(title, snippet){
  this.title=title;
  this.snippet=snippet;
}

//Below is Ajax

function search(){
  $.ajax({
 //this is key, rmb to val because it is possible to not return any search
 url:'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#search').val(),
//dataType must be jsonp instead of json due to original policy
    dataType:'jsonp',
    method:'POST',
//user-agent mentioned in wiki API
    headers: {
      'Api-User-Agent': 'Example/1.0'
    },
    success: function(data){
      
    }
    
  })
}

