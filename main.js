function REST(type) {
    let req = new XMLHttpRequest();

    let body = {
        a:'test',
        b:'test2'
    };

    req.open(type, 'http://localhost:8080/api', true);
    req.setRequestHeader("Content-type", "application/json");

    req.onreadystatechange = function (ev) {
        if (req.readyState == 4) {
            console.log(ev.currentTarget.response);
        } else {
            console.log(req.readyState);
        }
    };

    req.send(JSON.stringify(body));
}

// document.getElementById('getAll')
//     .addEventListener('click', () => {
//         REST('GET');
//     });

document.getElementById('getLast')
    .addEventListener('click', () => {
        REST('POST');
    });


let socket = new WebSocket("ws://localhost:8081");

// обработчик входящих сообщений
socket.onmessage = function(event) {
    let incomingMessage = event.data;
    showMessage(incomingMessage);
};

// показать сообщение в div#subscribe
function showMessage(message) {
    let messageElem = document.createElement('div');
    messageElem.appendChild(document.createTextNode(message));
    document.getElementById('text').appendChild(messageElem);
}