//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data)
name = message_data('name')
message = message_data['message']
like = message_data['message']
message_with_tag ="<h4 class= 'message_h4'"
row = name_with_tag + message_with_tag +like_button + span_with_tag
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,  
       like:0   
      })

      document.getElementById("msg").value = "";
}
function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id)
      button_id = message_id
      likes = document.getElementById(button_id).value
      updated_likes = number(likes) +1
      console.log(updated_likes)
}
function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location.replace("index.html")
}