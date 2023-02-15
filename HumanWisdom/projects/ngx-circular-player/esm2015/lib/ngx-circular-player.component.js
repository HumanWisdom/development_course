import { __decorate } from "tslib";
import { Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
const RADIUS = 50;
let NgxCircularPlayerComponent = class NgxCircularPlayerComponent {
    constructor() {
        this.radius = 120;
        this.stroke = 20;
        this.innerStroke = 2;
        this.strokeColor = '#fff';
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
        progress.setAttribute('stroke-dashoffset', totalLength);
        audio.addEventListener('pause', () => (this.playing = false));
        audio.addEventListener('play', () => (this.playing = true));
        audio.addEventListener('timeupdate', () => {
            const currentTime = audio.currentTime;
            const maxduration = audio.duration;
            const calc = totalLength - (currentTime / maxduration) * totalLength;
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
            return angle;
        }
        if (x > RADIUS && y >= RADIUS) {
            return 180 - angle;
        }
        if (x > RADIUS && y <= RADIUS) {
            return 180 + angle;
        }
        return 180 + (180 - angle);
    }
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
export { NgxCircularPlayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNpcmN1bGFyLXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2lyY3VsYXItcGxheWVyLyIsInNvdXJjZXMiOlsibGliL25neC1jaXJjdWxhci1wbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxTQUFTLEVBRVQsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQVNsQixJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUF2QztRQUNXLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFaEIsZ0JBQVcsR0FBRyxNQUFNLENBQUM7UUFDckIsd0JBQW1CLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLHFCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUtuQyxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBbUdsQixDQUFDO0lBakdDLE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFD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QVIsS0FBSyxFQUFFOytEQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTt1RUFBaUM7QUFDaEM7SUFBUixLQUFLLEVBQUU7b0VBQTJCO0FBRWY7SUFBbkIsU0FBUyxDQUFDLE9BQU8sQ0FBQzt5REFBbUI7QUFDZjtJQUF0QixTQUFTLENBQUMsVUFBVSxDQUFDOzREQUFzQjtBQVZqQywwQkFBMEI7SUFQdEMsU0FBUyxDQUFDO1FBQ1Qsb0NBQW9DO1FBQ3BDLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsbzdDQUFtRDtRQUVuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztHQUNXLDBCQUEwQixDQStHdEM7U0EvR1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgUkFESVVTID0gNTA7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZSBjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3gtY2lyY3VsYXItcGxheWVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1jaXJjdWxhci1wbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtY2lyY3VsYXItcGxheWVyLmNvbXBvbmVudC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTmd4Q2lyY3VsYXJQbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcmFkaXVzID0gMTIwO1xuICBASW5wdXQoKSBzdHJva2UgPSAyMDtcbiAgQElucHV0KCkgaW5uZXJTdHJva2UgPSAyO1xuICBASW5wdXQoKSBzb3VyY2U6IHN0cmluZztcbiAgQElucHV0KCkgc3Ryb2tlQ29sb3IgPSAnI2ZmZic7XG4gIEBJbnB1dCgpIHByb2dyZXNzU3Ryb2tlQ29sb3IgPSAnIzg1ODU4NSc7XG4gIEBJbnB1dCgpIGlubmVyU3Ryb2tlQ29sb3IgPSAnI2VlZSc7XG5cbiAgQFZpZXdDaGlsZCgnYXVkaW8nKSBhdWRpbzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncHJvZ3Jlc3MnKSBwcm9ncmVzczogRWxlbWVudFJlZjtcblxuICBwbGF5aW5nID0gZmFsc2U7XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMucGxheWluZyA9ICF0aGlzLnBsYXlpbmc7XG4gICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgdGhpcy5hdWRpby5uYXRpdmVFbGVtZW50LnBsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdWRpby5uYXRpdmVFbGVtZW50LnBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFycm93U3R5bGUoKSB7XG4gICAgY29uc3QgdG9wV2lkdGggPSB0aGlzLnJhZGl1cyAvIDg7XG4gICAgY29uc3QgYm90dG9tV2lkdGggPSB0aGlzLnJhZGl1cyAvIDg7XG4gICAgY29uc3QgbGVmdFdpZHRoID0gdGhpcy5yYWRpdXMgLyA1O1xuICAgIHJldHVybiB7XG4gICAgICAnYm9yZGVyLXRvcC13aWR0aCc6IGAke3RvcFdpZHRofXB4YCxcbiAgICAgICdib3JkZXItYm90dG9tLXdpZHRoJzogYCR7Ym90dG9tV2lkdGh9cHhgLFxuICAgICAgJ2JvcmRlci1sZWZ0LXdpZHRoJzogYCR7bGVmdFdpZHRofXB4YFxuICAgIH07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gRHVyaW5nIFNTUiB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nIHNwZWNpYWwgaGVyZS5cbiAgICBpZiAoIXByb2dyZXNzIHx8IHR5cGVvZiBwcm9ncmVzcy5nZXRUb3RhbExlbmd0aCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbExlbmd0aCA9IHByb2dyZXNzLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgY29uc3QgYXVkaW8gPSB0aGlzLmF1ZGlvLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBwcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCB0b3RhbExlbmd0aCk7XG4gICAgcHJvZ3Jlc3Muc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaG9mZnNldCcsIHRvdGFsTGVuZ3RoKTtcbiAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdwYXVzZScsICgpID0+ICh0aGlzLnBsYXlpbmcgPSBmYWxzZSkpO1xuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCAoKSA9PiAodGhpcy5wbGF5aW5nID0gdHJ1ZSkpO1xuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IGF1ZGlvLmN1cnJlbnRUaW1lO1xuICAgICAgY29uc3QgbWF4ZHVyYXRpb24gPSBhdWRpby5kdXJhdGlvbjtcbiAgICAgIGNvbnN0IGNhbGMgPSB0b3RhbExlbmd0aCAtIChjdXJyZW50VGltZSAvIG1heGR1cmF0aW9uKSAqIHRvdGFsTGVuZ3RoO1xuXG4gICAgICBwcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0JywgY2FsYyk7XG4gICAgfSk7XG4gIH1cblxuICBzZWVrKGV2bnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCByYXRpbyA9IHRoaXMuX2NhbGN1bGF0ZUFuZ2xlKGV2bnQpIC8gMzYwO1xuICAgIGNvbnN0IGF1ZGlvID0gdGhpcy5hdWRpby5uYXRpdmVFbGVtZW50IGFzIEhUTUxBdWRpb0VsZW1lbnQ7XG4gICAgY29uc3Qgc2Vla1RvID0gcmF0aW8gKiBhdWRpby5kdXJhdGlvbjtcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IHNlZWtUbztcbiAgfVxuXG4gIGdldCBjZW50ZXJYKCkge1xuICAgIHJldHVybiA1MDtcbiAgfVxuXG4gIGdldCBjZW50ZXJZKCkge1xuICAgIHJldHVybiA1MDtcbiAgfVxuXG4gIGdldCBjaXJjbGVSYWRpdXMoKSB7XG4gICAgcmV0dXJuIDMyO1xuICB9XG5cbiAgZ2V0IHBhdXNlTGVmdEJhclNpemUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBgJHt0aGlzLnJhZGl1cyAvIDEwfXB4YCxcbiAgICAgIGhlaWdodDogYCR7dGhpcy5yYWRpdXMgLyAzLjV9cHhgLFxuICAgICAgbGVmdDogYGNhbGMoNTAlIC0gJHt0aGlzLnJhZGl1cyAvIDEyfXB4KWBcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHBhdXNlUmlnaHRCYXJTaXplKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogYCR7dGhpcy5yYWRpdXMgLyAxMH1weGAsXG4gICAgICBoZWlnaHQ6IGAke3RoaXMucmFkaXVzIC8gMy41fXB4YCxcbiAgICAgIGxlZnQ6IGBjYWxjKDUwJSArICR7dGhpcy5yYWRpdXMgLyAxMn1weClgXG4gICAgfTtcbiAgfVxuXG4gIGdldCBwbGF5QnV0dG9uUmFkaXVzKCkge1xuICAgIHJldHVybiB0aGlzLnJhZGl1cyAtIHRoaXMucmFkaXVzIC8gMyArICdweCc7XG4gIH1cblxuICBwcml2YXRlIF9jYWxjdWxhdGVBbmdsZShldm50OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgeCA9IChSQURJVVMgKiAyKSAvICh0aGlzLnJhZGl1cyAvIGV2bnQub2Zmc2V0WCk7XG4gICAgY29uc3QgeSA9IChSQURJVVMgKiAyKSAvICh0aGlzLnJhZGl1cyAvIGV2bnQub2Zmc2V0WSk7XG4gICAgY29uc3Qgc2xvcGUgPSAoUkFESVVTIC0geSkgLyAoUkFESVVTIC0geCk7XG4gICAgY29uc3QgYW5nbGUgPSAxODAgKiAoTWF0aC5hYnMoTWF0aC5hdGFuKHNsb3BlKSkgLyBNYXRoLlBJKTtcblxuICAgIGlmICh4IDw9IFJBRElVUyAmJiB5ID49IFJBRElVUykge1xuICAgICAgcmV0dXJuIGFuZ2xlO1xuICAgIH1cbiAgICBpZiAoeCA+IFJBRElVUyAmJiB5ID49IFJBRElVUykge1xuICAgICAgcmV0dXJuIDE4MCAtIGFuZ2xlO1xuICAgIH1cbiAgICBpZiAoeCA+IFJBRElVUyAmJiB5IDw9IFJBRElVUykge1xuICAgICAgcmV0dXJuIDE4MCArIGFuZ2xlO1xuICAgIH1cbiAgICByZXR1cm4gMTgwICsgKDE4MCAtIGFuZ2xlKTtcbiAgfVxufVxuIl19