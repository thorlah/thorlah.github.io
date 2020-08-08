document.querySelector('#expense').onsubmit = function(event){
	event.preventDefault();
	
	var amount = document.querySelector('#expense').amount.value;
	var month = document.querySelector('#expense').month.value;
	var negotiable_amount = document.querySelector('#expense').negotiable_amount.value;
	var payNow, remaining, payInstallSixMonth, month;
	
	if(negotiable_amount.length < 1){
		if(amount.length < 1 || month.length < 1){
			document.querySelector('h1').innerHTML = 'Please Fill Out all Fields';
		}else{		
			if(amount > 0 && amount <= 100000){
				payNow = amount * 0.40;
				remaining = amount - payNow;
				payInstallSixMonth = remaining/month;
			}else if(amount > 100000 && amount <= 200000){
				payNow = amount * 0.30;
				remaining = amount - payNow;
				payInstallSixMonth = remaining/month;
			}
			
			document.querySelector('h1').innerHTML = 'Outstanding Amount: <span>&#8358;' + amount + '</span><br>Amount to Pay Now: <span>&#8358;' + payNow + '</span><br>Amount Remaining: <span>&#8358;' + remaining + '</span><br>Amount to Pay within the next ' + month + ' Months: <span>&#8358;' + payInstallSixMonth + '<span>';
		}
	}else{
		if(amount.length < 1 || month.length < 1 || negotiable_amount.length < 1){
			document.querySelector('h1').innerHTML = 'Please Fill Out all Fields';
		}else{
			payNow = negotiable_amount;
			remaining = amount - negotiable_amount;
			payInstallSixMonth = Math.floor(remaining/month);
			
			document.querySelector('h1').innerHTML = 'Outstanding Amount: <span>&#8358;' + amount + '</span><br>Amount to Pay Now: <span>&#8358;' + payNow + '</span><br>Amount Remaining: <span>&#8358;' + remaining + '</span><br>Amount to Pay within the next ' + month + ' Months: <span>&#8358;' + payInstallSixMonth + '<span>';
		}
	}
}