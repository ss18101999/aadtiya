const firebaseConfig = {
  apiKey: "AIzaSyAIIZIuL99m2qouDgGVrpgPrvlTJPBoaGg",
  authDomain: "corona-virus-project-30cb0.firebaseapp.com",
  databaseURL: "https://corona-virus-project-30cb0-default-rtdb.firebaseio.com",
  projectId: "corona-virus-project-30cb0",
  storageBucket: "corona-virus-project-30cb0.appspot.com",
  messagingSenderId: "638892982764",
  appId: "1:638892982764:web:a396af68747aca3eaa40c9"
};
var centers;
firebase.initializeApp(firebaseConfig)
document.getElementById('testForm').addEventListener('submit',submitForm)
function submitForm(e){
    e.preventDefault();
    var state = getInputVal('state')
    state=state.toLowerCase();
    read(state)
    var fname = getInputVal('firstname')
    var lname = getInputVal('lastname')
    var mobile = getInputVal('mobile')
    var email = getInputVal('email')
    var profession = getInputVal('profession')
    var dateofbirth = getInputVal('dateofbirth')
    console.log(state)
    saveData(fname+" "+lname,mobile,email,profession,dateofbirth,state)
}

function saveData(name,mobile,email,profession,dateofbirth,state){

  var newUser = {
    name,
    mobile,
    email,
    profession,
    dateofbirth,
    state
  }
  var userRef = firebase.database().ref('UserInputs').child(name)
  userRef.set(newUser)

}
function getInputVal(id){
    return document.getElementById(id).value;
}

function readState(snap){
  centers = snap.val();
  document.getElementById("result").innerHTML="<br>"+centers.toUpperCase()
}
function read(state){
  var ref=firebase.database().ref(state);
  ref.once("value",readState)
}