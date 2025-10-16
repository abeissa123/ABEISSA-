const formulaire = document.getElementById('formulaire-contact');

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const message = document.getElementById('message').value;

    // Envoi des données au serveur
    //ici je dois changer le mot "envoi" par l'URL du serveur de l'entreprise afin de traiter les donneés du formulaire
    fetch('/contact@azertyservice.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nom,
            prenom,
            email,
            telephone,
            message
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

// by abeissa