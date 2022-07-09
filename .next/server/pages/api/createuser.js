"use strict";
(() => {
var exports = {};
exports.id = 584;
exports.ids = [584];
exports.modules = {

/***/ 5308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../lib/client'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createUser = async (req, res)=>{
    const { userAddress  } = req.body;
    const userDoc = {
        _type: 'users',
        _id: `${userAddress}-user`,
        name: 'Unnamed',
        walletAddress: userAddress
    };
    try {
        await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../lib/client'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(userDoc);
        res.status(200).send('Successful');
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5308));
module.exports = __webpack_exports__;

})();