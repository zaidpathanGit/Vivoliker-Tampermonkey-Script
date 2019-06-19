// ==UserScript==
// @name         VivoLiker script for likes on instagram photos in a queue part2.2 Error page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.vivoliker.com/instagram/error?*
// @grant        none
// ==/UserScript==

(function() {

    $(document).ready(function(){
        //code to redirect to input page to reexecute all task from file part1
        window.history.back(-2);
    });
})();