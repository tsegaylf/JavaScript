console.log("Connected!");

let nbr = 0;

var display =() =>{
    var nbrCtr1 = document.getElementById("nbr");
    nbrCtr1.value = nbr;
    {
        nbrCtr1.style.color = (nbr % 2 == 0) ? "red" : "black";
        nbrCtr1.style.fontWeight = (nbr % 3 == 0) ? "bold" : "normal";
        nbrCtr1.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal";
    }
    //(nbr % 2 == 0)  document.getElementById("nbr").style.color="red";
    //(nbr % 3 == 0 ) document.getElementById("nbr").style.fontWeight="bold";
    //(nbr % 5 == 0 ) document.getElementById("nbr").style.fontStyle="italics";  
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


