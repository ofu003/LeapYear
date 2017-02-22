$(function(){
  $("form").submit(function() {
    event.preventDefault();
  })
  //read userInput, store to variable
  //filter out non numbers
  var year = $("#userInput").val();

  return false
});
