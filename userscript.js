// ==UserScript==
// @name         Unsub-all
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Unsub all channels
// @author       Fiereu
// @match        https://www.youtube.com/feed/channels
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var i = 0;
    var els = document.getElementById("contents").getElementsByClassName("ytd-subscribe-button-renderer");
    if (i < els.length) {
        els[i].querySelector('.ytd-subscribe-button-renderer').click();
        setTimeout(function () {
            var unSubBtn = document.getElementById("confirm-button").click();
        }, 500);
        setTimeout(function () {
            els[i].parentNode.removeChild(els[i]);
        }, 1000);
    }
    console.log(els.length + " remaining");

    location.reload();
    setTimeout(()=>{},1000);
})();
