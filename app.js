var toggle = true;
var sidebar = document.getElementById('sidebar');

let mode = window.getComputedStyle(document.body).getPropertyValue('--mode');

// Set initial state of sidebar
if (mode == 'green' || mode == 'orange') {
    // On desktop or tablet
    //alert('d/t');
    sidebar.setAttribute('open', 'true'); 
} else {
    // On mobile
    //alert('m');
    sidebar.setAttribute('open', 'false');
}

function toggleBar() {
    let nav = document.getElementsByTagName('nav')[0];
    let article = document.getElementsByTagName('article')[0];

    let mode = window.getComputedStyle(document.body).getPropertyValue('--mode');

    if (toggle) { //('green', 'orange').contains(mode)
        // Hide
        // sidebar.style.width = '5%';
        // article.style.width = 'calc(95%)';
        if (mode == 'green' || mode == 'orange') {
            // On desktop or tablet
            //nav.style.display = 'none';

            sidebar.setAttribute('open', 'false');
        } else {
            // On mobile
            //nav.style.display = 'inline';

            sidebar.setAttribute('open', 'true');
        }

        toggle = false;
    } else if (!toggle) {
        // Show
        // sidebar.style.width = '20%';
        // article.style.width = 'calc(80%)';

        if (mode == 'green' || mode == 'orange') {
            // On desktop or tablet
            //nav.style.display = 'inline';

            sidebar.setAttribute('open', 'true');
        } else {
            // On mobile
            //nav.style.display = 'none';

            sidebar.setAttribute('open', 'false');
        }

        toggle = true;
    }
    // 
    // sidebar.style.width = '10%';
}