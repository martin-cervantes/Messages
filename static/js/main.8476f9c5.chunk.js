(this.webpackJsonpmessages=this.webpackJsonpmessages||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t);var s=n(4),a=n(5),i=n(9),c=n(8),u=n(1),r=n(0),b=n.n(r),h=n(3),o=n.n(h),j=n(7),l=n(6),p=n(15),O="ADD",g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return[].concat(Object(p.a)(e),[t.message]);default:return e}},d=Object(l.b)(g),m=n(2),f=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={input:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.submitMessage=a.submitMessage.bind(Object(m.a)(a)),a}return Object(a.a)(n,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"submitMessage",value:function(){this.props.submitNewMessage(this.state.input),this.setState((function(e){return{input:""}}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Type in a new Message:"}),Object(u.jsx)("input",{value:this.state.input,onChange:this.handleChange}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:this.submitMessage,children:"Submit"}),Object(u.jsx)("ul",{children:this.props.messages.map((function(e,t){return Object(u.jsx)("li",{children:e},t)}))})]})}}]),n}(b.a.Component),v=Object(j.b)((function(e){return{messages:e}}),(function(e){return{submitNewMessage:function(t){e(function(e){return{type:O,message:e}}(t))}}}))(f),x=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(u.jsx)(j.a,{store:d,children:Object(u.jsx)(v,{})})}}]),n}(b.a.Component);o.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8476f9c5.chunk.js.map