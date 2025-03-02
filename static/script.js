function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load header and footer
loadComponent("header-placeholder", "static/header.html");
loadComponent("pre-loader-placeholder", "static/preloader.html");
loadComponent("footer-placeholder", "static/footer.html");
