/**
 * Created by xinyu.cai on 2017/10/19.
 */
var count = 0;
setTimeout(function () {
    count++;
    console.log(count++);
    if (count < 100) {
        setTimeout(arguments.callee, 5000);
    }
},5000);


var i=0;
function intv(){
    setTimeout(function(){
        console.log(i++);
        if(i<100){
            intv()
        }
    },1000)
}
intv()