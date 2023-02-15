import { AfterViewInit, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NgxCircularPlayerComponent implements AfterViewInit {
    radius: number;
    stroke: number;
    innerStroke: number;
    source: string;
    strokeColor: string;
    progressStrokeColor: string;
    innerStrokeColor: string;
    audio: ElementRef;
    progress: ElementRef;
    playing: boolean;
    toggle(): void;
    readonly arrowStyle: {
        'border-top-width': string;
        'border-bottom-width': string;
        'border-left-width': string;
    };
    ngAfterViewInit(): void;
    seek(evnt: MouseEvent): void;
    readonly centerX: number;
    readonly centerY: number;
    readonly circleRadius: number;
    readonly pauseLeftBarSize: {
        width: string;
        height: string;
        left: string;
    };
    readonly pauseRightBarSize: {
        width: string;
        height: string;
        left: string;
    };
    readonly playButtonRadius: string;
    private _calculateAngle;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgxCircularPlayerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NgxCircularPlayerComponent, "ngx-circular-player", never, { "radius": "radius"; "stroke": "stroke"; "innerStroke": "innerStroke"; "strokeColor": "strokeColor"; "progressStrokeColor": "progressStrokeColor"; "innerStrokeColor": "innerStrokeColor"; "source": "source"; }, {}, never, never, false>;
}

//# sourceMappingURL=ngx-circular-player.component.d.ts.map