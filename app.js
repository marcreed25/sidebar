var sidebar = document.getElementById('sidebar');

let mode = window.getComputedStyle(document.body).getPropertyValue('--mode');

// Set initial state of sidebar
if (mode == 'green' || mode == 'orange') {
    // On desktop or tablet
    sidebar.setAttribute('open', 'true'); 
} else {
    // On mobile
    sidebar.setAttribute('open', 'false');
}

function toggleBar() {
    let article = document.getElementsByTagName('article')[0];

    let mode = window.getComputedStyle(document.body).getPropertyValue('--mode');

    if (sidebar.getAttribute('open') == 'true') {
        sidebar.setAttribute('open', 'false');

        // If mobile
        if (mode == 'red') {
            // Show article
            article.style.display = 'unset';
        }
    } else {
        sidebar.setAttribute('open', 'true');

        // If mobile
        if (mode == 'red') {
            // Hide article
            article.style.display = 'none';
        }
    }
}