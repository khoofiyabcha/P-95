const firebaseConfig = {
  apiKey: "AIzaSyDj65j4eQNf9DcalSKpmctJvQo2USsQ3CA",
  authDomain: "letschat-7497a.firebaseapp.com",
  databaseURL: "https://letschat-7497a-default-rtdb.firebaseio.com",
  projectId: "letschat-7497a",
  storageBucket: "letschat-7497a.appspot.com",
  messagingSenderId: "286958866574",
  appId: "1:286958866574:web:aabeacff90aa9b9be9f9df",
  measurementId: "G-FJSNV9BJ44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_nameOutput = localStorage.getItem("user_name");
document.getElementById("usernameOutput").innerHTML = "Welcome "+user_nameOutput+"!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "Adding room name"
    });
       localStorage.setItem("room_name" , room_name);
       window.location="page.html";
 }

 function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
 elements = "<div class='row_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>"+Room_names+"</div> <hr>";
 document.getElementById("output").innerHTML += elements;
//End code
});});}
getData();
  
function redirectToRoomName(name) {
  localStorage.setItem("room_name" , name);
  window.location="page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}