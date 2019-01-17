var sum = 8 + 9;
var x = 15;
//x++;

if(x > 12) {
    console.log(x);
}

else {
    console.log('too small');
}
// Intialize
// 2. condition
/// 3. Post Loop Action

for(var i = 0; i < x; i++) {
    if(i % 2 === 0){
        console.log(i);
    }

}

function sayHelllo() {
    console.log('hi');
}

sayHelllo;

function evenOrodd() {
   var input = document.getElementById('number');
   
    var y = input.value;
    

  if(y % 2 === 0) {
        console.log('even');
    }
else {
    console.log('odd');
}

}
;