const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function updateClock() {
    const dom = new JSDOM();
    const document = dom.window.document;
    var now = new Date() ;
    var month=["January", "February", "March", "April", "May", "June", "July", "August", "September","October","November","December"]; 
    var dayNames=["Monday","Tuesday", "Webnesday","Thursday","Friday","Saturday","Sunday"]; 
    console.log(now.getDate());
    document.getElementById('hour').innerHTML = (now.getHours);
   

}

function test(){
    document.write("updateclock works")
}
var inter = setInterval(updateClock,1);

