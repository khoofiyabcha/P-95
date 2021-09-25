username = document.getElementById("username").value;

function addUser() {
    localStorage.setItem("user_name",username);
    window.location="room.html";
}