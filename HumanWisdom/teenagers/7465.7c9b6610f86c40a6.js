"use strict";(self.webpackChunkteenagers=self.webpackChunkteenagers||[]).push([[7465],{7465:(w,c,e)=>{e.r(c),e.d(c,{createSwipeBackGesture:()=>_});var h=e(5415),E=e(1597);e(1497);const _=(a,g,D,M,m)=>{const r=a.ownerDocument.defaultView;return(0,E.createGesture)({el:a,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&g(),onStart:D,onMove:t=>{M(t.deltaX/r.innerWidth)},onEnd:t=>{const s=r.innerWidth,n=t.deltaX/s,o=t.velocityX,l=o>=0&&(o>.2||t.deltaX>s/2),u=(l?1-n:n)*s;let d=0;if(u>5){const p=u/Math.abs(o);d=Math.min(p,540)}m(l,n<=0?.01:(0,h.k)(0,n,.9999),d)}})}}}]);