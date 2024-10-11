document.getElementById('toggleButton').addEventListener('click', function() {
    const formDiv = document.getElementById('formDiv');
    const body = document.body; // Référence au body
    if (formDiv.style.display === 'none' || formDiv.style.display === '') {
        formDiv.style.display = 'block'; // Afficher la div
        body.classList.add('dimmed'); // Ajouter la classe pour réduire l'opacité
        
    } else {
        formDiv.style.display = 'none'; // Cacher la div
        body.classList.remove('dimmed'); // Enlever la classe pour rétablir l'opacité
        
    }
});

// Gestion du bouton de fermeture
document.getElementById('closeButton').addEventListener('click', function() {
    const formDiv = document.getElementById('formDiv');
    const body = document.body; // Référence au body
    formDiv.style.display = 'none'; // Cacher la div
    body.classList.remove('dimmed'); // Enlever la classe pour rétablir l'opacité
   
});
