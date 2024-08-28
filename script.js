document.getElementById('cryptoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cryptoAmount = parseFloat(document.getElementById('cryptoAmount').value);
    
    if (isNaN(cryptoAmount) || cryptoAmount < 8000 || cryptoAmount > 300000) {
        document.getElementById('result').innerText = 'Please enter an amount between 8000 and 300000 $DOGS.';
        return;
    }

    fetch('https://api.binance.com/api/v3/ticker/price?symbol=DOGSUSDT')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const dogsToUsdtRate = parseFloat(data.price);
            const usdtToBirrRate = 110; // 1 USDT = 110 Birr

            // Determine the commission
            let commission = 0;
            if (cryptoAmount >= 8000 && cryptoAmount <= 19999) {
                commission = 3;
            } else if (cryptoAmount >= 20000 && cryptoAmount <= 35999) {
                commission = 3.5;
            } else if (cryptoAmount >= 36000 && cryptoAmount <= 49999) {
                commission = 3.8;
            } else if (cryptoAmount >= 50000 && cryptoAmount
