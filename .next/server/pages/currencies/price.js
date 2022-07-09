"use strict";
(() => {
var exports = {};
exports.id = 529;
exports.ids = [529];
exports.modules = {

/***/ 3600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_svg_chevronDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9805);
/* harmony import */ var _assets_svg_chevronUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3278);



const styles = {
    rate: `rate flex items-center`,
    red: `ml-2 text-[#EA3943]`,
    green: `ml-2 text-[#17C784]`
};
const Rate = ({ isIncrement , rate  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: styles.rate,
        children: [
            isIncrement ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_svg_chevronUp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                fill: "#17C784"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_svg_chevronDown__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                fill: "#EA3943"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: isIncrement ? styles.green : styles.red,
                children: rate
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rate);


/***/ }),

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ price)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./assets/svg/chevronDown.js
var chevronDown = __webpack_require__(9805);
;// CONCATENATED MODULE: ./components/buttons/dropDownBtn.js


const styles = {
    dropdownBtn: `flex items-center mr-2 rounded-md px-2 bg-blue-700 cursor-pointer`
};
const DropdownBtn = ({ label  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styles.dropdownBtn,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mr-2",
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(chevronDown/* default */.Z, {})
        ]
    }));
};
/* harmony default export */ const dropDownBtn = (DropdownBtn);

// EXTERNAL MODULE: ./components/cmc-table/rate.js
var rate = __webpack_require__(3600);
// EXTERNAL MODULE: ./assets/svg/chevronUp.js
var chevronUp = __webpack_require__(3278);
;// CONCATENATED MODULE: ./components/buttons/rateFilled.js


const rateFilled_styles = {
    rateFilled: `bg-green-600 flex items-center px-3 ml-3 rounded-xl`
};
const RateFilled = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: rateFilled_styles.rateFilled,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(chevronUp/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                className: "pl-1",
                children: "23.32%"
            })
        ]
    }));
};
/* harmony default export */ const rateFilled = (RateFilled);

// EXTERNAL MODULE: ./assets/btc.png
var btc = __webpack_require__(1337);
// EXTERNAL MODULE: ./assets/eth.png
var eth = __webpack_require__(4241);
// EXTERNAL MODULE: ./assets/usdc.png
var usdc = __webpack_require__(2078);
// EXTERNAL MODULE: ./assets/usdt.png
var usdt = __webpack_require__(5131);
// EXTERNAL MODULE: ./assets/xrp.png
var xrp = __webpack_require__(9525);
// EXTERNAL MODULE: ./assets/cardano.png
var cardano = __webpack_require__(9250);
// EXTERNAL MODULE: ./assets/tera.png
var tera = __webpack_require__(7970);
// EXTERNAL MODULE: ./assets/solana.png
var solana = __webpack_require__(7653);
// EXTERNAL MODULE: ./assets/avalanche.png
var avalanche = __webpack_require__(1294);
// EXTERNAL MODULE: ./assets/bnb.png
var bnb = __webpack_require__(3769);
// EXTERNAL MODULE: external "react-moralis"
var external_react_moralis_ = __webpack_require__(6921);
;// CONCATENATED MODULE: ./components/coinDetails.js
















const coinDetails_styles = {
    coinDetails: `min-h-screen text-white`,
    coinDetailsLinks: `flex mt-3 flex-wrap`,
    greyBtn: `mr-3 mb-3 bg-slate-800 px-3 py-1 rounded-xl`,
    borderLeft: `ml-10 pl-5 w-full border-l border-gray-800`,
    title: `text-gray-400 whitespace-nowrap mr-2`,
    coinDetailsWrapper: `coin-details flex max-w-screen-2xl m-auto pt-20`,
    coinSymbol: `bg-slate-800 flex items-center px-2 rounded-xl`,
    coinInfo: `flex justify-between mt-10 p-4 border-t border-gray-800`,
    coinRates: `w-full flex items-start justify-between`,
    flexBetween: `flex justify-between`
};
const CoinDetails = ({ coinName , coinSymbol , price  })=>{
    const coinIcon = ()=>{
        switch(coinName){
            case 'Bitcoin':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: btc/* default */.Z,
                    className: "rounded-full",
                    width: 50,
                    height: 50,
                    alt: ""
                }));
            case 'Ethereum':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: eth/* default */.Z,
                    className: "rounded-full",
                    width: 50,
                    height: 50,
                    alt: ""
                }));
            case 'Tether':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: usdt/* default */.Z,
                    className: "rounded-full",
                    width: 50,
                    height: 50,
                    alt: ""
                }));
            case 'BNB':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: bnb/* default */.Z,
                    className: "rounded-full",
                    width: 50,
                    height: 50,
                    alt: ""
                }));
            case 'USD Coin':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: usdc/* default */.Z,
                    className: "rounded-full",
                    width: 50,
                    height: 50,
                    alt: ""
                }));
            case 'XRP':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: xrp/* default */.Z,
                    className: "rounded-full",
                    width: 50,
                    height: 50,
                    alt: ""
                }));
            case 'Cardano':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: cardano/* default */.Z,
                    className: "rounded-full",
                    width: 50,
                    height: 50,
                    alt: ""
                }));
            case 'Terra':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: tera/* default */.Z,
                    className: "rounded-full",
                    width: 50,
                    height: 50,
                    alt: ""
                }));
            case 'Solana':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: solana/* default */.Z,
                    className: "rounded-full",
                    width: 50,
                    height: 50,
                    alt: ""
                }));
            case 'Avalanche':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: avalanche/* default */.Z,
                    className: "rounded-full",
                    width: 50,
                    height: 50,
                    alt: ""
                }));
            default:
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: btc/* default */.Z,
                    className: "rounded-full",
                    width: 50,
                    height: 50,
                    alt: ""
                }));
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: coinDetails_styles.coinDetails,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: coinDetails_styles.coinDetailsWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col w-fit",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    coinIcon(),
                                    "\xa0 \xa0",
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-3xl",
                                                    children: coinName
                                                }),
                                                "\xa0 \xa0\xa0 \xa0",
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: coinDetails_styles.coinSymbol,
                                                    children: coinSymbol
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: coinDetails_styles.coinDetailsLinks,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: coinDetails_styles.greyBtn,
                                        children: "solana.com"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: coinDetails_styles.greyBtn,
                                        children: "Explorers"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: coinDetails_styles.greyBtn,
                                        children: "Community"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: coinDetails_styles.greyBtn,
                                        children: "Chat"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: coinDetails_styles.greyBtn,
                                        children: "Source code"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: coinDetails_styles.greyBtn,
                                        children: "Whitepaper"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "Topics",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: [
                                    coinDetails_styles.coinDetailsLinks,
                                    'topics'
                                ],
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: coinDetails_styles.greyBtn,
                                        children: "Mineable"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: coinDetails_styles.greyBtn,
                                        children: "PoW"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: coinDetails_styles.greyBtn,
                                        children: "SHA-256"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: coinDetails_styles.greyBtn,
                                        children: "Store of value"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "-ml-16",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: coinDetails_styles.coinRates,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "text-gray-400",
                                                children: [
                                                    coinName,
                                                    " (",
                                                    coinSymbol,
                                                    ")"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex my-3",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                        className: "text-4xl",
                                                        children: [
                                                            "$",
                                                            price
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(rateFilled, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-gray-400",
                                                        children: " 15.26 ETH"
                                                    }),
                                                    "\xa0\xa0\xa0",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(rate/* default */.Z, {
                                                        isIncrement: false,
                                                        rate: "0.53%"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-gray-400",
                                                        children: " 24.33 BTC"
                                                    }),
                                                    "\xa0\xa0\xa0",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(rate/* default */.Z, {
                                                        isIncrement: true,
                                                        rate: "0.99%"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(dropDownBtn, {
                                                label: "Buy"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(dropDownBtn, {
                                                label: "Exchange"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(dropDownBtn, {
                                                label: "Gaming"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(dropDownBtn, {
                                                label: "Earn Crypto"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: coinDetails_styles.coinInfo,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    className: coinDetails_styles.title,
                                                    children: "Market Cap"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: "$731,935,983,865"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(rate/* default */.Z, {
                                                isIncrement: true,
                                                rate: "0.53%"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: coinDetails_styles.borderLeft,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    className: coinDetails_styles.title,
                                                    children: "Fully Diluted Market Cap"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: "$811,236,224,810"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(rate/* default */.Z, {
                                                isIncrement: true,
                                                rate: "0.53%"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: coinDetails_styles.borderLeft,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                            className: coinDetails_styles.title,
                                                            children: [
                                                                "Volume \xa0",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                    className: "coin-symbol",
                                                                    children: " BTC"
                                                                }),
                                                                ' '
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "$24,143,176,324"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(rate/* default */.Z, {
                                                        isIncrement: true,
                                                        rate: "0.92%"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                            className: coinDetails_styles.title,
                                                            children: "Volume / Market Cap"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "0.03315"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: coinDetails_styles.borderLeft,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                            className: coinDetails_styles.title,
                                                            children: "Circulating Supply"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "18,983,850.00 BTC"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: coinDetails_styles.flexBetween,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                    className: coinDetails_styles.title,
                                                                    children: "Max Supply"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                    children: "21,000,000"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: coinDetails_styles.flexBetween,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                    className: coinDetails_styles.title,
                                                                    children: "Total Supply"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                    children: "18,983,912"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const coinDetails = (CoinDetails);

// EXTERNAL MODULE: ./components/header.js + 1 modules
var header = __webpack_require__(7381);
;// CONCATENATED MODULE: ./pages/currencies/price.js




const Price = ()=>{
    const { 0: coinName , 1: setCoinName  } = (0,external_react_.useState)('');
    const { 0: coinSymbol , 1: setCoinSymbol  } = (0,external_react_.useState)('');
    const { 0: price , 1: setPrice  } = (0,external_react_.useState)('');
    (0,external_react_.useEffect)(()=>{
        getData();
    }, []);
    const getData = async ()=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setCoinName(urlParams.get('coin'));
        setPrice(Number(urlParams.get('price')).toLocaleString(0));
        setCoinSymbol(urlParams.get('symbol'));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(coinDetails, {
                coinName: coinName,
                price: price,
                coinSymbol: coinSymbol
            })
        ]
    }));
};
/* harmony default export */ const price = (Price);


/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6921:
/***/ ((module) => {

module.exports = require("react-moralis");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2810:
/***/ ((module) => {

module.exports = require("web3uikit");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,596,177], () => (__webpack_exec__(661)));
module.exports = __webpack_exports__;

})();