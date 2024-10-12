
// Gestion du bouton de Choix1 "Présence"
document.getElementById('toggleButton1').addEventListener('click', function () {
    const formDiv = document.getElementById('presformDiv');
    const body = document.body; // Référence au body
    if (formDiv.style.display === 'none' || formDiv.style.display === '') {
        formDiv.style.display = 'block'; // Afficher la div
        body.classList.add('dimmed'); // Ajouter la classe pour réduire l'opacité

    } else {
        formDiv.style.display = 'none'; // Cacher la div
        body.classList.remove('dimmed'); // Enlever la classe pour rétablir l'opacité

    }
});

// Gestion du bouton de fermeture "Présence"
document.getElementById('closeButton1').addEventListener('click', function () {
    const formDiv = document.getElementById('presformDiv');
    const body = document.body; // Référence au body
    formDiv.style.display = 'none'; // Cacher la div
    body.classList.remove('dimmed'); // Enlever la classe pour rétablir l'opacité

});

// Gestion du bouton de Choix2 "Inscription"
document.getElementById('toggleButton2').addEventListener('click', function () {
    const formDiv = document.getElementById('inscritformDiv');
    const body = document.body; // Référence au body
    if (formDiv.style.display === 'none' || formDiv.style.display === '') {
        formDiv.style.display = 'block'; // Afficher la div
        body.classList.add('dimmed'); // Ajouter la classe pour réduire l'opacité

    } else {
        formDiv.style.display = 'none'; // Cacher la div
        body.classList.remove('dimmed'); // Enlever la classe pour rétablir l'opacité

    }
});

// Gestion du bouton de fermeture "Inscription"
document.getElementById('closeButton2').addEventListener('click', function () {
    const formDiv = document.getElementById('inscritformDiv');
    const body = document.body; // Référence au body
    formDiv.style.display = 'none'; // Cacher la div
    body.classList.remove('dimmed'); // Enlever la classe pour rétablir l'opacité

});



function displayDateTime() {
    const now = new Date();

    // Formatage de la date et de l'heure
    const formattedDate = now.toLocaleDateString(); // Format de la date (jj/mm/aaaa)
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format de l'heure (hh:mm)

    // Affichage de la date et de l'heure dans les divs correspondantes
    document.getElementById('dateForm1').textContent = `Date : ${formattedDate}`;
    document.getElementById('timeForm1').textContent = `Heure : ${formattedTime}`;
    document.getElementById('dateForm2').textContent = `Date : ${formattedDate}`;
    document.getElementById('timeForm2').textContent = `Heure : ${formattedTime}`;
}

// Appelle la fonction au chargement de la page
window.onload = displayDateTime;
