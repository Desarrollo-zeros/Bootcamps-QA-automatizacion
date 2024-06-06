document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = new FormData(this);
    let jsonData = {};
    formData.forEach((value, key) => jsonData[key] = value);

    fetch('submit.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                addRowToTable(jsonData);
                this.reset();
            } else {
                alert('Failed to submit data');
            }
        })
        .catch(error => console.error('Error:', error));
});

function addRowToTable(data) {
    let tableBody = document.querySelector('#submittedData tbody');
    let row = document.createElement('tr');
    Object.values(data).forEach(value => {
        let cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
    });
    tableBody.appendChild(row);
}
