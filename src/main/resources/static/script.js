var stompClient = null;

// Function to send message
function sendMessage() {
    let jsonOb = {
        name: localStorage.getItem("name"),
        content: $("#message-value").val()
    };
    stompClient.send("/app/message", {}, JSON.stringify(jsonOb));
    $("#message-value").val(""); // Clear input after sending
}

// Function to connect WebSocket
function connect() {
    let socket = new SockJS("/server1");
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        console.log("Connected : " + frame);

        $("#name-from").addClass('d-none');
        $("#chat-room").removeClass('d-none');

        // Subscribe
        stompClient.subscribe("/topic/return-to", function (response) {
            showMessage(JSON.parse(response.body));
            playNotificationSound();
        });
    });
}

// Function to show messages
function showMessage(message) {
    $("#message-container-table").prepend(
        `<tr><td><b>${message.name} :</b> ${message.content}</td></tr>`
    );
}

// Function to play notification sound
function playNotificationSound() {
    const audio = new Audio('/notification.mp3');
    audio.play();
}

// Emoji picker toggle
function toggleEmojiPicker() {
    $("#emoji-picker").toggle();
}

// Add emoji to message
function addEmoji(emoji) {
    let messageValue = $("#message-value").val();
    $("#message-value").val(messageValue + emoji);
}

// Document ready
$(document).ready(() => {
    $("#login").click(() => {
        let name = $("#name-value").val();
        localStorage.setItem("name", name);
        $("#name-title").html(`Welcome, <b>${name}</b>`);
        connect();
    });

    $("#send-btn").click(() => {
        sendMessage();
    });

    $("#logout").click(() => {
        localStorage.removeItem("name");
        if (stompClient !== null) {
            stompClient.disconnect();
            $("#name-from").removeClass('d-none');
            $("#chat-room").addClass('d-none');
            console.log(stompClient);
        }
    });

    // Emoji picker
    $("#emoji-btn").click(() => toggleEmojiPicker());
    $(".emoji").click((e) => addEmoji(e.target.innerText));
});
