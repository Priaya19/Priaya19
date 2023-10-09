// Function to show the modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';

    // Add an event listener for the Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal(modalId);
        }
    });
}

// Function to close the modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';

    // Remove the event listener for the Escape key
    document.removeEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal(modalId);
        }
    });
}