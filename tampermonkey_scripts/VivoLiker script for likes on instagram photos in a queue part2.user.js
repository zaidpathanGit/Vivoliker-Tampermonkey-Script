// ==UserScript==
// @name         VivoLiker script for likes on instagram photos in a queue part2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.vivoliker.com/instagram/link_verify
// @grant        none
// ==/UserScript==

(function() {

    //code to manipulate cookie value
    var arrayIndex = document.cookie.split(";");
    arrayIndex = arrayIndex[0].split("=");

    //click on submit button
    var btn = document.getElementsByName('add_order')[0];
        btn.click();

})();