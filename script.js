function explodeCats() {
    const button = document.getElementById('maxwellButton');
    button.style.display = 'none';

    // Nombre d'images de chats à afficher
    const numCats = 30;

    for (let i = 0; i < numCats; i++) {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                const catImageURL = data[0].url;
                const img = document.createElement('img');
                img.src = catImageURL;
                img.className = 'cat-image';
                document.body.appendChild(img);

                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const rotation = Math.random() * 360;
                const scale = Math.random() * 1.5 + 0.5;

                img.style.left = `${x}px`;
                img.style.top = `${y}px`;
                img.style.transform = `rotate(${rotation}deg) scale(${scale})`;
            });
    }

    setTimeout(() => {
        const images = document.querySelectorAll('.cat-image');
        images.forEach(image => image.remove());
        button.style.display = 'block';
    }, 3000);
}
