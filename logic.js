let fs = require('fs');
let randonNumber = function () {
    let randomNumber = Math.floor(Math.random() * 1000);
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return `Число ${randomNumber} время: ${hours}:${minute}:${second} #\n`;
};
function interval(ws) {
    function record() {
        let randomNumber = randonNumber();
        fs.appendFile('text.txt', randomNumber, function(){
            console.log('Новое число!')
        });
        ws.send(randomNumber);
    }
    setInterval(record, 1000);
}

module.exports = interval;