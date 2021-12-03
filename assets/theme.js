// const urlParams = new URLSearchParams(window.location.search);
// const thisTag = urlParams.get('tag');

window.onload = function() {
    if (document.getElementById("introScreen")) {
        let p = document.createElement("p");
        p.className = "text-center text-black text-xs mb-3";
        p.innerText = "Ask a question. Tell a story. (Keep it under 30 seconds.)";
        document.getElementById("introBottom").prepend(p);
    }
};
