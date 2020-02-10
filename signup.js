// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA0RJ58pogATUPE0nehMZzHjaWHGX--Oas",
    authDomain: "project-3-soccer-hooligans-365.firebaseapp.com",
    databaseURL: "https://project-3-soccer-hooligans-365.firebaseio.com",
    projectId: "project-3-soccer-hooligans-365",
    storageBucket: "project-3-soccer-hooligans-365.appspot.com",
    messagingSenderId: "743682135822",
    appId: "1:743682135822:web:f8872725000900ed04295f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    console.log("Signed Up");
}

function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    //alert("Signed In " + email.value);
}

function signOut() {
    auth.signOut();
    console.log("signed Out");
}

auth.onAuthStateChanged(function(user){
    if (user) {
var email = user.email;
console.log("Active User " + email);

    }else {
console.log("No Active User")
    }
})