import { __decorate } from 'tslib';
import { Input, ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        Input()
    ], NgxCircularPlayerComponent.prototype, "radius", void 0);
    __decorate([
        Input()
    ], NgxCircularPlayerComponent.prototype, "stroke", void 0);
    __decorate([
        Input()
    ], NgxCircularPlayerComponent.prototype, "innerStroke", void 0);
    __decorate([
        Input()
    ], NgxCircularPlayerComponent.prototype, "source", void 0);
    __decorate([
        Input()
    ], NgxCircularPlayerComponent.prototype, "strokeColor", void 0);
    __decorate([
        Input()
    ], NgxCircularPlayerComponent.prototype, "progressStrokeColor", void 0);
    __decorate([
        Input()
    ], NgxCircularPlayerComponent.prototype, "innerStrokeColor", void 0);
    __decorate([
        ViewChild('audio')
    ], NgxCircularPlayerComponent.prototype, "audio", void 0);
    __decorate([
        ViewChild('progress')
    ], NgxCircularPlayerComponent.prototype, "progress", void 0);
    NgxCircularPlayerComponent = __decorate([
        Component({
            // tslint:disable component-selector
            selector: 'ngx-circular-player',
            template: "<button class=\"play\" [style.width]=\"playButtonRadius\" [style.height]=\"playButtonRadius\" (click)=\"toggle()\">\n  <div [class.hidden-arrow]=\"playing\"\n       [ngStyle]=\"arrowStyle\"\n    class=\"arrow\">\n  </div>\n  <span [class.hidden]=\"!playing\" class=\"pause\">\n    <span class=\"before\" [ngStyle]=\"pauseLeftBarSize\"></span>\n    <span class=\"after\" [ngStyle]=\"pauseRightBarSize\"></span>\n  </span>\n</button>\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 100 100\"  [style.width]=\"radius\">\n  <circle [attr.cx]=\"centerX\" [attr.cy]=\"centerY\" [attr.r]=\"circleRadius\" [attr.stroke]=\"innerStrokeColor\" fill=\"transparent\" [attr.stroke-width]=\"innerStroke\" />\n\n  <path\n    (click)=\"seek($event)\"\n    pointer-events=\"stroke\"\n    d=\"M 50 50\n       m -50, 0\n       a 50,50 0 1,0 100,0\n       a 50,50 0 1,0 -100,0\"\n    stroke-miterlimit=\"10\"\n    style=\"cursor: pointer\"\n    fill=\"transparent\"\n    [attr.stroke]=\"progressStrokeColor\" [attr.stroke-width]=\"stroke\"\n    />\n\n  <path\n    #progress\n    d=\"M 50 50\n       m -50, 0\n       a 50,50 0 1,0 100,0\n       a 50,50 0 1,0 -100,0\"\n    [attr.stroke-miterlimit]=\"10\"\n    [attr.stroke]=\"strokeColor\" fill=\"transparent\" [attr.stroke-width]=\"stroke\"\n  />\n</svg>\n\n<audio preload=\"auto\" #audio>\n  <source type=\"audio/mp3\" [src]=\"source\">\n</audio>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["svg{position:absolute;top:50%;left:50%;stroke:#fff;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);pointer-events:none;z-index:0}svg path{cursor:pointer}button{position:relative}.play{z-index:3;background:0 0!important;cursor:pointer;outline:0;border:none}.arrow{-webkit-transition:.3s;transition:.3s;width:0;height:0;border-top-color:transparent;border-top-style:solid;border-bottom-color:transparent;border-bottom-style:solid;border-left-style:solid;border-left-color:#eee;margin:auto}.pause,.play{width:100%;height:100%;border-radius:50%}.pause{-webkit-transition:opacity .3s;transition:opacity .3s}.pause,.pause .after,.pause .before,.play{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.pause .after,.pause .before{content:\"\";background-color:#eee;display:inline-block;opacity:1}.hidden-arrow{border-left-width:0!important}.hidden{opacity:0}"]
        })
    ], NgxCircularPlayerComponent);
    return NgxCircularPlayerComponent;
}());

var NgxCircularPlayerModule = /** @class */ (function () {
    function NgxCircularPlayerModule() {
    }
    NgxCircularPlayerModule = __decorate([
        NgModule({
            declarations: [NgxCircularPlayerComponent],
            imports: [
                CommonModule
            ],
            exports: [NgxCircularPlayerComponent]
        })
    ], NgxCircularPlayerModule);
    return NgxCircularPlayerModule;
}());

/*
 * Public API Surface of ngx-circular-player
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxCircularPlayerComponent, NgxCircularPlayerModule };
//# sourceMappingURL=ngx-circular-player.js.map
