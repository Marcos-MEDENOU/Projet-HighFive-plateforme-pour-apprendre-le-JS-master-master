/*
  THIS FILE WAS AUTOGENERATED BY mode.tmpl.js
*/

    "use strict";

    var TextMode = require("./text").Mode;
    var CspHighlightRules = require("./csp_highlight_rules").CspHighlightRules;
    var oop = require("../lib/oop");

    var Mode = function() {
        this.HighlightRules = CspHighlightRules;
    };

    oop.inherits(Mode, TextMode);

    (function() {
        this.$id = "ace/mode/csp";
    }).call(Mode.prototype);

    exports.Mode = Mode;
