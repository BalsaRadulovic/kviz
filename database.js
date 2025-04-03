const firebaseConfig = {
    apiKey: "AIzaSyB0l7c-KmC3w7WcKnSzixYEgLKyvWXJGH8",
    authDomain: "kviz-a593d.firebaseapp.com",
    databaseURL: "https://kviz-a593d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kviz-a593d",
    storageBucket: "kviz-a593d.firebasestorage.app",
    messagingSenderId: "1061792176155",
    appId: "1:1061792176155:web:dd83c157bb737dfbf1c0be",
    measurementId: "G-2BYXXRJQXJ"
};

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);


async function posaljiRezultat() {
    const score = parseInt(localStorage.getItem('score'))

    const scoreRef = database.ref('quizScores'); // Path to store the score

    scoreRef.push({ score: score }) // Example: set the score
    .then(() => {
      console.log("Score updated successfully!");
    })
    .catch((error) => {
      console.error("Error updating score:", error);
    });
}

if (parseInt(localStorage.getItem(`pokusaji28`)) > 0) {
    if (localStorage.getItem('poslatRezultat') === null) {
        localStorage.setItem('poslatRezultat', 'true')
        posaljiRezultat()
    } 
}
