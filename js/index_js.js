

const TICKET_VALUE = 200;
const DISCOUNT_TYPE = ['Estudiante', 'Trainee', 'Junior'];
const DISCOUNT_VALUE= [0.80,0.50,0.15];

function calculateValue(ticketNumber){
    debugger

    let ticketType = document.getElementById('ticketTypeID').value;

    let preValue = ticketNumber* TICKET_VALUE;
    for(let i=0; i<DISCOUNT_TYPE.length; i++){
        if(ticketType==DISCOUNT_TYPE[i]){
            let finalValue = preValue - preValue*DISCOUNT_VALUE[i];
            return finalValue;
        }

    }
}

function showDiscount(){
    let ticketNumber = document.getElementById('ticketCountID').value;

    let value;
    if (ticketNumber==null || ticketNumber==0 || ticketNumber==''){
        alert('Por favor, ingrese una cantidad valida de tickets');
    }else{
        value = calculateValue(ticketNumber);
    }
    document.getElementById('totalValue').innerHTML=value;
}
