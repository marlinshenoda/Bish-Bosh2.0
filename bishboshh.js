
let LoopSize = document.querySelector('#loop-size');
let BishDivisor = document.querySelector('#bish-num');
let BoshDivisor = document.querySelector('#bosh-num');
let btn = document.querySelector('#button');
let Result = document.querySelector('#textMessage');


function calculate() {
  
   let txtLoopSize = LoopSize.value.trim();
   let txtBishNum = BishDivisor.value.trim();
   let txtBoshNum = BoshDivisor.value.trim();
  
   let loopSizee = parseInt(txtLoopSize);
   let bishNum = parseInt(txtBishNum);
   let boshNum = parseInt(txtBoshNum);
   
   if (isNaN(loopSizee)|| loopSizee < 1|| isNaN(bishNum) || isNaN(boshNum)) {

      Result.style.color='red';
      Result.innerText ='input not valid type... num greater than 0' ;
      return ;
   }
  else
  {
   let output = '';
   
   for (let n = 1; n <= loopSizee; n++) {
      if ((n % bishNum == 0) && (n % boshNum == 0))
         output += 'Bish-Bosh, ';
      else if (n % boshNum == 0)
         output += 'Bosh, ';
      else if (n % bishNum == 0)
         output += 'Bish, ';
      else
         output += n + ', ';

      
   }
   Result.innerText = output;
     return output;
}
setTimeout(calculate,40000)
}


