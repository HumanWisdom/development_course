"use strict";(self.webpackChunkteenagers=self.webpackChunkteenagers||[]).push([[3804],{3804:(K,A,d)=>{d.r(A),d.d(A,{ion_popover:()=>W});var C=d(5861),r=d(5225),T=d(9821),S=d(9080),g=d(8856),M=d(5951),R=d(6157),s=d(8718);const L=(o,e)=>{let t="top",i="left";const p=o.querySelector(".popover-content"),P=p.getBoundingClientRect(),u=P.width,m=P.height,x=o.ownerDocument.defaultView.innerWidth,f=o.ownerDocument.defaultView.innerHeight,n=e&&e.target&&e.target.getBoundingClientRect(),l=null!=n&&"top"in n?n.top:f/2-m/2,b=null!=n&&"left"in n?n.left:x/2,a=n&&n.width||0,h=n&&n.height||0,w=o.querySelector(".popover-arrow"),y=w.getBoundingClientRect(),v=y.width,k=y.height;null==n&&(w.style.display="none");const D={top:l+h,left:b+a/2-v/2},c={top:l+h+(k-1),left:b+a/2-u/2};let O=!1,E=!1;c.left<_+25?(O=!0,c.left=_):u+_+c.left+25>x&&(E=!0,c.left=x-u-_,i="right"),l+h+m>f&&l-m>0?(D.top=l-(k+1),c.top=l-m-(k-1),o.className=o.className+" popover-bottom",t="bottom"):l+h+m>f&&(p.style.bottom=_+"%"),w.style.top=D.top+"px",w.style.left=D.left+"px",p.style.top=c.top+"px",p.style.left=c.left+"px",O&&(p.style.left=`calc(${c.left}px + var(--ion-safe-area-left, 0px))`),E&&(p.style.left=`calc(${c.left}px - var(--ion-safe-area-right, 0px))`),p.style.transformOrigin=t+" "+i;const G=(0,s.c)(),B=(0,s.c)(),I=(0,s.c)();return B.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),I.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),G.addElement(o).easing("ease").duration(100).addAnimation([B,I])},_=5,j=o=>{const e=(0,s.c)(),t=(0,s.c)(),i=(0,s.c)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},V=(o,e)=>{const i=o.ownerDocument,p="rtl"===i.dir;let P="top",u=p?"right":"left";const m=o.querySelector(".popover-content"),x=m.getBoundingClientRect(),f=x.width,n=x.height,l=i.defaultView.innerWidth,b=i.defaultView.innerHeight,a=e&&e.target&&e.target.getBoundingClientRect(),h=null!=a&&"bottom"in a?a.bottom:b/2-n/2,y=a&&a.height||0,v={top:h,left:null!=a&&"left"in a?p?a.left-f+a.width:a.left:l/2-f/2};v.left<12?(v.left=12,u="left"):f+12+v.left>l&&(v.left=l-f-12,u="right"),h+y+n>b&&h-n>0?(v.top=h-n-y,o.className=o.className+" popover-bottom",P="bottom"):h+y+n>b&&(m.style.bottom="12px");const k=(0,s.c)(),D=(0,s.c)(),c=(0,s.c)(),O=(0,s.c)(),E=(0,s.c)();return D.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),c.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),O.addElement(m).beforeStyles({top:`${v.top}px`,left:`${v.left}px`,"transform-origin":`${P} ${u}`}).fromTo("transform","scale(0.001)","scale(1)"),E.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),k.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([D,c,O,E])},H=o=>{const e=(0,s.c)(),t=(0,s.c)(),i=(0,s.c)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},W=class{constructor(o){(0,r.r)(this,o),this.didPresent=(0,r.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,r.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,r.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,r.e)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,g.B)},this.onLifecycle=e=>{const t=this.usersElement,i=z[e.type];if(t&&i){const p=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(p)}}}connectedCallback(){(0,g.e)(this.el)}present(){var o=this;return(0,C.Z)(function*(){if(o.presented)return;const e=o.el.querySelector(".popover-content");if(!e)throw new Error("container is undefined");const t=Object.assign(Object.assign({},o.componentProps),{popover:o.el});return o.usersElement=yield(0,S.a)(o.delegate,e,o.component,["popover-viewport",o.el["s-sc"]],t),yield(0,R.e)(o.usersElement),(0,g.d)(o,"popoverEnter",L,V,o.event)})()}dismiss(o,e){var t=this;return(0,C.Z)(function*(){const i=yield(0,g.f)(t,o,e,"popoverLeave",j,H,t.event);return i&&(yield(0,S.d)(t.delegate,t.usersElement)),i})()}onDidDismiss(){return(0,g.g)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,g.g)(this.el,"ionPopoverWillDismiss")}render(){const o=(0,T.b)(this),{onLifecycle:e,htmlAttributes:t}=this;return(0,r.h)(r.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},t,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},(0,M.g)(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),(0,r.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),(0,r.h)("div",{tabindex:"0"}),(0,r.h)("div",{class:"popover-wrapper ion-overlay-wrapper"},(0,r.h)("div",{class:"popover-arrow"}),(0,r.h)("div",{class:"popover-content"})),(0,r.h)("div",{tabindex:"0"}))}get el(){return(0,r.i)(this)}},z={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};W.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);