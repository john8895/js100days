window.onload = function () {
    var searchBtn = document.getElementById('searchBtn');
    var overlay = document.getElementById('search-overlay-menu')
    var closeBtn = document.getElementById('search-overlay-close')

    searchBtn.onclick = function (e) {
        e.preventDefault();
        overlay.classList.add('open');
    }
    closeBtn.onclick = function (e) {
        e.preventDefault();
        overlay.classList.remove('open');
    }
    overlay.onclick = function (e) {
        if (e.target.nodeName === "INPUT" || e.target.nodeName === "BUTTON") {
            return;
        }
        if (e.target.nodeName !== "INPUT" || e.target.nodeName !== "BUTTON") {
            overlay.classList.remove('open');
        }
    }
}