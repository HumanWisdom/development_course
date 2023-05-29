"use strict";(self.webpackChunkteenagers=self.webpackChunkteenagers||[]).push([[6404],{4505:(D,A,l)=>{l.d(A,{O:()=>w});var e=l(5062),_=l(4937),g=l(7319),C=l(6895),v=l(4719),Z=l(9429),y=l(6660),x=l(8146);const m=["audio"],P=["screen"];function E(u,f){if(1&u){const n=e.EpF();e.TgZ(0,"app-modal",33),e.NdJ("closeEvent",function(a){e.CHM(n);const d=e.oxw();return e.KtG(d.getAlertcloseEvent(a))}),e.qZA()}2&u&&e.Q6J("okText","Ok")("content","You have reached your free limit. Please subscribe to Premium to  unlock full access to the app")}const M=function(u){return[u]};let w=(()=>{class u{constructor(n,o,a){this.service=n,this.router=o,this.url=a,this.value=0,this.options={floor:0,ceil:100,showSelectionBar:!0,getPointerColor:d=>"orange",getSelectionBarColor:d=>d>=1?"orange":"#2AE02A"},this.yellow="#FFC455",this.audioElement=null,this.currentTime=0,this.duration=0,this.sendAvDuration=new e.vpe,this.mediaPercent=JSON.parse(localStorage.getItem("mediaPercent")),this.loginResponse=JSON.parse(localStorage.getItem("loginResponse")),this.localStorageFreeScreens=localStorage.getItem("freeScreens"),this.freeScreens="undefined"!=this.localStorageFreeScreens?JSON.parse(this.localStorageFreeScreens):"",this.pageaction=localStorage.getItem("pageaction"),this.reachedLimit=!1,this.enableAlert=!1,this.handleTimeUpdate=()=>{this.currentTime=this.audioElement.currentTime,this.getProgressPercentage()},this.handleMetadataLoaded=()=>{this.duration=this.audioElement.duration},this.url.queryParams.subscribe(d=>{this.t=d.t})}getProgressPercentage(){this.value=this.currentTime/this.duration*100}formatTime(n){return`${Math.floor(n/60)}:${Math.floor(n%60).toString().padStart(2,"0")}`}ngOnInit(){this.audioElement=document.getElementById("audioPlayer"),this.audioElement.addEventListener("timeupdate",this.handleTimeUpdate),this.audioElement.addEventListener("loadedmetadata",this.handleMetadataLoaded);const n=document.querySelector("audio"),o=document.getElementById("duration"),a=document.getElementById("seek-slider"),d=document.getElementById("current-time"),O=document.getElementById("play-icon"),c=(document.getElementById("audio-player-container"),document.getElementById("volume-slider")),t=document.getElementById("volume-output"),s=document.getElementById("volume-control"),i=document.getElementById("divVolume");i.style.display="none",s.addEventListener("click",()=>i.style.display="block"),s.addEventListener("blur",()=>i.style.display="none"),n.addEventListener("loadedmetadata",()=>{});const p=()=>{a.max=Math.floor(n.duration).toString()};a.addEventListener("input",()=>{d.textContent=T(a.value)});const T=b=>{const k=Math.floor(b/60),N=Math.floor(b%60);return`${k}:${N<10?`0${N}`:`${N}`}`},I=()=>{o.textContent=T(n.duration)};n.readyState>0?(I(),p()):n.addEventListener("loadedmetadata",()=>{I(),p()});let U="play";O.addEventListener("click",()=>{"play"===U?(n.play(),U="pause"):(n.pause(),U="play"),console.log(a.max)}),n.addEventListener("timeupdate",()=>{a.value=Math.floor(n.currentTime),d.textContent=T(a.value)}),a.addEventListener("input",()=>{d.textContent=T(a.value)}),a.addEventListener("change",()=>{n.currentTime=a.value}),c.addEventListener("input",b=>{const k=b.target.value;t.textContent=k,n.volume=k/100});var h,S=(h=this.router.url).lastIndexOf("/");h=h.substring(S+2),this.scrId=h,this.service.mediaPercent(this.scrId).subscribe(b=>{this.mediaPercent=b[0].MediaPrcnt}),S=(h=this.router.url).lastIndexOf("/"),h=h.substring(S+2),this.scrId=h,1!=this.loginResponse.Subscriber&&(this.freeScreens.includes(parseInt(this.scrId))||(this.interval=setInterval(()=>this.reachedLimit?null:this.checkPauseTime(),1e3)))}ngAfterViewInit(){}checkPauseTime(){let n=document.querySelector("audio");this.pauseTime=this.mediaPercent/100*n.duration,n.currentTime>this.pauseTime&&(this.reachedLimit=!0,n.pause(),this.enableAlert=!0)}ngOnDestroy(){this.interval&&clearInterval(this.interval)}onChange(n){document.querySelector("audio").playbackRate=Number(n)}getAlertcloseEvent(n){this.enableAlert=!1}}return u.\u0275fac=function(n){return new(n||u)(e.Y36(_.$),e.Y36(g.F0),e.Y36(g.gz))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-audio-content"]],viewQuery:function(n,o){if(1&n&&(e.Gf(m,5),e.Gf(P,7)),2&n){let a;e.iGM(a=e.CRH())&&(o.audio=a.first),e.iGM(a=e.CRH())&&(o.screen=a.first)}},inputs:{bg:"bg",title:"title",audioLink:"audioLink"},outputs:{sendAvDuration:"sendAvDuration"},decls:51,vars:12,consts:[["role","main",1,"right_col","mc_02"],["screen",""],[1,"cw100p"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","sc_02",3,"ngClass"],[3,"ngClass"],[1,"x_content","p0"],[1,"txt1","tcenter"],[1,"row","tcenter"],[1,"col-md-12","col-sm-12","col-xs-12","center_flex","pt30px"],[1,"audio-player",2,"width","100%"],["id","audioPlayer","controls","",2,"display","none"],["type","audio/mpeg",3,"src"],[3,"value","options","valueChange"],[1,"time-display"],["id","audio-player-container"],["preload","metada","loop","",3,"src"],["id","play-icon"],["id","current-time",1,"time"],["id","playbackspeed",1,"playback",3,"change"],["value","0.5"],["value","0.75"],["value","1"],["value","1.25"],["value","1.5"],["value","2"],["id","duration",1,"time"],["type","range","id","seek-slider","max","100","value","0"],["id","volume-control"],["id","divVolume"],["type","range","id","volume-slider","max","100","value","100"],["id","volume-output"],[3,"okText","content","closeEvent",4,"ngIf"],[3,"okText","content","closeEvent"]],template:function(n,o){1&n&&(e._UZ(0,"app-bg-video"),e.TgZ(1,"div",0,1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"form")(9,"h1",7),e._uU(10),e.qZA(),e.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"audio",11),e._UZ(15,"source",12),e.qZA(),e.TgZ(16,"ngx-slider",13),e.NdJ("valueChange",function(d){return o.value=d}),e.qZA(),e.TgZ(17,"div",14)(18,"span"),e._uU(19),e.qZA(),e.TgZ(20,"span"),e._uU(21),e.qZA()()()()(),e.TgZ(22,"div",15),e._UZ(23,"audio",16),e.TgZ(24,"button",17),e._uU(25,"Play"),e.qZA(),e.TgZ(26,"span",18),e._uU(27,"0:00"),e.qZA(),e.TgZ(28,"select",19),e.NdJ("change",function(d){return o.onChange(d.target.value)}),e.TgZ(29,"option",20),e._uU(30,"0.5x"),e.qZA(),e.TgZ(31,"option",21),e._uU(32,"0.75x"),e.qZA(),e.TgZ(33,"option",22),e._uU(34,"Normal"),e.qZA(),e.TgZ(35,"option",23),e._uU(36,"1.25x"),e.qZA(),e.TgZ(37,"option",24),e._uU(38,"1.5x"),e.qZA(),e.TgZ(39,"option",25),e._uU(40,"2x"),e.qZA()(),e.TgZ(41,"span",26),e._uU(42,"0:00"),e.qZA(),e._UZ(43,"input",27),e.TgZ(44,"button",28),e._uU(45,"Volume"),e.qZA(),e.TgZ(46,"div",29),e._UZ(47,"input",30),e.TgZ(48,"output",31),e._uU(49,"100"),e.qZA()()()()()()()()()(),e.YNc(50,E,1,2,"app-modal",32)),2&n&&(e.xp6(5),e.Q6J("ngClass",o.bg),e.xp6(1),e.Q6J("ngClass",e.VKq(10,M,"x_panel xpanel_01 p0")),e.xp6(4),e.hij(" ",o.title," "),e.xp6(5),e.Q6J("src",o.audioLink,e.LSH),e.xp6(1),e.Q6J("value",o.value)("options",o.options),e.xp6(3),e.Oqu(o.formatTime(o.currentTime)),e.xp6(2),e.Oqu(o.formatTime(o.duration)),e.xp6(2),e.Q6J("src",o.audioLink,e.LSH),e.xp6(27),e.Q6J("ngIf",o.enableAlert))},dependencies:[C.mk,C.O5,v._Y,v.YN,v.Kr,v.JL,v.F,Z.w5,y.Y,x.z],styles:[".circular-player-container[_ngcontent-%COMP%]{transform:rotate(-360deg) scaleX(-1)}.playback[_ngcontent-%COMP%]{height:54px;width:48px;border:none;border-radius:-14px;-webkit-appearance:none;appearance:none;text-align:center;background:#f1f3f4;color:#000;right:105px}.d-flex[_ngcontent-%COMP%]{display:flex}.audio-player[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.ngx-slider[_ngcontent-%COMP%]   .ngx-slider-bar[_ngcontent-%COMP%]{background:grey!important}.time-display[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;margin-top:8px}",'input[type="range"][_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-appearance: none;\n  width: 48%;\n  margin: 0;\n  padding: 0;\n  height: 19px;\n  margin: 30px 2.5% 20px 2.5%;\n  float: left;\n  outline: none;\n}\ninput[type="range"][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: linear-gradient(to right, rgba(0, 125, 181, 0.6) var(--buffered-width), rgba(0, 125, 181, 0.2) var(--buffered-width));\n}\ninput[type="range"][_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: "";\n  top: 8px;\n  left: 0;\n  width: var(--seek-before-width);\n  height: 3px;\n  background-color: #007db5;\n  cursor: pointer;\n}\ninput[type="range"][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  position: relative;\n  -webkit-appearance: none;\n  box-sizing: content-box;\n  border: 1px solid #007db5;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: #fff;\n  cursor: pointer;\n  margin: -7px 0 0 0;\n}\ninput[type="range"][_ngcontent-%COMP%]:active::-webkit-slider-thumb {\n  transform: scale(1.2);\n  background: #007db5;\n}\ninput[type="range"][_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: linear-gradient(to right, rgba(0, 125, 181, 0.6) var(--buffered-width), rgba(0, 125, 181, 0.2) var(--buffered-width));\n}\ninput[type="range"][_ngcontent-%COMP%]::-moz-range-progress {\n  background-color: #007db5;\n}\ninput[type="range"][_ngcontent-%COMP%]::-moz-focus-outer {\n  border: 0;\n}\ninput[type="range"][_ngcontent-%COMP%]::-moz-range-thumb {\n  box-sizing: content-box;\n  border: 1px solid #007db5;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: #fff;\n  cursor: pointer;\n}\ninput[type="range"][_ngcontent-%COMP%]:active::-moz-range-thumb {\n  transform: scale(1.2);\n  background: #007db5;\n}\ninput[type="range"][_ngcontent-%COMP%]::-ms-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: transparent;\n  border: solid transparent;\n  color: transparent;\n}\ninput[type="range"][_ngcontent-%COMP%]::-ms-fill-lower {\n  background-color: #007db5;\n}\ninput[type="range"][_ngcontent-%COMP%]::-ms-fill-upper {\n  background: linear-gradient(to right, rgba(0, 125, 181, 0.6) var(--buffered-width), rgba(0, 125, 181, 0.2) var(--buffered-width));\n}\ninput[type="range"][_ngcontent-%COMP%]::-ms-thumb {\n  box-sizing: content-box;\n  border: 1px solid #007db5;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: #fff;\n  cursor: pointer;\n}\ninput[type="range"][_ngcontent-%COMP%]:active::-ms-thumb {\n  transform: scale(1.2);\n  background: #007db5;\n}\n.ngx-slider[_ngcontent-%COMP%]   .ngx-slider-bar[_ngcontent-%COMP%]\n{\n  background: grey  !important;\n}']}),u})()},2965:(D,A,l)=>{l.d(A,{M:()=>O});var e=l(5062),_=l(6830),g=l(3452),C=l(7319),v=l(4937),Z=l(4565),y=l(2190),x=l(6895),m=l(4719),P=l(8146);function E(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"a",39),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.goToToc())}),e._UZ(1,"img",40),e.qZA()}}function M(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"a",23),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.goToTranscript())}),e._UZ(1,"img",41),e.qZA()}}function w(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"a",42),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.toggleBookmark())}),e._UZ(1,"img",43),e.qZA()}}function u(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"a",42),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.toggleBookmark())}),e._UZ(1,"img",44),e.qZA()}}const f=function(r){return{visibility:r}},n=function(r,c,t,s){return{visibility:r,"min-width":c,"max-width":t,width:s}};function o(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",21)(2,"div",5)(3,"div",22)(4,"a",23),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.goToDash())}),e._UZ(5,"img",24),e.qZA()(),e.TgZ(6,"div",25),e.YNc(7,E,2,0,"a",26),e.qZA()(),e.TgZ(8,"div",6)(9,"div",27),e.YNc(10,M,2,0,"a",28),e.qZA()(),e.TgZ(11,"div",29)(12,"div",25)(13,"a",30),e._UZ(14,"img",31),e.qZA()(),e.TgZ(15,"div",32),e.YNc(16,w,2,0,"a",33),e.YNc(17,u,2,0,"a",33),e.qZA(),e.TgZ(18,"div",25)(19,"a",34),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.share())}),e._UZ(20,"img",35),e.qZA()()(),e.TgZ(21,"div",36)(22,"div",37),e._UZ(23,"div",38),e.qZA()()()()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngClass",t.bg_tn),e.xp6(6),e.Q6J("ngIf",t.toc),e.xp6(3),e.Q6J("ngIf",t.transcriptPage),e.xp6(6),e.Q6J("ngIf",!t.bookmark),e.xp6(1),e.Q6J("ngIf",t.bookmark),e.xp6(5),e.Q6J("ngStyle",e.VKq(7,f,t.showheaderbar?"visible":"hidden")),e.xp6(1),e.Q6J("ngStyle",e.l5B(9,n,t.showheaderbar?"visible":"hidden",t.progress+"%",t.progress+"%",t.progress+"%"))}}function a(r,c){if(1&r&&(e.TgZ(0,"div",3)(1,"div",21)(2,"div",45)(3,"div",46)(4,"a",47),e._UZ(5,"img",24),e.qZA()(),e.TgZ(6,"div",46)(7,"a",47),e._UZ(8,"img",40),e.qZA()()(),e.TgZ(9,"div",45)(10,"div",7)(11,"a"),e._UZ(12,"img",31),e.qZA()(),e.TgZ(13,"div",48)(14,"a"),e._UZ(15,"img",43),e.qZA()(),e.TgZ(16,"div",48)(17,"a"),e._UZ(18,"img",35),e.qZA()()(),e.TgZ(19,"div",36)(20,"div",49),e._UZ(21,"div",50),e.qZA()()()()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngClass",t.bg_tn)}}function d(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"app-modal",51),e.NdJ("closeEvent",function(i){e.CHM(t);const p=e.oxw();return e.KtG(p.getAlertcloseEvent(i))}),e.qZA()}2&r&&e.Q6J("okText","Ok")("enableCancel",!0)("content","Please subscribe to activate this feature")}let O=(()=>{class r{constructor(t,s,i,p){this.router=t,this.service=s,this.platform=i,this.ngNavigatorShareService=p,this.t=new Date,this.minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate()),this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.shared=!1,this.token=JSON.parse(localStorage.getItem("token")),this.socialShare=!1,this.address=this.router.url,this.showheaderbar=!0,this.progress=localStorage.getItem("progressbarvalue")?parseFloat(localStorage.getItem("progressbarvalue")):0,this.sendBookmark=new e.vpe,this.programName="",this.placeHolder="Type your note here...",this.guest=!1,this.Subscriber=!1,this.enableAlert=!1,this.urlT=this.router.getCurrentNavigation()?.extractedUrl.queryParams.t,this.ngNavigatorShareService=p,this.guest="T"===localStorage.getItem("guest"),this.Subscriber="1"===localStorage.getItem("Subscriber")}ngOnInit(){(this.guest||!this.Subscriber)&&(this.placeHolder="Please subscribe to access your online journal"),this.progUrl=this.router.url.substring(0,this.router.url.indexOf("/",1)+1),console.log("url="+this.progUrl),this.showheaderbar=!0,this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.programName=this.getProgramTypeName(g.F.ProgramId)?.toLowerCase().toString(),"teenagers"==this.programName&&(this.programName="");var t=this.path.lastIndexOf("/");this.scrNumber=this.path.substring(t+2),this.getProgress(this.scrNumber),this.urlT&&(this.shared=!0,this.socialShare=!0)}toggleBookmark(){this.guest||!this.Subscriber?this.enableAlert=!0:(this.bookmark=!this.bookmark,this.sendBookmark.emit(this.bookmark))}addZero(t){return t<10&&(t="0"+t),t}addToken(){this.socialShare=!0,this.path=this.urlT?"https://humanwisdom.me/"+this.address+`?t=${this.urlT}`:"https://humanwisdom.me/"+this.address+`?t=${this.token}`}courseNote(){this.router.navigate(["/"+this.programName+"/coursenote",{path:this.path}])}goToToc(){this.router.navigate(["/"+this.programName+"/"+this.toc])}goToDash(){g.F.ProgramId==_.v.Adults?this.router.navigate(["/adults/adult-dashboard"]):(this.programName="",this.router.navigate([this.programName+"/teenager-dashboard"]))}goToTranscript(){let t="teenagers"==this.progName?"/":"/adults/";this.urlT?this.router.navigate([t+this.transcriptPage],{queryParams:{t:this.urlT}}):this.router.navigate([t+this.transcriptPage])}addNote(){this.service.submitJournal({JournalId:0,JDate:this.minDate,Title:"Module",Notes:this.note,UserId:this.userId}).subscribe(t=>{},t=>{console.log(t)},()=>{})}share(){this.shareUrl(g.F.ProgramId),this.path=this.urlT?this.baseUrl+this.address+`?t=${this.urlT}`:this.baseUrl+this.address+`?t=${this.token}`,this.ngNavigatorShareService.share({title:"HumanWisdom Program",text:"Hey, check out the HumanWisdom Program",url:this.path}).then(t=>{}).catch(t=>{console.log(t)})}shareUrl(t){this.baseUrl=t===_.v.Adults?g.F.AdultsBaseUrl:g.F.TeenagerBaseUrl}getProgramTypeName(t){return Object.keys(_.v).find(i=>_.v[i]===t)}getProgress(t){this.service.screenProgress(t).subscribe(s=>{this.progress=parseFloat(s),localStorage.setItem("progressbarvalue",this.progress.toString()),setTimeout(()=>{this.showheaderbar=!0},100)})}getAlertcloseEvent(t){this.enableAlert=!1,"ok"===t&&(this.guest||this.Subscriber?this.guest&&(localStorage.setItem("subscribepage","T"),this.router.navigate(["/onboarding/login"])):this.router.navigate(["/onboarding/add-to-cart"]))}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(C.F0),e.Y36(v.$),e.Y36(Z.t4),e.Y36(y.Q))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-audio-header"]],inputs:{bookmark:"bookmark",bg_tn:"bg_tn",bg:"bg",path:"path",toc:"toc",dashboard:"dashboard",transcriptPage:"transcriptPage",progName:"progName"},outputs:{sendBookmark:"sendBookmark"},decls:31,vars:7,consts:[["class","row center_flex",4,"ngIf"],["id","exampleModalCenter","tabindex","-1","role","dialog","aria-labelledby","exampleModalCenterTitle","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered","modal_note_journal","w100p","mt0px"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","tn_module","bg_border_box"],[1,"col-lg-5","col-md-5","col-sm-5","col-xs-5","p0","flex_ai"],[1,"col-lg-2","col-md-2","col-sm-2","col-xs-2","p0","flex_ai"],[1,"col-lg-2","col-md-2","col-sm-2","col-xs-2","p0","tright","col-lg-offset-6","col-md-offset-6","col-sm-offset-6","col-xs-offset-6"],["data-toggle","modal","data-dismiss","modal"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/edit_fill.svg","alt","",1,"img-responsive"],[1,"row","center_flex","h100vh"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0"],[1,"modal-body"],[1,"row","pt20px","pb30px"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],["id","message","required","required","name","message","rows","12",1,"form-control","txt19","p30_20px",3,"disabled","placeholder","ngModel","ngModelChange"],[1,"row","center_flex","flex_wrap"],[1,"col-md-12","col-sm-12","col-xs-12","tcenter"],["type","button","data-dismiss","modal",1,"btn","btn-success","mb0","btn_add_note_journal",3,"disabled","click"],["data-dismiss","modal",1,"mb0","w100","btn_skip","txt5","fs16px","tcenter"],[3,"okText","enableCancel","content","closeEvent",4,"ngIf"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","tn_module",3,"ngClass"],[1,"p0","mr20px"],[1,"",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dashboard.svg","alt","HumanWisdom",1,"img-responsive"],[1,"p0"],["class","tcenter",3,"click",4,"ngIf"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12","p0","tcenter"],["class","",3,"click",4,"ngIf"],[1,"col-lg-5","col-md-5","col-sm-5","col-xs-5","p0","flex_ai","jc_flexend"],["href","javascript:;","data-toggle","modal","data-target","#exampleModalCenter"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/edit.svg","alt","",1,"img-responsive"],[1,"p0","mlr20px"],["href","javascript:;",3,"click",4,"ngIf"],["href","javascript:;","id","btnShare",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/share_opaque.svg","alt","",1,"img-responsive"],[1,"col-md-12","col-sm-12","col-xs-12","p0","hprogressdiv"],[1,"progress","progress-sm","hprogress",3,"ngStyle"],["role","progressbar","aria-valuemax","100",1,"progress-bar",3,"ngStyle"],[1,"tcenter",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/toc.svg","alt","HumanWisdom",1,"img-responsive"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/transcript.svg","alt","HumanWisdom",1,"img-responsive"],["href","javascript:;",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/bookmark_course_01.svg","alt","",1,"img-responsive"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/bookmark_course_active.svg","alt","",1,"img-responsive"],[1,"col-lg-6","col-md-6","col-sm-6","col-xs-6","p0","flex_ai"],[1,"col-lg-2","col-md-2","col-sm-2","col-xs-2","p0"],["href","#",1,""],[1,"col-lg-2","col-md-2","col-sm-2","col-xs-2","p0","tright"],[1,"progress","progress-sm","hprogress"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","25%"],[3,"okText","enableCancel","content","closeEvent"]],template:function(t,s){1&t&&(e.YNc(0,o,24,14,"div",0),e.YNc(1,a,22,1,"div",0),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),e._UZ(6,"div",5)(7,"div",6),e.TgZ(8,"div",5)(9,"div",7)(10,"a",8),e._UZ(11,"img",9),e.qZA()()()()(),e.TgZ(12,"div",10)(13,"div",11)(14,"div",12)(15,"form")(16,"div",13)(17,"div",14)(18,"textarea",15),e.NdJ("ngModelChange",function(p){return s.note=p}),e.qZA()()(),e.TgZ(19,"div",16)(20,"div",17)(21,"a")(22,"button",18),e.NdJ("click",function(){return s.addNote()}),e._uU(23,"Add Note to Journal"),e.qZA()()()(),e._UZ(24,"br"),e.TgZ(25,"div",16)(26,"div",17)(27,"a")(28,"h4",19),e._uU(29,"Skip"),e.qZA()()()()()()()()()(),e.YNc(30,d,1,3,"app-modal",20)),2&t&&(e.Q6J("ngIf",!s.shared),e.xp6(1),e.Q6J("ngIf",s.shared),e.xp6(17),e.Q6J("disabled",s.guest||!s.Subscriber)("placeholder",s.placeHolder)("ngModel",s.note),e.xp6(4),e.Q6J("disabled",s.guest||!s.Subscriber),e.xp6(8),e.Q6J("ngIf",s.enableAlert))},dependencies:[x.mk,x.O5,x.PC,m._Y,m.Fj,m.JJ,m.JL,m.Q7,m.On,m.F,P.z]}),r})()}}]);