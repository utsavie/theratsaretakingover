// Get the custom cursor element and image
const customCursor = document.getElementById('custom-cursor');
const cursorImage = customCursor.querySelector('img'); // Get the image inside the cursor div

// Update the position of the custom cursor as the mouse moves
document.addEventListener('mousemove', (event) => {
    const cursorWidth = cursorImage.offsetWidth;  // Get the width of the cursor image
    const cursorHeight = cursorImage.offsetHeight;  // Get the height of the cursor image

    // Position the custom cursor to be centered around the mouse pointer
    customCursor.style.left = `${event.pageX - cursorWidth / 2}px`;  // X position, adjusted by half the image width
    customCursor.style.top = `${event.pageY - cursorHeight / 2}px`;   // Y position, adjusted by half the image height
});
