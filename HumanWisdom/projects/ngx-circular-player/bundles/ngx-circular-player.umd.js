(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-circular-player', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-circular-player'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var RADIUS = 50;
    var NgxCircularPlayerComponent = /** @class */ (function () {
        function NgxCircularPlayerComponent() {
            this.radius = 120;
            this.stroke = 20;
            this.innerStroke = 2;
            this.strokeColor = '#fff';
            this.progressStrokeColor = '#858585';
            this.innerStrokeColor = '#eee';
            this.playing = false;
        }
        NgxCircularPlayerComponent.prototype.toggle = function () {
            this.playing = !this.playing;
            if (this.playing) {
                this.audio.nativeElement.play();
            }
            else {
                this.audio.nativeElement.pause();
            }
        };
        Object.defineProperty(NgxCircularPlayerComponent.prototype, "arrowStyle", {
            get: function () {
                var topWidth = this.radius / 8;
                var bottomWidth = this.radius / 8;
                var leftWidth = this.radius / 5;
                return {
                    'border-top-width': topWidth + "px",
                    'border-bottom-width': bottomWidth + "px",
                    'border-left-width': leftWidth + "px"
                };
            },
            enumerable: true,
            configurable: true
        });
        NgxCircularPlayerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            var progress = this.progress.nativeElement;
            // During SSR we don't need to do anything special here.
            if (!progress || typeof progress.getTotalLength !== 'function') {
                return;
            }
            var totalLength = progress.getTotalLength();
            var audio = this.audio.nativeElement;
            progress.setAttribute('stroke-dasharray', totalLength);
            progress.setAttribute('stroke-dashoffset', totalLength);
            audio.addEventListener('pause', function () { return (_this.playing = false); });
            audio.addEventListener('play', function () { return (_this.playing = true); });
            audio.addEventListener('timeupdate', function () {
                var currentTime = audio.currentTime;
                var maxduration = audio.duration;
                var calc = totalLength - (currentTime / maxduration) * totalLength;
                progress.setAttribute('stroke-dashoffset', calc);
            });
        };
        NgxCircularPlayerComponent.prototype.seek = function (evnt) {
            var ratio = this._calculateAngle(evnt) / 360;
            var audio = this.audio.nativeElement;
            var seekTo = ratio * audio.duration;
            audio.currentTime = seekTo;
        };
        Object.defineProperty(NgxCircularPlayerComponent.prototype, "centerX", {
            get: function () {
                return 50;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCircularPlayerComponent.prototype, "centerY", {
            get: function () {
                return 50;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCircularPlayerComponent.prototype, "circleRadius", {
            get: function () {
                return 32;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCircularPlayerComponent.prototype, "pauseLeftBarSize", {
            get: function () {
                return {
                    width: this.radius / 10 + "px",
                    height: this.radius / 3.5 + "px",
                    left: "calc(50% - " + this.radius / 12 + "px)"
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCircularPlayerComponent.prototype, "pauseRightBarSize", {
            get: function () {
                return {
                    width: this.radius / 10 + "px",
                    height: this.radius / 3.5 + "px",
                    left: "calc(50% + " + this.radius / 12 + "px)"
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxCircularPlayerComponent.prototype, "playButtonRadius", {
            get: function () {
                return this.radius - this.radius / 3 + 'px';
            },
            enumerable: true,
            configurable: true
        });
        NgxCircularPlayerComponent.prototype._calculateAngle = function (evnt) {
            var x = (RADIUS * 2) / (this.radius / evnt.offsetX);
            var y = (RADIUS * 2) / (this.radius / evnt.offsetY);
            var slope = (RADIUS - y) / (RADIUS - x);
            var angle = 180 * (Math.abs(Math.atan(slope)) / Math.PI);
            if (x <= RADIUS && y >= RADIUS) {
                return angle;
            }
            if (x > RADIUS && y >= RADIUS) {
                return 180 - angle;
            }
            if (x > RADIUS && y <= RADIUS) {
                return 180 + angle;
            }
            return 180 + (180 - angle);
        };
        __decorate([
            core.Input()
        ], NgxCircularPlayerComponent.prototype, "radius", void 0);
        __decorate([
            core.Input()
        ], NgxCircularPlayerComponent.prototype, "stroke", void 0);
        __decorate([
            core.Input()
        ], NgxCircularPlayerComponent.prototype, "innerStroke", void 0);
        __decorate([
            core.Input()
        ], NgxCircularPlayerComponent.prototype, "source", void 0);
        __decorate([
            core.Input()
        ], NgxCircularPlayerComponent.prototype, "strokeColor", void 0);
        __decorate([
            core.Input()
        ], NgxCircularPlayerComponent.prototype, "progressStrokeColor", void 0);
        __decorate([
            core.Input()
        ], NgxCircularPlayerComponent.prototype, "innerStrokeColor", void 0);
        __decorate([
            core.ViewChild('audio')
        ], NgxCircularPlayerComponent.prototype, "audio", void 0);
        __decorate([
            core.ViewChild('progress')
        ], NgxCircularPlayerComponent.prototype, "progress", void 0);
        NgxCircularPlayerComponent = __decorate([
            core.Component({
                // tslint:disable component-selector
                selector: 'ngx-circular-player',
                template: "<button class=\"play\" [style.width]=\"playButtonRadius\" [style.height]=\"playButtonRadius\" (click)=\"toggle()\">\n  <div [class.hidden-arrow]=\"playing\"\n       [ngStyle]=\"arrowStyle\"\n    class=\"arrow\">\n  </div>\n  <span [class.hidden]=\"!playing\" class=\"pause\">\n    <span class=\"before\" [ngStyle]=\"pauseLeftBarSize\"></span>\n    <span class=\"after\" [ngStyle]=\"pauseRightBarSize\"></span>\n  </span>\n</button>\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 100 100\"  [style.width]=\"radius\">\n  <circle [attr.cx]=\"centerX\" [attr.cy]=\"centerY\" [attr.r]=\"circleRadius\" [attr.stroke]=\"innerStrokeColor\" fill=\"transparent\" [attr.stroke-width]=\"innerStroke\" />\n\n  <path\n    (click)=\"seek($event)\"\n    pointer-events=\"stroke\"\n    d=\"M 50 50\n       m -50, 0\n       a 50,50 0 1,0 100,0\n       a 50,50 0 1,0 -100,0\"\n    stroke-miterlimit=\"10\"\n    style=\"cursor: pointer\"\n    fill=\"transparent\"\n    [attr.stroke]=\"progressStrokeColor\" [attr.stroke-width]=\"stroke\"\n    />\n\n  <path\n    #progress\n    d=\"M 50 50\n       m -50, 0\n       a 50,50 0 1,0 100,0\n       a 50,50 0 1,0 -100,0\"\n    [attr.stroke-miterlimit]=\"10\"\n    [attr.stroke]=\"strokeColor\" fill=\"transparent\" [attr.stroke-width]=\"stroke\"\n  />\n</svg>\n\n<audio preload=\"auto\" #audio>\n  <source type=\"audio/mp3\" [src]=\"source\">\n</audio>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: ["svg{position:absolute;top:50%;left:50%;stroke:#fff;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);pointer-events:none;z-index:0}svg path{cursor:pointer}button{position:relative}.play{z-index:3;background:0 0!important;cursor:pointer;outline:0;border:none}.arrow{-webkit-transition:.3s;transition:.3s;width:0;height:0;border-top-color:transparent;border-top-style:solid;border-bottom-color:transparent;border-bottom-style:solid;border-left-style:solid;border-left-color:#eee;margin:auto}.pause,.play{width:100%;height:100%;border-radius:50%}.pause{-webkit-transition:opacity .3s;transition:opacity .3s}.pause,.pause .after,.pause .before,.play{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.pause .after,.pause .before{content:\"\";background-color:#eee;display:inline-block;opacity:1}.hidden-arrow{border-left-width:0!important}.hidden{opacity:0}"]
            })
        ], NgxCircularPlayerComponent);
        return NgxCircularPlayerComponent;
    }());

    var NgxCircularPlayerModule = /** @class */ (function () {
        function NgxCircularPlayerModule() {
        }
        NgxCircularPlayerModule = __decorate([
            core.NgModule({
                declarations: [NgxCircularPlayerComponent],
                imports: [
                    common.CommonModule
                ],
                exports: [NgxCircularPlayerComponent]
            })
        ], NgxCircularPlayerModule);
        return NgxCircularPlayerModule;
    }());

    exports.NgxCircularPlayerComponent = NgxCircularPlayerComponent;
    exports.NgxCircularPlayerModule = NgxCircularPlayerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-circular-player.umd.js.map
