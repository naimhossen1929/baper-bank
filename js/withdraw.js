document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawElement = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawElement.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawElement.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }
    
    
   

    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceElementString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceElementString);
   
   
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = previousWithdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    
    if(newWithdrawAmount > previousBalance){
        alert('Not sufficient Balance');
        return;
    }
    
    const currentBalanceTotal = previousBalance - newWithdrawAmount;
    previousBalanceElement.innerText = currentBalanceTotal;
    const withdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    previousWithdrawElement.innerText = withdrawTotal;
});