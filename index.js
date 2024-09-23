document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        alert('Has hecho clic en una caja');
    });
});