(this.webpackJsonpsquaregame=this.webpackJsonpsquaregame||[]).push([[0],[,,,,,,,,,,,function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),c=n(4),a=n.n(c),i=(n(16),n(5)),u=n(6),l=n(9),s=n(7),f=n(10),b=(n(17),["#244B59","#41B3A3","#7Fc7BB","#F7b733","#EEAA7B"]),h=function(){return b[Math.floor(Math.random()*b.length)]},v=function(){for(var t=[],e=1;e<7;e++)for(var n=1;n<11;n++)t.push({x:e,y:n,id:"".concat(e).concat(n),color:h()});return t},d=n(8),O=n(2),p=n(1),m=(n(18),function(t){var e=t.x,n=t.y,r=t.id,c=t.color,a=t.handleClick,i=t.disable;return console.log(!i),o.a.createElement("div",{className:"square",onClick:!0===i?function(){return a(e,n,r,c)}:null,style:{background:c}})});n(19);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var j=function(t){var e=t.squares,n=t.isStart,c=Object(r.useState)(!1),a=Object(p.a)(c,2),i=a[0],u=a[1],l=Object(r.useState)(0),s=Object(p.a)(l,2),f=s[0],b=s[1],v=[],j=[[-1,0],[0,1],[1,0],[0,-1]],E=Object(r.useState)(!1),F=Object(p.a)(E,2),g=F[0],S=F[1],k=function(t,r,o,c){if(!i||!1===n){if(u(!0),v.length=0,x(t,r,o,c),1===v.length)return void u(!1);var a=e.filter((function(t){return v.includes(t.id)}));b((function(t){return t+v.length})),w(a);var l=0;e.forEach((function(t){0===l&&j.forEach((function(e){var n=q(t.x,t.y,e[0],e[1]);void 0!==n&&n.color===t.color&&l++}))})),0===l&&(console.log(l),S(!0)),u(!1)}};Object(r.useEffect)((function(){b(0),console.log(n)}),[n,e]);var w=function(t){console.log(e),t.forEach((function(t){t.color="#FFFFFF";var n=e.filter((function(e){return e.y===t.y})),r=n.map((function(t){return t.color})).filter((function(t){return"#FFFFFF"!==t})),o=[].concat(Object(O.a)(Array.from({length:n.length-r.length},(function(){return"#FFFFFF"}))),Object(O.a)(r)).map((function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){Object(d.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},n[e],{color:t})}));n.forEach((function(t,e){"#FFFFFF"===o[e].color?t.color=h():t.color=o[e].color})),n.forEach((function(t,e){})),console.log("----")})),console.log(e)},q=function(t,n,r,o){var c=t+r,a=n+o;return e.filter((function(t){return t.x===c})).filter((function(t){return t.y===a}))[0]},x=function t(e,n,r,o){v.push(r),j.forEach((function(r){var c=q(e,n,r[0],r[1]);if(void 0!==c&&!(c.x<1||c.y<1)&&!v.includes(c.id))return c.color!==o?void 0:void t(c.x,c.y,c.id,o)}))};return o.a.createElement("div",null,!0===g?"TAK":"NIE",n?o.a.createElement("div",null," points:",f):"",o.a.createElement("div",{className:"board",style:n?{}:{filter:"grayscale(100%)"}},e.map((function(t){var e=t.x,r=t.y,c=t.id,a=t.color;return o.a.createElement(m,{x:e,y:r,id:c,color:a,handleClick:k,disable:n})}))))},E=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(l.a)(this,Object(s.a)(e).call(this,t))).state={isStart:!1,squares:[]},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=v();this.setState({squares:t,isStart:!1})}},{key:"newGame",value:function(){var t=v();this.setState({squares:t,isStart:!this.state.isStart})}},{key:"render",value:function(){var t=this,e=this.state,n=e.isStart,r=e.squares;return o.a.createElement("div",{className:"App"},o.a.createElement("button",{className:"btn",onClick:function(){return t.newGame()}},this.state.isStart?" RESET GAME":"START GAME"),o.a.createElement(j,{squares:r,isStart:n}))}}]),e}(o.a.Component);a.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.9e79882c.chunk.js.map