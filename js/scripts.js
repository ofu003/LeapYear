var leapYear = function(year) {
  if (year%4===0 && (year % 100 !== 0 || year % 400 === 0)){
    return true;
  }
  else{
    return false;
  }


}

$(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("#userInput").val());
    var result = leapYear(year);
    $("#response").text(result);




  });
  //read userInput, store to variable
  //filter out non numbers

});
