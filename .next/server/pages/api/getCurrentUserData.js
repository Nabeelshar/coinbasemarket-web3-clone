"use strict";
(() => {
var exports = {};
exports.id = 716;
exports.ids = [716];
exports.modules = {

/***/ 7565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../lib/client'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentUser = async (req, res)=>{
    console.log("<<<<<<<<<<<<<<<THIS IS FECTHING CURRENT USER DATA>>>>>>>>>>>>", req.query.account);
    const query = `*[_type == "users" && walletAddress == "${req.query.account}"]{
    name,
    "avatar": profileImage.asset->url
  }`;
    try {
        const sanityResponse = await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../lib/client'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(query);
        res.status(200).send(await sanityResponse[0]);
    } catch (error) {
        console.error(error, "SANITY ERROR");
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
var __webpack_exports__ = (__webpack_exec__(7565));
module.exports = __webpack_exports__;

})();