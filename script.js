// This is the triggers for all animation
// animate consistently on left so that animate effect will not compete
//this function can only work if fullscreen
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
  $("input").blur(function() {
    $(this).animate({
      left: "-1%"
    }, 200, function() {
      $("h3").fadeIn(200, function() {
        $("#random").fadeIn(200, function() {
          $(".control-label").css("color", "black");
        })
      })
    })
  })

  //define enter button to search
  function submit() {
    $(".form-control").on("keypress", function(e) {
      if (e.keyCode == 13) {
        performSearch();
      }
    })
  }

  //ajax to call search and append to html

  function performSearch() {
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      jsonp: "callback",
      dataType: 'jsonp',
      data: {
        action: "query",
        list: "search",
        srsearch: $(".form-control").val(),
        srinfo: "suggestion",
        srlimit: "10",
        format: "json"
      },
      xhrFields: {
        withCredentials: true
      },
      success: displaySearch,
      error: function(err) {
        console.log(err);
      }
    });
  }

  function displaySearch(data) {
    $(".form-control").empty(); //clear search

    $.each(data.query.search, function(i, obj) {
      string = "";

      string += "<a href='https://en.wikipedia.org/wiki'" + obj.title.replace(" ", "_") + ">";
      string += "<div class='outcome'>";
      string += "<h5 class='title'>" + obj.title + "</h5>";
      string += "<p class='snippet'>" + obj.snippet + "</p>";
      string += "</div>";
      string += "</a>";

      $(".results").append(string);
    });
  }

  submit();
})