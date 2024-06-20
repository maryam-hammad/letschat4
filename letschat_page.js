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
 
user_name = localStorage.getItem("username_tag");
room_name = localStorage.getItem("room_input");

function send(){
    msg = document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
          name: username_tag,
          message: msg,
          like: 0
    });

    document.getElementById("msg").value = " ";
}