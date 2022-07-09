"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
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

/***/ 7462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./assets/btc.png
var btc = __webpack_require__(1337);
// EXTERNAL MODULE: ./context/context.js + 5 modules
var context = __webpack_require__(9596);
// EXTERNAL MODULE: ./assets/svg/chevronDown.js
var chevronDown = __webpack_require__(9805);
;// CONCATENATED MODULE: ./assets/svg/info.js

const Info = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "#474C5D",
        width: "15",
        height: "15",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"
        })
    }));
};
/* harmony default export */ const info = (Info);

;// CONCATENATED MODULE: ./components/cmc-table/cmcTableHeader.js



const styles = {
    textIcon: `flex items-center`
};
const CMCtableHeader = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("th", {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "# \xa0"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(chevronDown/* default */.Z, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    children: "Name"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    children: "Price"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    children: "24h %"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    children: "7d %"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: styles.textIcon,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mr-2",
                                children: "Market Cap"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(info, {})
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: styles.textIcon,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mr-2",
                                children: "Volume(24h)"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(info, {})
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: styles.textIcon,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mr-2",
                                children: "Circulating Supply"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(info, {})
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    children: "Last 7 days"
                })
            ]
        })
    }));
};
/* harmony default export */ const cmcTableHeader = (CMCtableHeader);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./assets/svg/more.js

const More = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "#fff",
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"
        })
    }));
};
/* harmony default export */ const more = (More);

;// CONCATENATED MODULE: ./assets/svg/star.js

const Star = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "#fff",
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"
        })
    }));
};
/* harmony default export */ const star = (Star);

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
;// CONCATENATED MODULE: ./components/coinNameRow.js














const coinNameRow_styles = {
    coinNameRow: 'flex items-center',
    buyButton: `bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`
};
const CoinNameRow = ({ name , icon , clicked  })=>{
    const { openModal  } = (0,external_react_.useContext)(context/* CoinMarketContext */.h);
    const coinIcon = ()=>{
        switch(name){
            case 'Bitcoin':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: btc/* default */.Z,
                    className: "rounded-full",
                    width: 20,
                    height: 20,
                    alt: ""
                }));
            case 'Ethereum':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: eth/* default */.Z,
                    className: "rounded-full",
                    width: 20,
                    height: 20,
                    alt: ""
                }));
            case 'Tether':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: usdt/* default */.Z,
                    className: "rounded-full",
                    width: 20,
                    height: 20,
                    alt: ""
                }));
            case 'BNB':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: bnb/* default */.Z,
                    className: "rounded-full",
                    width: 20,
                    height: 20,
                    alt: ""
                }));
            case 'USD Coin':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: usdc/* default */.Z,
                    className: "rounded-full",
                    width: 20,
                    height: 20,
                    alt: ""
                }));
            case 'XRP':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: xrp/* default */.Z,
                    className: "rounded-full",
                    width: 20,
                    height: 20,
                    alt: ""
                }));
            case 'Cardano':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: cardano/* default */.Z,
                    className: "rounded-full",
                    width: 20,
                    height: 20,
                    alt: ""
                }));
            case 'Terra':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: tera/* default */.Z,
                    className: "rounded-full",
                    width: 20,
                    height: 20,
                    alt: ""
                }));
            case 'Solana':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: solana/* default */.Z,
                    className: "rounded-full",
                    width: 20,
                    height: 20,
                    alt: ""
                }));
            case 'Avalanche':
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: avalanche/* default */.Z,
                    className: "rounded-full",
                    width: 20,
                    height: 20,
                    alt: ""
                }));
            default:
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: btc/* default */.Z,
                    className: "rounded-full",
                    width: 20,
                    height: 20,
                    alt: ""
                }));
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: coinNameRow_styles.coinNameRow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mr-3 flex",
                onClick: clicked,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mr-2",
                        children: coinIcon()
                    }),
                    name
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: name === 'Bitcoin' || name === 'Ethereum' || name === 'Tether' ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: coinNameRow_styles.buyButton,
                    onClick: ()=>openModal()
                    ,
                    children: "Buy"
                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
            })
        ]
    }));
};
/* harmony default export */ const coinNameRow = (CoinNameRow);

// EXTERNAL MODULE: ./components/cmc-table/rate.js
var cmc_table_rate = __webpack_require__(3600);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/cmc-table/cmcTableRow.js







const cmcTableRow_styles = {
    tableRow: `text-white border-b border-gray-800 text-[0.93rem]`
};
const CMCtableRow = ({ starNum , coinName , coinIcon , coinSymbol ='---' , price ='----' , hRate ='---' , dRate ='---' , hRateIsIncrement , dRateIsIncrement , marketCapValue ='---' , volumeValue ='---' , volumeCryptoValue ='---' , circulatingSupply ='---' ,  })=>{
    const graphImages = [
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg', 
    ];
    const getRandomGraph = ()=>{
        const rndInt = Math.floor(Math.random() * 10) + 1;
        return graphImages[rndInt];
    };
    const router = (0,router_namespaceObject.useRouter)();
    const viewCoinDetails = ()=>{
        router.push(`/currencies/info?symbol=${coinSymbol}&coin=${coinName}&price=${price}`);
    };
    const viewPrice = ()=>{
        router.push(`/currencies/price?symbol=${coinSymbol}&coin=${coinName}&price=${price}`);
    };
    const formatNum = (num)=>{
        return Number(num.toFixed(2)).toLocaleString();
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        className: cmcTableRow_styles.tableRow,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(star, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: starNum
                }),
                coinIcon && coinIcon ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(coinNameRow, {
                        name: coinName,
                        icon: coinIcon,
                        clicked: viewCoinDetails
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "cursor-pointer",
                    onClick: viewPrice,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "$",
                            formatNum(price)
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(cmc_table_rate/* default */.Z, {
                        isIncrement: hRateIsIncrement,
                        rate: `${formatNum(hRate)}%`
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(cmc_table_rate/* default */.Z, {
                        isIncrement: dRateIsIncrement,
                        rate: `${formatNum(dRate)}%`
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "$",
                                formatNum(marketCapValue)
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: formatNum(volumeValue)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-gray-400",
                                children: [
                                    formatNum(volumeCryptoValue),
                                    " ",
                                    coinSymbol
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: formatNum(circulatingSupply)
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: getRandomGraph(),
                        width: 150,
                        height: 60,
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(more, {})
                })
            ]
        })
    }));
};
/* harmony default export */ const cmcTableRow = (CMCtableRow);

;// CONCATENATED MODULE: ./components/cmc-table/cmcTable.js






const CMCtable = ()=>{
    let { getTopTenCoins  } = (0,external_react_.useContext)(context/* CoinMarketContext */.h);
    let { 0: coinData , 1: setCoinData  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setData();
    }, []);
    const setData = (0,external_react_.useCallback)(async ()=>{
        try {
            let apiResponse = await getTopTenCoins();
            let filteredResponse = [];
            for(let i = 0; i < apiResponse.length; i++){
                const element = apiResponse[i];
                if (element.cmc_rank <= 10) filteredResponse.push(element);
            }
            setCoinData(filteredResponse);
        } catch (e) {
            console.log(e.message);
        }
    }, [
        getTopTenCoins
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-white font-bold",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto max-w-screen-2xl",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(cmcTableHeader, {}),
                    coinData && coinData ? coinData.map((coin, index)=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx(cmcTableRow, {
                            starNum: coin.cmc_rank,
                            coinName: coin.name,
                            coinSymbol: coin.symbol,
                            coinIcon: btc/* default */.Z,
                            showBuy: true,
                            hRate: coin.quote.USD.percent_change_24h,
                            dRate: coin.quote.USD.percent_change_7d,
                            hRateIsIncrement: true,
                            price: coin.quote.USD.price,
                            marketCapValue: coin.quote.USD.market_cap,
                            volumeCryptoValue: coin.quote.USD.volume_24h,
                            volumeValue: coin.total_supply,
                            circulatingSupply: coin.circulating_supply
                        }, index));
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                ]
            })
        })
    }));
};
/* harmony default export */ const cmcTable = (CMCtable);

// EXTERNAL MODULE: ./components/header.js + 1 modules
var header = __webpack_require__(7381);
;// CONCATENATED MODULE: ./assets/fire.png
/* harmony default export */ const fire = ({"src":"/_next/static/media/fire.d354ba03.png","height":37,"width":36,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA90lEQVR42mMAgR/qDIwg+nuAke4PJ+0sBnTwLSWWlQGk0Mcg4G+W1f+f/vqlIP6/SDVmBhD4k+rj8NXS1PxPgc2n/zNd//+JU/96nsGUgwEE/pf7Mn+P9Nf/pi+T+m+i/f//69z//YnXevdR3Mj1//NeJobHDOr8v6JVjv6J1rnxb6vj///H3P79LwRaYy769YWupDrDOQZXrm/+bI//z1H8/+9Ryu9/L/L//t+i//+7I8uvhwxyqgwg8F5Nr/jXBob/f/9s/f/n/8n/f06p/v8YKtjIAAIg8JqhlP/bVIbZf94sef7ny647v9Yy9D1jaOBmYGBgAACsj29+U6B/zAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./assets/gainers.png
/* harmony default export */ const gainers = ({"src":"/_next/static/media/gainers.aa5a02f6.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9klEQVR42iWPvUoDURSEBwQR7PxZxQiioLAL4osI9nb2lgYkouje9QcrtRJsLGJnE/IAF9Z4biSiSERIY5Ui1Tap9kKYnEsOnGqG+WYQblFMHImxC2L8urv0O+2bfLt9nSDckphkXkyhArfcFdE6JfIq8X5eqDHGnJh8TUW81cogVLt11v9tudu5V9OZxYZGolXjXa9J8/fKw59nDkeet71GSPLQSH/w/cRG/4PNfod20OXR7wv3vx5Dgse0pFZZyj4ppyTl3ueD4o5LyAVXXZZD+fGMpEXooStCOW5q2RWXFbOSTpZUXJZE6l52ma/oq9FGOh0AxpEcjo0qgc+XAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./assets/recent.png
/* harmony default export */ const recent = ({"src":"/_next/static/media/recent.ddb3ace2.png","height":40,"width":40,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmklEQVR42lWPTQrCMBBGI/UsHqDQta5EUHGlHXCdce8+KZ5MsJjiSt15HN/YFOzAS+bvy2ScWe1DCXe4GuJjqjWU/8U3LGAmwD2ngRxNghLF2mH4DVyycAOtOUk0Fr+kxghn8w8aptQ6Z8fehyKrdjz9QXC0eGhoYeWyiYaKMSfYMvo2fPJFsBRtJllZwXO0ifRrJnhAV/u++AXbzFYlLPeSQgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./assets/svg/rightArrow.js

const RightArrow = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "#596ae2",
        width: "13",
        height: "13",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
        })
    }));
};
/* harmony default export */ const rightArrow = (RightArrow);

;// CONCATENATED MODULE: ./components/moreButton.js


const moreButton_styles = {
    button: `text-[#6188FF] flex items-center cursor-pointer whitespace-nowrap justify-between`
};
const MoreButton = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: moreButton_styles.button,
        children: [
            "More ",
            /*#__PURE__*/ jsx_runtime_.jsx(rightArrow, {})
        ]
    }));
};
/* harmony default export */ const moreButton = (MoreButton);

;// CONCATENATED MODULE: ./components/trendingCardRow.js



const trendingCardRow_styles = {
    trendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem]`
};
const TrendingCardRow = ({ number , icon , name , symbol , isIncrement , rate  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: trendingCardRow_styles.trendingCardRow,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "opacity-40",
                children: number
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-5",
                        children: icon && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            alt: "",
                            src: icon,
                            width: 20,
                            height: 20
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "font-bold",
                        children: [
                            name,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "text-gray-400",
                                children: [
                                    " ",
                                    symbol
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(cmc_table_rate/* default */.Z, {
                isIncrement: isIncrement,
                rate: rate
            })
        ]
    }));
};
/* harmony default export */ const trendingCardRow = (TrendingCardRow);

;// CONCATENATED MODULE: ./components/trendingCard.js




const trendingCard_styles = {
    trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
    trendingCardWrapper: `flex items-center justify-between`
};
const TrendingCard = ({ icon , title , trendingData  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: trendingCard_styles.trendingCard,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: trendingCard_styles.trendingCardWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex",
                        children: [
                            icon && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: icon,
                                width: 27,
                                height: 27,
                                alt: ""
                            }),
                            "\xa0\xa0",
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-bold",
                                children: title
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(moreButton, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            trendingData.map((item, index)=>{
                return(/*#__PURE__*/ jsx_runtime_.jsx(trendingCardRow, {
                    number: item.number,
                    symbol: item.symbol,
                    name: item.name,
                    icon: item.icon,
                    isIncrement: item.isIncrement,
                    rate: item.rate
                }, index));
            })
        ]
    }));
};
/* harmony default export */ const trendingCard = (TrendingCard);

;// CONCATENATED MODULE: external "react-switch"
const external_react_switch_namespaceObject = require("react-switch");
var external_react_switch_default = /*#__PURE__*/__webpack_require__.n(external_react_switch_namespaceObject);
;// CONCATENATED MODULE: ./components/trending.js










const trending_styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl`,
    h1: `text-3xl text-white`,
    flexCenter: `flex items-center,`
};
const Trending = ()=>{
    const { 0: checked , 1: setChecked  } = (0,external_react_.useState)(false);
    const trendingData = [
        {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc/* default */.Z,
            isIncrement: true,
            rate: "2.34%"
        },
        {
            number: 2,
            symbol: "USDT",
            name: "Tether",
            icon: usdt/* default */.Z,
            isIncrement: false,
            rate: "9.32%"
        },
        {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc/* default */.Z,
            isIncrement: true,
            rate: "2.34%"
        }, 
    ];
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-white",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: trending_styles.trendingWrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: trending_styles.h1,
                            children: "Todays Cryptocurrency Prices by Market Cap"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-gray-400 ",
                                    children: "Highlights \xa0"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((external_react_switch_default()), {
                                    checked: checked,
                                    onChange: ()=>{
                                        setChecked(!checked);
                                    }
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "The global crypto market cap is $1.74T, a \xa0 "
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(cmc_table_rate/* default */.Z, {
                                    isIncrement: true,
                                    rate: "0.53%"
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                " \xa0 decrease over the last day. ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "underline",
                                    children: "Read More"
                                }),
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: trending_styles.flexCenter,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(trendingCard, {
                            title: "Trending",
                            icon: fire,
                            trendingData: trendingData
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(trendingCard, {
                            title: "Biggest Gainers",
                            icon: gainers,
                            trendingData: trendingData
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(trendingCard, {
                            title: "Recently Added",
                            icon: recent,
                            trendingData: trendingData
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const trending = (Trending);

;// CONCATENATED MODULE: ./components/swapCryptoModal.js



const swapCryptoModal_styles = {
    modal: `w-screen h-screen bg-gray-900/90 z-10 fixed top-0 left-0 flex items-center justify-center`,
    modalContent: `bg-white rounded-lg p-3 w-max w-1/3`,
    input: `w-full p-2 border rounded-lg mb-5 border-gray-600/50 outline-none`,
    button: `bg-[#6188FF] p-2 px-5 rounded-lg text-white hover:opacity-50`,
    label: `font-bold text-3xl`,
    closeModalButton: `hover:text-red-300 text-gray-600 cursor-pointer`
};
const SwapCryptoModal = ()=>{
    const { openBuyCryptoModal , setOpenBuyCryptoModal , mint , coins , loadingCoins , amount , setAmount , fromToken , setFromToken , toToken , setToToken ,  } = (0,external_react_.useContext)(context/* CoinMarketContext */.h);
    if (openBuyCryptoModal) return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: swapCryptoModal_styles.modal,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: swapCryptoModal_styles.modalContent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: swapCryptoModal_styles.label,
                            children: "Swap your crypto"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: swapCryptoModal_styles.closeModalButton,
                            onClick: ()=>{
                                setOpenBuyCryptoModal(false);
                                setAmount(0);
                                setFromToken('');
                                setToToken('');
                            },
                            children: "close \xd7"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-5"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    htmlFor: "fromToken",
                    className: "block mb-2 ml-2",
                    children: "From"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    name: "fromToken",
                    className: swapCryptoModal_styles.input,
                    placeholder: "Token to swap",
                    onChange: (e)=>setFromToken(e.target.value)
                    ,
                    value: fromToken,
                    children: [
                        coins.map((coin)=>{
                            if (!loadingCoins) {
                                return(/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: coin.attributes.name,
                                    children: coin.attributes.name
                                }, coin.id));
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "ETH",
                            children: "ETH"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    htmlFor: "fromToken",
                    className: "block mb-2 ml-2",
                    children: "To"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("select", {
                    name: "toToken",
                    className: swapCryptoModal_styles.input,
                    placeholder: "Token to swap",
                    onChange: (e)=>setToToken(e.target.value)
                    ,
                    value: toToken,
                    children: coins.map((coin)=>{
                        if (!loadingCoins) {
                            return(/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: coin.attributes.name,
                                children: coin.attributes.name
                            }, coin.id));
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    htmlFor: "amount",
                    className: "block mb-2 ml-2",
                    children: "Amount"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    name: "amount",
                    className: swapCryptoModal_styles.input,
                    placeholder: "Token to swap",
                    value: amount,
                    onChange: (e)=>setAmount(e.target.value)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: swapCryptoModal_styles.button,
                    onClick: mint,
                    children: "Swap!"
                })
            ]
        })
    }));
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}));
};
/* harmony default export */ const swapCryptoModal = (SwapCryptoModal);

;// CONCATENATED MODULE: ./pages/index.js





function Home() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(swapCryptoModal, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(trending, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-20"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(cmcTable, {})
        ]
    }));
};


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,596,177], () => (__webpack_exec__(7462)));
module.exports = __webpack_exports__;

})();