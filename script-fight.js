const draggables = document.querySelectorAll('.draggable');
let activeImage = null;

draggables.forEach(img => {
  img.addEventListener('mousedown', (e) => {
    // Remove glow from previously active image
    if (activeImage) activeImage.classList.remove('glow');

    // Set the current image as active and add glow
    activeImage = img;
    img.classList.add('glow');

    const offsetX = e.offsetX;
    const offsetY = e.offsetY;

    const onMouseMove = (event) => {
      img.style.left = event.pageX - offsetX + 'px';
      img.style.top = event.pageY - offsetY + 'px';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
  });

  img.ondragstart = () => false; // Disable default drag behaviour
});
