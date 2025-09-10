var toggle = true;
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

    if (toggle) {
        // Hide
        if (mode == 'green' || mode == 'orange') {
            // On desktop or tablet
            sidebar.setAttribute('open', 'false');
        } else {
            // On mobile
            sidebar.setAttribute('open', 'true');
            article.style.display = 'none';
        }

        toggle = false;
    } else if (!toggle) {
        // Show
        if (mode == 'green' || mode == 'orange') {
            // On desktop or tablet
            sidebar.setAttribute('open', 'true');
        } else {
            // On mobile
            sidebar.setAttribute('open', 'false');
            article.style.display = 'unset';
        }

        toggle = true;
    }
}