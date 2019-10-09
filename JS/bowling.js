console.log("Connected!");

let frames = [];

const loaded = () => {
    genScores();
    display();
}

const genScores = () => {
    var total = 0;
    for(let i = 0; i < 10; i++) {
        var score = Math.floor(Math.random() *31);
        frames.push(score);
        total += score; 
    }
    frames.push(total);
}

const display = () => {
    for(let i = 0; i < 11; i++) {
        document.getElementById("f"+i).innerText = frames[i];
    }
}



