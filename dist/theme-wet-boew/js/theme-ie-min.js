/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-release Build: 2013-04-24 03:11 AM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-wet-boew",psnb:null,search:null,bcrumb:null,title:null,sft:null,fullft:null,gridsmenu:null,menu:null,favicon:{href:"images/favicon-mobile.png",rel:"apple-touch-icon",sizes:"57x57 72x72 114x114 144x144 150x150"},init:function(){b.fullhd=pe.header.find("#wet-fullhd");b.psnb=pe.header.find("#wet-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#wet-srchbx");b.bcrumb=pe.header.find("#wet-bc");b.title=pe.header.find("#wet-title");b.sft=pe.footer.find("#wet-sft");b.fullft=pe.footer.find("#wet-fullft");b.gridsmenu=pe.main.find(".module-menu-section");var i=pe.menu.navcurrent(b.menubar,b.bcrumb),d=i.parents("div.mb-sm"),g,h,j=["wet-title"],k,f,e=pe.print,l=b.sft.length!==0;if(!pe.svg||pe.svgfix){h=j.length;while(h--){k=document.getElementById(j[h]);if(k!==null){f=k.getElementsByTagName("object");if(f.length>0){f=f[0];f.parentNode.innerHTML=f.parentNode.innerHTML.replace(/<object[\s\S]*?\/object>/i,((e||!l)?f.innerHTML:f.innerHTML.replace(".png","-w.png")))}else{if(l){g=k.getElementsByTagName("img");if(g.length>0){g=g[0];g.src=(e?g.src:g.src.replace(".png","-w.png"))}}}}}}if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){i=pe.menu.navcurrent(pe.secnav,b.bcrumb);d=i.parents("ul");d.prev().children("a").addClass("nav-current-nocss")}if(b.gridsmenu.length!==0){i=pe.menu.navcurrent(b.gridsmenu,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var x,M="",e,p,V=pe.dic.get("%settings"),A=pe.dic.get("%hyphen")+pe.dic.get("%main-page"),B,u,f,n,T,Y="",v='<a data-role="button" data-iconpos="notext"',D=' data-rel="popup" data-position-to="window"',r=v+D,E='<div data-role="popup" data-overlay-theme="a"',H='<div data-role="header"',X=H+"><h1>",C=' data-theme="c" class="ui-corner-all">',s=H+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',U=v+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",P=r+' data-icon="back" class="ui-btn-left"',N=">"+pe.dic.get("%back")+"</a>",W="</div></div>",q='<ul data-role="listview"',y="",J,m,t,g,d,S,R,w,o,K,G,k,z=c(document),O,l,L,I,Q,F;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");u=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");x=E+' id="jqm-wb-mb">'+X+e+"</h1>"+U+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){G=b.bcrumb[0];J=G.getElementsByTagName("a");if(J.length!==0){O=J[0].href}x+='<section><div id="jqm-mb-location-text">'+G.innerHTML+"</div></section>"}else{x+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){M+="<section><div><h2>"+u.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>"}if(b.menubar.length!==0){M+="<section><div><h2>"+b.psnb.children(":header")[0].innerHTML+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}x+='<div id="jqm-mb-menu"></div></nav></div></div></div>';Y+=x;b.menu=M;y+=r+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){p=pe.dic.get("%search");f=b.search[0];n=f.innerHTML;f=f.getElementsByTagName("input");w=f.length;while(w--){f[w].setAttribute("data-role","none")}T=E+' id="jqm-wb-search">'+X+p+"</h1>"+U+'</div><div data-role="content"><div>'+n.substring(n.indexOf("<form"))+"</div></div></div>";Y+=T;y+=r+' data-icon="search" href="#jqm-wb-search">'+p+"</a>"}G=b.title[0];l='<div data-role="header"><div class="ui-title"><div></div></div>';l+='<map id="wet-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof O!=="undefined"){l+=v+' href="'+O+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){l+=v+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(y.length!==0){l+=y}l+=r+' href="#popupSettings" data-icon="gear">'+V+"</a></map></div>";b.fullhd.children("#wet-fullhd-in").before(l);G.className+=" ui-bar-b";F=document.getElementById("wb-session");t=b.fullhd.find('li[id*="-lang"]');B=E+' id="popupSettings"'+C;B+=s+V+"</h1>"+U+"</div>";B+=h+q+">";if(F!==null){L=F.getElementsByClassName("settings");for(S=0,w=L.length;S!==w;S+=1){I=L[S].getElementsByTagName("a")[0];B+='<li><a href="'+I.getAttribute("href")+'">'+I.innerHTML+"</a></li>"}Q=F.getElementsByClassName("session")[0].getElementsByTagName("a")[0];B+='<li><a href="'+Q.getAttribute("href")+'">'+Q.innerHTML+"</a></li>"}if(t.length!==0){B+='<li><a href="#popupLanguages"'+D+">"+pe.dic.get("%languages")+"</a></li>"}B+='<li class="ui-corner-bottom"><a href="#popupAbout"'+D+">"+pe.dic.get("%about")+"</a></li>";B+="</ul>"+W;if(t.length!==0){B+=E+' id="popupLanguages"'+C;B+=s+pe.dic.get("%languages")+"</h1>"+P+' href="#popupSettings"'+N+U+"</div>";B+=h+q+">";if(t.filter('[id*="-lang-current"]').length===0){B+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}K=t.get();w=K.length;S=w;while(S--){G=K[S];m=G.getElementsByTagName("a")[0];B+="<li"+(S===0?' class="ui-corner-bottom"':"");if(G.id.indexOf("-lang-current")!==-1){B+='><a href="javascript:;" class="ui-disabled">'+G.innerHTML+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}else{B+='><a href="'+m.href+'" lang="'+m.getAttribute("lang")+'">'+m.innerHTML+"</a></li>"}}B+="</ul>"+W}B+=E+' id="popupAbout"'+C;B+=s+pe.dic.get("%about")+"</h1>"+P+' href="#popupSettings"'+N+U+"</div>";B+=h;B+='<div class="site-app-title"><div class="ui-title">'+b.title[0].getElementsByTagName("span")[0].innerHTML+"</div></div>";G=pe.main.find("#wet-date-mod").children();if(G.length!==0){d=G[1];if(d.getElementsByTagName("time").length===0){B+='<div class="app-version">'+G[0].innerHTML+" "+d.innerHTML+"</div>"}}B+='<div data-role="collapsible-set">'+q+' data-inset="true">';K=b.sft.find(".wet-col-head");for(S=0,w=K.length;S!==w;S+=1){G=K.eq(S);m=G.children("a");k=G.find("+ ul, + address ul");d=m.length!==0?m[0].innerHTML:G[0].innerHTML;if(k.length!==0){B+='<li data-role="collapsible" data-inset="false"><h2>'+d+'</h2><ul data-role="listview">';J=k[0].getElementsByTagName("a");for(R=0,o=J.length;R!==o;R+=1){G=J[R];B+='<li><a href="'+G.href+'">'+G.innerHTML+"</a></li>"}if(m.length!==0){B+='<li><a href="'+m.attr("href")+'">'+m.html()+A+"</a></li>"}B+="</ul></li>"}else{if(m.length!==0){B+="<li"+(S===(w-1)?' class="ui-corner-bottom"':"")+'><a href="'+m.href+'">'+m.html()+"</a></li>"}}}B+="</ul></div>"+W;pe.bodydiv.append(Y+B)}z.on("pagecreate",function(){var ab=b.fullhd.find("#wet-mnavbar"),ad=pe.bodydiv.find("#jqm-mb-menu"),ac,aa,j,Z;if(ab.length!==0){if(!ab.hasClass("ui-controlgroup")){ab.controlgroup()}ab.removeClass("wb-hide");if(ad.length!==0){ad.append(b.menu);ab.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){ad.trigger("create");ac=ad.find(".ui-controlgroup");aa=ac.get();w=aa.length;while(w--){G=aa[w];Z=G.getElementsByTagName("li")[0];if(Z.parentNode.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&Z.className.indexOf("ui-corner-top")===-1){Z.className+=" ui-corner-top"}j=ac.eq(w).find(".ui-btn").get();G=j[j.length-1];if(typeof G!=="undefined"&&G.className.indexOf("ui-corner-bottom")===-1){G.className+=" ui-corner-bottom"}}})}}function i(af,ae,ai,ah){var ag;c.mobile.showPageLoadingMsg();ag=c.mobile.transitionHandlers.simultaneous("pop",ae,ai,ah);ag.done(function(){c.mobile.hidePageLoadingMsg()});return ag}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});z.trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));