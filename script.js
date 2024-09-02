function explodeCats() {
    const button = document.getElementById('maxwellButton');
    button.style.display = 'none';

    // Liste d'URLs d'images de chats
    const catImages = [
        "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
        "https://cdn2.thecatapi.com/images/MTY3ODIxOQ.jpg",
        "https://cdn2.thecatapi.com/images/MTY3ODIyMA.jpg",
        "https://cdn2.thecatapi.com/images/MTY3ODIxOA.jpg",
        "https://cdn2.thecatapi.com/images/MTY3ODIyMg.jpg",
        // Ajoute plus d'URLs d'images ici si tu le souhaites
    ];

    // Nombre d'images de chats à afficher
    const numCats = 30;

    for (let i = 0; i < numCats; i++) {
        // Choisir une image de chat aléatoire
        const randomIndex = Math.floor(Math.random() * catImages.length);
        const catImageURL = catImages[randomIndex];

        // Créer un élément d'image
        const img = document.createElement('img');
        img.src = catImageURL;
        img.className = 'cat-image';
        document.body.appendChild(img);

        // Positionner et transformer l'image de manière aléatoire
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const rotation = Math.random() * 360;
        const scale = Math.random() * 1.5 + 0.5;

        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        img.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    }

    // Retirer les images après quelques secondes
    setTimeout(() => {
        const images = document.querySelectorAll('.cat-image');
        images.forEach(image => image.remove());
        button.style.display = 'block';
    }, 3000);
}
