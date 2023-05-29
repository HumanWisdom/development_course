"use strict";(self.webpackChunkteenagers=self.webpackChunkteenagers||[]).push([[9435],{9435:(z,S,n)=>{n.r(S),n.d(S,{GuidedMeditationModule:()=>F});var p=n(6895),k=n(4719),h=n(1182),I=n(7494),m=n(7319),e=n(5062),u=n(4821),f=n(3850),T=n(7926),N=n(282),P=n(8392);const A=function(i){return["/guided-meditation",i]};function Z(i,o){if(1&i&&(e.TgZ(0,"a",27)(1,"button",28),e._uU(2,"Continue where you left"),e.qZA()()),2&i){const s=e.oxw();e.Q6J("routerLink",e.VKq(1,A,s.pgResume))}}let v=(()=>{class i{constructor(s,t,a){this.router=s,this.service=t,this.location=a,this.bg_tn="bg_dark_blue",this.bg_cft="bg_dark_blue",this.bg="anger_w1",this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("text"),this.screenNumber="110001",this.bookmarkList=[],this.gamR=sessionStorage.getItem("gamR"),this.tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/51.png",this.tocColor="white",this.lastvisited=!1,this.stories=[],this.pgResume=sessionStorage.getItem("pgResume"),this.getSetModuleData(110);let r=JSON.parse(JSON.stringify(localStorage.getItem("wisdomstories")));r=JSON.parse(r);let _=[],l=[];r?.length<=2?(r.forEach(b=>{l.push(b)}),_.push(l)):r?.forEach(b=>{l.length<2||(_.push(l),l=[]),l.push(b)}),this.stories=_}ngOnInit(){this.lastvisited="T"===localStorage.getItem("lastvisited"),localStorage.setItem("moduleId",JSON.stringify(51)),this.moduleId=localStorage.getItem("moduleId"),this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),this.createScreen()}toggleBookmark(){this.bookmark=0==this.bookmark?1:0}createScreen(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(s=>{})}submitProgress(){this.service.submitProgressText({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime}).subscribe(s=>{this.bookmarkList=s.GetBkMrkScr.map(t=>parseInt(t.ScrNo)),localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))})}ngOnDestroy(){}routeJournal(){this.router.navigate(["/journal"])}goBack(){this.location.back()}audiopage(s,t){let r=JSON.parse(localStorage.getItem("mediaAudio"))+s;this.router.navigate(["/curated/audiopage",r,t])}getSetModuleData(s){this.service.setmoduleID(s),this.service.getModulebyId(s).subscribe(t=>{this.moduleData=t,this.pgResume=""!=t[0].lastScreen?"s"+t[0].lastScreen:"",console.log(t[0].lastScreen)})}}return i.\u0275fac=function(s){return new(s||i)(e.Y36(m.F0),e.Y36(u.A),e.Y36(p.Ye))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-s110001"]],decls:127,vars:4,consts:[[3,"tocImage","tocColor"],[1,"row"],[1,"col-md-12","col-sm-12","col-xs-12"],[1,"module_title"],[1,"txt_comparison"],[1,"row","center_flex"],[1,"col-md-12","col-sm-12","col-xs-12","tcenter"],[3,"routerLink",4,"ngIf"],[1,"title_content"],["routerLink","/guided-meditation/s110003"],[1,"row","crow","box","bg_dark_blue","p0"],[1,"col-md-2","col-sm-2","col-xs-2","p0","landing_tile"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/toc_audio.svg","alt","",1,"p0","absolute_center_lt_audio"],[1,"col-md-10","col-sm-10","col-xs-10","p10px"],[1,"session_no","mtb0px"],[1,"col-md-12","col-sm-12","col-xs-12","center_flex"],[1,"col-md-10","col-sm-10","col-xs-10"],[1,"session_name","mtb0px"],[1,"col-md-2","col-sm-2","col-xs-2","p0"],[1,"session_time","mtb0px"],["routerLink","/guided-meditation/s110004"],["routerLink","/guided-meditation/s110005"],["routerLink","/guided-meditation/s110006"],["routerLink","/guided-meditation/s110007"],["routerLink","/guided-meditation/s110008"],["routerLink","/guided-meditation/s110009"],[3,"wisdomstories"],[3,"routerLink"],["type","button","data-dismiss","modal",1,"btn","btn-success","mb0","btn_begin_here","bg_dark_blue"]],template:function(s,t){1&s&&(e._UZ(0,"app-toc-header",0),e.TgZ(1,"app-index-content")(2,"form")(3,"div",1)(4,"div",2)(5,"h1",3),e._uU(6," Guided Audio Meditations "),e.qZA()()(),e.TgZ(7,"div",1)(8,"div",2)(9,"h4",4),e._uU(10," In this module you will find a series of guided audio meditations. You can listen to them anywhere. "),e.qZA()()(),e._UZ(11,"br"),e.TgZ(12,"div",5)(13,"div",6),e.YNc(14,Z,3,3,"a",7),e.qZA()(),e._UZ(15,"br"),e.TgZ(16,"div",1)(17,"div",2)(18,"h4",8),e._uU(19," CONTENTS "),e.qZA()()(),e.TgZ(20,"a",9)(21,"div",10)(22,"div",11),e._UZ(23,"img",12),e.qZA(),e.TgZ(24,"div",13)(25,"div",2)(26,"h6",14),e._uU(27," Meditation #1 "),e.qZA()(),e.TgZ(28,"div",15)(29,"div",16)(30,"h4",17),e._uU(31," Body Scan "),e.qZA()(),e.TgZ(32,"div",18)(33,"h4",19),e._uU(34," 4 mins "),e.qZA()()()()()(),e.TgZ(35,"a",20)(36,"div",10)(37,"div",11),e._UZ(38,"img",12),e.qZA(),e.TgZ(39,"div",13)(40,"div",2)(41,"h6",14),e._uU(42," Meditation #2 "),e.qZA()(),e.TgZ(43,"div",15)(44,"div",16)(45,"h4",17),e._uU(46," Noticing Thoughts "),e.qZA()(),e.TgZ(47,"div",18)(48,"h4",19),e._uU(49," 5 mins "),e.qZA()()()()()(),e.TgZ(50,"a",21)(51,"div",10)(52,"div",11),e._UZ(53,"img",12),e.qZA(),e.TgZ(54,"div",13)(55,"div",2)(56,"h6",14),e._uU(57," Meditation #3 "),e.qZA()(),e.TgZ(58,"div",15)(59,"div",16)(60,"h4",17),e._uU(61," Tuning In "),e.qZA()(),e.TgZ(62,"div",18)(63,"h4",19),e._uU(64," 7 mins "),e.qZA()()()()()(),e.TgZ(65,"a",22)(66,"div",10)(67,"div",11),e._UZ(68,"img",12),e.qZA(),e.TgZ(69,"div",13)(70,"div",2)(71,"h6",14),e._uU(72," Meditation #4 "),e.qZA()(),e.TgZ(73,"div",15)(74,"div",16)(75,"h4",17),e._uU(76," Voice Yoga "),e.qZA()(),e.TgZ(77,"div",18)(78,"h4",19),e._uU(79," 5 mins "),e.qZA()()()()()(),e.TgZ(80,"a",23)(81,"div",10)(82,"div",11),e._UZ(83,"img",12),e.qZA(),e.TgZ(84,"div",13)(85,"div",2)(86,"h6",14),e._uU(87," Meditation #5 "),e.qZA()(),e.TgZ(88,"div",15)(89,"div",16)(90,"h4",17),e._uU(91," Walk in Nature "),e.qZA()(),e.TgZ(92,"div",18)(93,"h4",19),e._uU(94," 7 mins "),e.qZA()()()()()(),e.TgZ(95,"a",24)(96,"div",10)(97,"div",11),e._UZ(98,"img",12),e.qZA(),e.TgZ(99,"div",13)(100,"div",2)(101,"h6",14),e._uU(102," Meditation #6 "),e.qZA()(),e.TgZ(103,"div",15)(104,"div",16)(105,"h4",17),e._uU(106," Releasing Anger "),e.qZA()(),e.TgZ(107,"div",18)(108,"h4",19),e._uU(109," 7 mins "),e.qZA()()()()()(),e.TgZ(110,"a",25)(111,"div",10)(112,"div",11),e._UZ(113,"img",12),e.qZA(),e.TgZ(114,"div",13)(115,"div",2)(116,"h6",14),e._uU(117," Meditation #7 "),e.qZA()(),e.TgZ(118,"div",15)(119,"div",16)(120,"h4",17),e._uU(121," Releasing Fear - a meditation "),e.qZA()(),e.TgZ(122,"div",18)(123,"h4",19),e._uU(124," 7 mins "),e.qZA()()()()()(),e._UZ(125,"app-related-wisdom-stories-tiles",26),e.qZA()(),e._UZ(126,"app-index-footer")),2&s&&(e.Q6J("tocImage",t.tocImage)("tocColor",t.tocColor),e.xp6(14),e.Q6J("ngIf",t.pgResume),e.xp6(111),e.Q6J("wisdomstories",t.stories))},dependencies:[p.O5,k._Y,k.JL,k.F,h.YI,f.G,T.$,N.$,P.q,m.yS]}),i})(),J=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-s110002"]],decls:5,vars:0,template:function(s,t){1&s&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"s110002"),e.qZA()()(),e._UZ(4,"ion-content"))},dependencies:[h.W2,h.Gu,h.sr,h.wd]}),i})();var d=n(1145),g=n(2965),c=n(4505);let D=(()=>{class i{constructor(s,t){this.router=s,this.service=t,this.bg_tn="bg_dark_blue",this.bg_cft="bg_dark_blue",this.bg="dark_blue_w2",this.title="Body scan",this.mediaAudio="https://humanwisdoms3.s3.eu-west-2.amazonaws.com",this.audioLink=this.mediaAudio+"/guided-meditation/audios/guided-meditation+1.1.mp3",this.transcriptPage="",this.toc="guided-meditation/s110001",this.bookmark=0,this.path=this.router.url,this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("audio"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber=110003,this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}ngOnInit(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),this.createScreen(),0==JSON.parse(sessionStorage.getItem("bookmark110003"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmark110003")))&&(this.bookmark=1)}createScreen(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(s=>{})}receiveBookmark(s){console.log(s),this.bookmark=1==s?1:0,sessionStorage.setItem("bookmark110003",JSON.stringify(this.bookmark))}receiveAvDuration(s){console.log(s),this.avDuration=s}submitProgress(){this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.router.navigate(["/guided-meditation/s110004"]),this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(s=>{this.bookmarkList=s.GetBkMrkScr.map(t=>parseInt(t.ScrNo)),localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))})}prev(){this.router.navigate(["/guided-meditation/s110001"])}ngOnDestroy(){localStorage.setItem("totalTime110003",this.totalTime),localStorage.setItem("avDuration110003",this.avDuration)}}return i.\u0275fac=function(s){return new(s||i)(e.Y36(m.F0),e.Y36(u.A))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-s110003"]],decls:3,vars:9,consts:[[3,"bookmark","path","bg_tn","toc","transcriptPage","sendBookmark"],[3,"title","bg","audioLink","sendAvDuration"],[3,"bg_cft","nextEmitter","previousEmitter"]],template:function(s,t){1&s&&(e.TgZ(0,"app-audio-header",0),e.NdJ("sendBookmark",function(r){return t.receiveBookmark(r)}),e.qZA(),e.TgZ(1,"app-audio-content",1),e.NdJ("sendAvDuration",function(r){return t.receiveAvDuration(r)}),e.qZA(),e.TgZ(2,"app-course-footer",2),e.NdJ("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),e.qZA()),2&s&&(e.Q6J("bookmark",t.bookmark)("path",t.path)("bg_tn",t.bg_tn)("toc",t.toc)("transcriptPage",t.transcriptPage),e.xp6(1),e.Q6J("title",t.title)("bg",t.bg)("audioLink",t.audioLink),e.xp6(1),e.Q6J("bg_cft",t.bg_cft))},dependencies:[d.p,g.M,c.O]}),i})(),y=(()=>{class i{constructor(s,t){this.router=s,this.service=t,this.bg_tn="bg_dark_blue",this.bg_cft="bg_dark_blue",this.bg="dark_blue_w3",this.title="Noticing thoughts",this.mediaAudio="https://humanwisdoms3.s3.eu-west-2.amazonaws.com",this.audioLink=this.mediaAudio+"/guided-meditation/audios/guided-meditation+1.2.mp3",this.transcriptPage="",this.toc="guided-meditation/s110001",this.bookmark=0,this.path=this.router.url,this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("audio"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber=110004,this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}ngOnInit(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),this.createScreen(),0==JSON.parse(sessionStorage.getItem("bookmark110004"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmark110004")))&&(this.bookmark=1)}createScreen(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(s=>{})}receiveBookmark(s){console.log(s),this.bookmark=1==s?1:0,sessionStorage.setItem("bookmark110004",JSON.stringify(this.bookmark))}receiveAvDuration(s){console.log(s),this.avDuration=s}submitProgress(){this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.router.navigate(["/guided-meditation/s110005"]),this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(s=>{this.bookmarkList=s.GetBkMrkScr.map(t=>parseInt(t.ScrNo)),localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))})}prev(){this.router.navigate(["/guided-meditation/s110003"])}ngOnDestroy(){localStorage.setItem("totalTime110004",this.totalTime),localStorage.setItem("avDuration110004",this.avDuration)}}return i.\u0275fac=function(s){return new(s||i)(e.Y36(m.F0),e.Y36(u.A))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-s110004"]],decls:3,vars:9,consts:[[3,"bookmark","path","bg_tn","toc","transcriptPage","sendBookmark"],[3,"title","bg","audioLink","sendAvDuration"],[3,"bg_cft","nextEmitter","previousEmitter"]],template:function(s,t){1&s&&(e.TgZ(0,"app-audio-header",0),e.NdJ("sendBookmark",function(r){return t.receiveBookmark(r)}),e.qZA(),e.TgZ(1,"app-audio-content",1),e.NdJ("sendAvDuration",function(r){return t.receiveAvDuration(r)}),e.qZA(),e.TgZ(2,"app-course-footer",2),e.NdJ("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),e.qZA()),2&s&&(e.Q6J("bookmark",t.bookmark)("path",t.path)("bg_tn",t.bg_tn)("toc",t.toc)("transcriptPage",t.transcriptPage),e.xp6(1),e.Q6J("title",t.title)("bg",t.bg)("audioLink",t.audioLink),e.xp6(1),e.Q6J("bg_cft",t.bg_cft))},dependencies:[d.p,g.M,c.O]}),i})(),O=(()=>{class i{constructor(s,t){this.router=s,this.service=t,this.bg_tn="bg_dark_blue",this.bg_cft="bg_dark_blue",this.bg="dark_blue_w4",this.title="Tuning in",this.mediaAudio="https://humanwisdoms3.s3.eu-west-2.amazonaws.com",this.audioLink=this.mediaAudio+"/guided-meditation/audios/guided-meditation+1.3.mp3",this.transcriptPage="",this.toc="guided-meditation/s110001",this.bookmark=0,this.path=this.router.url,this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("audio"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber=110005,this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}ngOnInit(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),this.createScreen(),0==JSON.parse(sessionStorage.getItem("bookmark110005"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmark110005")))&&(this.bookmark=1)}createScreen(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(s=>{})}receiveBookmark(s){console.log(s),this.bookmark=1==s?1:0,sessionStorage.setItem("bookmark110005",JSON.stringify(this.bookmark))}receiveAvDuration(s){console.log(s),this.avDuration=s}submitProgress(){this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.router.navigate(["/guided-meditation/s110006"]),this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(s=>{this.bookmarkList=s.GetBkMrkScr.map(t=>parseInt(t.ScrNo)),localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))})}prev(){this.router.navigate(["/guided-meditation/s110004"])}ngOnDestroy(){localStorage.setItem("totalTime110005",this.totalTime),localStorage.setItem("avDuration110005",this.avDuration)}}return i.\u0275fac=function(s){return new(s||i)(e.Y36(m.F0),e.Y36(u.A))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-s110005"]],decls:3,vars:9,consts:[[3,"bookmark","path","bg_tn","toc","transcriptPage","sendBookmark"],[3,"title","bg","audioLink","sendAvDuration"],[3,"bg_cft","nextEmitter","previousEmitter"]],template:function(s,t){1&s&&(e.TgZ(0,"app-audio-header",0),e.NdJ("sendBookmark",function(r){return t.receiveBookmark(r)}),e.qZA(),e.TgZ(1,"app-audio-content",1),e.NdJ("sendAvDuration",function(r){return t.receiveAvDuration(r)}),e.qZA(),e.TgZ(2,"app-course-footer",2),e.NdJ("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),e.qZA()),2&s&&(e.Q6J("bookmark",t.bookmark)("path",t.path)("bg_tn",t.bg_tn)("toc",t.toc)("transcriptPage",t.transcriptPage),e.xp6(1),e.Q6J("title",t.title)("bg",t.bg)("audioLink",t.audioLink),e.xp6(1),e.Q6J("bg_cft",t.bg_cft))},dependencies:[d.p,g.M,c.O]}),i})(),L=(()=>{class i{constructor(s,t){this.router=s,this.service=t,this.bg_tn="bg_dark_blue",this.bg_cft="bg_dark_blue",this.bg="dark_blue_w5",this.title="Voice Yoga",this.mediaAudio="https://humanwisdoms3.s3.eu-west-2.amazonaws.com",this.audioLink=this.mediaAudio+"/guided-meditation/audios/guided-meditation+1.4.mp3",this.transcriptPage="",this.toc="guided-meditation/s110001",this.bookmark=0,this.path=this.router.url,this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("audio"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber=110006,this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}ngOnInit(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),this.createScreen(),0==JSON.parse(sessionStorage.getItem("bookmark110006"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmark110006")))&&(this.bookmark=1)}createScreen(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(s=>{})}receiveBookmark(s){console.log(s),this.bookmark=1==s?1:0,sessionStorage.setItem("bookmark110006",JSON.stringify(this.bookmark))}receiveAvDuration(s){console.log(s),this.avDuration=s}submitProgress(){this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.router.navigate(["/guided-meditation/s110007"]),this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(s=>{this.bookmarkList=s.GetBkMrkScr.map(t=>parseInt(t.ScrNo)),localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))})}prev(){this.router.navigate(["/guided-meditation/s110005"])}ngOnDestroy(){localStorage.setItem("totalTime110006",this.totalTime),localStorage.setItem("avDuration110006",this.avDuration)}}return i.\u0275fac=function(s){return new(s||i)(e.Y36(m.F0),e.Y36(u.A))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-s110006"]],decls:3,vars:9,consts:[[3,"bookmark","path","bg_tn","toc","transcriptPage","sendBookmark"],[3,"title","bg","audioLink","sendAvDuration"],[3,"bg_cft","nextEmitter","previousEmitter"]],template:function(s,t){1&s&&(e.TgZ(0,"app-audio-header",0),e.NdJ("sendBookmark",function(r){return t.receiveBookmark(r)}),e.qZA(),e.TgZ(1,"app-audio-content",1),e.NdJ("sendAvDuration",function(r){return t.receiveAvDuration(r)}),e.qZA(),e.TgZ(2,"app-course-footer",2),e.NdJ("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),e.qZA()),2&s&&(e.Q6J("bookmark",t.bookmark)("path",t.path)("bg_tn",t.bg_tn)("toc",t.toc)("transcriptPage",t.transcriptPage),e.xp6(1),e.Q6J("title",t.title)("bg",t.bg)("audioLink",t.audioLink),e.xp6(1),e.Q6J("bg_cft",t.bg_cft))},dependencies:[d.p,g.M,c.O]}),i})(),w=(()=>{class i{constructor(s,t){this.router=s,this.service=t,this.bg_tn="bg_dark_blue",this.bg_cft="bg_dark_blue",this.bg="dark_blue_w6",this.title="Walk in nature",this.mediaAudio="https://humanwisdoms3.s3.eu-west-2.amazonaws.com",this.audioLink=this.mediaAudio+"/guided-meditation/audios/guided-meditation+1.5.mp3",this.transcriptPage="",this.toc="guided-meditation/s110001",this.bookmark=0,this.path=this.router.url,this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("audio"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber=110007,this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}ngOnInit(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),this.createScreen(),0==JSON.parse(sessionStorage.getItem("bookmark110007"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmark110007")))&&(this.bookmark=1)}createScreen(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(s=>{})}receiveBookmark(s){console.log(s),this.bookmark=1==s?1:0,sessionStorage.setItem("bookmark110007",JSON.stringify(this.bookmark))}receiveAvDuration(s){console.log(s),this.avDuration=s}submitProgress(){this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.router.navigate(["/guided-meditation/s110008"]),this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(s=>{this.bookmarkList=s.GetBkMrkScr.map(t=>parseInt(t.ScrNo)),localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))})}prev(){this.router.navigate(["/guided-meditation/s110006"])}ngOnDestroy(){localStorage.setItem("totalTime110007",this.totalTime),localStorage.setItem("avDuration110007",this.avDuration)}}return i.\u0275fac=function(s){return new(s||i)(e.Y36(m.F0),e.Y36(u.A))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-s110007"]],decls:3,vars:9,consts:[[3,"bookmark","path","bg_tn","toc","transcriptPage","sendBookmark"],[3,"title","bg","audioLink","sendAvDuration"],[3,"bg_cft","nextEmitter","previousEmitter"]],template:function(s,t){1&s&&(e.TgZ(0,"app-audio-header",0),e.NdJ("sendBookmark",function(r){return t.receiveBookmark(r)}),e.qZA(),e.TgZ(1,"app-audio-content",1),e.NdJ("sendAvDuration",function(r){return t.receiveAvDuration(r)}),e.qZA(),e.TgZ(2,"app-course-footer",2),e.NdJ("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),e.qZA()),2&s&&(e.Q6J("bookmark",t.bookmark)("path",t.path)("bg_tn",t.bg_tn)("toc",t.toc)("transcriptPage",t.transcriptPage),e.xp6(1),e.Q6J("title",t.title)("bg",t.bg)("audioLink",t.audioLink),e.xp6(1),e.Q6J("bg_cft",t.bg_cft))},dependencies:[d.p,g.M,c.O]}),i})(),U=(()=>{class i{constructor(s,t){this.router=s,this.service=t,this.bg_tn="bg_dark_blue",this.bg_cft="bg_dark_blue",this.bg="dark_blue_w7",this.title="Releasing Anger- a meditation",this.mediaAudio="https://humanwisdoms3.s3.eu-west-2.amazonaws.com",this.audioLink=this.mediaAudio+"/guided-meditation/audios/guided-meditation+1.6.mp3",this.transcriptPage="",this.toc="guided-meditation/s110001",this.bookmark=0,this.path=this.router.url,this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("audio"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber="110008",this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}ngOnInit(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),this.createScreen(),0==JSON.parse(sessionStorage.getItem("bookmark110008"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmark110008")))&&(this.bookmark=1)}createScreen(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(s=>{})}receiveBookmark(s){console.log(s),this.bookmark=1==s?1:0,sessionStorage.setItem("bookmark110008",JSON.stringify(this.bookmark))}receiveAvDuration(s){console.log(s),this.avDuration=s}submitProgress(){this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.router.navigate(["/guided-meditation/s110009"]),this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(s=>{this.bookmarkList=s.GetBkMrkScr.map(t=>parseInt(t.ScrNo)),localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))})}prev(){this.router.navigate(["/guided-meditation/s110007"])}ngOnDestroy(){localStorage.setItem("totalTime110008",this.totalTime),localStorage.setItem("avDuration110008",this.avDuration)}}return i.\u0275fac=function(s){return new(s||i)(e.Y36(m.F0),e.Y36(u.A))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-s110008"]],decls:3,vars:9,consts:[[3,"bookmark","path","bg_tn","toc","transcriptPage","sendBookmark"],[3,"title","bg","audioLink","sendAvDuration"],[3,"bg_cft","nextEmitter","previousEmitter"]],template:function(s,t){1&s&&(e.TgZ(0,"app-audio-header",0),e.NdJ("sendBookmark",function(r){return t.receiveBookmark(r)}),e.qZA(),e.TgZ(1,"app-audio-content",1),e.NdJ("sendAvDuration",function(r){return t.receiveAvDuration(r)}),e.qZA(),e.TgZ(2,"app-course-footer",2),e.NdJ("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),e.qZA()),2&s&&(e.Q6J("bookmark",t.bookmark)("path",t.path)("bg_tn",t.bg_tn)("toc",t.toc)("transcriptPage",t.transcriptPage),e.xp6(1),e.Q6J("title",t.title)("bg",t.bg)("audioLink",t.audioLink),e.xp6(1),e.Q6J("bg_cft",t.bg_cft))},dependencies:[d.p,g.M,c.O]}),i})(),M=(()=>{class i{constructor(s,t){this.router=s,this.service=t,this.bg_tn="bg_dark_blue",this.bg_cft="bg_dark_blue",this.bg="dark_blue_w8",this.title="Releasing fear - a meditation",this.mediaAudio="https://humanwisdoms3.s3.eu-west-2.amazonaws.com",this.audioLink=this.mediaAudio+"/guided-meditation/audios/guided-meditation+1.7.mp3",this.transcriptPage="",this.toc="guided-meditation/s110001",this.bookmark=0,this.path=this.router.url,this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("audio"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber="110009",this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}ngOnInit(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),this.createScreen(),0==JSON.parse(sessionStorage.getItem("bookmark110009"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmark110009")))&&(this.bookmark=1)}createScreen(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(s=>{})}receiveBookmark(s){console.log(s),this.bookmark=1==s?1:0,sessionStorage.setItem("bookmark110009",JSON.stringify(this.bookmark))}receiveAvDuration(s){console.log(s),this.avDuration=s}submitProgress(){this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.router.navigate(["/guided-meditation/s110010"]),this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(s=>{this.bookmarkList=s.GetBkMrkScr.map(t=>parseInt(t.ScrNo)),localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))})}prev(){this.router.navigate(["/guided-meditation/s110008"])}ngOnDestroy(){localStorage.setItem("totalTime110009",this.totalTime),localStorage.setItem("avDuration110009",this.avDuration)}}return i.\u0275fac=function(s){return new(s||i)(e.Y36(m.F0),e.Y36(u.A))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-s110009"]],decls:3,vars:9,consts:[[3,"bookmark","path","bg_tn","toc","transcriptPage","sendBookmark"],[3,"title","bg","audioLink","sendAvDuration"],[3,"bg_cft","nextEmitter","previousEmitter"]],template:function(s,t){1&s&&(e.TgZ(0,"app-audio-header",0),e.NdJ("sendBookmark",function(r){return t.receiveBookmark(r)}),e.qZA(),e.TgZ(1,"app-audio-content",1),e.NdJ("sendAvDuration",function(r){return t.receiveAvDuration(r)}),e.qZA(),e.TgZ(2,"app-course-footer",2),e.NdJ("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),e.qZA()),2&s&&(e.Q6J("bookmark",t.bookmark)("path",t.path)("bg_tn",t.bg_tn)("toc",t.toc)("transcriptPage",t.transcriptPage),e.xp6(1),e.Q6J("title",t.title)("bg",t.bg)("audioLink",t.audioLink),e.xp6(1),e.Q6J("bg_cft",t.bg_cft))},dependencies:[d.p,g.M,c.O]}),i})();var B=n(446);let E=(()=>{class i{constructor(s,t,a){this.router=s,this.service=t,this.location=a,this.bg_tn="bg_dark_blue",this.bg_cft="bg_dark_blue",this.bg="dark_blue_flat",this.saveUsername=JSON.parse(localStorage.getItem("saveUsername"))}ngOnInit(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.sessionPoints()}sessionPoints(){this.service.sessionPoints({UserId:this.userId,ScreenNos:"110002,110003,110004,110005,110006,110007,110008,110009,110010,110011"}).subscribe(s=>{console.log("points",s),this.points=s})}submitProgress(){this.router.navigate(["/guided-meditation/s110011"])}prev(){this.router.navigate(["/guided-meditation/s110009"])}}return i.\u0275fac=function(s){return new(s||i)(e.Y36(m.F0),e.Y36(u.A),e.Y36(p.Ye))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-s110010"]],decls:2,vars:3,consts:[[3,"bg","points"],[3,"bg_cft","nextEmitter","previousEmitter"]],template:function(s,t){1&s&&(e._UZ(0,"app-sessionover-s1",0),e.TgZ(1,"app-course-footer",1),e.NdJ("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),e.qZA()),2&s&&(e.Q6J("bg",t.bg)("points",t.points),e.xp6(1),e.Q6J("bg_cft",t.bg_cft))},dependencies:[d.p,B.d]}),i})();var q=n(6830),Q=n(830);const Y=[{path:"",component:v},{path:"s110001",component:v},{path:"s110002",component:J},{path:"s110003",component:D},{path:"s110004",component:y},{path:"s110005",component:O},{path:"s110006",component:L},{path:"s110007",component:w},{path:"s110008",component:U},{path:"s110009",component:M},{path:"s110010",component:E},{path:"s110011",component:(()=>{class i{constructor(){this.toc="guided-meditation/s110001",this.moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/28.png",this.bg="",this.moduleLink="/nature",this.moduleName="05. Nature",this.sectionName="Nurturing a Quiet Mind",this.moduleId=22,this.programType=q.v.Teenagers,this.moduleList=[{name:"Anger",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/14.png",link:"/anger",id:14},{name:"Stress",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png",link:"/stress",id:44},{name:"Breathing",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/29.png",link:"/breathing",id:29}];let s=localStorage.getItem("curated");s&&"mind"===s&&(this.moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/meditation.jpg",this.moduleLink="/meditation",this.moduleName="Meditation",this.sectionName="Develop a Calm Mind",this.moduleId=109)}ngOnInit(){}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-s110011"]],decls:1,vars:9,consts:[[3,"toc","bg","moduleLink","moduleImg","moduleName","sectionName","moduleId","moduleList","programType"]],template:function(s,t){1&s&&e._UZ(0,"app-module-end",0),2&s&&e.Q6J("toc",t.toc)("bg",t.bg)("moduleLink",t.moduleLink)("moduleImg",t.moduleImg)("moduleName",t.moduleName)("sectionName",t.sectionName)("moduleId",t.moduleId)("moduleList",t.moduleList)("programType",t.programType)},dependencies:[Q.o]}),i})()}];let G=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.Bz.forChild(Y),m.Bz]}),i})(),F=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[u.A],imports:[p.ez,k.u5,h.Pc,I.m,G]}),i})()}}]);