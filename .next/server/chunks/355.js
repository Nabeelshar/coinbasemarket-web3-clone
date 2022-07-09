"use strict";
exports.id = 355;
exports.ids = [355];
exports.modules = {

/***/ 4355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ GunContext),
/* harmony export */   "Z": () => (/* binding */ GunProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(940);
/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gun__WEBPACK_IMPORTED_MODULE_2__);



const gun = gun__WEBPACK_IMPORTED_MODULE_2___default()([
    'https://discord-gun-node.herokuapp.com/gun'
]);
const GunContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const initialState = {
    messages: []
};
const reducer = (state, action)=>{
    try {
        if (action.type == 'clear') return {
            messages: []
        };
        if (action.type == 'add') {
            return {
                messages: [
                    ...state.messages,
                    action.data
                ]
            };
        }
    } catch (error) {
        console.error(error);
    }
};
const GunProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const getMessages = (_name)=>{
        const messagesRef = gun.get(_name);
        messagesRef.map().once((message)=>{
            dispatch({
                type: 'add',
                data: {
                    sender: message.sender,
                    content: message.content,
                    avatar: message.avatar,
                    createdAt: message.createdAt,
                    messageId: message.messageId,
                    isBullish: message.isBullish
                }
            });
        });
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GunContext.Provider, {
        value: {
            gun,
            getMessages,
            state
        },
        children: children
    }));
};


/***/ })

};
;