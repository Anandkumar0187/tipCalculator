let bill = document.querySelector('#bill');
let people = document.querySelector('#people');
let tip = document.querySelector('#tip');
let total = document.querySelector('#total');
let error = document.querySelector('#error');

function func(tipPercent){
    
    if(bill.value == '' || bill.value < 1){
        tip.innerHTML = `$ 0.00`;
        total.innerHTML = `$ 0.00`;
        error.innerHTML = `please enter a valid bill`
    }else if(people.value == '' || people.value < 1){
        tip.innerHTML = `$ 0.00`;
        total.innerHTML = `$ 0.00`;
        error.innerHTML = `please enter a valid people`
    }
    else{
        let tipAmount = (bill.value * tipPercent / 100) / people.value;
        tip.innerHTML = `$ ${tipAmount.toFixed(2)}`;
        let totalAmount = parseFloat(bill.value) + parseFloat(tipAmount);
        total.innerHTML = `$ ${totalAmount.toFixed(2)}`;
        error.innerHTML = ''
    }
}
function reset(){
    tip.innerHTML = `$ 0.00`;
    total.innerHTML = `$ 0.00`
    bill.value = '';
    people.value = '';
}