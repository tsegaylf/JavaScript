console.log("Connected!");

let nbr = 0;

var display =() =>{
    var nbrCtr1 = document.getElementById("nbr");
    nbrCtr1.value = nbr;
}

var increment = () => {
    nbr++;
    display();
}

var decrement = () => {
    nbr--;
    display();
}

var loaded = () => {
    display();
}


