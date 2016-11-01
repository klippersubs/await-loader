/*
 * MIT License http://www.opensource.org/licenses/mit-license.php
 * Author Alice Klipper
 * Shamelessly based on promise-loader by Dan Abramov @gaearon
 */

module.exports       = function () {};
module.exports.pitch = function (remainingRequest) {
    //noinspection JSUnresolvedVariable,JSUnresolvedFunction
    this.cacheable && this.cacheable();

    return `
        module.exports = new Promise(function (resolve) {
            require.ensure([], function () {
                resolve(require(${JSON.stringify(`!!${remainingRequest}`)}));
            }, '');
        });
    `;
};
