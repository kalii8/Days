let days =['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
let amount =[3, 5, 7, 3, 5, 8, 6]

refresh();

function add(){
    addItem();
    addAmount();
    console.log(days);
    refresh();
}

function addItem(){
        let item = document.getElementById("addItem").value;
        days.push(item);

    };

function addAmount(){
       let itemAmount = document.getElementById("addamt").value;
         amount.push(itemAmount);
    }

function refresh(){
         document.getElementById('week').innerHTML = '';
         document.getElementById('amount').innerHTML = '';
         days.forEach(function(day, index){
            let line = '<div class="day">' + (index + 1) + ': ' + day + '</div>';
            document.getElementById('week').innerHTML+=line;
            console.log(days);
        });
        amount.forEach(function(amount, index){
            let line = '<div class="item-amount"> ' + amount + '<button class="remove" onclick="remove('+ index + ')"' + '">X</button> </div>';
            document.getElementById('amount').innerHTML+=line;
            console.log(days);
        });
 }

 function remove (ind) {
     days.splice(ind, 1);
     amount.splice(ind, 1);
     refresh();
 }


