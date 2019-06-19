// ==UserScript==
// @name         VivoLiker script for likes on instagram photos in a queue part2.2.1 Error page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.vivoliker.com/skip
// @grant        none
// ==/UserScript==

(function() {
    //code to redirect user to main form if error came and skip page will arrive
    $(document).ready(function(){
        setTimeout(function(){
            var rdct = document.getElementsByTagName('a')[0];
                rdct.click();
        },16000);

    });

})();