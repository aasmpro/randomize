(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){e.exports=n(206)},124:function(e,t,n){},187:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(7),r=n.n(i),c=(n(124),n(117)),l=n(82),s=n(41),u=n(42),m=n(46),d=n(43),f=n(47),p=n(209),h=n(10),v=n(210),g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).increase=function(e){n.props.handleAmount(n.props.item.id,n.props.item.amount+1)},n.decrease=function(e){n.props.item.amount>1&&n.props.handleAmount(n.props.item.id,n.props.item.amount-1)},n.changeTitle=function(e){var t=e.target.value;n.props.handleTitle(n.props.item.id,t)},n.delete=function(e){n.props.deleteItem(n.props.item.id)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{size:"small",bodyStyle:{padding:0},actions:[o.a.createElement(h.a,{type:"left",onClick:this.decrease}),o.a.createElement("span",null,this.props.item.amount),o.a.createElement(h.a,{type:"right",onClick:this.increase})]},o.a.createElement(v.a,{value:this.props.item.title,onChange:this.changeTitle,size:"large",addonAfter:o.a.createElement(h.a,{style:{borderRadius:0},type:"close",onClick:this.delete})}))}}]),t}(o.a.Component),b=n(211),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={seen:!1},n.see=function(e){n.state.seen||(n.setState({seen:!0}),b.a.info({title:n.props.data,centered:!0}))},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{style:{textAlign:"center"},onClick:this.see,className:this.state.seen?"random-item seen":"random-item"},this.props.label)}}]),t}(o.a.Component),y=n(212),E=n(208),k=n(24),j=(n(187),n(188),y.a.Content);function O(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}var A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).count=0,n.state={items:[],randomView:!1,randomItems:[]},n.total=function(){return n.state.items.reduce(function(e,t){return e+t.amount},0)},n.handleTitle=function(e,t){n.setState(function(n,a){return{items:n.items.map(function(n){return n.id===e?Object(l.a)({},n,{title:t}):n})}})},n.handleAmount=function(e,t){n.setState(function(n,a){return{items:n.items.map(function(n){return n.id===e?Object(l.a)({},n,{amount:t}):n})}})},n.addItem=function(){n.setState(function(e,t){return{items:[].concat(Object(c.a)(e.items),[{id:n.count,title:"item ".concat(n.count),amount:1}])}}),n.count+=1},n.deleteItem=function(e){n.setState(function(t,n){return{items:t.items.filter(function(t){return t.id!==e})}})},n.randomize=function(){var e=[];n.state.items.forEach(function(t){for(var n=0;n<t.amount;n++)e.push(t.title)}),n.setState(function(t,n){return{randomItems:O(e),randomView:!0}})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.state.randomView?o.a.createElement(y.a,null,o.a.createElement(j,null,o.a.createElement(E.a,{grid:{gutter:10,xs:3,sm:4,md:6,lg:6,xl:8},dataSource:this.state.randomItems,renderItem:function(e,t){return o.a.createElement(E.a.Item,null,o.a.createElement(w,{data:e,label:t+1,key:t}))}}),o.a.createElement("div",{style:{marginBottom:"45px"}})),o.a.createElement(k.a,{onClick:function(){e.setState({randomView:!1})},className:"bottom-fixed",block:!0},o.a.createElement(h.a,{type:"close"}))):o.a.createElement(y.a,null,o.a.createElement(j,null,o.a.createElement("p",{id:"total"},this.total()),o.a.createElement("div",null,this.state.items.map(function(t){return o.a.createElement(g,{item:t,key:t.id,deleteItem:e.deleteItem,handleTitle:e.handleTitle,handleAmount:e.handleAmount})})),o.a.createElement(h.a,{className:"add-item",onClick:this.addItem,type:"plus-circle"}),o.a.createElement(k.a,{onClick:this.randomize,className:"bottom-fixed",block:!0},"Randomize")))}}]),t}(o.a.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/randomize",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/randomize","/service-worker.js");C?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):I(t,e)})}}()}},[[119,1,2]]]);
//# sourceMappingURL=main.1bfedf66.chunk.js.map