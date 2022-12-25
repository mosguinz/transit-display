javascript: (() => {
    let routes = document.getElementById("routes");
    let clickOnRoutes = () => {
        for (let route of routes.children) {
            route.click();
        }
    };

    setInterval(clickOnRoutes, 15000);
    let searchBar = document.getElementById("search");
    searchBar.hidden = true;
    routes.style.height = "100%";
})();
