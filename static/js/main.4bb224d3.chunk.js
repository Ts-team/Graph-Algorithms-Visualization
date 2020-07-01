(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",Btn:"NavigationItem_Btn__3xhRr",navbar:"NavigationItem_navbar__2rE4b","NavigationItem-content":"NavigationItem_NavigationItem-content__2c_Zw"}},34:function(e,t,a){e.exports={App:"App_App__16ZpL",Container:"App_Container__10KOh"}},38:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",dropdown:"Toolbar_dropdown__3LTS7",dropbtn:"Toolbar_dropbtn__30BvA"}},50:function(e,t,a){e.exports=a(66)},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),s=a.n(i),c=(a(55),a(9)),o=(a(56),function(e){var t=e.node,a=e.onMouseEnter,i=e.onMouseDown,s=e.onMouseLeave,c=e.onMouseUp,o=["Cell"];return Object(n.useEffect)((function(){console.log("Cell UseEffect"),t.setClasses()}),[t]),10===t.row&&10===t.col&&o.push("Filled"),10===t.row&&30===t.col&&o.push("Target"),r.a.createElement("div",{className:o.join(" "),id:"".concat(t.row," ").concat(t.col),onMouseDown:function(){return i(t)},onMouseEnter:function(){return a(t)},onMouseLeave:function(){return s(t)},onMouseUp:function(){return c(t)}},null)}),l=a(31),u=a.n(l),h=a(37),d=function(){var e=Object(h.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(t),a=t[0].length-2,n=t.length-2,r=[],f(1,1,a,n,v(a,n),r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function e(t,a,n,r,i,s){if(!(n<=2||r<=2)){var c="horizontal"===i,o=t+(c?0:Math.ceil(Math.random()*(n-2))),l=a+(c?Math.ceil(Math.random()*(r-2)):0),u=o+(c?Math.ceil(Math.random()*(n-1)):0),h=l+(c?0:Math.ceil(Math.random()*(r-1)));m(l,o,h,u,c,c?n:r,s);var d=c?n:o-t,f=c?l-a:r;e(a,t,d,f,v(d,f),s);var p=c?n:t+n-o-1,g=c?a+r-l-1:r;e(c?t:o+1,c?l+1:a,p,g,v(p,g),s)}},m=function(e,t,a,n,r,i,s){for(var c=0;c<i;c++){var o=e+(r?0:c),l=t+(r?c:0),u=document.getElementById("".concat(o," ").concat(l));!u||u.classList.contains("Target")||u.classList.contains("Filled")||k(o,l,s)||u.classList.add("Wall")}var h=document.getElementById("".concat(a," ").concat(n));h&&!E(a,n)&&h.classList.remove("Wall"),g(a,n,r,s)},v=function(e,t){return e<t?"horizontal":"vertical"},p=function(e){for(var t=0;t<e.length;t++){var a=document.getElementById("".concat(t," ",0)).classList;a.add("Wall"),(a=document.getElementById("".concat(t," ").concat(e[t].length-1)).classList).add("Wall")}for(var n=0;n<e[0].length;n++){var r=document.getElementById("".concat(0," ",n)).classList;r.add("Wall"),(r=document.getElementById("".concat(e.length-1," ").concat(n)).classList).add("Wall")}},g=function(e,t,a,n){a?(n.push([e+1,t]),n.push([e-1,t])):(n.push([e,t+1]),n.push([e,t-1]))},k=function(e,t,a){for(var n=0;n<a.length;n++)if(a[n][0]===e&&a[n][1]===t)return!0;return!1},E=function(e,t){return 0===e||19===e||0===t||49===t},S=function(e,t,a){var n=function(t,a){return e[t][a].isWall()};if(n(t,a))return[];var r=[];return t>0&&!n(t-1,a)&&r.push(e[t-1][a]),a>0&&!n(t,a-1)&&r.push(e[t][a-1]),t<e.length-1&&!n(t+1,a)&&r.push(e[t+1][a]),a<e[t].length-1&&!n(t,a+1)&&r.push(e[t][a+1]),r},b=function(e){var t=[],a=new M(document.getElementsByClassName("Cell").length-document.getElementsByClassName("Wall").length);for(var n in e)for(var r in t[n]=[],e[n])a.addVertex(e[n][r]);return a},y=function(e){for(var t=null,a=null,n=b(e),r=0;r<e.length;r++)for(var i=0;i<e[r].length;i++){var s=e[r][i];if(!s.isWall()){s.isStart()&&(t=s),s.isTarget()&&(a=s);var c=S(e,r,i);for(var o in c)n.addEdge(s,c[o])}}return t.dist=0,{graph:n,startNode:t,targetNode:a}},j=a(32),O=a(14),T=a(15),D=function(){function e(){Object(O.a)(this,e),this.items=[]}return Object(T.a)(e,[{key:"enqueue",value:function(e){this.items.push(e)}},{key:"dequeue",value:function(){return this.isEmpty()?"Underflow":this.items.shift()}},{key:"front",value:function(){return this.isEmpty()?"No elements in Queue":this.items[0]}},{key:"isEmpty",value:function(){return 0===this.items.length}},{key:"printQueue",value:function(){for(var e="",t=0;t<this.items.length;t++)e+=this.items[t]+" ";return e}}]),e}(),M=function(){function e(t){Object(O.a)(this,e),this.noOfVertices=t,this.AdjList=new Map}return Object(T.a)(e,[{key:"addVertex",value:function(e){this.AdjList.set(e,[])}},{key:"addEdge",value:function(e,t){this.AdjList.get(e).push(t)}},{key:"printGraph",value:function(){var e,t=this.AdjList.keys(),a=Object(j.a)(t);try{for(a.s();!(e=a.n()).done;){var n,r=e.value,i=this.AdjList.get(r),s="",c=Object(j.a)(i);try{for(c.s();!(n=c.n()).done;){s+=n.value+" "}}catch(o){c.e(o)}finally{c.f()}console.log(r+" -> "+s)}}catch(o){a.e(o)}finally{a.f()}}},{key:"bfs",value:function(e){for(var t=[],a=[],n=0;n<this.noOfVertices;n++)a[n]=!1;var r=new D;a[e]=!0,r.enqueue(e);for(var i=1;!r.isEmpty();){var s=r.dequeue(),c=this.AdjList.get(s);for(var o in c){var l=c[o];a[l]||(l.predecessor=s,l.dist=i,t.push(l),a[l]=!0,r.enqueue(l))}i++}return t}},{key:"dfs",value:function(e,t){for(var a=[],n=[],r=0;r<this.noOfVertices;r++)n[r]=!1;return this.DFSUtil(e,n,a),a}},{key:"DFSUtil",value:function(e,t,a){t[e]=!0;var n=this.AdjList.get(e);for(var r in n){var i=n[r];t[i]||(i.predecessor=e,a.push(i),this.DFSUtil(i,t,a))}}},{key:"dijkstra",value:function(e,t,a){var n=new w((function(e){return e.dist}));n.push(e);for(var r=!1;!n.isEmpty();){var i=n.pop(),s=i.dist,c=this.AdjList.get(i);for(var o in c){var l=c[o],u=1+s;u<l.dist&&!n.contains(l)&&(r||t.push(l),n.push(l),l.predecessor=i,l.dist=u,(l.isTarget()||l.isSecondTarget())&&(a?this.dijkstra(l,t):r=!0))}}return t}},{key:"aStar",value:function(e,t,a){!a&&console.log("NO ANIMATION");var n=[],r=new w((function(e){return e.f}));for(e.g=0,this.manhattanDistance(e,t),r.push(e),r.print();!r.isEmpty();){console.log(r);var i=r.pop(),s=i.dist,c=this.AdjList.get(i);for(var o in console.log(c),c){var l=c[o],u=1+s;if(u<l.dist&&!r.contains(l)&&(a||(console.log("Got here"),l.markSearched2Done()),n.push(l),this.manhattanDistance(l,t),r.push(l),l.predecessor=i,l.dist=u,l.isTarget()))return a||l.markShortestPath(),n}}return n}},{key:"manhattanDistance",value:function(e,t){var a=Math.abs(e.col-t.col)+Math.abs(e.row-t.row);e.h=a,e.f=e.g+e.h}},{key:"bestFirstSearch",value:function(e,t,a){var n=[],r=new w((function(e){return e.f}));for(e.g=0,this.euclideanDistance(e,t),r.push(e),r.print();!r.isEmpty();){var i=r.pop(),s=i.dist,c=this.AdjList.get(i);for(var o in c){var l=c[o],u=1+s;if(u<l.dist&&!r.contains(l)&&(a||l.markSearched2Done(),n.push(l),this.euclideanDistance(l,t),r.push(l),l.predecessor=i,l.dist=u,l.isTarget()))return a||l.markShortestPath(),n}}return n}},{key:"euclideanDistance",value:function(e,t){var a=Math.sqrt(Math.pow(e.col-t.col,2)+Math.pow(e.row-t.row,2));e.h=Math.floor(a),e.f=e.g+e.h}}]),e}(),w=function(){function e(t){Object(O.a)(this,e),this.items=[],this.selector=t}return Object(T.a)(e,[{key:"seek",value:function(){return this.items[0]}},{key:"push",value:function(e){var t=this.items.length;this.items.push(e);var a=Math.floor((t+1)/2-1);a<0&&(a=0);for(var n=this.selector(this.items[a]),r=this.selector(this.items[t]);t>0&&n>r;)a=Math.floor((t+1)/2-1),this.swap(t,a),t=a,n=this.selector(this.items[Math.max(Math.floor((t+1)/2-1),0)])}},{key:"swap",value:function(e,t){var a=this.items[e];this.items[e]=this.items[t],this.items[t]=a}},{key:"pop",value:function(){if(this.items.length<=1)return this.items.pop();var e=this.items[0],t=this.items.pop();this.items[0]=t;for(var a=0;;){var n=2*(a+1),r=2*(a+1)-1,i=n;if(r>=this.items.length&&n>=this.items.length)break;if(r>=this.items.length&&(i=n),n>=this.items.length&&(i=r),r>=this.items.length||n>=this.items.length||(i=this.selector(this.items[n])<this.selector(this.items[r])?n:r),!(this.selector(this.items[a])>this.selector(this.items[i])))break;this.swap(a,i),a=i}return e}},{key:"contains",value:function(e){return this.items.includes(e)}},{key:"isEmpty",value:function(){return 0===this.items.length}},{key:"delete",value:function(e){var t=this.items.indexOf(e);for(this.items[t]=this.items.pop();;){var a=this.selector(this.items[2*(t+1)])<this.selector(this.items[2*(t+1)-1])?2*(t+1):2*(t+1)-1;if(!(this.selector(this.items[t])>this.selector(this.items[a])))break;var n=this.items[t];this.items[t]=this.items[a],this.items[a]=n,t=a}}},{key:"print",value:function(){for(var e=0;e<this.items.length;e++)console.log(this.items[e])}},{key:"heapify",value:function(e){for(var t=0;t<e.length;t++)this.push(e[t])}}]),e}(),A="Greedy Best First Search",N="Breadth First Search",L=(a(58),function(){function e(t,a){Object(O.a)(this,e),this.row=t,this.col=a,this.predecessor=null,this.dist=1/0,this.g=1,this.h=null,this.f=null}return Object(T.a)(e,[{key:"removeClass",value:function(e){this.classes.remove(e)}},{key:"setClasses",value:function(){this.cell=document.getElementById("".concat(this.row," ").concat(this.col)),this.classes=this.cell.classList}},{key:"toString",value:function(){return"("+this.row+" "+this.col+")"}},{key:"setWall",value:function(){this.isKeyValue()||this.classes.add("Wall")}},{key:"setAsTarget",value:function(){this.classes.add("Target"),this.markShortestPath()}},{key:"setAsStart",value:function(){this.classes.remove("Wall"),this.classes.add("Filled")}},{key:"setAsSecondTarget",value:function(){this.classes.remove("Wall"),this.classes.add("SecondaryTarget")}},{key:"markSearched",value:function(){this.isTarget()||this.classes.add("Searched")}},{key:"markSearched2",value:function(){this.isTarget()||this.classes.add("Searched2")}},{key:"markSearched2Done",value:function(){this.isTarget()||this.isStart()||this.classes.add("Searched2Done")}},{key:"removeVisuals",value:function(){this.remove(["ShortestPath","Searched","Searched2","Searched2Done"]),this.predecessor=null,this.dist=1/0}},{key:"removeClasses",value:function(){var e=this;this.classes.forEach((function(t){return"Cell"!==t&&"Wall"!==t&&e.classes.remove(t)}))}},{key:"reset",value:function(){this.remove(["ShortestPath","Wall","Searched"]),this.remove(["Searched2","SecondaryTarget","Searched2Done"]),this.predecessor=null,this.dist=1/0}},{key:"isTarget",value:function(){return this.classes.contains("Target")}},{key:"isStart",value:function(){return this.classes.contains("Filled")}},{key:"isSecondTarget",value:function(){return this.classes.contains("SecondaryTarget")}},{key:"isKeyValue",value:function(){return this.isTarget()||this.isStart()||this.isSecondTarget()}},{key:"isWall",value:function(){return this.classes.contains("Wall")}},{key:"isPartOfGraph",value:function(){return!this.isWall()}},{key:"markShortestPath",value:function(){this.isTarget()||this.isStart()||(this.remove(["Searched","Searched2","Searched2Done"]),this.classes.add("ShortestPath")),null!=this.predecessor&&this.predecessor.markShortestPath()}},{key:"remove",value:function(e){for(var t in e)this.classes.remove(e[t])}}]),e}()),I=function(){var e=function(e,t){for(var a=[],n=0;n<e;n++){a[n]=[];for(var r=0;r<t;r++){var i=new L(n,r);a[n][r]=i}}return a}(20,50),t=Object(n.useRef)(e).current;return{nodeGrid:t,resetGrid:function(){for(var e in t)for(var a in t[e])t[e][a].reset()},removeVisuals:function(){for(var e in t)for(var a in t[e])t[e][a].removeVisuals()},paintInDistance:function(e){if(e!==1/0)for(var a in t)for(var n in t[a])t[a][n].dist<=e?t[a][n].markSearched2Done():t[a][n].removeClasses()},resetDistance:function(){for(var e in t)for(var a in t[e])t[e][a].dist=1/0,t[e][a].isKeyValue()||t[e][a].removeClasses()}}},_=a(38),C=a.n(_),W=a(33),B=a.n(W),F=function(e){var t=e.children,a=e.clicked;return r.a.createElement("div",{className:B.a.NavigationItem},r.a.createElement("button",{onClick:a,className:B.a.Btn},t))},V=(a(59),function(e){var t=e.children,a=(e.clicked,e.moreInfo,e.title);return r.a.createElement("div",{class:"dropdown"},r.a.createElement("button",{class:"dropbtn"},a),r.a.createElement("div",{class:"dropdown-content"},t))}),x=(a(60),function(e){var t=e.children,a=e.title;return r.a.createElement("div",{class:"subnav"},r.a.createElement("button",{class:"subnavbtn"},a),r.a.createElement("div",{class:"subnav-content"},t))}),G=function(e){var t=e.children,a=e.clicked;return r.a.createElement("p",{onClick:a},t)},P=function(e){var t=e.setAlgorithm,a=e.reset,n=e.executeAlgorithm,i=e.algorithm,s=e.mazeGen,c=e.settingSecondTarget,o=e.openDialog,l=e.clear;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{clicked:o},"GRAPH ALGORITHMS"),r.a.createElement(x,{title:"Algorithms"},r.a.createElement(V,{title:"Dijkstra"},r.a.createElement(G,{clicked:function(){return t("Dijkstra")}},"Select"),r.a.createElement(G,{clicked:function(){return alert("Dijkstra")}},"Learn More")),r.a.createElement(V,{clicked:function(){return t("A*")},moreInfo:function(){return alert("A*")},title:"A*"},r.a.createElement(G,{clicked:function(){return t("A*")}},"Select"),r.a.createElement(G,{clicked:function(){return alert("A*")}},"Learn More")),r.a.createElement(V,{clicked:function(){return t(A)},moreInfo:function(){return alert(A)},title:A},r.a.createElement(G,{clicked:function(){return t(A)}},"Select"),r.a.createElement(G,{clicked:function(){return alert(A)}},"Learn More")),r.a.createElement(V,{title:N},r.a.createElement(G,{clicked:function(){return t(N)}},"Select"),r.a.createElement(G,{clicked:function(){return alert(N)}},"Learn More")),r.a.createElement(V,{title:"Depth First Search"},r.a.createElement(G,{clicked:function(){return t("Depth First Search")}},"Select"),r.a.createElement(G,{clicked:function(){return alert("Depth First Search")}},"Learn More"))),r.a.createElement(x,{title:"Maze Generators"},r.a.createElement(V,{title:"Random Maze",clicked:function(){return s("Random Maze")},moreInfo:function(){return alert("Dijkstra")}},r.a.createElement(G,{clicked:function(){return s("Random Maze")}},"Generate"),r.a.createElement(G,{clicked:function(){return alert("Recursive Division")}},"Learn More")),r.a.createElement(V,{title:"Recursive Division"},r.a.createElement(G,{clicked:function(){return s("Recursive Division")}},"Generate"),r.a.createElement(G,{clicked:function(){return alert("Recursive Division")}},"Learn More"))),r.a.createElement(F,{clicked:function(){return c(!0)}},"Add Second Target"),r.a.createElement(F,{clicked:a},"Reset"),r.a.createElement(F,{clicked:l},"Clear Visualization"),r.a.createElement(F,{clicked:n},"Visualize ",i,"!"))},R=function(e){return r.a.createElement("header",{className:C.a.Toolbar},r.a.createElement(P,e))},z=function(e){var t=e.openDialog,a=Object(n.useState)("Dijkstra"),i=Object(c.a)(a,2),s=i[0],l=i[1],u=I(),h=u.nodeGrid,f=u.resetGrid,m=u.removeVisuals,v=u.paintInDistance,p=u.resetDistance,g=Object(n.useState)(!1),k=Object(c.a)(g,2),E=k[0],S=k[1],b=Object(n.useState)(!0),j=Object(c.a)(b,2),O=j[0],T=j[1],D=Object(n.useState)(!1),M=Object(c.a)(D,2),w=M[0],L=M[1],_=Object(n.useState)(!1),C=Object(c.a)(_,2),W=C[0],B=C[1],F=Object(n.useState)(!1),V=Object(c.a)(F,2),x=V[0],G=V[1],P=Object(n.useState)(!1),z=Object(c.a)(P,2),U=z[0],q=z[1],K=Object(n.useState)(!1),H=Object(c.a)(K,2),J=H[0],Q=H[1],Z=Object(n.useState)(1),X=Object(c.a)(Z,2),Y=X[0],$=X[1],ee=Object(n.useState)("Dijkstra"),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(!0),ie=Object(c.a)(re,2),se=ie[0],ce=ie[1],oe=function(e){O&&(U&&e.setAsSecondTarget(),!E||x||w||W||se&&e.setWall(),E&&x&&!e.isTarget()&&e.setAsStart(),E&&w&&!e.isStart()&&function(e){switch(e.setAsTarget(),ae){case"Dijkstra":v(e.dist),e.markShortestPath();break;case"A*":p(),pe(!1);break;case A:p(),ge(!1);break;case N:v(e.dist),e.markShortestPath();break;case"Depth First Search":p(),me(!1),e.markShortestPath()}}(e),E&&W&&e.setAsSecondTarget())},le=function(e){if(O)return S(!0),U?($(Y+1),Q(!0),q(!1)):!e.isKeyValue()&&se?e.setWall():e.isStart()&&se?G(!0):e.isTarget()?L(!0):e.isSecondTarget()?B(!0):void 0},ue=function(e){O&&(x||w||U||W)&&(x&&e.removeClass("Filled"),w&&e.removeClass("Target"))},he=function(){O&&(S(!1),G(!1),L(!1),B(!1))},de=h.map((function(e,t){return e.map((function(e,a){return r.a.createElement(o,{key:e,node:h[t][a],onMouseEnter:oe,onMouseDown:le,onMouseUp:he,onMouseLeave:ue})}))})),fe=function(){var e=y(h),t=e.startNode;return e.graph.bfs(t)},me=function(e){var t=y(h),a=t.startNode;return t.graph.dfs(a,e)},ve=function(){var e=y(h),t=e.startNode,a=[];return e.graph.dijkstra(t,a,J),a},pe=function(e){var t=y(h),a=t.startNode,n=t.graph,r=t.targetNode;return n.aStar(a,r,e)},ge=function(e){var t=y(h),a=t.startNode,n=t.graph,r=t.targetNode;return n.bestFirstSearch(a,r,e)},ke=function(){O&&(ce(!0),Q(!1),ne(null),f())},Ee=function(){O&&(ce(!0),ne(null),m())},Se=function(){O&&(ke(),function(e){for(var t=0;t<e.length;t++)for(var a=0;a<e[t].length;a++){if(Math.random()<=.3)e[t][a].setWall()}}(h))},be=function(){O&&(ke(),d(h))},ye=function(e){if(e.length<=0)T(!0);else var t=0,a=setInterval((function(){var n=e[t];n.markSearched2(),(n.isTarget()||n.isSecondTarget())&&n.markShortestPath(),++t>=e.length&&(T(!0),clearInterval(a))}),10)};return r.a.createElement("div",{className:"MainContainer"},r.a.createElement(R,{openDialog:t,setAlgorithm:l,reset:ke,algorithm:s,executeAlgorithm:function(e){if(Ee(),O){T(!1),ne(s),ce(!1);var t=[];switch(s){case N:t=fe();break;case"Depth First Search":t=me(!0);break;case"A*":t=pe(!0);break;case"Dijkstra":t=ve();break;case A:t=ge(!0);break;default:t=fe()}ye(t)}},clear:Ee,mazeGen:function(e){switch(e){case"Recursive Division":be();break;default:Se()}},settingSecondTarget:q}),r.a.createElement("br",null),r.a.createElement("div",{className:"Board",style:{gridTemplateRows:"repeat(".concat(20,", 1fr)"),gridTemplateColumns:"repeat(".concat(50,", 1fr)")}},de))},U=a(90),q=a(86),K=a(87),H=a(88),J=a(89),Q=a(91),Z=(a(61),function(e){var t=["Backdrop",e.show?"BackdropOpen":"BackdropClosed"];return r.a.createElement("div",{className:t.join(" ")})}),X=function(e){var t=e.isOpen,a=e.handleClose,n=e.title,i=e.subtitle,s=e.children;e.howToPlay;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{fullWidth:!0,maxWidth:"md",open:t,onclose:a,"aria-labelledby":"max-width-dialog-title"},r.a.createElement(q.a,{id:"max-width-dialog-title"},n),r.a.createElement(K.a,null,r.a.createElement(H.a,null,i),s),r.a.createElement(J.a,null,r.a.createElement(Q.a,{onClick:a,color:"secondary"},"Close"))),r.a.createElement(Z,{show:t}))},Y=a(83),$=a(34),ee=a.n($);var te=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],i=t[1];Object(n.useEffect)((function(){s()}),[]);var s=function(){i(!0)};return r.a.createElement("div",{className:ee.a.App},r.a.createElement(z,{openDialog:s}),r.a.createElement(X,{isOpen:a,handleClose:function(){i(!1)},className:ee.a.customDialog},r.a.createElement(Y.a,null,r.a.createElement("h1",null,"Welcome to The Graph Algorithms Visualizer!"),r.a.createElement("br",null),r.a.createElement("h4",null,"This Project Helps CS Enthusiasts visualize popular graph traversal/pathfinding algorithms. To get Started, click on an algorithm located on the header and press Visualize!."),r.a.createElement("p",null,"For a better Experience, Use use browser to full width"))))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.4bb224d3.chunk.js.map