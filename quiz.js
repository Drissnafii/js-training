const questions = [
    "En JavaScript, 'null' est un type d'objet.",
    "Les tableaux en JavaScript commencent à l'index 1.", 
    "La méthode 'map()' peut être utilisée pour transformer un tableau.", 
    "En JavaScript, '==' compare les valeurs avec conversion de type automatique.", 
    "La méthode 'querySelector()' permet de sélectionner plusieurs éléments à la fois.", 
    "Le mot-clé 'const' permet de déclarer une variable modifiable.", 
    "La fonction 'setTimeout()' est utilisée pour exécuter du code après un délai donné.", 
    "Les promesses en JavaScript utilisent 'then()' et 'catch()' pour la gestion des résultats.", 
    "Une fonction fléchée (arrow function) a sa propre valeur 'this'.", 
    "Helloooo"
];

// const myVrai = document.getElementById('true-btn');
// let switcher = 0 ;
// let counter = 0 ;
 
// myVrai.addEventListener("click", (e) => {
//     document.getElementById("question").textContent = questions[switcher++];
//     counter++;
//     if(switcher == 10) {document.getElementById("question").textContent = counter 
//     switcher = 0;
//     }
    
// });
// const myVra1 = document.getElementById('false-btn');
// myVra1.addEventListener("click", (e) => {
//     document.getElementById("question").textContent = questions[switcher++];
// console.log(switcher)
// if(switcher == 10) {document.getElementById("question").textContent = counter 
//     switcher = 0;
// }

    
// });
// console.log("dris " + switcher)


let myVrai = document.getElementById('true-btn');
let myFaux = document.getElementById('false-btn');
let ourQN = document.getElementById('question');
count = 0;

console.log(myVrai);
myVrai.addEventListener('click', () => {
    ourQN.textContent = questions[count++];
    if (count == 10) {
        count = 0 ;
    }
    console.log(count)
})

myFaux.addEventListener('click', () => {
    ourQN.textContent = 'Hello there, faux clicked';
})

