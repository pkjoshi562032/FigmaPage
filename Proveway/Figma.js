 var display1 = 0;
 var display2 = 1;
 var display3 = 0;


var inputBox1 = document.getElementById('value1');
var inputBox2 = document.getElementById('value2');
var inputBox3 = document.getElementById('value3');
var something1 = document.getElementById("value1-inputs");
var something2 = document.getElementById("value2-inputs");
var something3 = document.getElementById("value3-inputs");


var input_box1 =document.getElementById("input-box-1-1");
var input_box2 =document.getElementById("input-box-1-2");
var input_box3 =document.getElementById("input-box-1-3");

var total_amount = document.getElementById("total-amount");

var selectCSS = 'border: 2px solid #3da200; background-color: #e3fed2;';
var unselectCSS = 'border: 1px solid #3da200; background-color: white;';
function  inputBox_1(){
	
	if(display1 != 1){
		total_amount.innerHTML= "Total : DKK 199.00";
		inputBox1.checked = true;
		inputBox2.checked = false;
		inputBox3.checked = false;
		display1 = 1;
		display2 = 0;
		display3 = 0;	
	}
	else{
		inputBox1.checked = false;
		display1=0;
	}
	if(something1.style.display === "none"){
			input_box1.style.cssText = selectCSS;		
		 	input_box3.style.cssText= unselectCSS;
			input_box2.style.cssText= unselectCSS;
			
			something1.style.display = "block";
			something2.style.display = "none";
			something3.style.display = "none";
		}
		else{

			input_box1.style.cssText = unselectCSS;
			something1.style.display = "none";
		}
	input_box3.style.height= "80px";
}

function  inputBox_2(){
	
	if(display2 != 1){
		total_amount.innerHTML= "Total : DKK 360.00";
		inputBox1.checked = false;
		inputBox2.checked = true;
		inputBox3.checked = false;
		display1 = 0;
		display2 = 1;
		display3 = 0;	
	}
	else{
		inputBox2.checked = false;
		display2=0;
	}
	if(something2.style.display === "none"){
			input_box3.style.cssText= unselectCSS;
			input_box2.style.cssText= selectCSS;
			input_box1.style.cssText= unselectCSS;
			something1.style.display = "none";
			something2.style.display = "block";
			something3.style.display = "none";
		}
	else{
			input_box2.style.cssText= unselectCSS;
			something2.style.display = "none";
		}
		input_box3.style.height= "80px";
}


function  inputBox_3(){
	
	if(display3 != 1){
		total_amount.innerHTML= "Total : DKK 549.00";
		inputBox1.checked = false;
		inputBox2.checked = false;
		inputBox3.checked = true;
		display1 = 0;
		display2 = 0;
		display3 = 1;	
	}
	else{

		inputBox3.checked = false;
		display3=0;
	}
	if(something3.style.display === "none"){
			something3.style.display = "block";
			input_box3.style.cssText= selectCSS;
			input_box2.style.cssText= unselectCSS;
			input_box1.style.cssText= unselectCSS;
			something1.style.display = "none";
			something2.style.display = "none";
			input_box3.style.height= "240px";
		}
		else{
			input_box3.style.cssText= unselectCSS;
			something3.style.display = "none";
			input_box3.style.height= "80px";
		}
}
