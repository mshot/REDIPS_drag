/*
Copyright (c) 2008-2011, www.redips.net All rights reserved.
Code licensed under the BSD License: http://www.redips.net/license/
http://www.redips.net/javascript/drag-and-drop-table-content/
Version 5.0.2
Dec 14, 2012.
*/
var REDIPS=REDIPS||{};
REDIPS.drag=function(){var q,B,K,za,La,Ma,ca,da,ia,Aa,Ba,V,ja,Ca,R,ka,Z,Da,C,u,O,la,ma,na,Ea,oa,Fa,E,x,Ga,ea,fa,pa,Na,Oa,Ha,qa,Ia,ra,ga,Ja,Pa,sa,Qa,n=null,G=0,H=0,ta=null,ua=null,L=[],s=null,M=0,N=0,P=0,Q=0,S=0,T=0,$,f=[],aa,va,p,I=[],m=[],y=null,D=null,W=0,X=0,Ra=0,Sa=0,ha=!1,Ka=!1,ba=!1,wa=[],h=null,t=null,z=null,j=null,v=null,J=null,l=null,A=null,U=null,i=!1,o=!1,r="cell",xa={div:[],cname:"only",other:"deny"},Ta={action:"deny",cname:"mark",exception:[]},k={},Ua={keyDiv:!1,keyRow:!1,sendBack:!1,
drop:!1};K=function(){return!1};q=function(a){var c,b,d,e,g;f.length=0;e=void 0===a?y.getElementsByTagName("table"):document.querySelectorAll(a);for(c=a=0;a<e.length;a++)if(!("redips_clone"===e[a].parentNode.id||-1<e[a].className.indexOf("nolayout"))){b=e[a].parentNode;d=0;do"TD"===b.nodeName&&d++,b=b.parentNode;while(b&&b!==y);f[c]=e[a];f[c].redips||(f[c].redips={});f[c].redips.container=y;f[c].redips.nestedLevel=d;f[c].redips.idx=c;wa[c]=0;d=f[c].getElementsByTagName("td");b=0;for(g=!1;b<d.length;b++)if(1<
d[b].rowSpan){g=!0;break}f[c].redips.rowspan=g;c++}a=0;for(e=aa=1;a<f.length;a++)if(0===f[a].redips.nestedLevel){f[a].redips.nestedGroup=e;f[a].redips.sort=100*aa;b=f[a].getElementsByTagName("table");for(c=0;c<b.length;c++)-1<b[c].className.indexOf("nolayout")||(b[c].redips.nestedGroup=e,b[c].redips.sort=100*aa+b[c].redips.nestedLevel);e++;aa++}};za=function(a){var c=a||window.event,b,d;if(!0===this.redips.animated)return!0;c.cancelBubble=!0;c.stopPropagation&&c.stopPropagation();Ka=c.shiftKey;a=
c.which?c.which:c.button;if(Fa(c)||!c.touches&&1!==a)return!0;if(window.getSelection)window.getSelection().removeAllRanges();else if(document.selection&&"Text"===document.selection.type)try{document.selection.empty()}catch(e){}c.touches?(a=W=c.touches[0].clientX,d=X=c.touches[0].clientY):(a=W=c.clientX,d=X=c.clientY);Ra=a;Sa=d;ha=!1;REDIPS.drag.objOld=o=i||this;REDIPS.drag.obj=i=this;ba=-1<i.className.indexOf("clone")?!0:!1;REDIPS.drag.tableSort&&Ma(i);y!==i.redips.container&&(y=i.redips.container,
q());-1===i.className.indexOf("row")?REDIPS.drag.mode=r="cell":(REDIPS.drag.mode=r="row",REDIPS.drag.obj=i=ga(i));u();!ba&&"cell"===r&&(i.style.zIndex=999);h=j=l=null;R();z=t=h;J=v=j;U=A=l;REDIPS.drag.td.source=k.source=x("TD",i);REDIPS.drag.td.current=k.current=k.source;REDIPS.drag.td.previous=k.previous=k.source;"cell"===r?REDIPS.drag.event.clicked(k.current):REDIPS.drag.event.rowClicked(k.current);if(null===h||null===j||null===l)if(R(),z=t=h,J=v=j,U=A=l,null===h||null===j||null===l)return!0;va=
p=!1;REDIPS.event.add(document,"mousemove",da);REDIPS.event.add(document,"touchmove",da);REDIPS.event.add(document,"mouseup",ca);REDIPS.event.add(document,"touchend",ca);i.setCapture&&i.setCapture();null!==h&&(null!==j&&null!==l)&&($=Da(h,j,l));b=E(f[z],"position");"fixed"!==b&&(b=E(f[z].parentNode,"position"));b=C(i,b);n=[d-b[0],b[1]-a,b[2]-d,a-b[3]];y.onselectstart=function(a){c=a||window.event;if(!Fa(c)){c.shiftKey&&document.selection.clear();return false}};return!1};La=function(){REDIPS.drag.event.dblClicked()};
Ma=function(a){var c;c=x("TABLE",a).redips.nestedGroup;for(a=0;a<f.length;a++)f[a].redips.nestedGroup===c&&(f[a].redips.sort=100*aa+f[a].redips.nestedLevel);f.sort(function(a,c){return c.redips.sort-a.redips.sort});aa++};ga=function(a,c){var b,d,e,g,f,w;if("DIV"===a.nodeName)return g=a,a=x("TR",a),void 0===a.redips&&(a.redips={}),a.redips.div=g,a;d=a;void 0===d.redips&&(d.redips={});a=x("TABLE",a);ba&&p&&(g=d.redips.div,g.className=sa(g.className.replace("clone","")));b=a.cloneNode(!0);ba&&p&&(g.className+=
" clone");e=b.rows.length-1;g="animated"===c?0===e?!0:!1:!0;for(f=e;0<=f;f--)if(f!==d.rowIndex){if(!0===g&&void 0===c){e=b.rows[f];for(w=0;w<e.cells.length;w++)if(-1<e.cells[w].className.indexOf("rowhandler")){g=!1;break}}b.deleteRow(f)}p||(d.redips.emptyRow=g);b.redips={};b.redips.container=a.redips.container;b.redips.sourceRow=d;Pa(d,b.rows[0]);Ea(d,b.rows[0]);document.getElementById("redips_clone").appendChild(b);d=C(d,"fixed");b.style.position="fixed";b.style.top=d[0]+"px";b.style.left=d[3]+"px";
b.style.width=d[1]-d[3]+"px";return b};Ja=function(a,c,b){var d=!1,e,g,ya,w,j,F,Y,l;l=function(a){var b;void 0===a.redips||!a.redips.emptyRow?(b=x("TABLE",a),b.deleteRow(a.rowIndex)):ra(a,"empty",REDIPS.drag.style.rowEmptyColor)};void 0===b?b=i:d=!0;e=b.redips.sourceRow;g=e.rowIndex;ya=x("TABLE",e);w=ya.rows[0].parentNode;j=f[a];F=j.rows[c];Y=j.rows[0].parentNode;a=b.getElementsByTagName("tr")[0];b.parentNode.removeChild(b);!1!==REDIPS.drag.event.rowDroppedBefore(ya,g)&&(!d&&-1<k.target.className.indexOf(REDIPS.drag.trash.className)?
p?REDIPS.drag.event.rowDeleted():REDIPS.drag.trash.questionRow?confirm(REDIPS.drag.trash.questionRow)?(l(e),REDIPS.drag.event.rowDeleted()):(delete o.redips.emptyRow,REDIPS.drag.event.rowUndeleted()):(l(e),REDIPS.drag.event.rowDeleted()):(c<j.rows.length?h===z?g>c?Y.insertBefore(a,F):Y.insertBefore(a,F.nextSibling):"after"===REDIPS.drag.rowDropMode?Y.insertBefore(a,F.nextSibling):Y.insertBefore(a,F):(Y.appendChild(a),F=j.rows[0]),F&&F.redips&&F.redips.emptyRow?Y.deleteRow(F.rowIndex):"overwrite"===
REDIPS.drag.rowDropMode?l(F):"switch"===REDIPS.drag.rowDropMode&&!p&&(w.insertBefore(F,e),void 0!==e.redips&&delete e.redips.emptyRow),(d||!p)&&l(e),delete a.redips.emptyRow,d||REDIPS.drag.event.rowDropped(a,ya,g)),0<a.getElementsByTagName("table").length&&q())};Pa=function(a,c){var b,d,e,g=[],f=[];g[0]=a.getElementsByTagName("input");g[1]=a.getElementsByTagName("textarea");g[2]=a.getElementsByTagName("select");f[0]=c.getElementsByTagName("input");f[1]=c.getElementsByTagName("textarea");f[2]=c.getElementsByTagName("select");
for(b=0;b<g.length;b++)for(d=0;d<g[b].length;d++)switch(e=g[b][d].type,e){case "text":case "textarea":case "password":f[b][d].value=g[b][d].value;break;case "radio":case "checkbox":f[b][d].checked=g[b][d].checked;break;case "select-one":f[b][d].selectedIndex=g[b][d].selectedIndex;break;case "select-multiple":for(e=0;e<g[b][d].options.length;e++)f[b][d].options[e].selected=g[b][d].options[e].selected}};ca=function(a){var c=a||window.event,b,d,e,a=c.clientX;e=c.clientY;S=T=0;i.releaseCapture&&i.releaseCapture();
REDIPS.event.remove(document,"mousemove",da);REDIPS.event.remove(document,"touchmove",da);REDIPS.event.remove(document,"mouseup",ca);REDIPS.event.remove(document,"touchend",ca);y.onselectstart=null;Ba(i);ta=document.documentElement.scrollWidth;ua=document.documentElement.scrollHeight;S=T=0;if(p&&"cell"===r&&(null===h||null===j||null===l))i.parentNode.removeChild(i),I[o.id]-=1,REDIPS.drag.event.notCloned();else if(null===h||null===j||null===l)REDIPS.drag.event.notMoved();else{h<f.length?(c=f[h],REDIPS.drag.td.target=
k.target=c.rows[j].cells[l],Z(h,j,l,$),b=h,d=j):null===t||null===v||null===A?(c=f[z],REDIPS.drag.td.target=k.target=c.rows[J].cells[U],Z(z,J,U,$),b=z,d=J):(c=f[t],REDIPS.drag.td.target=k.target=c.rows[v].cells[A],Z(t,v,A,$),b=t,d=v);if("row"===r)if(va)if(z===b&&J===d){c=i.getElementsByTagName("tr")[0];o.style.backgroundColor=c.style.backgroundColor;for(a=0;a<c.cells.length;a++)o.cells[a].style.backgroundColor=c.cells[a].style.backgroundColor;i.parentNode.removeChild(i);delete o.redips.emptyRow;p?
REDIPS.drag.event.rowNotCloned():REDIPS.drag.event.rowDroppedSource(k.target)}else Ja(b,d);else REDIPS.drag.event.rowNotMoved();else if(!p&&!ha)REDIPS.drag.event.notMoved();else if(p&&z===h&&J===j&&U===l)i.parentNode.removeChild(i),I[o.id]-=1,REDIPS.drag.event.notCloned();else if(p&&!1===REDIPS.drag.clone.drop&&(a<c.redips.offset[3]||a>c.redips.offset[1]||e<c.redips.offset[0]||e>c.redips.offset[2]))i.parentNode.removeChild(i),I[o.id]-=1,REDIPS.drag.event.notCloned();else if(-1<k.target.className.indexOf(REDIPS.drag.trash.className))i.parentNode.removeChild(i),
REDIPS.drag.trash.question?setTimeout(function(){if(confirm(REDIPS.drag.trash.question))Aa();else{if(!p){f[z].rows[J].cells[U].appendChild(i);u()}REDIPS.drag.event.undeleted()}},20):Aa();else if("switch"===REDIPS.drag.dropMode)if(a=REDIPS.drag.event.droppedBefore(k.target),!1===a)ia(!1);else{i.parentNode.removeChild(i);c=k.target.getElementsByTagName("div");b=c.length;for(a=0;a<b;a++)void 0!==c[0]&&(REDIPS.drag.objOld=o=c[0],k.source.appendChild(o),V(o));ia();b&&REDIPS.drag.event.switched()}else"overwrite"===
REDIPS.drag.dropMode?(a=REDIPS.drag.event.droppedBefore(k.target),!1!==a&&fa(k.target)):a=REDIPS.drag.event.droppedBefore(k.target),ia(a);"cell"===r&&0<i.getElementsByTagName("table").length&&q();u();REDIPS.drag.event.finish()}t=v=A=null};ia=function(a){var c=null,b;if(!1!==a){if(!0===Ua.sendBack){a=k.target.getElementsByTagName("DIV");for(b=0;b<a.length;b++)if(i!==a[b]&&0===i.id.indexOf(a[b].id)){c=a[b];break}if(c){oa(c,1);i.parentNode.removeChild(i);return}}"shift"===REDIPS.drag.dropMode&&(Qa(k.target)||
"always"===REDIPS.drag.shift.after)&&pa(k.source,k.target);"top"===REDIPS.drag.multipleDrop&&k.target.hasChildNodes()?k.target.insertBefore(i,k.target.firstChild):k.target.appendChild(i);V(i);REDIPS.drag.event.dropped(k.target);p&&(REDIPS.drag.event.clonedDropped(k.target),oa(o,-1))}else p&&i.parentNode.removeChild(i)};V=function(a,c){!1===c?(a.onmousedown=null,a.ontouchstart=null,a.ondblclick=null):(a.onmousedown=za,a.ontouchstart=za,a.ondblclick=La)};Ba=function(a){a.style.top="";a.style.left="";
a.style.position="";a.style.zIndex=""};Aa=function(){var a;p&&oa(o,-1);if("shift"===REDIPS.drag.dropMode&&("delete"===REDIPS.drag.shift.after||"always"===REDIPS.drag.shift.after)){switch(REDIPS.drag.shift.mode){case "vertical2":a="lastInColumn";break;case "horizontal2":a="lastInRow";break;default:a="last"}pa(k.source,Ga(a,k.source)[2])}REDIPS.drag.event.deleted(p)};da=function(a){var a=a||window.event,c=REDIPS.drag.scroll.bound,b,d,e,g;a.touches?(d=W=a.touches[0].clientX,e=X=a.touches[0].clientY):
(d=W=a.clientX,e=X=a.clientY);b=Math.abs(Ra-d);g=Math.abs(Sa-e);if(!va){if("cell"===r&&(ba||!0===REDIPS.drag.clone.keyDiv&&Ka))REDIPS.drag.objOld=o=i,REDIPS.drag.obj=i=na(i,!0),p=!0,REDIPS.drag.event.cloned();else{if("row"===r){if(ba||!0===REDIPS.drag.clone.keyRow&&Ka)p=!0;REDIPS.drag.objOld=o=i;REDIPS.drag.obj=i=ga(i);i.style.zIndex=999}i.setCapture&&i.setCapture();i.style.position="fixed";u();R();"row"===r&&(p?REDIPS.drag.event.rowCloned():REDIPS.drag.event.rowMoved())}ka();d>G-n[1]&&(i.style.left=
G-(n[1]+n[3])+"px");e>H-n[2]&&(i.style.top=H-(n[0]+n[2])+"px")}va=!0;if("cell"===r&&(7<b||7<g)&&!ha)ha=!0,ka(),REDIPS.drag.event.moved(p);d>n[3]&&d<G-n[1]&&(i.style.left=d-n[3]+"px");e>n[0]&&e<H-n[2]&&(i.style.top=e-n[0]+"px");if(d<D[1]&&d>D[3]&&e<D[2]&&e>D[0]&&0===S&&0===T&&(m.containTable||d<m[3]||d>m[1]||e<m[0]||e>m[2]))R(),ja();if(REDIPS.drag.scroll.enable){M=c-(G/2>d?d-n[3]:G-d-n[1]);if(0<M){if(M>c&&(M=c),b=O()[0],M*=d<G/2?-1:1,!(0>M&&0>=b||0<M&&b>=ta-G)&&0===S++)REDIPS.event.remove(window,"scroll",
u),la(window)}else M=0;N=c-(H/2>e?e-n[0]:H-e-n[2]);if(0<N){if(N>c&&(N=c),b=O()[1],N*=e<H/2?-1:1,!(0>N&&0>=b||0<N&&b>=ua-H)&&0===T++)REDIPS.event.remove(window,"scroll",u),ma(window)}else N=0;for(g=0;g<L.length;g++)if(b=L[g],b.autoscroll&&d<b.offset[1]&&d>b.offset[3]&&e<b.offset[2]&&e>b.offset[0]){P=c-(b.midstX>d?d-n[3]-b.offset[3]:b.offset[1]-d-n[1]);0<P?(P>c&&(P=c),P*=d<b.midstX?-1:1,0===S++&&(REDIPS.event.remove(b.div,"scroll",u),la(b.div))):P=0;Q=c-(b.midstY>e?e-n[0]-b.offset[0]:b.offset[2]-e-
n[2]);0<Q?(Q>c&&(Q=c),Q*=e<b.midstY?-1:1,0===T++&&(REDIPS.event.remove(b.div,"scroll",u),ma(b.div))):Q=0;break}else P=Q=0}a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};ja=function(){if(h<f.length&&(h!==t||j!==v||l!==A))null!==t&&(null!==v&&null!==A)&&(Z(t,v,A,$),REDIPS.drag.td.previous=k.previous=f[t].rows[v].cells[A],REDIPS.drag.td.current=k.current=f[h].rows[j].cells[l],"switching"===REDIPS.drag.dropMode&&"cell"===r&&(ea(k.current,k.previous),u(),R()),"cell"===r?REDIPS.drag.event.changed(k.current):
"row"===r&&(h!==t||j!==v)&&REDIPS.drag.event.rowChanged(k.current)),ka()};Ca=function(){if("number"===typeof window.innerWidth)G=window.innerWidth,H=window.innerHeight;else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight))G=document.documentElement.clientWidth,H=document.documentElement.clientHeight;else if(document.body&&(document.body.clientWidth||document.body.clientHeight))G=document.body.clientWidth,H=document.body.clientHeight;ta=document.documentElement.scrollWidth;
ua=document.documentElement.scrollHeight;u()};R=function(){var a,c,b,d,e,g;b=[];a=function(){null!==t&&(null!==v&&null!==A)&&(h=t,j=v,l=A)};c=W;g=X;for(h=0;h<f.length;h++)if(!1!==f[h].redips.enabled&&(b[0]=f[h].redips.offset[0],b[1]=f[h].redips.offset[1],b[2]=f[h].redips.offset[2],b[3]=f[h].redips.offset[3],void 0!==f[h].sca&&(b[0]=b[0]>f[h].sca.offset[0]?b[0]:f[h].sca.offset[0],b[1]=b[1]<f[h].sca.offset[1]?b[1]:f[h].sca.offset[1],b[2]=b[2]<f[h].sca.offset[2]?b[2]:f[h].sca.offset[2],b[3]=b[3]>f[h].sca.offset[3]?
b[3]:f[h].sca.offset[3]),b[3]<c&&c<b[1]&&b[0]<g&&g<b[2])){b=f[h].redips.row_offset;for(j=0;j<b.length-1;j++)if(void 0!==b[j]){m[0]=b[j][0];if(void 0!==b[j+1])m[2]=b[j+1][0];else for(d=j+2;d<b.length;d++)if(void 0!==b[d]){m[2]=b[d][0];break}if(g<=m[2])break}d=j;j===b.length-1&&(m[0]=b[j][0],m[2]=f[h].redips.offset[2]);do for(l=e=f[h].rows[j].cells.length-1;0<=l&&!(m[3]=b[j][3]+f[h].rows[j].cells[l].offsetLeft,m[1]=m[3]+f[h].rows[j].cells[l].offsetWidth,m[3]<=c&&c<=m[1]);l--);while(f[h].redips.rowspan&&
-1===l&&0<j--);0>j||0>l?a():j!==d&&(m[0]=b[j][0],m[2]=m[0]+f[h].rows[j].cells[l].offsetHeight,(g<m[0]||g>m[2])&&a());c=f[h].rows[j].cells[l];m.containTable=0<c.childNodes.length&&0<c.getElementsByTagName("table").length?!0:!1;if(-1===c.className.indexOf(REDIPS.drag.trash.className))if(g=-1<c.className.indexOf(REDIPS.drag.only.cname)?!0:!1,!0===g){if(-1===c.className.indexOf(xa.div[i.id])){a();break}}else if(void 0!==xa.div[i.id]&&"deny"===xa.other){a();break}else if(g=-1<c.className.indexOf(REDIPS.drag.mark.cname)?
!0:!1,(!0===g&&"deny"===REDIPS.drag.mark.action||!1===g&&"allow"===REDIPS.drag.mark.action)&&-1===c.className.indexOf(Ta.exception[i.id])){a();break}g=-1<c.className.indexOf("single")?!0:!1;if("cell"===r){if(("single"===REDIPS.drag.dropMode||g)&&0<c.childNodes.length){if(1===c.childNodes.length&&3===c.firstChild.nodeType)break;g=!0;for(d=c.childNodes.length-1;0<=d;d--)if(c.childNodes[d].className&&-1<c.childNodes[d].className.indexOf("drag")){g=!1;break}if(!g&&(null!==t&&null!==v&&null!==A)&&(z!==
h||J!==j||U!==l)){a();break}}if(-1<c.className.indexOf("rowhandler")){a();break}if(c.parentNode.redips&&c.parentNode.redips.emptyRow){a();break}}break}};ka=function(){h<f.length&&(null!==h&&null!==j&&null!==l)&&($=Da(h,j,l),Z(h,j,l),t=h,v=j,A=l)};Z=function(a,c,b,d){if("cell"===r&&ha)b=f[a].rows[c].cells[b].style,b.backgroundColor=void 0===d?REDIPS.drag.hover.colorTd:d.color[0].toString(),void 0!==REDIPS.drag.hover.borderTd&&(void 0===d?b.border=REDIPS.drag.hover.borderTd:(b.borderTopWidth=d.top[0][0],
b.borderTopStyle=d.top[0][1],b.borderTopColor=d.top[0][2],b.borderRightWidth=d.right[0][0],b.borderRightStyle=d.right[0][1],b.borderRightColor=d.right[0][2],b.borderBottomWidth=d.bottom[0][0],b.borderBottomStyle=d.bottom[0][1],b.borderBottomColor=d.bottom[0][2],b.borderLeftWidth=d.left[0][0],b.borderLeftStyle=d.left[0][1],b.borderLeftColor=d.left[0][2]));else if("row"===r){a=f[a].rows[c];for(c=0;c<a.cells.length;c++)b=a.cells[c].style,b.backgroundColor=void 0===d?REDIPS.drag.hover.colorTr:d.color[c].toString(),
void 0!==REDIPS.drag.hover.borderTr&&(void 0===d?h===z?j<J?b.borderTop=REDIPS.drag.hover.borderTr:b.borderBottom=REDIPS.drag.hover.borderTr:"before"===REDIPS.drag.rowDropMode?b.borderTop=REDIPS.drag.hover.borderTr:b.borderBottom=REDIPS.drag.hover.borderTr:(b.borderTopWidth=d.top[c][0],b.borderTopStyle=d.top[c][1],b.borderTopColor=d.top[c][2],b.borderBottomWidth=d.bottom[c][0],b.borderBottomStyle=d.bottom[c][1],b.borderBottomColor=d.bottom[c][2]))}};Da=function(a,c,b){var d={color:[],top:[],right:[],
bottom:[],left:[]},e=function(a,b){var c="border"+b+"Style",d="border"+b+"Color";return[E(a,"border"+b+"Width"),E(a,c),E(a,d)]};if("cell"===r)b=f[a].rows[c].cells[b],d.color[0]=b.style.backgroundColor,void 0!==REDIPS.drag.hover.borderTd&&(d.top[0]=e(b,"Top"),d.right[0]=e(b,"Right"),d.bottom[0]=e(b,"Bottom"),d.left[0]=e(b,"Left"));else{a=f[a].rows[c];for(c=0;c<a.cells.length;c++)b=a.cells[c],d.color[c]=b.style.backgroundColor,void 0!==REDIPS.drag.hover.borderTr&&(d.top[c]=e(b,"Top"),d.bottom[c]=e(b,
"Bottom"))}return d};C=function(a,c,b){var d=0,e=0,g=a;"fixed"!==c&&(c=O(),d=0-c[0],e=0-c[1]);if(void 0===b||!0===b){do d+=a.offsetLeft-a.scrollLeft,e+=a.offsetTop-a.scrollTop,a=a.offsetParent;while(a&&"BODY"!==a.nodeName)}else{do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a&&"BODY"!==a.nodeName)}return[e,d+g.offsetWidth,e+g.offsetHeight,d]};u=function(){var a,c,b,d;for(a=0;a<f.length;a++){b=[];d=E(f[a],"position");"fixed"!==d&&(d=E(f[a].parentNode,"position"));for(c=f[a].rows.length-1;0<=
c;c--)"none"!==f[a].rows[c].style.display&&(b[c]=C(f[a].rows[c],d));f[a].redips.offset=C(f[a],d);f[a].redips.row_offset=b}D=C(y);for(a=0;a<L.length;a++)d=E(L[a].div,"position"),c=C(L[a].div,d,!1),L[a].offset=c,L[a].midstX=(c[1]+c[3])/2,L[a].midstY=(c[0]+c[2])/2};O=function(){var a,c;"number"===typeof window.pageYOffset?(a=window.pageXOffset,c=window.pageYOffset):document.body&&(document.body.scrollLeft||document.body.scrollTop)?(a=document.body.scrollLeft,c=document.body.scrollTop):document.documentElement&&
(document.documentElement.scrollLeft||document.documentElement.scrollTop)?(a=document.documentElement.scrollLeft,c=document.documentElement.scrollTop):a=c=0;return[a,c]};la=function(a){var c,b;c=W;b=X;0<S&&(u(),R(),c<D[1]&&(c>D[3]&&b<D[2]&&b>D[0])&&ja());"object"===typeof a&&(s=a);s===window?(a=O()[0],c=ta-G,b=M):(a=s.scrollLeft,c=s.scrollWidth-s.clientWidth,b=P);0<S&&(0>b&&0<a||0<b&&a<c)?(s===window?(window.scrollBy(b,0),O(),a=parseInt(i.style.left,10),isNaN(a)):s.scrollLeft+=b,setTimeout(la,REDIPS.drag.scroll.speed)):
(REDIPS.event.add(s,"scroll",u),S=0,m=[0,0,0,0])};ma=function(a){var c,b;c=W;b=X;0<T&&(u(),R(),c<D[1]&&(c>D[3]&&b<D[2]&&b>D[0])&&ja());"object"===typeof a&&(s=a);s===window?(a=O()[1],c=ua-H,b=N):(a=s.scrollTop,c=s.scrollHeight-s.clientHeight,b=Q);0<T&&(0>b&&0<a||0<b&&a<c)?(s===window?(window.scrollBy(0,b),O(),a=parseInt(i.style.top,10),isNaN(a)):s.scrollTop+=b,setTimeout(ma,REDIPS.drag.scroll.speed)):(REDIPS.event.add(s,"scroll",u),T=0,m=[0,0,0,0])};na=function(a,c){var b=a.cloneNode(!0),d=b.className,
e,g;!0===c&&(document.getElementById("redips_clone").appendChild(b),b.style.zIndex=999,b.style.position="fixed",e=C(a),g=C(b),b.style.top=e[0]-g[0]+"px",b.style.left=e[3]-g[3]+"px");b.setCapture&&b.setCapture();d=d.replace("clone","");d=d.replace(/climit(\d)_(\d+)/,"");b.className=sa(d);void 0===I[a.id]&&(I[a.id]=0);b.id=a.id+"c"+I[a.id];I[a.id]+=1;Ea(a,b);return b};Ea=function(a,c){var b=[],d;b[0]=function(a,b){a.redips&&(b.redips={},b.redips.enabled=a.redips.enabled,b.redips.container=a.redips.container,
a.redips.enabled&&V(b))};b[1]=function(a,b){a.redips&&(b.redips={},b.redips.emptyRow=a.redips.emptyRow)};d=function(d){var g,f,w;f=["DIV","TR"];g=a.getElementsByTagName(f[d]);f=c.getElementsByTagName(f[d]);for(w=0;w<f.length;w++)b[d](g[w],f[w])};if("DIV"===a.nodeName)b[0](a,c);else if("TR"===a.nodeName)b[1](a,c);d(0);d(1)};oa=function(a,c){var b,d,e;e=a.className;b=e.match(/climit(\d)_(\d+)/);null!==b&&(d=parseInt(b[1],10),b=parseInt(b[2],10),0===b&&1===c&&(e+=" clone",2===d&&B(!0,a)),b+=c,e=e.replace(/climit\d_\d+/g,
"climit"+d+"_"+b),0>=b&&(e=e.replace("clone",""),2===d?(B(!1,a),REDIPS.drag.event.clonedEnd2()):REDIPS.drag.event.clonedEnd1()),a.className=sa(e))};Fa=function(a){var c=!1;a.srcElement?(c=a.srcElement.nodeName,a=a.srcElement.className):(c=a.target.nodeName,a=a.target.className);switch(c){case "A":case "INPUT":case "SELECT":case "OPTION":case "TEXTAREA":c=!0;break;default:c=/\bnodrag\b/i.test(a)?!0:!1}return c};B=function(a,c){var b,d,e,g=[],f=[],w,i,h,j,k=/\bdrag\b/i,l=/\bnoautoscroll\b/i;i=REDIPS.drag.style.opacityDisabled;
!0===a||"init"===a?(w=REDIPS.drag.style.borderEnabled,h="move",j=!0):(w=REDIPS.drag.style.borderDisabled,h="auto",j=!1);void 0===c?g=y.getElementsByTagName("div"):"string"===typeof c?g=document.querySelectorAll(c):g[0]=c;for(d=b=0;b<g.length;b++)if(k.test(g[b].className))"init"===a||void 0===g[b].redips?(g[b].redips={},g[b].redips.container=y):!0===a&&"number"===typeof i?(g[b].style.opacity="",g[b].style.filter=""):!1===a&&"number"===typeof i&&(g[b].style.opacity=i/100,g[b].style.filter="alpha(opacity="+
i+")"),V(g[b],j),g[b].style.borderStyle=w,g[b].style.cursor=h,g[b].redips.enabled=j;else if("init"===a&&(e=E(g[b],"overflow"),"visible"!==e)){REDIPS.event.add(g[b],"scroll",u);e=E(g[b],"position");f=C(g[b],e,!1);e=l.test(g[b].className)?!1:!0;L[d]={div:g[b],offset:f,midstX:(f[1]+f[3])/2,midstY:(f[0]+f[2])/2,autoscroll:e};f=g[b].getElementsByTagName("table");for(e=0;e<f.length;e++)f[e].sca=L[d];d++}};E=function(a,c){var b;a&&a.currentStyle?b=a.currentStyle[c]:a&&window.getComputedStyle&&(b=document.defaultView.getComputedStyle(a,
null)[c]);return b};x=function(a,c,b){c=c.parentNode;for(void 0===b&&(b=0);c&&c.nodeName!==a;)if((c=c.parentNode)&&c.nodeName===a&&0<b)b--,c=c.parentNode;return c};Ga=function(a,c){var b=x("TABLE",c),d,e;switch(a){case "firstInColumn":d=0;e=c.cellIndex;break;case "firstInRow":d=c.parentNode.rowIndex;e=0;break;case "lastInColumn":d=b.rows.length-1;e=c.cellIndex;break;case "lastInRow":d=c.parentNode.rowIndex;e=b.rows[d].cells.length-1;break;case "last":d=b.rows.length-1;e=b.rows[d].cells.length-1;break;
default:d=e=0}return[d,e,b.rows[d].cells[e]]};ea=function(a,c,b){var d,e,g;d=function(a,b){var c=REDIPS.drag.getPosition(b);REDIPS.drag.moveObject({obj:a,target:c,callback:function(a){var b,a=REDIPS.drag.findParent("TABLE",a);b=a.redips.idx;wa[b]--;0===wa[b]&&(REDIPS.drag.event.relocated(),REDIPS.drag.enableTable(!0,a))}})};if(a!==c&&!("object"!==typeof a||"object"!==typeof c))if(g=a.childNodes.length,"animation"===b){if(0<g){b=x("TABLE",c);e=b.redips.idx;REDIPS.drag.enableTable(!1,b);for(b=0;b<g;b++)1===
a.childNodes[b].nodeType&&"DIV"===a.childNodes[b].nodeName&&(wa[e]++,d(a.childNodes[b],c))}}else for(d=b=0;b<g;b++)1===a.childNodes[d].nodeType&&"DIV"===a.childNodes[d].nodeName?(e=a.childNodes[d],c.appendChild(e),V(e)):d++};fa=function(a){var c,b;if("TD"!==a.nodeName)return!1;b=a.childNodes.length;for(c=0;c<b;c++)a.removeChild(a.childNodes[0])};pa=function(a,c){var b,d,e,g,f,i,h,j,l,o,m,n,p=!1,q,r;q=function(a,b){REDIPS.drag.animation.shift?ea(a,b,"animation"):ea(a,b)};r=function(a){"delete"===REDIPS.drag.shift.overflow?
fa(a):"source"===REDIPS.drag.shift.overflow?q(a,k.source):"object"===typeof REDIPS.drag.shift.overflow&&q(a,REDIPS.drag.shift.overflow);p=!1};if(a!==c){f=REDIPS.drag.shift.mode;b=x("TABLE",a);d=x("TABLE",c);i=Na(d);e=b===d?[a.redips.rowIndex,a.redips.cellIndex]:[-1,-1];g=[c.redips.rowIndex,c.redips.cellIndex];m=d.rows.length;n=Oa(d);switch(f){case "vertical2":b=b===d&&a.redips.cellIndex===c.redips.cellIndex?e:[m,c.redips.cellIndex];break;case "horizontal2":b=b===d&&a.parentNode.rowIndex===c.parentNode.rowIndex?
e:[c.redips.rowIndex,n];break;default:b=b===d?e:[m,n]}"vertical1"===f||"vertical2"===f?(f=1E3*b[1]+b[0]<1E3*g[1]+g[0]?1:-1,d=m,m=0,n=1):(f=1E3*b[0]+b[1]<1E3*g[0]+g[1]?1:-1,d=n,m=1,n=0);for(b[0]!==e[0]&&b[1]!==e[1]&&(p=!0);b[0]!==g[0]||b[1]!==g[1];)(h=i[b[0]+"-"+b[1]],b[m]+=f,0>b[m]?(b[m]=d,b[n]--):b[m]>d&&(b[m]=0,b[n]++),e=i[b[0]+"-"+b[1]],void 0!==e&&(j=e),void 0!==h&&(l=h),void 0!==e&&void 0!==l||void 0!==j&&void 0!==h)?(e=-1===j.className.indexOf(REDIPS.drag.mark.cname)?0:1,h=-1===l.className.indexOf(REDIPS.drag.mark.cname)?
0:1,p&&0===e&&1===h&&r(j),1===e?0===h&&(o=l):(0===e&&1===h&&(l=o),q(j,l))):p&&(void 0!==j&&void 0===l)&&(e=-1===j.className.indexOf(REDIPS.drag.mark.cname)?0:1,0===e&&r(j))}};Na=function(a){var c=[],b,d={},e,f,i,h,j,l,k,m;h=a.rows;for(j=0;j<h.length;j++)for(l=0;l<h[j].cells.length;l++){b=h[j].cells[l];a=b.parentNode.rowIndex;e=b.rowSpan||1;f=b.colSpan||1;c[a]=c[a]||[];for(k=0;k<c[a].length+1;k++)if("undefined"===typeof c[a][k]){i=k;break}d[a+"-"+i]=b;void 0===b.redips&&(b.redips={});b.redips.rowIndex=
a;b.redips.cellIndex=i;for(k=a;k<a+e;k++){c[k]=c[k]||[];b=c[k];for(m=i;m<i+f;m++)b[m]="x"}}return d};Oa=function(a){var c=a.rows,b=0,d,e;"string"===typeof a&&document.getElementById(a);for(d=0;d<c.length;d++){for(e=a=0;e<c[d].cells.length;e++)a+=c[d].cells[e].colSpan||1;a>b&&(b=a)}return b};Ha=function(a,c){var b=(c.k1-c.k2*a)*(c.k1-c.k2*a),d,a=a+REDIPS.drag.animation.step*(4-3*b)*c.direction;d=c.m*a+c.b;"horizontal"===c.type?(c.obj.style.left=a+"px",c.obj.style.top=d+"px"):(c.obj.style.left=d+"px",
c.obj.style.top=a+"px");a<c.last&&0<c.direction||a>c.last&&0>c.direction?setTimeout(function(){Ha(a,c)},REDIPS.drag.animation.pause*b):(Ba(c.obj),c.obj.redips.animated=!1,"cell"===c.mode?(!0===c.overwrite&&fa(c.targetCell),c.targetCell.appendChild(c.obj),V(c.obj)):Ja(qa(c.target[0]),c.target[1],c.obj),"function"===typeof c.callback&&c.callback(c.obj))};Ia=function(a){var c,b,d;c=[];c=b=d=-1;if(void 0===a)c=h<f.length?f[h].redips.idx:null===t||null===v||null===A?f[z].redips.idx:f[t].redips.idx,b=f[z].redips.idx,
c=[c,j,l,b,J,U];else{if(a="string"===typeof a?document.getElementById(a):a)"TD"!==a.nodeName&&(a=x("TD",a)),a&&"TD"===a.nodeName&&(c=a.cellIndex,b=a.parentNode.rowIndex,a=x("TABLE",a),d=a.redips.idx);c=[d,b,c]}return c};qa=function(a){var c;for(c=0;c<f.length&&f[c].redips.idx!==a;c++);return c};sa=function(a){void 0!==a&&(a=a.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g," "));return a};Qa=function(a){var c;for(c=0;c<a.childNodes.length;c++)if(1===a.childNodes[c].nodeType)return!0;return!1};ra=function(a,
c,b){var d,e;"string"===typeof a&&(a=document.getElementById(a),a=x("TABLE",a));if("TR"===a.nodeName){a=a.getElementsByTagName("td");for(d=0;d<a.length;d++)if(a[d].style.backgroundColor=b?b:"","empty"===c)a[d].innerHTML="";else for(e=0;e<a[d].childNodes.length;e++)1===a[d].childNodes[e].nodeType&&(a[d].childNodes[e].style.opacity=c/100,a[d].childNodes[e].style.filter="alpha(opacity="+c+")")}else a.style.opacity=c/100,a.style.filter="alpha(opacity="+c+")",a.style.backgroundColor=b?b:""};return{obj:i,
objOld:o,mode:r,td:k,hover:{colorTd:"#E7AB83",colorTr:"#E7AB83"},scroll:{enable:!0,bound:25,speed:20},only:xa,mark:Ta,style:{borderEnabled:"solid",borderDisabled:"dotted",opacityDisabled:"",rowEmptyColor:"white"},trash:{className:"trash",question:null,questionRow:null},saveParamName:"p",dropMode:"multiple",multipleDrop:"bottom",clone:Ua,animation:{pause:20,step:2,shift:!1},shift:{mode:"horizontal1",after:"default",overflow:"bunch"},rowDropMode:"before",tableSort:!0,init:function(a){var c;if(void 0===
a||"string"!==typeof a)a="drag";y=document.getElementById(a);document.getElementById("redips_clone")||(a=document.createElement("div"),a.id="redips_clone",a.style.width=a.style.height="1px",y.appendChild(a));B("init");q();Ca();REDIPS.event.add(window,"resize",Ca);c=y.getElementsByTagName("img");for(a=0;a<c.length;a++)REDIPS.event.add(c[a],"mousemove",K),REDIPS.event.add(c[a],"touchmove",K);REDIPS.event.add(window,"scroll",u)},initTables:q,enableDrag:B,enableTable:function(a,c){var b;if("object"===
typeof c&&"TABLE"===c.nodeName)c.redips.enabled=a;else for(b=0;b<f.length;b++)-1<f[b].className.indexOf(c)&&(f[b].redips.enabled=a)},cloneObject:na,saveContent:function(a,c){var b="",d,e,f,i,h,j,k,l=[],m=REDIPS.drag.saveParamName;"string"===typeof a&&(a=document.getElementById(a));if(void 0!==a&&"object"===typeof a&&"TABLE"===a.nodeName){d=a.rows.length;for(h=0;h<d;h++){e=a.rows[h].cells.length;for(j=0;j<e;j++)if(f=a.rows[h].cells[j],0<f.childNodes.length)for(k=0;k<f.childNodes.length;k++)i=f.childNodes[k],
"DIV"===i.nodeName&&-1<i.className.indexOf("drag")&&(b+=m+"[]="+i.id+"_"+h+"_"+j+"&",l.push([i.id,h,j]))}b="json"===c&&0<l.length?JSON.stringify(l):b.substring(0,b.length-1)}return b},relocate:ea,emptyCell:fa,moveObject:function(a){var c={direction:1},b,d,e,g,i,h;c.callback=a.callback;c.overwrite=a.overwrite;"string"===typeof a.id?c.obj=c.objOld=document.getElementById(a.id):"object"===typeof a.obj&&"DIV"===a.obj.nodeName&&(c.obj=c.objOld=a.obj);if("row"===a.mode){c.mode="row";h=qa(a.source[0]);i=
a.source[1];o=c.objOld=f[h].rows[i];if(o.redips&&!0===o.redips.emptyRow)return!1;c.obj=ga(c.objOld,"animated")}else if(c.obj&&-1<c.obj.className.indexOf("row")){c.mode="row";c.obj=c.objOld=o=x("TR",c.obj);if(o.redips&&!0===o.redips.emptyRow)return!1;c.obj=ga(c.objOld,"animated")}else c.mode="cell";if(!("object"!==typeof c.obj||null===c.obj))return c.obj.style.zIndex=999,y!==c.obj.redips.container&&(y=c.obj.redips.container,q()),h=C(c.obj),e=h[1]-h[3],g=h[2]-h[0],b=h[3],d=h[0],!0===a.clone&&"cell"===
c.mode&&(c.obj=na(c.obj,!0),REDIPS.drag.event.cloned(c.obj)),void 0===a.target&&(a.target=Ia()),c.target=a.target,h=qa(a.target[0]),i=a.target[1],a=a.target[2],i>f[h].rows.length-1&&(i=f[h].rows.length-1),c.targetCell=f[h].rows[i].cells[a],"cell"===c.mode?(h=C(c.targetCell),i=h[1]-h[3],a=h[2]-h[0],e=h[3]+(i-e)/2,g=h[0]+(a-g)/2):(h=C(f[h].rows[i]),e=h[3],g=h[0]),h=e-b,a=g-d,c.obj.style.position="fixed",Math.abs(h)>Math.abs(a)?(c.type="horizontal",c.m=a/h,c.b=d-c.m*b,c.k1=(b+e)/(b-e),c.k2=2/(b-e),b>
e&&(c.direction=-1),h=b,c.last=e):(c.type="vertical",c.m=h/a,c.b=b-c.m*d,c.k1=(d+g)/(d-g),c.k2=2/(d-g),d>g&&(c.direction=-1),h=d,c.last=g),c.obj.redips.animated=!0,Ha(h,c),[c.obj,c.objOld]},shiftCells:pa,deleteObject:function(a){"object"===typeof a&&"DIV"===a.nodeName?a.parentNode.removeChild(a):"string"===typeof a&&(a=document.getElementById(a))&&a.parentNode.removeChild(a)},getPosition:Ia,rowOpacity:ra,rowEmpty:function(a,c,b){a=document.getElementById(a).rows[c];void 0===b&&(b=REDIPS.drag.style.rowEmptyColor);
void 0===a.redips&&(a.redips={});a.redips.emptyRow=!0;ra(a,"empty",b)},getScrollPosition:O,getStyle:E,findParent:x,findCell:Ga,event:{changed:function(){},clicked:function(){},cloned:function(){},clonedDropped:function(){},clonedEnd1:function(){},clonedEnd2:function(){},dblClicked:function(){},deleted:function(){},dropped:function(){},droppedBefore:function(){},finish:function(){},moved:function(){},notCloned:function(){},notMoved:function(){},relocated:function(){},rowChanged:function(){},rowClicked:function(){},
rowCloned:function(){},rowDeleted:function(){},rowDropped:function(){},rowDroppedBefore:function(){},rowDroppedSource:function(){},rowMoved:function(){},rowNotCloned:function(){},rowNotMoved:function(){},rowUndeleted:function(){},switched:function(){},undeleted:function(){}}}}();
REDIPS.event||(REDIPS.event=function(){return{add:function(q,B,K){q.addEventListener?q.addEventListener(B,K,!1):q.attachEvent?q.attachEvent("on"+B,K):q["on"+B]=K},remove:function(q,B,K){q.removeEventListener?q.removeEventListener(B,K,!1):q.detachEvent?q.detachEvent("on"+B,K):q["on"+B]=null}}}());