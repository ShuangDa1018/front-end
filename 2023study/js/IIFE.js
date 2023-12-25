(function (global, factory) {
    console.log(arguments);
    "use strict";
    factory(global);
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
    function jQuery1() { }
    // @CODE
    // build.js inserts compiled jQuery here
    window.jQuery = window.$ = jQuery1;
    return jQuery1;
});

console.log(window.$); // function jQuery(){}
console.log(jQuery);
console.log(jQuery1);

16.71+19.25+36.44+19.5+42.22+16.5+18+18
+18.5+19.5+19.5+20+25+18.55+18.76 === 326.43