// ==UserScript==
// @name         VivoLiker script for likes on instagram photos in a queue part2.1 success page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.vivoliker.com/instagram/success?*
// @grant        none
// ==/UserScript==

(function() {
    //code to redirect user to starting page after 16 minutes
    setTimeout(function(){
        window.history.back();
    },960000);
})();