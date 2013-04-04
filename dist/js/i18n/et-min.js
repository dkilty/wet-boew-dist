/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-release-development Build: 2013-04-04 07:23 AM
 *
 */
(function(b){var a=window.pe||{fn:{}};a.dic.ind={"%lang-code":"et","%lang-eng":"Estonian","%lang-fra":"estonien","%lang-native":"eesti keel","%all":"Kõik","%home":"Kodu","%main-page":"Main page","%top-of-page":"Lehekülje algusesse","%you-are-in":"Te olete","%welcome-to":"Tere tulemast","%loading":"laeb...","%processing":"processing...","%search":"Otsi","%search-for-terms":"Otsi väjendit","%no-match-found":"Vastet ei leitud","%matches-found":{mixin:"[MIXIN] vaste leitud"},"%menu":"Menüü","%settings":"Settings","%languages":"Languages","%about":"About","%current":"(current)","%hide":"Peida","%error":"Viga","%colon":":","%hyphen":" - ","%start":"Alusta","%stop":"Lõpeta","%back":"Tagasi","%new-window":"(avaneb uues aknas)","%minute-ago":"minut tagasi","%couple-of-minutes":"mõned minutid tagasi","%minutes-ago":{mixin:"[MIXIN] minutit tagasi"},"%hour-ago":"tund aega tagasi","%hours-ago":{mixin:"[MIXIN] tundi tagasi"},"%days-ago":{mixin:"[MIXIN] päeva tagasi"},"%yesterday":"eile","%next":"Järgmine","%previous":"Eelmine","%first":"First","%last":"Last","%archived-page":"See veebileht on arhiveeritud","%sub-menu-help":"(ava alamenüü sisene klahviga ja sulge escape klahviga)","%tab-rotation":{disable:"Seiska rotatsioon",enable:"Alusta rotatsiooni"},"%tab-list":"Tab list","%tab-panel-end-1":"End of this tab panel. ","%tab-panel-end-2":"Return to the tab list","%tab-panel-end-3":" or continue to the rest of page.","%play":"Mängi","%pause":"Paus","%open":"Open","%close":"Sulge","%rewind":"Tagasi","%fast-forward":"Kiirelt edasi","%mute":{enable:"Vaigista",disable:"heli tagasi"},"%closed-caption":{disable:"Peida subtiitrid",enable:"Näita subtiitreid"},"%closed-caption-error":"Viga subtiitrite avamisel","%audio-description":{enable:"Luba audio kirjeldus",disable:"Sulge audio kirjeldus"},"%progress-bar":"Kasuta vasakut nooleklahvi ja paremat nooleklahvi edasi ja tagasi liikumiseks","%no-video":"Sinu brauser ei võimalda mängida seda videot&#44; palun lae video alla","%position":"Hetke asukoht","%percentage":"Playback percentage:","%duration":"Kogu kestvus:","%buffered":"Puhverdatud","%favourite":"Lemmik","%email":"E-post","%share-text":"Jaga seda lehekülge","%share-hint":"koos {s}","%share-email-subject":"Huvitav lehekülg","%share-email-body":"Ma arvasin&#44; et sa leiad selle lehekülje huvitava olevat:n{t} ({u})","%share-fav-title":"(bookmark this page)","%share-manual":"Palun sule see akne ja vajuta Ctrl-D märgistamaks seda lehekülge","%share-showall":"Näita kõiki ({n})","%share-showall-title":"Kõik märgitud leheküljed","%share-disclaimer":"No endorsement of any products or services is expressed or implied.","%form-not-submitted":"Ankeeti ei saa esitada kuna ","%errors-found":" vead leitud","%error-found":" viga leitud","%datepicker-hide":"Peida kalender","%datepicker-show":"Vali kuupäev kalendrist","%datepicker-selected":"Valitud","%calendar-weekDayNames":["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"],"%calendar-monthNames":["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],"%calendar-currentDay":"(tänane päev)","%calendar-goToLink":'Go to<span class="wb-invisible"> month of year</span>',"%calendar-goToTitle":"Mine sellele kuule aastas","%calendar-goToMonth":"Kuu","%calendar-goToYear":"Aasta","%calendar-goToButton":"Mine","%calendar-cancelButton":"Tühista","%calendar-previousMonth":"Eelmine kuu","%calendar-nextMonth":"Järgmine kuu","%show-toc":"Näita","%show-text":"Show table of contents","%hide-text":"Hide table of contents","%table-contents":"sisukord","%lb-current":"Nimetus {current} {total}","%lb-next":"Järgmine","%lb-prev":"Eelmine","%lb-xhr-error":"Laadimine ebaõnnestus","%lb-img-error":"Pildi laadimine ebaõnnestus","%lb-slideshow":"slaidi esitlus","%jqm-expand":"vajuta&#44; et laiendada sisu","%jqm-collapse":"vajuta&#44; et kitsenada sisu","%jqm-clear-search":"tühista otsing","%jqm-filter":"Filtreeri","%jqm-tbl-col-toggle":"Columns...","%table-mention":"Tabel","%table-following":"Graafik. Andmed tabelis järgmised","%st-timeout-msg":'Your session is about to expire, you have until #expireTime# to activate the "OK" button below to extend your session.',"%st-msgbox-title":"Session timeout warning","%st-already-timeout-msg":"Sorry your session has already expired. Please login again.","%td-toggle":"Toggle all","%td-open":"Expand all","%td-close":"Collapse all","%td-ttl-open":"Expand all sections of content","%td-ttl-close":"Collapse all sections of content","%sSortAscending":": activate for ascending sort","%sSortDescending":": activate for descending sort","%sEmptyTable":"No data is available in the table","%sInfo":"Showing _START_ to _END_ of _TOTAL_ entries","%sInfoEmpty":"Showing 0 to 0 of 0 entries","%sInfoFiltered":"(filtered from _MAX_ total entries)","%sInfoThousands":"&#44;","%sLengthMenu":"Show _MENU_ entries","%geo-mapcontrol":"Map control","%geo-panup":"Panoraami üles","%geo-pandown":"Panoraami alla","%geo-panleft":"Pan jäänud","%geo-panright":"Pan õigus","%geo-zoomin":"Zoom","%geo-zoomout":"Vähenda","%geo-zoomworld":"Zoom to map extent","%geo-zoomslider":"Lohistage suumimiseks","%geo-zoomfeature":"Zoom to feature","%geo-ariamap":"Map object. The descriptions of the map features are in the table below.","%geo-accessibilize":"<strong>Keyboard users:</strong> When the map is in focus, use the arrow keys to pan the map and the plus and minus keys to zoom. The arrow keys will not pan the map when zoomed to the map extent.","%geo-accessibilizetitle":"Instructions: Map Navigation","%geo-togglelayer":"Toggle the display of the layer","%geo-hiddenlayer":"This layer is currently hidden!","%geo-basemapurl":"http://geogratis.gc.ca/maps/CBMT","%geo-basemaptitle":"CBMT","%geo-select":"Select","%geo-labelselect":"Check to select the element on the map","%pe-disable":"Lihtsustatud HTML versioon","%pe-enable":"Standardversioon"};a.document.trigger("languageloaded");window.pe=a;return a}(jQuery));