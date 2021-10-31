/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Asset.ts":
/*!**********************!*\
  !*** ./src/Asset.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Asset": () => (/* binding */ Asset)
/* harmony export */ });
var Asset = (function () {
    function Asset() {
        this.assets = [
            { type: 'image', name: 'cursor', src: '../../img/games/15pazzle/cursor1.png' },
            { type: 'image', name: 'title1', src: '../../img/games/15pazzle/title_670x500.png' },
            { type: 'image', name: 'title2', src: '../../img/games/15pazzle/title_400x500.png' },
            { type: 'se', name: 'shakin', src: '../../se/games/15pazzle/shakin.mp3' },
            { type: 'se', name: 'papa', src: '../../se/games/15pazzle/papa.mp3' },
            { type: 'se', name: 'pyui', src: '../../se/games/15pazzle/pyui.mp3' },
            { type: 'se', name: 'zyan', src: '../../se/games/15pazzle/zyan.mp3' },
            { type: 'se', name: 'popiropan', src: '../../se/games/15pazzle/popiropan.mp3' },
        ];
        this.totalCount = this.assets.length;
        this.loadCount = 0;
    }
    Asset.prototype.loadAssets = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.assets.forEach(function (asset) {
                switch (asset.type) {
                    case 'image':
                        var image_1 = new Image();
                        image_1.src = asset.src;
                        image_1.onload = function () {
                            Asset.images[asset.name] = image_1;
                            if (_this.isComplete()) {
                                resolve();
                            }
                        };
                        break;
                    case 'se':
                        var audio_1 = new Audio();
                        audio_1.src = asset.src;
                        audio_1.preload = "none";
                        audio_1.load();
                        audio_1.oncanplay = function () {
                            Asset.soundEffects[asset.name] = audio_1;
                            if (_this.isComplete()) {
                                resolve();
                            }
                        };
                        break;
                }
            });
        });
    };
    Asset.prototype.isComplete = function () {
        this.loadCount++;
        if (this.loadCount >= this.totalCount) {
            return true;
        }
        return false;
    };
    Asset.images = {};
    Asset.soundEffects = {};
    return Asset;
}());



/***/ }),

/***/ "./src/TsBackGround.ts":
/*!*****************************!*\
  !*** ./src/TsBackGround.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsBackGround": () => (/* binding */ TsBackGround)
/* harmony export */ });
/* harmony import */ var _TsControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TsControl */ "./src/TsControl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TsBackGround = (function (_super) {
    __extends(TsBackGround, _super);
    function TsBackGround(x, y, w, h) {
        var _this = _super.call(this, x, y, w, h) || this;
        _this._color1 = 0.25;
        _this._color2 = 0.5;
        _this._color3 = 0.75;
        _this._color4 = 0.99;
        _this._move = 0;
        _this._animationCount = 0.0005;
        return _this;
    }
    TsBackGround.prototype.render = function (ctx) {
        var r_color = ctx.createLinearGradient(this.x, -this.h * 4, this.x, this.h * 4);
        r_color.addColorStop(this._color1, 'hsl(180, 80%, 40%)');
        r_color.addColorStop(this._color2, 'hsl(240, 80%, 60%)');
        r_color.addColorStop(this._color3, 'hsl(300, 80%, 40%)');
        r_color.addColorStop(this._color4, 'hsl(240, 80%, 60%)');
        ctx.fillStyle = r_color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.beginPath();
        ctx.arc(this.w / 7 * 1, this.h + 100 - this._move * 1000, 50, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 1, this.h + 300 - this._move * 500, 10, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 2, this.h + 100 - this._move * 500, 10, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 3, this.h + 200 - this._move * 800, 30, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 4, this.h + 300 - this._move * 700, 20, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 5, this.h + 200 - this._move * 950, 50, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 5, this.h + 300 - this._move * 600, 20, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 6, this.h + 300 - this._move * 950, 10, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 1;
        ctx.stroke();
        this._color1 += this._animationCount;
        this._color2 += this._animationCount;
        this._color3 += this._animationCount;
        this._color4 += this._animationCount;
        if (this._color1 >= 1) {
            this._color1 = 0;
        }
        if (this._color2 >= 1) {
            this._color2 = 0;
        }
        if (this._color3 >= 1) {
            this._color3 = 0;
        }
        if (this._color4 >= 1) {
            this._color4 = 0;
        }
        this._move += this._animationCount;
        if (this._move * 1000 >= this.h * 2) {
            this._move = 0;
        }
    };
    return TsBackGround;
}(_TsControl__WEBPACK_IMPORTED_MODULE_0__.TsControl));



/***/ }),

/***/ "./src/TsButton.ts":
/*!*************************!*\
  !*** ./src/TsButton.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsButton": () => (/* binding */ TsButton)
/* harmony export */ });
/* harmony import */ var _TsControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TsControl */ "./src/TsControl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TsButton = (function (_super) {
    __extends(TsButton, _super);
    function TsButton(x, y, w, h, r) {
        var _this = _super.call(this, x, y, w, h) || this;
        _this._flashFlg = false;
        _this._color = 0;
        _this._lapelFlg = false;
        _this._animationCount = 0.1;
        _this._r = r;
        _this._active = false;
        return _this;
    }
    Object.defineProperty(TsButton.prototype, "flashFlg", {
        get: function () {
            return this._flashFlg;
        },
        set: function (flg) {
            this._flashFlg = flg;
        },
        enumerable: false,
        configurable: true
    });
    TsButton.prototype.draw = function (str, ctx) {
        var r_color = ctx.createLinearGradient(this.x, this.y + this.h, this.x, this.y);
        if (this._active) {
            r_color.addColorStop(0, "hsl(300, 100%, " + (74 + this._color) + "%)");
            r_color.addColorStop(1, "#7f7fff");
        }
        else {
            r_color.addColorStop(0, "#7f7fff");
            r_color.addColorStop(1, "hsl(300, 100%, " + (74 + this._color) + "%)");
        }
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.fillStyle = r_color;
        ctx.strokeStyle = r_color;
        ctx.moveTo(this.x, this.y + this._r);
        ctx.arc(this.x + this._r, this.y + this.h - this._r, this._r, Math.PI, Math.PI * 0.5, true);
        ctx.arc(this.x + this.w - this._r, this.y + this.h - this._r, this._r, Math.PI * 0.5, 0, true);
        ctx.arc(this.x + this.w - this._r, this.y + this._r, this._r, 0, Math.PI * 1.5, true);
        ctx.arc(this.x + this._r, this.y + this._r, this._r, Math.PI * 1.5, Math.PI, true);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.font = "bold " + this.h / 5 * 3 + "px serif";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(str, this.x + this.w / 2, this.y + this.h / 2);
        if (this._flashFlg) {
            if (this._color > 10) {
                this._lapelFlg = true;
            }
            else if (this._color < 0) {
                this._lapelFlg = false;
            }
            if (this._lapelFlg) {
                this._color -= this._animationCount;
            }
            else {
                this._color += this._animationCount;
            }
        }
    };
    TsButton.prototype.onMouseDown = function () {
        this._active = true;
    };
    TsButton.prototype.onMouseUp = function () {
        this._active = false;
    };
    TsButton.prototype.onMouseOut = function () {
        this._active = false;
    };
    return TsButton;
}(_TsControl__WEBPACK_IMPORTED_MODULE_0__.TsControl));



/***/ }),

/***/ "./src/TsClickEffect.ts":
/*!******************************!*\
  !*** ./src/TsClickEffect.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsClickEffect": () => (/* binding */ TsClickEffect)
/* harmony export */ });
var TsClickEffect = (function () {
    function TsClickEffect() {
        this._x = 0;
        this._y = 0;
        this._r1 = 8;
        this._r2 = 0;
        this._expand = false;
        this._move = 0;
        this._animationCount = 1;
    }
    TsClickEffect.prototype.onClick = function (x, y) {
        this._x = x;
        this._y = y;
        this._expand = true;
        this._move = 0;
    };
    TsClickEffect.prototype.draw = function (ctx) {
        if (this._expand) {
            ctx.beginPath();
            ctx.arc(this._x, this._y, this._r1 + this._move, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
            ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(this._x, this._y, this._r2 + this._move, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
            ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
            ctx.lineWidth = 1;
            ctx.stroke();
            this._move += this._animationCount;
            if (this._move >= (this._r1 * 3)) {
                this._expand = false;
            }
        }
    };
    return TsClickEffect;
}());



/***/ }),

/***/ "./src/TsControl.ts":
/*!**************************!*\
  !*** ./src/TsControl.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsControl": () => (/* binding */ TsControl)
/* harmony export */ });
var TsControl = (function () {
    function TsControl(x, y, w, h) {
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
    }
    Object.defineProperty(TsControl.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TsControl.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TsControl.prototype, "w", {
        get: function () {
            return this._w;
        },
        set: function (w) {
            this._w = w;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TsControl.prototype, "h", {
        get: function () {
            return this._h;
        },
        set: function (h) {
            this._h = h;
        },
        enumerable: false,
        configurable: true
    });
    TsControl.prototype.testHit = function (point) {
        return (this._x <= point.x && point.x <= this._x + this._w) &&
            (this._y <= point.y && point.y <= this._y + this._h);
    };
    return TsControl;
}());



/***/ }),

/***/ "./src/TsCursor.ts":
/*!*************************!*\
  !*** ./src/TsCursor.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsCursor": () => (/* binding */ TsCursor)
/* harmony export */ });
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asset */ "./src/Asset.ts");
/* harmony import */ var _TsClickEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TsClickEffect */ "./src/TsClickEffect.ts");


var TsCursor = (function () {
    function TsCursor(canvas) {
        this._canvas = canvas;
        this._x = -1;
        this._y = -1;
        this._clickEffect = new _TsClickEffect__WEBPACK_IMPORTED_MODULE_1__.TsClickEffect();
        this._addEventListener();
    }
    TsCursor.prototype._addEventListener = function () {
        var _this = this;
        this._canvas.addEventListener('mousemove', function (e) {
            var rect = _this._canvas.getBoundingClientRect();
            _this._x = e.clientX - rect.left - 5;
            _this._y = e.clientY - rect.top - 5;
        });
        this._canvas.addEventListener('mouseout', function (e) {
            _this._x = -50;
            _this._y = -50;
        });
        this._canvas.addEventListener('click', function (e) {
            var rect = _this._canvas.getBoundingClientRect();
            var x = e.clientX - rect.left - 5;
            var y = e.clientY - rect.top - 5;
            _this._clickEffect = new _TsClickEffect__WEBPACK_IMPORTED_MODULE_1__.TsClickEffect();
            _this._clickEffect.onClick(x, y);
        });
    };
    TsCursor.prototype.render = function (ctx) {
        this._clickEffect.draw(ctx);
        if (this._canvas.width > this._canvas.height) {
            ctx.drawImage(_Asset__WEBPACK_IMPORTED_MODULE_0__.Asset.images.cursor, this._x, this._y);
        }
    };
    return TsCursor;
}());



/***/ }),

/***/ "./src/TsGameMode.ts":
/*!***************************!*\
  !*** ./src/TsGameMode.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsGameMode": () => (/* binding */ TsGameMode)
/* harmony export */ });
var TsGameMode;
(function (TsGameMode) {
    TsGameMode[TsGameMode["TITLE"] = 0] = "TITLE";
    TsGameMode[TsGameMode["INPLAY"] = 1] = "INPLAY";
    TsGameMode[TsGameMode["RESULT"] = 2] = "RESULT";
})(TsGameMode || (TsGameMode = {}));


/***/ }),

/***/ "./src/TsGameStatus.ts":
/*!*****************************!*\
  !*** ./src/TsGameStatus.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsGameStatus": () => (/* binding */ TsGameStatus)
/* harmony export */ });
/* harmony import */ var _TsGameMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TsGameMode */ "./src/TsGameMode.ts");

var TsGameStatus = (function () {
    function TsGameStatus() {
    }
    Object.defineProperty(TsGameStatus, "gameMode", {
        get: function () {
            return TsGameStatus._gameMode;
        },
        set: function (gameMode) {
            var _a, _b, _c, _d, _e, _f, _g;
            switch (gameMode) {
                case _TsGameMode__WEBPACK_IMPORTED_MODULE_0__.TsGameMode.TITLE:
                    (_a = TsGameStatus.titleScreen) === null || _a === void 0 ? void 0 : _a.addEventListener();
                    (_b = TsGameStatus.resultScreen) === null || _b === void 0 ? void 0 : _b.removeEventListener();
                    break;
                case _TsGameMode__WEBPACK_IMPORTED_MODULE_0__.TsGameMode.INPLAY:
                    TsGameStatus.startTime = new Date();
                    (_c = TsGameStatus.titleScreen) === null || _c === void 0 ? void 0 : _c.removeEventListener();
                    (_d = TsGameStatus.pazzle) === null || _d === void 0 ? void 0 : _d.addEventListener();
                    (_e = TsGameStatus.pazzle) === null || _e === void 0 ? void 0 : _e.shufflePanel();
                    break;
                case _TsGameMode__WEBPACK_IMPORTED_MODULE_0__.TsGameMode.RESULT:
                    (_f = TsGameStatus.pazzle) === null || _f === void 0 ? void 0 : _f.removeEventListener();
                    (_g = TsGameStatus.resultScreen) === null || _g === void 0 ? void 0 : _g.addEventListener();
                    break;
            }
            TsGameStatus._gameMode = gameMode;
        },
        enumerable: false,
        configurable: true
    });
    TsGameStatus._gameMode = null;
    TsGameStatus.pazzle = null;
    TsGameStatus.cursor = null;
    TsGameStatus.titleScreen = null;
    TsGameStatus.resultScreen = null;
    TsGameStatus.volume = null;
    TsGameStatus.reset = null;
    TsGameStatus.masterVolume = 0.1;
    return TsGameStatus;
}());



/***/ }),

/***/ "./src/TsPanel.ts":
/*!************************!*\
  !*** ./src/TsPanel.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsPanel": () => (/* binding */ TsPanel)
/* harmony export */ });
/* harmony import */ var _TsControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TsControl */ "./src/TsControl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TsPanel = (function (_super) {
    __extends(TsPanel, _super);
    function TsPanel(x, y, w, h, r) {
        var _this = _super.call(this, x, y, w, h) || this;
        _this._bangou = "";
        _this._flashFlg = false;
        _this._repeatCount = 0;
        _this._color = 0;
        _this._lapelFlg = false;
        _this._animationCount = 2;
        _this._r = r;
        _this._active = false;
        return _this;
    }
    Object.defineProperty(TsPanel.prototype, "bangou", {
        get: function () {
            return this._bangou;
        },
        set: function (num) {
            this._bangou = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TsPanel.prototype, "flashFlg", {
        get: function () {
            return this._flashFlg;
        },
        set: function (flg) {
            this._flashFlg = flg;
        },
        enumerable: false,
        configurable: true
    });
    TsPanel.prototype.draw = function (ctx, panel, matchFlg) {
        if (panel === "") {
            return;
        }
        var r_color = ctx.createRadialGradient(this.x + this.w / 2, this.y + this.h / 2, 0, this.x + this.w / 2, this.y + this.h / 2, this.h / 2);
        if (this._active) {
            r_color.addColorStop(0, "hsl(240,100%," + (74 + this._color) + "%)");
            r_color.addColorStop(1, "hsl(300,100%," + (74 + this._color) + "%)");
        }
        else {
            r_color.addColorStop(0, "hsl(300,100%," + (74 + this._color) + "%)");
            r_color.addColorStop(1, "hsl(240,100%," + (74 + this._color) + "%)");
        }
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = r_color;
        ctx.fillStyle = r_color;
        ctx.moveTo(this.x, this.y + this._r);
        ctx.arc(this.x + this._r, this.y + this.h - this._r, this._r, Math.PI, Math.PI * 0.5, true);
        ctx.arc(this.x + this.w - this._r, this.y + this.h - this._r, this._r, Math.PI * 0.5, 0, true);
        ctx.arc(this.x + this.w - this._r, this.y + this._r, this._r, 0, Math.PI * 1.5, true);
        ctx.arc(this.x + this._r, this.y + this._r, this._r, Math.PI * 1.5, Math.PI, true);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        var x2 = this.x + 3;
        var y2 = this.y + 3;
        var w2 = this.w - 6;
        var h2 = this.h - 6;
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#e0c1ff";
        ctx.moveTo(x2, y2 + this._r);
        ctx.arc(x2 + this._r, y2 + h2 - this._r, this._r, Math.PI, Math.PI * 0.5, true);
        ctx.arc(x2 + w2 - this._r, y2 + h2 - this._r, this._r, Math.PI * 0.5, 0, true);
        ctx.arc(x2 + w2 - this._r, y2 + this._r, this._r, 0, Math.PI * 1.5, true);
        ctx.arc(x2 + this._r, y2 + this._r, this._r, Math.PI * 1.5, Math.PI, true);
        ctx.closePath();
        ctx.stroke();
        ctx.font = "bold " + (this.w - 25) + "px serif";
        ctx.lineWidth = 1;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if (matchFlg) {
            ctx.fillStyle = "#fff";
            ctx.fillText(panel, this.x + this.w / 2, this.y + this.h / 2);
        }
        else {
            ctx.strokeStyle = "#fff";
            ctx.strokeText(panel, this.x + this.w / 2, this.y + this.h / 2);
        }
        if (this._flashFlg && this._repeatCount < 3) {
            if (this._color > 10) {
                this._lapelFlg = true;
            }
            else if (this._color < 0) {
                this._lapelFlg = false;
                this._repeatCount++;
            }
            if (this._lapelFlg) {
                this._color -= this._animationCount;
            }
            else {
                this._color += this._animationCount;
            }
        }
        else {
            this._flashFlg = false;
            this._repeatCount = 0;
        }
        this.bangou = panel;
    };
    TsPanel.prototype.onMouseDown = function () {
        this._active = true;
    };
    TsPanel.prototype.onMouseUp = function () {
        this._active = false;
    };
    TsPanel.prototype.onMouseOut = function () {
        this._active = false;
    };
    return TsPanel;
}(_TsControl__WEBPACK_IMPORTED_MODULE_0__.TsControl));



/***/ }),

/***/ "./src/TsPazzle.ts":
/*!*************************!*\
  !*** ./src/TsPazzle.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsPazzle": () => (/* binding */ TsPazzle)
/* harmony export */ });
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asset */ "./src/Asset.ts");
/* harmony import */ var _TsPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TsPoint */ "./src/TsPoint.ts");
/* harmony import */ var _TsPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TsPanel */ "./src/TsPanel.ts");
/* harmony import */ var _TsTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TsTimer */ "./src/TsTimer.ts");
/* harmony import */ var _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TsGameStatus */ "./src/TsGameStatus.ts");
/* harmony import */ var _TsGameMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TsGameMode */ "./src/TsGameMode.ts");






var TsPazzle = (function () {
    function TsPazzle(canvas) {
        var _this = this;
        this._defaultPanels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", ""];
        this._panels = [];
        this._items = [];
        this._blank = 15;
        this._clickEventHandler = function (e) {
            var rect = _this._canvas.getBoundingClientRect();
            var point = new _TsPoint__WEBPACK_IMPORTED_MODULE_1__.TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
            for (var i = 0; i < _this._items.length; i++) {
                if (_this._items[i].testHit(point)) {
                    if (_this._items[i].bangou !== "") {
                        _Asset__WEBPACK_IMPORTED_MODULE_0__.Asset.soundEffects.pyui.volume = _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.masterVolume;
                        _Asset__WEBPACK_IMPORTED_MODULE_0__.Asset.soundEffects.pyui.play();
                        var toReplaceNum = _this._changePanel(i);
                        var target = _this._rowChecker(toReplaceNum);
                        for (var j = 0; j < target.length; j++) {
                            _this._items[target[j]].flashFlg = true;
                        }
                        if (target.length > 0) {
                            _Asset__WEBPACK_IMPORTED_MODULE_0__.Asset.soundEffects.popiropan.volume = _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.masterVolume;
                            _Asset__WEBPACK_IMPORTED_MODULE_0__.Asset.soundEffects.popiropan.play();
                        }
                        if (_this._isFinish()) {
                            _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.gameMode = _TsGameMode__WEBPACK_IMPORTED_MODULE_5__.TsGameMode.RESULT;
                            _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.totalTime = _this._timer.time;
                            break;
                        }
                    }
                    break;
                }
            }
        };
        this._mouseDownEventHandler = function (e) {
            var rect = _this._canvas.getBoundingClientRect();
            var point = new _TsPoint__WEBPACK_IMPORTED_MODULE_1__.TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
            for (var i = 0; i < _this._items.length; i++) {
                if (_this._items[i].testHit(point)) {
                    if (_this._items[i].bangou !== "") {
                        _this._items[i].onMouseDown();
                    }
                }
            }
        };
        this._mouseUpEventHandler = function (e) {
            for (var i = 0; i < _this._items.length; i++) {
                _this._items[i].onMouseUp();
            }
        };
        this._mouseOutEventHandler = function (e) {
            for (var i = 0; i < _this._items.length; i++) {
                _this._items[i].onMouseUp();
            }
        };
        this._canvas = canvas;
        this._panels = Array.from(this._defaultPanels);
        this._createPanel();
        this._timer = new _TsTimer__WEBPACK_IMPORTED_MODULE_3__.TsTimer(canvas.width - 10, 20, 100, 30);
    }
    TsPazzle.prototype.addEventListener = function () {
        this._canvas.addEventListener('click', this._clickEventHandler);
        this._canvas.addEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.addEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.addEventListener('mouseout', this._mouseOutEventHandler);
    };
    TsPazzle.prototype.removeEventListener = function () {
        this._canvas.removeEventListener('click', this._clickEventHandler);
        this._canvas.removeEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.removeEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.removeEventListener('mouseout', this._mouseOutEventHandler);
    };
    TsPazzle.prototype._createPanel = function () {
        var center = this._canvas.width / 2;
        var panelSize = this._canvas.width / 8;
        if (this._canvas.width < this._canvas.height) {
            panelSize = this._canvas.width / 5;
        }
        var space = 5;
        var x1 = center - (panelSize * 2 + space * 3);
        var x2 = center - (panelSize + space);
        var x3 = center + space;
        var x4 = center + (panelSize + space * 3);
        var marginTop = 50;
        var y1 = marginTop;
        var y2 = marginTop + (panelSize + space * 2);
        var y3 = marginTop + (panelSize + space * 2) * 2;
        var y4 = marginTop + (panelSize + space * 2) * 3;
        var panel1 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x1, y1, panelSize, panelSize, 10);
        this._items.push(panel1);
        var panel2 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x2, y1, panelSize, panelSize, 10);
        this._items.push(panel2);
        var panel3 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x3, y1, panelSize, panelSize, 10);
        this._items.push(panel3);
        var panel4 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x4, y1, panelSize, panelSize, 10);
        this._items.push(panel4);
        var panel5 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x1, y2, panelSize, panelSize, 10);
        this._items.push(panel5);
        var panel6 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x2, y2, panelSize, panelSize, 10);
        this._items.push(panel6);
        var panel7 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x3, y2, panelSize, panelSize, 10);
        this._items.push(panel7);
        var panel8 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x4, y2, panelSize, panelSize, 10);
        this._items.push(panel8);
        var panel9 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x1, y3, panelSize, panelSize, 10);
        this._items.push(panel9);
        var panel10 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x2, y3, panelSize, panelSize, 10);
        this._items.push(panel10);
        var panel11 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x3, y3, panelSize, panelSize, 10);
        this._items.push(panel11);
        var panel12 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x4, y3, panelSize, panelSize, 10);
        this._items.push(panel12);
        var panel13 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x1, y4, panelSize, panelSize, 10);
        this._items.push(panel13);
        var panel14 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x2, y4, panelSize, panelSize, 10);
        this._items.push(panel14);
        var panel15 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x3, y4, panelSize, panelSize, 10);
        this._items.push(panel15);
        var panel16 = new _TsPanel__WEBPACK_IMPORTED_MODULE_2__.TsPanel(x4, y4, panelSize, panelSize, 10);
        this._items.push(panel16);
    };
    TsPazzle.prototype.render = function (ctx) {
        var _this = this;
        this._items.forEach(function (_, i) {
            _this._items[i].draw(ctx, _this._panels[i], _this._isMatchPanel(_this._defaultPanels[i], _this._panels[i]));
        });
        if (_TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.gameMode === _TsGameMode__WEBPACK_IMPORTED_MODULE_5__.TsGameMode.INPLAY) {
            var time = (Date.now() - _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.startTime.getTime()) / 1000;
            this._timer.draw(time, ctx);
        }
        else {
            this._timer.draw(this._timer.time, ctx);
        }
    };
    TsPazzle.prototype._changePanel = function (select) {
        if (select === 0) {
            if (1 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (4 === this._blank) {
                return this._replace(select, this._blank);
            }
        }
        else if (select === 1 || select === 2) {
            if (select - 1 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (select + 1 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (select + 4 === this._blank) {
                return this._replace(select, this._blank);
            }
        }
        else if (select === 3) {
            if (2 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (7 === this._blank) {
                return this._replace(select, this._blank);
            }
        }
        else if (select === 4 || select === 8) {
            if (select - 4 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (select + 1 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (select + 4 === this._blank) {
                return this._replace(select, this._blank);
            }
        }
        else if (select === 5 || select === 6 || select === 9 || select === 10) {
            if (select - 1 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (select - 4 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (select + 1 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (select + 4 === this._blank) {
                return this._replace(select, this._blank);
            }
        }
        else if (select === 7 || select === 11) {
            if (select - 1 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (select - 4 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (select + 4 === this._blank) {
                return this._replace(select, this._blank);
            }
        }
        else if (select === 12) {
            if (8 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (13 === this._blank) {
                return this._replace(select, this._blank);
            }
        }
        else if (select === 13 || select === 14) {
            if (select - 1 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (select - 4 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (select + 1 === this._blank) {
                return this._replace(select, this._blank);
            }
        }
        else if (select === 15) {
            if (14 === this._blank) {
                return this._replace(select, this._blank);
            }
            else if (11 === this._blank) {
                return this._replace(select, this._blank);
            }
        }
        return -1;
    };
    TsPazzle.prototype._replace = function (select, blank) {
        var tmp = this._panels[select];
        this._panels[select] = "";
        this._blank = select;
        this._panels[blank] = tmp;
        return blank;
    };
    TsPazzle.prototype.shufflePanel = function () {
        var difficulty = 1000;
        for (var i = 0; i < difficulty; i++) {
            var random = Math.floor(Math.random() * 15);
            this._changePanel(random);
        }
    };
    TsPazzle.prototype._rowChecker = function (replaceNum) {
        if (replaceNum < 0) {
            return [];
        }
        switch (replaceNum) {
            case 0:
            case 1:
            case 2:
            case 3:
                for (var i = 0; i < 4; i++) {
                    if (!this._isMatchPanel(this._defaultPanels[i], this._panels[i])) {
                        return [];
                    }
                }
                return [0, 1, 2, 3];
            case 4:
            case 5:
            case 6:
            case 7:
                for (var i = 4; i < 8; i++) {
                    if (!this._isMatchPanel(this._defaultPanels[i], this._panels[i])) {
                        return [];
                    }
                }
                return [4, 5, 6, 7];
            case 8:
            case 9:
            case 10:
            case 11:
                for (var i = 8; i < 12; i++) {
                    if (!this._isMatchPanel(this._defaultPanels[i], this._panels[i])) {
                        return [];
                    }
                }
                return [8, 9, 10, 11];
            case 12:
            case 13:
            case 14:
            case 15:
                for (var i = 12; i < 16; i++) {
                    if (!this._isMatchPanel(this._defaultPanels[i], this._panels[i])) {
                        return [];
                    }
                }
                return [12, 13, 14, 15];
        }
        return [];
    };
    TsPazzle.prototype._isFinish = function () {
        for (var i = 0; i < this._panels.length; i++) {
            if (!this._isMatchPanel(this._defaultPanels[i], this._panels[i])) {
                return false;
            }
        }
        return true;
    };
    TsPazzle.prototype._isMatchPanel = function (panel1, panel2) {
        if (panel1 !== panel2) {
            return false;
        }
        return true;
    };
    return TsPazzle;
}());



/***/ }),

/***/ "./src/TsPoint.ts":
/*!************************!*\
  !*** ./src/TsPoint.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsPoint": () => (/* binding */ TsPoint)
/* harmony export */ });
var TsPoint = (function () {
    function TsPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return TsPoint;
}());



/***/ }),

/***/ "./src/TsResetButton.ts":
/*!******************************!*\
  !*** ./src/TsResetButton.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsResetButton": () => (/* binding */ TsResetButton)
/* harmony export */ });
/* harmony import */ var _TsButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TsButton */ "./src/TsButton.ts");
/* harmony import */ var _TsPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TsPoint */ "./src/TsPoint.ts");
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Asset */ "./src/Asset.ts");
/* harmony import */ var _TsGameMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TsGameMode */ "./src/TsGameMode.ts");
/* harmony import */ var _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TsGameStatus */ "./src/TsGameStatus.ts");





var TsResetButton = (function () {
    function TsResetButton(canvas) {
        var _this = this;
        this._clickEventHandler = function (e) {
            var rect = _this._canvas.getBoundingClientRect();
            var point = new _TsPoint__WEBPACK_IMPORTED_MODULE_1__.TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
            if (_this._button.testHit(point)) {
                _Asset__WEBPACK_IMPORTED_MODULE_2__.Asset.soundEffects.papa.volume = _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.masterVolume;
                _Asset__WEBPACK_IMPORTED_MODULE_2__.Asset.soundEffects.papa.play();
                _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.gameMode = _TsGameMode__WEBPACK_IMPORTED_MODULE_3__.TsGameMode.TITLE;
            }
        };
        this._mouseDownEventHandler = function (e) {
            var rect = _this._canvas.getBoundingClientRect();
            var point = new _TsPoint__WEBPACK_IMPORTED_MODULE_1__.TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
            if (_this._button.testHit(point)) {
                _this._button.onMouseDown();
            }
        };
        this._mouseUpEventHandler = function (e) {
            _this._button.onMouseUp();
        };
        this._mouseOutEventHandler = function (e) {
            _this._button.onMouseOut();
        };
        this._canvas = canvas;
        var center = this._canvas.width / 2;
        this._button = new _TsButton__WEBPACK_IMPORTED_MODULE_0__.TsButton(this._canvas.width - 200, 460, 80, 30, 0);
        this._addEventListener();
    }
    TsResetButton.prototype._addEventListener = function () {
        this._canvas.addEventListener('click', this._clickEventHandler);
        this._canvas.addEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.addEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.addEventListener('mouseout', this._mouseOutEventHandler);
    };
    TsResetButton.prototype.render = function (ctx) {
        this._button.draw("RESET", ctx);
    };
    return TsResetButton;
}());



/***/ }),

/***/ "./src/TsResultScreen.ts":
/*!*******************************!*\
  !*** ./src/TsResultScreen.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsResultScreen": () => (/* binding */ TsResultScreen)
/* harmony export */ });
/* harmony import */ var _TsButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TsButton */ "./src/TsButton.ts");
/* harmony import */ var _TsPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TsPoint */ "./src/TsPoint.ts");
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Asset */ "./src/Asset.ts");
/* harmony import */ var _TsGameMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TsGameMode */ "./src/TsGameMode.ts");
/* harmony import */ var _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TsGameStatus */ "./src/TsGameStatus.ts");





var TsResultScreen = (function () {
    function TsResultScreen(canvas) {
        var _this = this;
        this._move = 0;
        this._animationCount = 30;
        this._delay = false;
        this._delayCount = 0;
        this._clickEventHandler = function (e) {
            var rect = _this._canvas.getBoundingClientRect();
            var point = new _TsPoint__WEBPACK_IMPORTED_MODULE_1__.TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
            if (_this._button.testHit(point)) {
                _Asset__WEBPACK_IMPORTED_MODULE_2__.Asset.soundEffects.papa.volume = _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.masterVolume;
                _Asset__WEBPACK_IMPORTED_MODULE_2__.Asset.soundEffects.papa.play();
                _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.gameMode = _TsGameMode__WEBPACK_IMPORTED_MODULE_3__.TsGameMode.TITLE;
            }
        };
        this._mouseDownEventHandler = function (e) {
            var rect = _this._canvas.getBoundingClientRect();
            var point = new _TsPoint__WEBPACK_IMPORTED_MODULE_1__.TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
            if (_this._button.testHit(point)) {
                _this._button.onMouseDown();
            }
        };
        this._mouseUpEventHandler = function (e) {
            _this._button.onMouseUp();
        };
        this._mouseOutEventHandler = function (e) {
            _this._button.onMouseOut();
        };
        this._canvas = canvas;
        var center = this._canvas.width / 2;
        this._button = new _TsButton__WEBPACK_IMPORTED_MODULE_0__.TsButton(center - 125, 280, 250, 80, 10);
        this._button.flashFlg = true;
        this._delay = true;
    }
    TsResultScreen.prototype.reset = function () {
        this._move = 0;
        this._delayCount = 0;
        this._delay = true;
    };
    TsResultScreen.prototype.addEventListener = function () {
        this._canvas.addEventListener('click', this._clickEventHandler);
        this._canvas.addEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.addEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.addEventListener('mouseout', this._mouseOutEventHandler);
    };
    TsResultScreen.prototype.removeEventListener = function () {
        this._canvas.removeEventListener('click', this._clickEventHandler);
        this._canvas.removeEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.removeEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.removeEventListener('mouseout', this._mouseOutEventHandler);
    };
    TsResultScreen.prototype.render = function (ctx) {
        if (this._delay) {
            if (this._delayCount >= this._animationCount * 100) {
                this._delay = false;
                _Asset__WEBPACK_IMPORTED_MODULE_2__.Asset.soundEffects.zyan.volume = _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.masterVolume;
                _Asset__WEBPACK_IMPORTED_MODULE_2__.Asset.soundEffects.zyan.play();
            }
            this._delayCount += this._animationCount;
            return;
        }
        ctx.fillStyle = "#99ccff";
        ctx.fillRect(this._canvas.width - this._move, this._canvas.height / 5 * 2, this._move, this._canvas.height / 5 * 2);
        ctx.fillStyle = "#ff7fbf";
        ctx.fillRect(this._canvas.width - this._move, this._canvas.height / 5 * 2 + 10, this._move, 10);
        ctx.fillRect(this._canvas.width - this._move, this._canvas.height / 5 * 4 - 20, this._move, 10);
        if (this._move >= this._canvas.width) {
            ctx.font = "52px Shrikhand";
            ctx.fillStyle = "#ff7fbf";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("TIME", this._canvas.width / 2, this._canvas.height / 5 * 2);
            ctx.fillText(_TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.totalTime.toFixed(3), this._canvas.width / 2, this._canvas.height / 2);
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = 3;
            ctx.strokeText("TIME", this._canvas.width / 2, this._canvas.height / 5 * 2);
            ctx.strokeText(_TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.totalTime.toFixed(3), this._canvas.width / 2, this._canvas.height / 2);
            this._button.draw("RETRY", ctx);
        }
        if (this._move <= this._canvas.width) {
            this._move += this._animationCount;
        }
    };
    return TsResultScreen;
}());



/***/ }),

/***/ "./src/TsSlider.ts":
/*!*************************!*\
  !*** ./src/TsSlider.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsSlider": () => (/* binding */ TsSlider)
/* harmony export */ });
/* harmony import */ var _TsControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TsControl */ "./src/TsControl.ts");
/* harmony import */ var _TsGameStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TsGameStatus */ "./src/TsGameStatus.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TsSlider = (function (_super) {
    __extends(TsSlider, _super);
    function TsSlider(x, y, w, h) {
        var _this = _super.call(this, x, y, w, h) || this;
        _this.RANGE = 30;
        _this.max = x + _this.RANGE;
        _this.min = x - _this.RANGE;
        return _this;
    }
    TsSlider.prototype.drag = function (x) {
        if (this.min < x && this.max > x) {
            this.x = x;
            var value = (this.max - this.min) / 10;
            var volume = Math.floor(((x - this.min) / value * 0.1) * 100) / 100;
            _TsGameStatus__WEBPACK_IMPORTED_MODULE_1__.TsGameStatus.masterVolume = volume;
        }
    };
    TsSlider.prototype.draw = function (ctx) {
        ctx.fillStyle = "#ff7fff";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    };
    return TsSlider;
}(_TsControl__WEBPACK_IMPORTED_MODULE_0__.TsControl));



/***/ }),

/***/ "./src/TsTimer.ts":
/*!************************!*\
  !*** ./src/TsTimer.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsTimer": () => (/* binding */ TsTimer)
/* harmony export */ });
/* harmony import */ var _TsControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TsControl */ "./src/TsControl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TsTimer = (function (_super) {
    __extends(TsTimer, _super);
    function TsTimer(x, y, w, h) {
        var _this = _super.call(this, x, y, w, h) || this;
        _this.time = 0;
        return _this;
    }
    TsTimer.prototype.draw = function (num, ctx) {
        this.time = num;
        ctx.font = "bold 30px serif";
        ctx.fillStyle = "#ff7fbf";
        ctx.textAlign = "right";
        ctx.fillText(num.toFixed(3), this.x, this.y);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#ff7fbf";
        ctx.strokeText(num.toFixed(3), this.x, this.y);
    };
    return TsTimer;
}(_TsControl__WEBPACK_IMPORTED_MODULE_0__.TsControl));



/***/ }),

/***/ "./src/TsTitleScreen.ts":
/*!******************************!*\
  !*** ./src/TsTitleScreen.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsTitleScreen": () => (/* binding */ TsTitleScreen)
/* harmony export */ });
/* harmony import */ var _TsButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TsButton */ "./src/TsButton.ts");
/* harmony import */ var _TsPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TsPoint */ "./src/TsPoint.ts");
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Asset */ "./src/Asset.ts");
/* harmony import */ var _TsGameMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TsGameMode */ "./src/TsGameMode.ts");
/* harmony import */ var _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TsGameStatus */ "./src/TsGameStatus.ts");





var TsTitleScreen = (function () {
    function TsTitleScreen(canvas) {
        var _this = this;
        this._clickEventHandler = function (e) {
            var rect = _this._canvas.getBoundingClientRect();
            var point = new _TsPoint__WEBPACK_IMPORTED_MODULE_1__.TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
            if (_this._button.testHit(point)) {
                _Asset__WEBPACK_IMPORTED_MODULE_2__.Asset.soundEffects.papa.volume = _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.masterVolume;
                _Asset__WEBPACK_IMPORTED_MODULE_2__.Asset.soundEffects.papa.play();
                _TsGameStatus__WEBPACK_IMPORTED_MODULE_4__.TsGameStatus.gameMode = _TsGameMode__WEBPACK_IMPORTED_MODULE_3__.TsGameMode.INPLAY;
            }
        };
        this._mouseDownEventHandler = function (e) {
            var rect = _this._canvas.getBoundingClientRect();
            var point = new _TsPoint__WEBPACK_IMPORTED_MODULE_1__.TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
            if (_this._button.testHit(point)) {
                _this._button.onMouseDown();
            }
        };
        this._mouseUpEventHandler = function (e) {
            _this._button.onMouseUp();
        };
        this._mouseOutEventHandler = function (e) {
            _this._button.onMouseOut();
        };
        this._canvas = canvas;
        var center = this._canvas.width / 2;
        this._button = new _TsButton__WEBPACK_IMPORTED_MODULE_0__.TsButton(center - 100, 300, 200, 80, 10);
        this._button.flashFlg = true;
    }
    TsTitleScreen.prototype.addEventListener = function () {
        this._canvas.addEventListener('click', this._clickEventHandler);
        this._canvas.addEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.addEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.addEventListener('mouseout', this._mouseOutEventHandler);
    };
    TsTitleScreen.prototype.removeEventListener = function () {
        this._canvas.removeEventListener('click', this._clickEventHandler);
        this._canvas.removeEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.removeEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.removeEventListener('mouseout', this._mouseOutEventHandler);
    };
    TsTitleScreen.prototype.render = function (ctx) {
        if (this._canvas.width < this._canvas.height) {
            var excess = (_Asset__WEBPACK_IMPORTED_MODULE_2__.Asset.images.title2.width - this._canvas.width) / 2;
            ctx.drawImage(_Asset__WEBPACK_IMPORTED_MODULE_2__.Asset.images.title2, -excess, 0);
        }
        else {
            var excess = (_Asset__WEBPACK_IMPORTED_MODULE_2__.Asset.images.title1.width - this._canvas.width) / 2;
            ctx.drawImage(_Asset__WEBPACK_IMPORTED_MODULE_2__.Asset.images.title1, -excess, 0);
        }
        this._button.draw("PLAY", ctx);
    };
    return TsTitleScreen;
}());



/***/ }),

/***/ "./src/TsVolume.ts":
/*!*************************!*\
  !*** ./src/TsVolume.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsVolume": () => (/* binding */ TsVolume)
/* harmony export */ });
/* harmony import */ var _TsSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TsSlider */ "./src/TsSlider.ts");
/* harmony import */ var _TsPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TsPoint */ "./src/TsPoint.ts");


var TsVolume = (function () {
    function TsVolume(canvas) {
        this._canvas = canvas;
        this._slider = new _TsSlider__WEBPACK_IMPORTED_MODULE_0__.TsSlider(this._canvas.width - 55, this._canvas.height - 35, 10, 20);
        this._addEventListener();
    }
    TsVolume.prototype._addEventListener = function () {
        var _this = this;
        this._canvas.addEventListener('mousedown', function (e) {
            var rect = _this._canvas.getBoundingClientRect();
            var point = new _TsPoint__WEBPACK_IMPORTED_MODULE_1__.TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
            if (_this._slider.testHit(point)) {
                var onMouseMove_1 = function (ev) {
                    var x = ev.clientX - rect.left - 5;
                    _this._slider.drag(x);
                };
                _this._canvas.addEventListener('mousemove', onMouseMove_1);
                var onMouseUp_1 = function () {
                    _this._canvas.removeEventListener('mousemove', onMouseMove_1);
                    _this._canvas.removeEventListener('mouseup', onMouseUp_1);
                };
                _this._canvas.addEventListener('mouseup', onMouseUp_1);
                var onMouseOut_1 = function () {
                    _this._canvas.removeEventListener('mousemove', onMouseMove_1);
                    _this._canvas.removeEventListener('mouseup', onMouseUp_1);
                    _this._canvas.removeEventListener('mouseout', onMouseOut_1);
                };
                _this._canvas.addEventListener('mouseout', onMouseOut_1);
            }
        });
    };
    TsVolume.prototype.render = function (ctx) {
        ctx.fillStyle = "#7f7fff";
        var p1 = { x: this._canvas.width - 25, y: this._canvas.height - 30 };
        var p2 = { x: this._canvas.width - 80, y: this._canvas.height - 20 };
        var p3 = { x: this._canvas.width - 25, y: this._canvas.height - 20 };
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = "#7f7fff";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = "7f7fff";
        ctx.fill();
        this._slider.draw(ctx);
        ctx.font = "bold 30px serif";
        ctx.fillStyle = "#7f7fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("♪", p2.x - 10, p1.y + 5);
    };
    return TsVolume;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asset */ "./src/Asset.ts");
/* harmony import */ var _TsBackGround__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TsBackGround */ "./src/TsBackGround.ts");
/* harmony import */ var _TsGameMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TsGameMode */ "./src/TsGameMode.ts");
/* harmony import */ var _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TsGameStatus */ "./src/TsGameStatus.ts");
/* harmony import */ var _TsPazzle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TsPazzle */ "./src/TsPazzle.ts");
/* harmony import */ var _TsCursor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TsCursor */ "./src/TsCursor.ts");
/* harmony import */ var _TsTitleScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TsTitleScreen */ "./src/TsTitleScreen.ts");
/* harmony import */ var _TsResultScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TsResultScreen */ "./src/TsResultScreen.ts");
/* harmony import */ var _TsVolume__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TsVolume */ "./src/TsVolume.ts");
/* harmony import */ var _TsResetButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TsResetButton */ "./src/TsResetButton.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var Main = (function () {
    function Main() {
        this.bg = null;
        this.canvas = document.getElementById("15pazzle");
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.context = this.canvas.getContext('2d');
    }
    Main.prototype.main = function () {
        return __awaiter(this, void 0, void 0, function () {
            var asset, loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.canvas.ondragstart = function () {
                            return false;
                        };
                        this.canvas.oncontextmenu = function () {
                            return false;
                        };
                        asset = new _Asset__WEBPACK_IMPORTED_MODULE_0__.Asset();
                        return [4, asset.loadAssets()];
                    case 1:
                        _a.sent();
                        loading = document.querySelector('.loading');
                        loading.style.display = 'none';
                        this.bg = new _TsBackGround__WEBPACK_IMPORTED_MODULE_1__.TsBackGround(0, 0, this.canvas.width, this.canvas.height);
                        _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.titleScreen = new _TsTitleScreen__WEBPACK_IMPORTED_MODULE_6__.TsTitleScreen(this.canvas);
                        _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.pazzle = new _TsPazzle__WEBPACK_IMPORTED_MODULE_4__.TsPazzle(this.canvas);
                        _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.cursor = new _TsCursor__WEBPACK_IMPORTED_MODULE_5__.TsCursor(this.canvas);
                        _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.resultScreen = new _TsResultScreen__WEBPACK_IMPORTED_MODULE_7__.TsResultScreen(this.canvas);
                        _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.volume = new _TsVolume__WEBPACK_IMPORTED_MODULE_8__.TsVolume(this.canvas);
                        _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.reset = new _TsResetButton__WEBPACK_IMPORTED_MODULE_9__.TsResetButton(this.canvas);
                        _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.gameMode = _TsGameMode__WEBPACK_IMPORTED_MODULE_2__.TsGameMode.TITLE;
                        requestAnimationFrame(function () { return _this.update(); });
                        return [2];
                }
            });
        });
    };
    Main.prototype.update = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        requestAnimationFrame(function () { return _this.update(); });
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        (_a = this.bg) === null || _a === void 0 ? void 0 : _a.render(this.context);
        switch (_TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.gameMode) {
            case _TsGameMode__WEBPACK_IMPORTED_MODULE_2__.TsGameMode.TITLE:
                (_b = _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.resultScreen) === null || _b === void 0 ? void 0 : _b.reset();
                (_c = _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.titleScreen) === null || _c === void 0 ? void 0 : _c.render(this.context);
                break;
            case _TsGameMode__WEBPACK_IMPORTED_MODULE_2__.TsGameMode.INPLAY:
                (_d = _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.pazzle) === null || _d === void 0 ? void 0 : _d.render(this.context);
                break;
            case _TsGameMode__WEBPACK_IMPORTED_MODULE_2__.TsGameMode.RESULT:
                (_e = _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.pazzle) === null || _e === void 0 ? void 0 : _e.render(this.context);
                (_f = _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.resultScreen) === null || _f === void 0 ? void 0 : _f.render(this.context);
                break;
        }
        (_g = _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.volume) === null || _g === void 0 ? void 0 : _g.render(this.context);
        (_h = _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.reset) === null || _h === void 0 ? void 0 : _h.render(this.context);
        (_j = _TsGameStatus__WEBPACK_IMPORTED_MODULE_3__.TsGameStatus.cursor) === null || _j === void 0 ? void 0 : _j.render(this.context);
    };
    return Main;
}());
window.addEventListener('load', function () {
    new Main().main();
});

})();

/******/ })()
;
//# sourceMappingURL=15pazzle.js.map