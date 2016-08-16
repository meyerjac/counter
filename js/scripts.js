$(document).ready(function() {
  $("form").submit(function(event) {
    var max = parseInt($("#max").val());
    var counter = parseInt($("#counter").val());

    if (counter > max) {
      alert("Please enter a counter less than the maximum number!");
    } else if (counter < 1) {
      alert("Please enter a positive counter!");
    } else if (!counter || !max){
      alert("Please enter a counter and a maximum number!");
    } else {
      $("ul").children().remove();
      for (i = counter; i <= max; i += counter) {
        $("ul#results").append("<li>" + i + "</li>");
      }
    }
    event.preventDefault();
  });
});
