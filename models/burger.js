var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    createNew: function(cols, vals, cb) {
        orm.createNew("burgers", cols, vals, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;
