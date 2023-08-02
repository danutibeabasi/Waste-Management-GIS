// Add event listener for the edit form submission
const editForm = document.getElementById('edit-form');
if (editForm) {
    editForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const id = document.getElementById('edit-id').value;


                                        let apiEndpoint;
                                        if (layer === collectionPointsLayer) {
                                            apiEndpoint = `/api/collectionpoints/${id}`;
                                        } else if (layer === treatmentSitesLayer) {
                                            apiEndpoint = `/api/treatmentsite/${id}`; // Replace with your API endpoint for treatment sites
                                        }

                                        fetch(apiEndpoint, {
                                                method: 'PUT',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                },
                                                body: JSON.stringify({
                                                    // Include the values from the form here
                                                    id: document.getElementById('edit-id').value,
                                                    code: document.getElementById('edit-code').value,
                                                    name: document.getElementById('edit-name').value,
                                                    address: document.getElementById('edit-address').value,
                                                    postal_code: document.getElementById('edit-postal-code').value,
                                                    city: document.getElementById('edit-city').value,
                                                    service_status: document.getElementById('edit-service-status').value,
                                                    opening_date: document.getElementById('edit-opening-date').value,
                                                    closing_date: document.getElementById('edit-closing-date').value,
                                                    service_type_desc: document.getElementById('edit-service-type-description').value,
                                                    longitude: document.getElementById('edit-longitude').value,
                                                    latitude: document.getElementById('edit-latitude').value,
                                                }),
                                            })
                                            .then(response => response.json())
                                            .then(data => {
                                                console.log(data);
                                                // Show the alert message
                                                const alert = document.getElementById('success-alert');
                                                alert.style.display = 'block';
                                                // Hide the alert message after 5 seconds
                                                setTimeout(() => {
                                                    alert.style.opacity = '0';
                                                    setTimeout(() => {
                                                        alert.style.display = 'none';
                                                    }, 500); // This should be the same as the duration of the CSS transition
                                                }, 1000); // This should be the same as the duration of the CSS transition + 500ms

                                            })
                                            .catch((error) => {
                                                console.error('Error:', error);
                                            });
                                    });
    
}

// Add event listener for the delete form submission
const deleteForm = document.getElementById('delete-form');
if (deleteForm) {
    deleteForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Check if the checkbox is ticked
                                        if (!document.getElementById('confirm-delete').checked) {
                                            alert('You must confirm the deletion before proceeding.');
                                            return;
                                        }

                                        const id = document.getElementById('edit-id').value;

                                        let apiEndpoint;
                                        if (layer === collectionPointsLayer) {
                                            apiEndpoint = `/api/collectionpoints/${id}`;
                                        } else if (layer === treatmentSitesLayer) {
                                            apiEndpoint = `/api/treatmentsite/${id}`; // Replace with your API endpoint for treatment sites
                                        }

                                        fetch(apiEndpoint, {
                                                method: 'DELETE',
                                            })
                                            .then(response => response.json())
                                            .then(data => {
                                                console.log(data);
                                                // Set the alert message
                                                const alert = document.getElementById('success-alert');
                                                alert.textContent = data.message;
                                                alert.style.display = 'block';
                                                // Hide the alert message after 5 seconds
                                                setTimeout(() => {
                                                    alert.style.display = 'none';
                                                }, 5000);
                                                // Redirect to the index page
                                                window.location.href = "/";
                                            })
                                            .catch((error) => {
                                                console.error('Error:', error);
                                            });
                                    });

}
