javascript: (() => {

    if (window.location.hostname != "widget.transitapp.com") {
        return window.confirm("Script meant to be run on widget.transitapp.com only.\nOpen widget.transitapp.com?")
            && window.open("https://widget.transitapp.com");
    }

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
