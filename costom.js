let menu= document.getElementById("menu");
let btn =document.querySelector(".toggle");
let menushow = false;
btn.addEventListener('click',function(){
    if(menushow=== false){
        menu.style.left = "20%";
        menushow=true;
    }
 else if(menushow===true){
        menu.style.left="100%";
        menushow=false;
    }
}); 

// even and odd number
var number =document.querySelectorAll(".num");
 var i =0;
 for(i; i<number.length; i++){
 	var num= Number(number[i].innerHTML);
 	if (num%2 ==0) {
 		console.log("Even Number");
 	}
 	else{
 		console.log("Odd Number");
 	}
 }