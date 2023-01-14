const firebaseConfig = {
      apiKey: "AIzaSyCNm3Vi6Gpkygyx1ybn871-zrN1zGZRQxw",
      authDomain: "kwitter-6bcf6.firebaseapp.com",
      databaseURL: "https://kwitter-6bcf6-default-rtdb.firebaseio.com",
      projectId: "kwitter-6bcf6",
      storageBucket: "kwitter-6bcf6.appspot.com",
      messagingSenderId: "607443739612",
      appId: "1:607443739612:web:f5737341876872a8fce519",
      measurementId: "G-WFHVRDY2FV"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " + room-names)
      document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();
function addroom()
{
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name)

      window.location = "kwitter_page.html"
      function redirectToRoomName(name)
      {
            console.log(name)
            localStorage.setItem("room_name", name)
             window.location = "kwitter_page.html"
      }
}  
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
}                                                                                                                                                                                                                                                                                                                                                                                                                        