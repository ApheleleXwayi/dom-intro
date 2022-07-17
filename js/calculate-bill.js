//get a reference to the calculate button

const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element

const billTotalElement = document.querySelector(".total");

// get the string entered in the textArea
const billStringElement = document.querySelector(".billString");
//var billString = billStringElement.value;
//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
function  totalPhoneBill(){
    // var myArray = []
     var counter = 0
    var counter2 = 0
    var billString = billStringElement.value;
     var newList = billString.split(",")
   
     for(var i=0;i<newList.length;i++){
     let calls = newList[i].trim();
     if (calls.startsWith("call")){
        counter ++
    
     }else if(calls.startsWith("sms")){
         counter2 ++   
      }
     }
    
      var totalCalls = counter * 2.75        
    var totalSms = counter2 * 0.65
   
    var allCallsTotal = (totalCalls + totalSms)
    billTotalElement.innerHTML = allCallsTotal.toFixed(2)
     
   }        
//link the function to a click event on the calculate button

calculateBtn.addEventListener('click', totalPhoneBill);
