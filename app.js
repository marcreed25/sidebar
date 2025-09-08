var toggle = true;

function toggleBar() {
    let sidebar = document.getElementById('sidebar');
    let nav = document.getElementsByTagName('nav')[0];
    let article = document.getElementsByTagName('article')[0];

    if (toggle) {
        // Hide
        sidebar.style.width = '5%';
        article.style.width = 'calc(95%)';
        nav.style.display = 'none';
        toggle = false;
    } else if (!toggle) {
        // Show
        sidebar.style.width = '20%';
        article.style.width = 'calc(80%)';
        nav.style.display = 'inline';
        toggle = true;
    }
    // 
    // sidebar.style.width = '10%';
}