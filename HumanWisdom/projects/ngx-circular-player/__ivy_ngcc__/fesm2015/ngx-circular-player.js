import { __decorate } from 'tslib';
import { Input, ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["audio"];
const _c1 = ["progress"];
const RADIUS = 50;
let NgxCircularPlayerComponent = class NgxCircularPlayerComponent {
    constructor() {
        this.radius = 120;
        this.stroke = 20;
        this.innerStroke = 2;
        this.strokeColor = '#FFC455';
        this.progressStrokeColor = '#858585';
        this.innerStrokeColor = '#eee';
        this.playing = false;
    }
    toggle() {
        this.playing = !this.playing;
        if (this.playing) {
            this.audio.nativeElement.play();
        }
        else {
            this.audio.nativeElement.pause();
        }
    }
    get arrowStyle() {
        const topWidth = this.radius / 8;
        const bottomWidth = this.radius / 8;
        const leftWidth = this.radius / 5;
        return {
            'border-top-width': `${topWidth}px`,
            'border-bottom-width': `${bottomWidth}px`,
            'border-left-width': `${leftWidth}px`
        };
    }
    ngAfterViewInit() {
        const progress = this.progress.nativeElement;
        // During SSR we don't need to do anything special here.
        if (!progress || typeof progress.getTotalLength !== 'function') {
            return;
        }
        const totalLength = progress.getTotalLength();
        const audio = this.audio.nativeElement;
        progress.setAttribute('stroke-dasharray', totalLength);
        progress.setAttribute('stroke-dashoffset', 0);
        audio.addEventListener('pause', () => (this.playing = false));
        audio.addEventListener('play', () => (this.playing = true));
        audio.addEventListener('timeupdate', () => {
            const currentTime = audio.currentTime;
            const maxduration = audio.duration;
            const calc = (currentTime / maxduration) * totalLength;
            progress.setAttribute('stroke-dashoffset', calc);
        });
    }
    seek(evnt) {
        const ratio = this._calculateAngle(evnt) / 360;
        const audio = this.audio.nativeElement;
        const seekTo = ratio * audio.duration;
        audio.currentTime = seekTo;
    }
    get centerX() {
        return 50;
    }
    get centerY() {
        return 50;
    }
    get circleRadius() {
        return 32;
    }
    get pauseLeftBarSize() {
        return {
            width: `${this.radius / 10}px`,
            height: `${this.radius / 3.5}px`,
            left: `calc(50% - ${this.radius / 12}px)`
        };
    }
    get pauseRightBarSize() {
        return {
            width: `${this.radius / 10}px`,
            height: `${this.radius / 3.5}px`,
            left: `calc(50% + ${this.radius / 12}px)`
        };
    }
    get playButtonRadius() {
        return this.radius - this.radius / 3 + 'px';
    }
    _calculateAngle(evnt) {        
        const x = (RADIUS * 2) / (this.radius / evnt.offsetX);
        const y = (RADIUS * 2) / (this.radius / evnt.offsetY);
        const slope = (RADIUS - y) / (RADIUS - x);
        const angle = 180 * (Math.abs(Math.atan(slope)) / Math.PI);
        if (x <= RADIUS && y >= RADIUS) {
            return 360 - angle; 
        }
        if (x > RADIUS && y >= RADIUS) {
            return 180 + angle;
        }
        if (x > RADIUS && y <= RADIUS) {
            return 180 - angle;
        }
        return angle;
    }
};
NgxCircularPlayerComponent.ɵfac = function NgxCircularPlayerComponent_Factory(t) { return new (t || NgxCircularPlayerComponent)(); };
NgxCircularPlayerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxCircularPlayerComponent, selectors: [["ngx-circular-player"]], viewQuery: function NgxCircularPlayerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 1);
        ɵngcc0.ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.audio = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.progress = _t.first);
    } }, inputs: { radius: "radius", stroke: "stroke", innerStroke: "innerStroke", strokeColor: "strokeColor", progressStrokeColor: "progressStrokeColor", innerStrokeColor: "innerStrokeColor", source: "source" }, decls: 13, vars: 24, consts: [[1, "play", 3, "click"], [1, "arrow", 3, "ngStyle"], [1, "pause"], [1, "before", 3, "ngStyle"], [1, "after", 3, "ngStyle"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100"], ["fill", "transparent"], ["pointer-events", "stroke", "d", "M 50 50\n       m -50, 0\n       a 50,50 0 1,0 100,0\n       a 50,50 0 1,0 -100,0", "stroke-miterlimit", "10", "fill", "transparent", 2, "cursor", "pointer", 3, "click"], ["d", "M 50 50\n       m -50, 0\n       a 50,50 0 1,0 100,0\n       a 50,50 0 1,0 -100,0", "fill", "transparent"], ["progress", ""], ["preload", "auto"], ["audio", ""], ["type", "audio/mp3", 3, "src"]], template: function NgxCircularPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function NgxCircularPlayerComponent_Template_button_click_0_listener() { return ctx.toggle(); });
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "span", 2);
        ɵngcc0.ɵɵelement(3, "span", 3);
        ɵngcc0.ɵɵelement(4, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(5, "svg", 5);
        ɵngcc0.ɵɵelement(6, "circle", 6);
        ɵngcc0.ɵɵelementStart(7, "path", 7);
        ɵngcc0.ɵɵlistener("click", function NgxCircularPlayerComponent_Template__svg_path_click_7_listener($event) { return ctx.seek($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(8, "path", 8, 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵnamespaceHTML();
        ɵngcc0.ɵɵelementStart(10, "audio", 10, 11);
        ɵngcc0.ɵɵelement(12, "source", 12);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.playButtonRadius)("height", ctx.playButtonRadius);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("hidden-arrow", ctx.playing);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.arrowStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("hidden", !ctx.playing);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.pauseLeftBarSize);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.pauseRightBarSize);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("width", ctx.radius);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("cx", ctx.centerX)("cy", ctx.centerY)("r", ctx.circleRadius)("stroke", ctx.innerStrokeColor)("stroke-width", ctx.innerStroke);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("stroke", ctx.progressStrokeColor)("stroke-width", ctx.stroke);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("stroke-miterlimit", 10)("stroke", ctx.strokeColor)("stroke-width", ctx.stroke);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("src", ctx.source, ɵngcc0.ɵɵsanitizeUrl);
    } }, dependencies: [ɵngcc1.NgStyle], styles: ["svg[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;stroke:#fff;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);pointer-events:none;z-index:0}svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{cursor:pointer}button[_ngcontent-%COMP%]{position:relative}.play[_ngcontent-%COMP%]{z-index:3;background:0 0!important;cursor:pointer;outline:0;border:none}.arrow[_ngcontent-%COMP%]{-webkit-transition:.3s;transition:.3s;width:0;height:0;border-top-color:transparent;border-top-style:solid;border-bottom-color:transparent;border-bottom-style:solid;border-left-style:solid;border-left-color:#eee;margin:auto}.pause[_ngcontent-%COMP%], .play[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%}.pause[_ngcontent-%COMP%]{-webkit-transition:opacity .3s;transition:opacity .3s}.pause[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]   .before[_ngcontent-%COMP%], .play[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.pause[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]   .before[_ngcontent-%COMP%]{content:\"\";background-color:#eee;display:inline-block;opacity:1}.hidden-arrow[_ngcontent-%COMP%]{border-left-width:0!important}.hidden[_ngcontent-%COMP%]{opacity:0}"], changeDetection: 0 });
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

let NgxCircularPlayerModule = class NgxCircularPlayerModule {
};
NgxCircularPlayerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxCircularPlayerModule });
NgxCircularPlayerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxCircularPlayerModule_Factory(t) { return new (t || NgxCircularPlayerModule)(); }, imports: [[
            CommonModule
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxCircularPlayerComponent, [{
        type: Component,
        args: [{
                // tslint:disable component-selector
                selector: 'ngx-circular-player',
                template: "<button class=\"play\" [style.width]=\"playButtonRadius\" [style.height]=\"playButtonRadius\" (click)=\"toggle()\">\n  <div [class.hidden-arrow]=\"playing\"\n       [ngStyle]=\"arrowStyle\"\n    class=\"arrow\">\n  </div>\n  <span [class.hidden]=\"!playing\" class=\"pause\">\n    <span class=\"before\" [ngStyle]=\"pauseLeftBarSize\"></span>\n    <span class=\"after\" [ngStyle]=\"pauseRightBarSize\"></span>\n  </span>\n</button>\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 100 100\"  [style.width]=\"radius\">\n  <circle [attr.cx]=\"centerX\" [attr.cy]=\"centerY\" [attr.r]=\"circleRadius\" [attr.stroke]=\"innerStrokeColor\" fill=\"transparent\" [attr.stroke-width]=\"innerStroke\" />\n\n  <path\n    (click)=\"seek($event)\"\n    pointer-events=\"stroke\"\n    d=\"M 50 50\n       m -50, 0\n       a 50,50 0 1,1 100,0\n       a 50,50 0 1,1 -100,0\"\n    stroke-miterlimit=\"10\"\n    style=\"cursor: pointer; fill:#fff;\"\n    fill=\"#fff\"\n    [attr.stroke]=\"progressStrokeColor\" [attr.stroke-width]=\"stroke\"\n    />\n\n  <path\n    #progress\n    d=\"M 50 50\n       m -50, 0\n       a 50,50 0 1,0 100,0\n       a 50,50 0 1,0 -100,0\"\n    [attr.stroke-miterlimit]=\"10\"\n    [attr.stroke]=\"strokeColor\" fill=\"transparent\" [attr.stroke-width]=\"stroke\"\n  />\n</svg>\n\n<audio preload=\"auto\" #audio>\n  <source type=\"audio/mp3\" [src]=\"source\">\n</audio>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["svg{position:absolute;top:50%;left:50%;stroke:#fff;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);pointer-events:none;z-index:0}svg path{cursor:pointer}button{position:relative}.play{z-index:3;background:0 0!important;cursor:pointer;outline:0;border:none}.arrow{-webkit-transition:.3s;transition:.3s;width:0;height:0;border-top-color:transparent;border-top-style:solid;border-bottom-color:transparent;border-bottom-style:solid;border-left-style:solid;border-left-color:#eee;margin:auto}.pause,.play{width:100%;height:100%;border-radius:50%}.pause{-webkit-transition:opacity .3s;transition:opacity .3s}.pause,.pause .after,.pause .before,.play{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.pause .after,.pause .before{content:\"\";background-color:#eee;display:inline-block;opacity:1}.hidden-arrow{border-left-width:0!important}.hidden{opacity:0}"]
            }]
    }], function () { return []; }, { radius: [{
            type: Input
        }], stroke: [{
            type: Input
        }], innerStroke: [{
            type: Input
        }], strokeColor: [{
            type: Input
        }], progressStrokeColor: [{
            type: Input
        }], innerStrokeColor: [{
            type: Input
        }], source: [{
            type: Input
        }], audio: [{
            type: ViewChild,
            args: ['audio']
        }], progress: [{
            type: ViewChild,
            args: ['progress']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxCircularPlayerModule, { declarations: function () { return [NgxCircularPlayerComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgxCircularPlayerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxCircularPlayerModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxCircularPlayerComponent],
                imports: [
                    CommonModule
                ],
                exports: [NgxCircularPlayerComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-circular-player
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxCircularPlayerComponent, NgxCircularPlayerModule };

//# sourceMappingURL=ngx-circular-player.js.map