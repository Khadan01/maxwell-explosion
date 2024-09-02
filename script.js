function explodeText() {
    const button = document.getElementById('maxwellButton');
    button.style.display = 'none';

    for (let i = 0; i < 50; i++) {
        const clone = document.createElement('div');
        clone.className = 'maxwell-clone';
        clone.innerText = 'Maxwell';
        document.body.appendChild(clone);

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const rotation = Math.random() * 360;
        const scale = Math.random() * 1.5 + 0.5;

        clone.style.left = `${x}px`;
        clone.style.top = `${y}px`;
        clone.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    }

    setTimeout(() => {
        const clones = document.querySelectorAll('.maxwell-clone');
        clones.forEach(clone => clone.remove());
        button.style.display = 'block';
    }, 3000);
}
