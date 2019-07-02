'use strict'

var scope = { expandNavbar, collapseNavbar };
var trigger = new ScrollTrigger();
trigger.callScope = scope;

function expandNavbar() {
    document
        .querySelector('.banner')
        .classList
        .remove('collapsed')
}

function collapseNavbar() {
    document
        .querySelector('.banner')
        .classList
        .add('collapsed')
}