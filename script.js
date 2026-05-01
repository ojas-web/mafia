fetch('updates.json')
.then(response => response.json())
.then(data => {

    const container = document.getElementById('updateContainer');

    container.innerHTML = '';

    data.forEach(update => {

        const div = document.createElement('div');

        div.className = 'update-card';

        div.innerHTML = `
            <h3>${update.version}</h3>
            <p>${update.date}</p>
            <p>${update.description}</p>
        `;

        container.appendChild(div);
    });
});