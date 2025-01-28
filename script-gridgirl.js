// Select all grid items and the hover image container
const gridItems = document.querySelectorAll('.grid-item');
const hoverImage = document.getElementById('hover-image');
const hoverImageImg = document.getElementById('hover-image-img');

// Function to handle hover behavior
gridItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        const imageSrc = e.target.getAttribute('data-image');
        const imageWidth = e.target.getAttribute('data-image-width');
        const imageHeight = e.target.getAttribute('data-image-height');

        if (imageSrc) {
            hoverImageImg.src = imageSrc; // Set the hover image source
            hoverImageImg.style.width = imageWidth; // Use manual width
            hoverImageImg.style.height = imageHeight; // Use manual height
            hoverImage.style.visibility = 'visible'; // Show the hover image

            const rect = e.target.getBoundingClientRect(); // Get square position
            const imgWidth = parseInt(imageWidth); // Image width as a number
            const imgHeight = parseInt(imageHeight); // Image height as a number

            // Center the hover image relative to the square
            hoverImage.style.left = `${rect.left + rect.width / 2 - imgWidth / 2}px`;
            hoverImage.style.top = `${rect.top + rect.height / 2 - imgHeight / 2}px`;
        }
    });

    item.addEventListener('mouseleave', () => {
        hoverImage.style.visibility = 'hidden'; // Hide the hover image
    });
});
