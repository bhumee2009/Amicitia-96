var firebaseConfig = {
    apiKey: "AIzaSyA8FWx3lGQqY-rEWamWcSBtThIdE7TO_Gk",
    authDomain: "amicitia-1a74e.firebaseapp.com",
    databaseURL: "https://amicitia-1a74e-default-rtdb.firebaseio.com",
    projectId: "amicitia-1a74e",
    storageBucket: "amicitia-1a74e.appspot.com",
    messagingSenderId: "961579965102",
    appId: "1:961579965102:web:8e501c25ae5744e064eb3f"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        message:msg,
        name:user_name,
        like:0
    });

    document.getElementById("msg").value = "";
}
