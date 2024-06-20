
var firebaseConfig = {
    apiKey: "AIzaSyAtjte2Im-O09ERx-wof2LARrpGzLS4DDw",
    authDomain: "simple-checklist-project-bd9aa.firebaseapp.com",
    databaseURL: "https://simple-checklist-project-bd9aa-default-rtdb.firebaseio.com",
    projectId: "simple-checklist-project-bd9aa",
    storageBucket: "simple-checklist-project-bd9aa.appspot.com",
    messagingSenderId: "332218922430",
    appId: "1:332218922430:web:ae9b00635f70447f94b5ef",
    measurementId: "G-K6EDV634PL"
}

firebase.initializeApp (firebaseConfig);
 
  username_tag = localStorage.getItem("username");

  document.getElementById("username_tag").innerHTML = "Welcome" + username_tag + "!";

  function addRoom(){
       room_name = document.getElementById("room_input").value;
       firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "letschatroom.html";
}
 
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room Name -" + Room_names);
row = " <div class ='room_name' id = " + Room_names + " onclick='redirectToRoomName(name)'> #" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML = row;
   });});}
getData();
  
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "letschatroom.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");

    window.location = "index.html";
}

