(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",Btn:"NavigationItem_Btn__3xhRr",navbar:"NavigationItem_navbar__2rE4b","NavigationItem-content":"NavigationItem_NavigationItem-content__2c_Zw"}},,,,function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",dropdown:"Toolbar_dropdown__3LTS7",dropbtn:"Toolbar_dropbtn__30BvA"}},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),i=a.n(s),c=(a(17),a(18),a(1)),o=(a(19),function(e){var t=e.node,a=e.onMouseEnter,s=e.onMouseDown,i=e.onMouseLeave,c=e.onMouseUp,o=["Cell"];return Object(n.useEffect)((function(){console.log("Cell UseEffect"),t.setClasses()}),[t]),10===t.row&&10===t.col&&o.push("Filled"),10===t.row&&30===t.col&&o.push("Target"),r.a.createElement("div",{className:o.join(" "),id:"".concat(t.row," ").concat(t.col),onMouseDown:function(){return s(t)},onMouseEnter:function(){return a(t)},onMouseLeave:function(){return i(t)},onMouseUp:function(){return c(t)}},null)}),l=a(5),u=a.n(l),h=a(10),d=function(){var e=Object(h.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(t),a=t[0].length-2,n=t.length-2,r=[],f(1,1,a,n,v(a,n),r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function e(t,a,n,r,s,i){if(!(n<=2||r<=2)){var c="horizontal"===s,o=t+(c?0:Math.ceil(Math.random()*(n-2))),l=a+(c?Math.ceil(Math.random()*(r-2)):0),u=o+(c?Math.ceil(Math.random()*(n-1)):0),h=l+(c?0:Math.ceil(Math.random()*(r-1)));m(l,o,h,u,c,c?n:r,i);var d=c?n:o-t,f=c?l-a:r;e(a,t,d,f,v(d,f),i);var g=c?n:t+n-o-1,p=c?a+r-l-1:r;e(c?t:o+1,c?l+1:a,g,p,v(g,p),i)}},m=function(e,t,a,n,r,s,i){for(var c=0;c<s;c++){var o=e+(r?0:c),l=t+(r?c:0),u=document.getElementById("".concat(o," ").concat(l));!u||u.classList.contains("Target")||u.classList.contains("Filled")||k(o,l,i)||u.classList.add("Wall")}var h=document.getElementById("".concat(a," ").concat(n));h&&!S(a,n)&&h.classList.remove("Wall"),p(a,n,r,i)},v=function(e,t){return e<t?"horizontal":"vertical"},g=function(e){for(var t=0;t<e.length;t++){var a=document.getElementById("".concat(t," ",0)).classList;a.add("Wall"),(a=document.getElementById("".concat(t," ").concat(e[t].length-1)).classList).add("Wall")}for(var n=0;n<e[0].length;n++){var r=document.getElementById("".concat(0," ",n)).classList;r.add("Wall"),(r=document.getElementById("".concat(e.length-1," ").concat(n)).classList).add("Wall")}},p=function(e,t,a,n){a?(n.push([e+1,t]),n.push([e-1,t])):(n.push([e,t+1]),n.push([e,t-1]))},k=function(e,t,a){for(var n=0;n<a.length;n++)if(a[n][0]===e&&a[n][1]===t)return!0;return!1},S=function(e,t){return 0===e||19===e||0===t||49===t},y=function(e,t,a){var n=function(t,a){return e[t][a].isWall()};if(n(t,a))return[];var r=[];return t>0&&!n(t-1,a)&&r.push(e[t-1][a]),a>0&&!n(t,a-1)&&r.push(e[t][a-1]),t<e.length-1&&!n(t+1,a)&&r.push(e[t+1][a]),a<e[t].length-1&&!n(t,a+1)&&r.push(e[t][a+1]),r},E=function(e){var t=[],a=new O(document.getElementsByClassName("Cell").length-document.getElementsByClassName("Wall").length);for(var n in e)for(var r in t[n]=[],e[n])a.addVertex(e[n][r]);return a},b=function(e){for(var t=null,a=null,n=E(e),r=0;r<e.length;r++)for(var s=0;s<e[r].length;s++){var i=e[r][s];if(!i.isWall()){i.isStart()&&(t=i),i.isTarget()&&(a=i);var c=y(e,r,s);for(var o in c)n.addEdge(i,c[o])}}return t.dist=0,{graph:n,startNode:t,targetNode:a}},j=a(6),M=a(2),T=a(3),D=function(){function e(){Object(M.a)(this,e),this.items=[]}return Object(T.a)(e,[{key:"enqueue",value:function(e){this.items.push(e)}},{key:"dequeue",value:function(){return this.isEmpty()?"Underflow":this.items.shift()}},{key:"front",value:function(){return this.isEmpty()?"No elements in Queue":this.items[0]}},{key:"isEmpty",value:function(){return 0===this.items.length}},{key:"printQueue",value:function(){for(var e="",t=0;t<this.items.length;t++)e+=this.items[t]+" ";return e}}]),e}(),O=function(){function e(t){Object(M.a)(this,e),this.noOfVertices=t,this.AdjList=new Map}return Object(T.a)(e,[{key:"addVertex",value:function(e){this.AdjList.set(e,[])}},{key:"addEdge",value:function(e,t){this.AdjList.get(e).push(t)}},{key:"printGraph",value:function(){var e,t=this.AdjList.keys(),a=Object(j.a)(t);try{for(a.s();!(e=a.n()).done;){var n,r=e.value,s=this.AdjList.get(r),i="",c=Object(j.a)(s);try{for(c.s();!(n=c.n()).done;){i+=n.value+" "}}catch(o){c.e(o)}finally{c.f()}console.log(r+" -> "+i)}}catch(o){a.e(o)}finally{a.f()}}},{key:"bfs",value:function(e){for(var t=[],a=[],n=0;n<this.noOfVertices;n++)a[n]=!1;var r=new D;a[e]=!0,r.enqueue(e);for(var s=1;!r.isEmpty();){var i=r.dequeue(),c=this.AdjList.get(i);for(var o in c){var l=c[o];a[l]||(l.predecessor=i,l.dist=s,t.push(l),a[l]=!0,r.enqueue(l))}s++}return t}},{key:"dfs",value:function(e,t){for(var a=[],n=[],r=0;r<this.noOfVertices;r++)n[r]=!1;return this.DFSUtil(e,n,a),a}},{key:"DFSUtil",value:function(e,t,a){t[e]=!0;var n=this.AdjList.get(e);for(var r in n){var s=n[r];t[s]||(s.predecessor=e,a.push(s),this.DFSUtil(s,t,a))}}},{key:"dijkstra",value:function(e,t,a){var n=new w((function(e){return e.dist}));n.push(e);for(var r=!1;!n.isEmpty();){var s=n.pop(),i=s.dist,c=this.AdjList.get(s);for(var o in c){var l=c[o],u=1+i;u<l.dist&&!n.contains(l)&&(r||t.push(l),n.push(l),l.predecessor=s,l.dist=u,(l.isTarget()||l.isSecondTarget())&&(a?this.dijkstra(l,t):r=!0))}}return t}},{key:"aStar",value:function(e,t,a){!a&&console.log("NO ANIMATION");var n=[],r=new w((function(e){return e.f}));for(e.g=0,this.manhattanDistance(e,t),r.push(e),r.print();!r.isEmpty();){console.log(r);var s=r.pop(),i=s.dist,c=this.AdjList.get(s);for(var o in console.log(c),c){var l=c[o],u=1+i;if(u<l.dist&&!r.contains(l)&&(a||(console.log("Got here"),l.markSearched2Done()),n.push(l),this.manhattanDistance(l,t),r.push(l),l.predecessor=s,l.dist=u,l.isTarget()))return a||l.markShortestPath(),n}}return n}},{key:"manhattanDistance",value:function(e,t){var a=Math.abs(e.col-t.col)+Math.abs(e.row-t.row);e.h=a,e.f=e.g+e.h}},{key:"bestFirstSearch",value:function(e,t,a){var n=[],r=new w((function(e){return e.f}));for(e.g=0,this.euclideanDistance(e,t),r.push(e),r.print();!r.isEmpty();){var s=r.pop(),i=s.dist,c=this.AdjList.get(s);for(var o in c){var l=c[o],u=1+i;if(u<l.dist&&!r.contains(l)&&(a||l.markSearched2Done(),n.push(l),this.euclideanDistance(l,t),r.push(l),l.predecessor=s,l.dist=u,l.isTarget()))return a||l.markShortestPath(),n}}return n}},{key:"euclideanDistance",value:function(e,t){var a=Math.sqrt(Math.pow(e.col-t.col,2)+Math.pow(e.row-t.row,2));e.h=Math.floor(a),e.f=e.g+e.h}}]),e}(),w=function(){function e(t){Object(M.a)(this,e),this.items=[],this.selector=t}return Object(T.a)(e,[{key:"seek",value:function(){return this.items[0]}},{key:"push",value:function(e){var t=this.items.length;this.items.push(e);var a=Math.floor((t+1)/2-1);a<0&&(a=0);for(var n=this.selector(this.items[a]),r=this.selector(this.items[t]);t>0&&n>r;)a=Math.floor((t+1)/2-1),this.swap(t,a),t=a,n=this.selector(this.items[Math.max(Math.floor((t+1)/2-1),0)])}},{key:"swap",value:function(e,t){var a=this.items[e];this.items[e]=this.items[t],this.items[t]=a}},{key:"pop",value:function(){if(this.items.length<=1)return this.items.pop();var e=this.items[0],t=this.items.pop();this.items[0]=t;for(var a=0;;){var n=2*(a+1),r=2*(a+1)-1,s=n;if(r>=this.items.length&&n>=this.items.length)break;if(r>=this.items.length&&(s=n),n>=this.items.length&&(s=r),r>=this.items.length||n>=this.items.length||(s=this.selector(this.items[n])<this.selector(this.items[r])?n:r),!(this.selector(this.items[a])>this.selector(this.items[s])))break;this.swap(a,s),a=s}return e}},{key:"contains",value:function(e){return this.items.includes(e)}},{key:"isEmpty",value:function(){return 0===this.items.length}},{key:"delete",value:function(e){var t=this.items.indexOf(e);for(this.items[t]=this.items.pop();;){var a=this.selector(this.items[2*(t+1)])<this.selector(this.items[2*(t+1)-1])?2*(t+1):2*(t+1)-1;if(!(this.selector(this.items[t])>this.selector(this.items[a])))break;var n=this.items[t];this.items[t]=this.items[a],this.items[a]=n,t=a}}},{key:"print",value:function(){for(var e=0;e<this.items.length;e++)console.log(this.items[e])}},{key:"heapify",value:function(e){for(var t=0;t<e.length;t++)this.push(e[t])}}]),e}(),A="Greedy Best First Search",L="Breadth First Search",N=(a(21),function(){function e(t,a){Object(M.a)(this,e),this.row=t,this.col=a,this.predecessor=null,this.dist=1/0,this.g=1,this.h=null,this.f=null}return Object(T.a)(e,[{key:"setClasses",value:function(){this.cell=document.getElementById("".concat(this.row," ").concat(this.col)),this.classes=this.cell.classList}},{key:"toString",value:function(){return"("+this.row+" "+this.col+")"}},{key:"setWall",value:function(){this.isKeyValue()||this.classes.add("Wall")}},{key:"setAsTarget",value:function(){this.classes.add("Target"),this.markShortestPath()}},{key:"setAsStart",value:function(){this.classes.remove("Wall"),this.classes.add("Filled")}},{key:"setAsSecondTarget",value:function(){this.classes.remove("Wall"),this.classes.add("SecondaryTarget")}},{key:"markSearched",value:function(){this.isTarget()||this.classes.add("Searched")}},{key:"markSearched2",value:function(){this.isTarget()||this.classes.add("Searched2")}},{key:"markSearched2Done",value:function(){this.isTarget()||this.isStart()||this.classes.add("Searched2Done")}},{key:"removeVisuals",value:function(){this.classes.remove("ShortestPath"),this.classes.remove("Searched"),this.classes.remove("Searched2"),this.classes.remove("Searched2Done"),this.predecessor=null,this.dist=1/0}},{key:"removeClasses",value:function(){var e=this;this.classes.forEach((function(t){return"Cell"!==t&&"Wall"!==t&&e.classes.remove(t)}))}},{key:"reset",value:function(){this.classes.remove("ShortestPath"),this.classes.remove("Wall"),this.classes.remove("Searched"),this.classes.remove("Searched2"),this.classes.remove("SecondaryTarget"),this.classes.remove("Searched2Done"),this.predecessor=null,this.dist=1/0}},{key:"clear",value:function(){this.classes.remove("Target"),this.classes.remove("Filled"),this.classes.remove("SecondaryTarget"),this.classes.remove("Searched2"),this.classes.remove("Searched"),this.classes.remove("Searched2Done")}},{key:"isTarget",value:function(){return this.classes.contains("Target")}},{key:"isStart",value:function(){return this.classes.contains("Filled")}},{key:"isSecondTarget",value:function(){return this.classes.contains("SecondaryTarget")}},{key:"isKeyValue",value:function(){return this.isTarget()||this.isStart()||this.isSecondTarget()}},{key:"isWall",value:function(){return this.classes.contains("Wall")}},{key:"isPartOfGraph",value:function(){return!this.isWall()}},{key:"markShortestPath",value:function(){this.isTarget()||this.isStart()||(this.classes.remove("Searched"),this.classes.remove("Searched2"),this.classes.remove("Searched2Done"),this.classes.add("ShortestPath")),null!=this.predecessor&&this.predecessor.markShortestPath()}}]),e}()),I=function(){var e=function(e,t){for(var a=[],n=0;n<e;n++){a[n]=[];for(var r=0;r<t;r++){var s=new N(n,r);a[n][r]=s}}return a}(20,50),t=Object(n.useRef)(e).current;return{nodeGrid:t,resetGrid:function(){for(var e in t)for(var a in t[e])t[e][a].reset()},removeVisuals:function(){for(var e in t)for(var a in t[e])t[e][a].removeVisuals()},paintInDistance:function(e){if(e!==1/0)for(var a in t)for(var n in t[a])t[a][n].dist<=e?t[a][n].markSearched2Done():t[a][n].removeClasses()},resetDistance:function(){for(var e in t)for(var a in t[e])t[e][a].dist=1/0,t[e][a].isKeyValue()||t[e][a].removeClasses()}}},_=a(11),W=a.n(_),F=a(7),B=a.n(F),C=function(e){var t=e.children,a=e.clicked;return r.a.createElement("div",{className:B.a.NavigationItem},r.a.createElement("button",{onClick:a,className:B.a.Btn},t))},G=(a(22),function(e){var t=e.children,a=(e.clicked,e.moreInfo,e.title);return r.a.createElement("div",{class:"dropdown"},r.a.createElement("button",{class:"dropbtn"},a),r.a.createElement("div",{class:"dropdown-content"},t))}),V=(a(23),function(e){var t=e.children,a=e.title;return r.a.createElement("div",{class:"subnav"},r.a.createElement("button",{class:"subnavbtn"},a),r.a.createElement("div",{class:"subnav-content"},t))}),P=function(e){var t=e.children,a=e.clicked;return r.a.createElement("p",{onClick:a},t)},R=function(e){var t=e.setAlgorithm,a=e.reset,n=e.executeAlgorithm,s=e.toggleShowModal,i=e.algorithm,c=e.mazeGen,o=e.settingSecondTarget,l=e.clear;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{clicked:s},"GRAPH ALGORITHMS"),r.a.createElement(V,{title:"Algorithms"},r.a.createElement(G,{title:"Dijkstra"},r.a.createElement(P,{clicked:function(){return t("Dijkstra")}},"Select"),r.a.createElement(P,{clicked:function(){return alert("Dijkstra")}},"Learn More")),r.a.createElement(G,{clicked:function(){return t("A*")},moreInfo:function(){return alert("A*")},title:"A*"},r.a.createElement(P,{clicked:function(){return t("A*")}},"Select"),r.a.createElement(P,{clicked:function(){return alert("A*")}},"Learn More")),r.a.createElement(G,{clicked:function(){return t(A)},moreInfo:function(){return alert(A)},title:A},r.a.createElement(P,{clicked:function(){return t(A)}},"Select"),r.a.createElement(P,{clicked:function(){return alert(A)}},"Learn More")),r.a.createElement(G,{title:L},r.a.createElement(P,{clicked:function(){return t(L)}},"Select"),r.a.createElement(P,{clicked:function(){return alert(L)}},"Learn More")),r.a.createElement(G,{title:"Depth First Search"},r.a.createElement(P,{clicked:function(){return t("Depth First Search")}},"Select"),r.a.createElement(P,{clicked:function(){return alert("Depth First Search")}},"Learn More"))),r.a.createElement(V,{title:"Maze Generators"},r.a.createElement(G,{title:"Random Maze",clicked:function(){return c("Random Maze")},moreInfo:function(){return alert("Dijkstra")}},r.a.createElement(P,{clicked:function(){return c("Random Maze")}},"Generate"),r.a.createElement(P,{clicked:function(){return alert("Recursive Division")}},"Learn More")),r.a.createElement(G,{title:"Recursive Division"},r.a.createElement(P,{clicked:function(){return c("Recursive Division")}},"Generate"),r.a.createElement(P,{clicked:function(){return alert("Recursive Division")}},"Learn More"))),r.a.createElement(C,{clicked:function(){return o(!0)}},"Add Second Target"),r.a.createElement(C,{clicked:a},"Reset"),r.a.createElement(C,{clicked:l},"Clear Visualization"),r.a.createElement(C,{clicked:n},"Visualize ",i,"!"))},x=function(e){return r.a.createElement("header",{className:W.a.Toolbar},r.a.createElement(R,e))},z=function(){var e=Object(n.useState)("Dijkstra"),t=Object(c.a)(e,2),a=t[0],s=t[1],i=I(),l=i.nodeGrid,u=i.resetGrid,h=i.removeVisuals,f=i.paintInDistance,m=i.resetDistance,v=Object(n.useState)(!1),g=Object(c.a)(v,2),p=g[0],k=g[1],S=Object(n.useState)(!0),y=Object(c.a)(S,2),E=y[0],j=y[1],M=Object(n.useState)(!1),T=Object(c.a)(M,2),D=T[0],O=T[1],w=Object(n.useState)(!1),N=Object(c.a)(w,2),_=N[0],W=N[1],F=Object(n.useState)(!1),B=Object(c.a)(F,2),C=B[0],G=B[1],V=Object(n.useState)(!1),P=Object(c.a)(V,2),R=P[0],z=P[1],U=Object(n.useState)(!1),q=Object(c.a)(U,2),K=q[0],H=q[1],J=Object(n.useState)(1),Q=Object(c.a)(J,2),X=Q[0],Z=Q[1],Y=Object(n.useState)("Dijkstra"),$=Object(c.a)(Y,2),ee=$[0],te=$[1],ae=Object(n.useState)(!0),ne=Object(c.a)(ae,2),re=ne[0],se=ne[1],ie=function(e){console.log("Entering"),E&&(R&&e.setAsSecondTarget(),!p||C||D||_||re&&e.setWall(),p&&C&&e.setAsStart(),p&&D&&function(e){switch(e.setAsTarget(),ee){case"Dijkstra":f(e.dist),e.markShortestPath();break;case"A*":m(),me(!1);break;case A:m(),ve(!1);break;case L:f(e.dist),e.markShortestPath();break;case"Depth First Search":m(),de(!1),e.markShortestPath()}}(e),p&&_&&e.setAsSecondTarget())},ce=function(e){if(E)return k(!0),R?(Z(X+1),H(!0),z(!1)):!e.isKeyValue()&&re?e.setWall():e.isStart()?G(!0):e.isTarget()?O(!0):e.isSecondTarget()?W(!0):void 0},oe=function(e){E&&(C||D||R||_)&&e.clear()},le=function(){E&&(k(!1),G(!1),O(!1),W(!1))},ue=l.map((function(e,t){return e.map((function(e,a){return r.a.createElement(o,{key:e,node:l[t][a],onMouseEnter:ie,onMouseDown:ce,onMouseUp:le,onMouseLeave:oe})}))})),he=function(){var e=b(l),t=e.startNode;return e.graph.bfs(t)},de=function(e){var t=b(l),a=t.startNode;return t.graph.dfs(a,e)},fe=function(){var e=b(l),t=e.startNode,a=[];return e.graph.dijkstra(t,a,K),a},me=function(e){var t=b(l),a=t.startNode,n=t.graph,r=t.targetNode;return n.aStar(a,r,e)},ve=function(e){var t=b(l),a=t.startNode,n=t.graph,r=t.targetNode;return n.bestFirstSearch(a,r,e)},ge=function(){E&&(se(!0),H(!1),te(null),u())},pe=function(){E&&(se(!0),te(null),h())},ke=function(){E&&(ge(),function(e){for(var t=0;t<e.length;t++)for(var a=0;a<e[t].length;a++){if(Math.random()<=.3)e[t][a].setWall()}}(l))},Se=function(){E&&(ge(),d(l))},ye=function(e){if(e.length<=0)j(!0);else var t=0,a=setInterval((function(){var n=e[t];n.markSearched2(),(n.isTarget()||n.isSecondTarget())&&n.markShortestPath(),++t>=e.length&&(j(!0),clearInterval(a))}),10)};return r.a.createElement("div",{className:"MainContainer"},r.a.createElement(x,{setAlgorithm:s,reset:ge,algorithm:a,executeAlgorithm:function(e){if(pe(),E){j(!1),te(a),se(!1);var t=[];switch(a){case L:t=he();break;case"Depth First Search":t=de(!0);break;case"A*":t=me(!0);break;case"Dijkstra":t=fe();break;case A:t=ve(!0);break;default:t=he()}ye(t)}},clear:pe,mazeGen:function(e){switch(e){case"Recursive Division":Se();break;default:ke()}},settingSecondTarget:z}),r.a.createElement("br",null),r.a.createElement("div",{className:"Board",style:{gridTemplateRows:"repeat(".concat(20,", 1fr)"),gridTemplateColumns:"repeat(".concat(50,", 1fr)")}},ue))};var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.eb1a4ce3.chunk.js.map