const calculateBtn = document.querySelector(".radioBillAddBtn");

//const radioBillAddBtn= document.querySelector(".radioBillAddBtn");

const callTotalTwoBtn = document.querySelector(".callTotalTwo");

const smsTotalTwoBtn = document.querySelector(".smsTotalTwo");
const totalTwoBtn = document.querySelector(".totalTwo");
var call = 0;
var sms = 0;
var total = 0;
function calculateRideoBill(){
    let checkedRadioBtn = document.querySelector("input[name='billItemType']:checked").value;
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}
}
    
    
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value;
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }

