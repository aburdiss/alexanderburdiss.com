// bundle.js created by bundlejs.sh v1.2.1 Wed Aug  2 16:58:05 EDT 2024
// ./assets/js/footer.js
(function assetsjsfooterjs() {const footer = document.querySelector("#footer");footer.innerHTML = `<nav class="icon-links"> <a href="https://www.linkedin.com/in/alexanderburdiss/"> <img src="/assets/images/LinkedIn.png" alt="LinkedIn" /> </a> <a href="https://www.youtube.com/channel/UCIAMLuK-dgi-rWZb4maHktw"> <img src="/assets/images/youtube.png" alt="YouTube" /> </a> <a href="https://github.com/aburdiss"> <img src="/assets/images/Github.png" alt="Github" /> </a> <a href="https://www.sheetmusicplus.com/publishers/ars-nova-press-sheet-music/3015236" > <img src="/assets/images/Music.png" alt="Sheet Music Plus" /> </a></nav><div class="inner-content"> <div class="footer-text"> <nav> <a href="/">Home</a> <a href="/composer/">Composer</a> <a href="/developer/">Developer</a> <a href="/trombonist/">Trombonist</a> </nav> <div id="date">© 2022 Alexander Burdiss</div> <div>All Rights Reserved</div> <address> <a href="mailto:aburdiss@icloud.com">aburdiss@icloud.com</a> </address> </div> <a href="/privacy-policy/">Privacy Policy</a></div>`;})();
// ./assets/js/date.js
(function assetsjsdatejs() { const year = new Date().getFullYear(); const copyright = document.querySelector("#date"); copyright.innerText = `©${year} Alexander Burdiss`;})();
// ./assets/js/header.js
(function assetsjsheaderjs() {const header = document.querySelector("#header");header.innerHTML = `<div class="inner-content"> <a class="logo" href="/"> <img src="/assets/images/logo.png" alt="Ars Nova Publishing Logo" /> <span>Alexander Burdiss</span> </a> <nav> <a href="/composer/">Composer</a> <a href="/developer/">Developer</a> <a href="/trombonist/">Trombonist</a> </nav></div>`;})();
