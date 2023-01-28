"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5040],{5040:(R,p,i)=>{i.r(p),i.d(p,{DrawerPageModule:()=>y});var d=i(6895),f=i(433),a=i(29),g=i(2001),e=i(4650),l=i(4464);const v=["userAvatar"],x=["menuIcon"],w=["drawerItemList"];function P(n,r){if(1&n&&(e.TgZ(0,"i",30),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit,o=e.oxw();e.Udp("color",o.activeTab===t.name?"rgb(33, 150, 243)":"var(--color-nearlyBlack)"),e.xp6(1),e.hij(" ",t.icon," ")}}const C=function(n,r){return{imgTintBlue:n,imgTintBlack:r}};function M(n,r){if(1&n&&e._UZ(0,"ion-img",31),2&n){const t=e.oxw().$implicit,o=e.oxw();e.Q6J("ngClass",e.WLB(2,C,o.activeTab===t.name,o.activeTab!==t.name))("alt",t.name)}}const b=function(n){return[n]},_=function(){return[]};function I(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"ion-menu-toggle",23,24)(2,"ion-item",25),e.NdJ("click",function(){const u=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.onDrawerNavigate(u))}),e._UZ(3,"ion-item",26),e.YNc(4,P,2,3,"i",27),e.YNc(5,M,1,5,"ion-img",28),e.TgZ(6,"ion-label",29),e._uU(7),e.qZA()()()}if(2&n){const t=r.$implicit,o=e.oxw();e.xp6(2),e.Q6J("routerLink",t.url?e.VKq(10,b,t.url):e.DdM(12,_)),e.xp6(1),e.Udp("--width",o.rowWidth+"px")("--background",o.activeTab===t.name?"rgba(33, 150, 243, 0.2)":"transparent"),e.xp6(1),e.Q6J("ngIf",!t.isAsset),e.xp6(1),e.Q6J("ngIf",t.isAsset),e.xp6(1),e.Udp("color",o.activeTab===t.name?"rgb(33, 150, 243)":"var(--color-nearlyBlack)"),e.xp6(1),e.hij("",t.name," ")}}const O=[{path:"menu",component:(()=>{class n{constructor(t,o){this.platform=t,this.menu=o,this.appPages=[{name:"Home",icon:"home",url:"/menu/home"},{name:"Help",icon:"people-circle-sharp",isAsset:!0,url:"/menu/help"},{name:"Feedback",icon:"help",url:"/menu/feedback"},{name:"Invite Friend",icon:"group",url:"/menu/invite-friend"},{name:"Rate the app",icon:"share",url:void 0},{name:"About Us",icon:"info",url:void 0}],this.drawerWidth=280,this.rowWidth=this.drawerWidth-64,this.activeTab="Home",this.isSplitPane=!1,this.widthCalculations(),this.platform.resize.subscribe(()=>{this.widthCalculations()})}ngAfterViewInit(){this.initDrawerAnimation()}widthCalculations(){const t=this.platform.width();this.drawerWidth=.75*t,t>992?(this.rowWidth=28*t/100-64,this.isSplitPane=!0):this.rowWidth=.75*t-64}initDrawerAnimation(){var t,o,s;const u=(0,l.ih)().addElement(null===(t=this.userAvatarRef)||void 0===t?void 0:t.nativeElement).fromTo("transform","rotate(36deg) scale(0.8)","rotate(0deg) scale(1)"),c=[],Z=null===(o=this.drawerItemListRef)||void 0===o?void 0:o.toArray();for(const h of Z){const W=h.nativeElement,U=(0,l.ih)().addElement(W.querySelector(".drawerInnerItem")).fromTo("transform",`translateX(-${this.rowWidth}px)`,"translateX(0px)");c.push(U)}const m=null===(s=this.menuIconRef)||void 0===s?void 0:s.nativeElement,k=(0,l.ih)().addElement(m.querySelector(".menu__icon")).fromTo("transform","translate(-50%, -50%)","rotate(180.01deg) translate(50%, 50%)"),D=(0,l.ih)().addElement(m.querySelector(".menu__line--1")).fromTo("transform","translate3d(0px, 0px, 0) rotate(0deg) scaleX(1.0)","translate3d(6px, 2px, 0) rotate(45deg) scaleX(0.65)"),S=(0,l.ih)().addElement(m.querySelector(".menu__line--3")).fromTo("transform","translate3d(0px, 0px, 0) rotate(0deg) scaleX(1.0)","translate3d(6px, -2px, 0) rotate(-45deg) scaleX(0.65)"),B=(0,l.ih)().addElement(m).fromTo("transform","translateX(0px)",`translateX(${this.drawerWidth}px)`).addAnimation(k).addAnimation(D).addAnimation(S);l.Bk.registerAnimation("my-reveal",h=>((n,r)=>{const t=n.width*(n.isEndSide?-1:1)+"px",o=(0,l.ih)().addElement(n.contentEl).fromTo("transform","translateX(0px)",`translateX(${t})`);return(0,l.ih)().duration(400).addAnimation(o).addAnimation(r)})(h,[u,...c,B]))}onDrawerNavigate(t){t.url&&(this.activeTab=t.name)}onMenuClick(){this.menu.toggle("main-menu")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.t4),e.Y36(a._q))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-drawer"]],viewQuery:function(t,o){if(1&t&&(e.Gf(v,5,e.SBq),e.Gf(x,5,e.SBq),e.Gf(w,5,e.SBq)),2&t){let s;e.iGM(s=e.CRH())&&(o.userAvatarRef=s.first),e.iGM(s=e.CRH())&&(o.menuIconRef=s.first),e.iGM(s=e.CRH())&&(o.drawerItemListRef=s)}},decls:30,vars:6,consts:[["contentId","main-content"],["side","start","menuId","main-menu","contentId","main-content","type","my-reveal",1,"menu-type-reveal",3,"maxEdgeStart"],[1,"headerToolbar"],[1,"userImage"],["userAvatar",""],["src","assets/home/userImage.png","alt","User Image"],[1,"nameContainer"],[1,"userName"],[1,"divider"],[1,"ion-no-padding"],["auto-hide","false",4,"ngFor","ngForOf"],[1,"ion-no-border"],["button","true","detail","false","lines","none"],[1,"sign-out-text"],[1,"material-icons","colorRed"],["id","main-content"],[1,"menu","menu--back5","ion-activatable",2,"position","absolute",3,"hidden","click"],["menuIcon",""],[1,"menu__icon"],[1,"menu__line","menu__line--1"],[1,"menu__line","menu__line--2"],[1,"menu__line","menu__line--3"],["type","unbounded"],["auto-hide","false"],["drawerItemList",""],["lines","none","detail","false","routerDirection","root",1,"drawerItem",3,"routerLink","click"],["lines","none",1,"drawerInnerItem"],["class","material-icons icon-margin",3,"color",4,"ngIf"],["style","width: 24px; height: 24px","class","icon-margin","src","assets/home/supportIcon.png",3,"ngClass","alt",4,"ngIf"],[2,"font-weight","500","font-size","16px","margin-left","8px"],[1,"material-icons","icon-margin"],["src","assets/home/supportIcon.png",1,"icon-margin",2,"width","24px","height","24px",3,"ngClass","alt"]],template:function(t,o){1&t&&(e.TgZ(0,"div")(1,"ion-split-pane",0)(2,"ion-menu",1)(3,"div",2)(4,"ion-avatar",3,4),e._UZ(6,"ion-img",5),e.qZA(),e.TgZ(7,"div",6)(8,"ion-label",7),e._uU(9,"Chris Hemsworth"),e.qZA()()(),e._UZ(10,"div",8),e.TgZ(11,"ion-content")(12,"ion-list",9),e.YNc(13,I,8,13,"ion-menu-toggle",10),e.qZA()(),e._UZ(14,"div",8),e.TgZ(15,"ion-footer",11)(16,"ion-toolbar",9)(17,"ion-item",12)(18,"ion-label",13),e._uU(19,"Sign Out"),e.qZA(),e.TgZ(20,"i",14),e._uU(21,"power_settings_new"),e.qZA()()()()(),e._UZ(22,"ion-router-outlet",15),e.qZA(),e.TgZ(23,"div",16,17),e.NdJ("click",function(){return o.onMenuClick()}),e.TgZ(25,"div",18),e._UZ(26,"div",19)(27,"div",20)(28,"div",21),e.qZA(),e._UZ(29,"ion-ripple-effect",22),e.qZA()()),2&t&&(e.xp6(2),e.Jzz("--width: ",o.drawerWidth,"px"),e.Q6J("maxEdgeStart",o.platform.width()),e.xp6(11),e.Q6J("ngForOf",o.appPages),e.xp6(10),e.Q6J("hidden",o.isSplitPane))},dependencies:[d.mk,d.sg,d.O5,a.BJ,a.W2,a.fr,a.Xz,a.Ie,a.Q$,a.q_,a.z0,a.zc,a.H$,a.jI,a.sr,a.jP,a.YI,g.rH],styles:["ion-menu[_ngcontent-%COMP%]{--ion-background-color: var(--color-notWhite, white)}ion-menu[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: var(--color-notWhite, white)}ion-list[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]{--ion-item-background: transparent}.headerToolbar[_ngcontent-%COMP%]{padding:56px 16px 16px;background-color:var(--color-notWhite, white)}.headerToolbar[_ngcontent-%COMP%]   ion-avatar.userImage[_ngcontent-%COMP%]{width:120px;height:120px;box-shadow:2px 4px 8px 0 var(--shadow-color)}.headerToolbar[_ngcontent-%COMP%]   div.nameContainer[_ngcontent-%COMP%]{margin-top:8px;margin-left:4px}.headerToolbar[_ngcontent-%COMP%]   div.nameContainer[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%]{font-size:18px;font-family:WorkSans-SemiBold;color:var(--color-username)}ion-item.drawerItem[_ngcontent-%COMP%]{--padding-top: 8px;--padding-bottom: 8px;--padding-start: 0px;--padding-end: 0px;overflow:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;transform:translateZ(0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0)}ion-item.drawerItem[_ngcontent-%COMP%]   ion-item.drawerInnerItem[_ngcontent-%COMP%]{--background: var(--background);width:var(--width);border-top-right-radius:24px;border-bottom-right-radius:24px;position:absolute}ion-item.drawerItem[_ngcontent-%COMP%]   .icon-margin[_ngcontent-%COMP%]{margin-left:14px}ion-item.drawerItem[_ngcontent-%COMP%]   .imgTintBlue[_ngcontent-%COMP%]{filter:invert(46%) sepia(90%) saturate(2764%) hue-rotate(189deg) brightness(104%) contrast(91%)}ion-item.drawerItem[_ngcontent-%COMP%]   .imgTintBlack[_ngcontent-%COMP%]{filter:brightness(0%)}@media (prefers-color-scheme: dark){ion-item.drawerItem[_ngcontent-%COMP%]   .imgTintBlack[_ngcontent-%COMP%]{filter:brightness(0%) invert(1)}}.sign-out-text[_ngcontent-%COMP%]{font-size:16px;font-family:WorkSans-SemiBold;color:var(--color-darkText)}.material-icons.colorRed[_ngcontent-%COMP%]{color:red}.menu[_ngcontent-%COMP%]{position:relative;height:40px;width:40px;cursor:pointer;margin-left:8px;overflow:hidden;margin-top:calc(var(--status-bar-height) + 4px)}.menu__icon[_ngcontent-%COMP%]{position:absolute;width:20px;height:14px;top:50%;left:50%;transform:translate(-50%,-50%)}.menu__line[_ngcontent-%COMP%]{position:absolute;left:0;background-color:var(--color-darkgrey);height:2px;width:100%;border-radius:2px;pointer-events:none}.menu__line--1[_ngcontent-%COMP%]{top:0}.menu__line--2[_ngcontent-%COMP%]{top:0;bottom:0;margin:auto}.menu__line--3[_ngcontent-%COMP%]{bottom:0}.ios   [_nghost-%COMP%]   .menu[_ngcontent-%COMP%]{margin-top:calc(var(--ion-safe-area-top) + 4px)}"]}),n})(),children:[{path:"home",loadChildren:()=>i.e(8362).then(i.bind(i,8362)).then(n=>n.HomePageModule)},{path:"help",loadChildren:()=>i.e(5666).then(i.bind(i,5666)).then(n=>n.HelpPageModule)},{path:"feedback",loadChildren:()=>i.e(2066).then(i.bind(i,2066)).then(n=>n.FeedbackPageModule)},{path:"invite-friend",loadChildren:()=>i.e(6).then(i.bind(i,6)).then(n=>n.InviteFriendPageModule)},{path:"",redirectTo:"home",pathMatch:"full"}]},{path:"",redirectTo:"menu/home",pathMatch:"full"}];let A=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(O),g.Bz]}),n})(),y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,f.u5,a.Pc,A]}),n})()}}]);