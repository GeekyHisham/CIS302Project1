document.querySelector('#tip-form').onchange = function(){

    var bill = Number(document.getElementById('billTotal').value);
    if (isNaN(bill)) {
      alert("Please enter a valid number for the total bill.");
      return;
    }
    var tip = document.getElementById('tipInput').value;
    document.getElementById('tipOutput').innerHTML = `${tip}%`;
    var tipValue = bill * (tip/100);
    var finalBill = bill + tipValue;
    console.log(finalBill);
    document.getElementById('tipAmount').valueAsNumber = tipValue.toFixed(2);
    document.getElementById('totalBillWithTip').valueAsNumber = finalBill.toFixed(2);
    document.getElementById('results').style.display='block';
  };
  
  // Added a "Reset" button feature
  document.getElementById('reset').onclick = function(){
    document.getElementById('billTotal').value = '';
    document.getElementById('tipInput').value = '0';
    document.getElementById('tipOutput').innerHTML = '0%';
    document.getElementById('tipAmount').valueAsNumber = '';
    document.getElementById('totalBillWithTip').valueAsNumber = '';
    document.getElementById('results').style.display='none';
  };