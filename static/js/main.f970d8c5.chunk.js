(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){e.exports=n(196)},124:function(e,t,n){},186:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),c=(n(124),n(117)),l=n(81),s=n(42),u=n(43),m=n(47),d=n(44),f=n(48),h=n(200),p=n(202),v=n(205),g=n(207),b=n(204),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).increase=function(e){n.props.handleAmount(n.props.item.id,n.props.item.amount+1)},n.decrease=function(e){n.props.item.amount>1&&n.props.handleAmount(n.props.item.id,n.props.item.amount-1)},n.changeTitle=function(e){var t=e.target.value;n.props.handleTitle(n.props.item.id,t)},n.delete=function(e){n.props.deleteItem(n.props.item.id)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,{size:"small",bodyStyle:{padding:0},actions:[o.a.createElement(v.a,{onClick:this.decrease}),o.a.createElement("span",null,this.props.item.amount),o.a.createElement(g.a,{onClick:this.increase})]},o.a.createElement(p.a,{value:this.props.item.title,onChange:this.changeTitle,size:"large",addonAfter:o.a.createElement(b.a,{style:{borderRadius:0,fontSize:"1.4rem"},onClick:this.delete})}))}}]),t}(o.a.Component),E=n(201),y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={seen:!1},n.see=function(e){n.state.seen||(n.setState({seen:!0}),E.a.info({title:n.props.data,centered:!0}))},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,{style:{textAlign:"center"},onClick:this.see,className:this.state.seen?"random-item seen":"random-item"},this.props.label)}}]),t}(o.a.Component),k=n(203),j=n(199),O=n(31),A=n(211),C=n(212),S=(n(186),n(187),k.a.Content);function I(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}var z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).count=0,n.state={items:[],randomView:!1,randomItems:[]},n.total=function(){return n.state.items.reduce(function(e,t){return e+t.amount},0)},n.handleTitle=function(e,t){n.setState(function(n,a){return{items:n.items.map(function(n){return n.id===e?Object(l.a)({},n,{title:t}):n})}})},n.handleAmount=function(e,t){n.setState(function(n,a){return{items:n.items.map(function(n){return n.id===e?Object(l.a)({},n,{amount:t}):n})}})},n.addItem=function(){n.setState(function(e,t){return{items:[].concat(Object(c.a)(e.items),[{id:n.count,title:"item ".concat(n.count),amount:1}])}}),n.count+=1},n.deleteItem=function(e){n.setState(function(t,n){return{items:t.items.filter(function(t){return t.id!==e})}})},n.randomize=function(){n.setState(function(e,t){return{randomItems:I(n.state.items.flatMap(function(e){var t=e.title.split("/")[Math.floor(Math.random()*e.title.split("/").length)];return Array(e.amount).fill(t)})),randomView:!0}})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.state.randomView?o.a.createElement(k.a,null,o.a.createElement(S,null,o.a.createElement(j.a,{grid:{gutter:10,xs:3,sm:4,md:6,lg:6,xl:8},dataSource:this.state.randomItems,renderItem:function(e,t){return o.a.createElement(j.a.Item,null,o.a.createElement(y,{data:e,label:t+1,key:t}))}}),o.a.createElement("div",{style:{marginBottom:"45px"}})),o.a.createElement(O.a,{onClick:function(){e.setState({randomView:!1})},className:"bottom-fixed",block:!0},o.a.createElement(b.a,{style:{fontSize:"1.4rem"}}))):o.a.createElement(k.a,null,o.a.createElement(S,null,o.a.createElement("p",{id:"total"},this.total()),o.a.createElement("div",null,this.state.items.map(function(t){return o.a.createElement(w,{item:t,key:t.id,deleteItem:e.deleteItem,handleTitle:e.handleTitle,handleAmount:e.handleAmount})})),o.a.createElement(A.a,{className:"add-item",onClick:this.addItem}),o.a.createElement("p",null,"Use / in titles to create random choice"),o.a.createElement(O.a,{onClick:this.randomize,className:"bottom-fixed",block:!0},o.a.createElement(C.a,{style:{fontSize:"1.5rem"}}))))}}]),t}(o.a.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/randomize",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/randomize","/service-worker.js");x?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):T(t,e)})}}()}},[[119,1,2]]]);
//# sourceMappingURL=main.f970d8c5.chunk.js.map