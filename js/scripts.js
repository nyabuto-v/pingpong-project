$(document).ready(function() {

//interface logic
     //search for the event
     $("#button").click(function(e){
       //fetch input from the input field
       var input = parseInt($("#number").val());

       //outputing the answer
       function finalOutput(){
         for(var i = 0;i<=(output.length-1);i++){
       $("ol").append("<li>"+ output[i] +"</li>");
     }
   }


// business logic
     //array to store the numbers
     var numbers=[];
    //getting the numbers in the range of 1- user's input
   function rangeFinder() {
        for(var i =0;i<=input;i++){
         numbers.push(i);
        }
   };
   rangeFinder();
   console.log(numbers);
   //test divisibility for 3,5,15
   var output=[];
   function divisibility1(){
     for(var i=0;i<=numbers.length;i++){
       if(i%15===0){
         output.push("pingpong");
       }
       else if(i%5===0){
         output.push("pong");
       }
       else if(i%3===0){
         output.push("ping");
       }else{output.push(i);}   }

   }

   divisibility1();
   console.log(output);

   finalOutput();
   e.preventDefault();
 });
});
