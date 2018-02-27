//business logic
var pingPong = function(number){
  for(number=1; number<100; number++){
    if(number % 3 === 0){
      console.log("ping");
    };
    else if(number % 5 === 0){
      console.log("pong");
    };
    else if(number % 3 === 0 && number % 5 === 0){
      console.log("pingpong");
    else{
      console.log(number);
      }
    };
  };

//user interface logic
$(document).ready(function(){
  $("#formping-pong").submit(function(event){
    event.preventDefualt();
    var number = parseInt("$input#number").val());
    var result = pingPong(number);
    $("#result").text(result);

    if(!result){
      $(".not").text("not");
    }else{
      $("not").text("");
    }
    $(#result).show();
  })
})
