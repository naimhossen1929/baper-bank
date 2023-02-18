document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositTotalElement = document.getElementById('deposit-field');
    const newDepositAmountString = depositTotalElement.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositTotalElement.value = '';
    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
    }

    const previousDepositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = previousDepositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
   
    const depositTotal = previousDepositTotal + newDepositAmount;
    previousDepositTotalElement.innerText = depositTotal;
    

    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceElementString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceElementString);
    const currentBalanceTotal = previousBalance + newDepositAmount;
    previousBalanceElement.innerText = currentBalanceTotal;
});