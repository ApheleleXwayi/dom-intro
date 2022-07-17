// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
// get refences to all the settings fields
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//get a reference to the add button
const callTotalTwo = document.querySelector(".callTotalTwo");
//get a reference to the 'Update settings' button
const smsTotalTwon = document.querySelector(".calculateBtn");
// create a variables that will keep track of all the settings
const checkedRadioBtn = o;
// create a variables that will keep track of all three totals.
const threeTotal = 0
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}