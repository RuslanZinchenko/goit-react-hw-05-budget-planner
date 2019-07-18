(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports={expenseForm:"ExpenseForm_expenseForm__3FwTp"}},18:function(e,t,n){e.exports={label:"Stats_label__31P8a",value:"Stats_value__10MkF"}},2:function(e,t,n){e.exports={table:"ExpensesTable_table__3PqpR",tr:"ExpensesTable_tr__2c8NV",td:"ExpensesTable_td__2iw3l",th:"ExpensesTable_th__15E6H"}},26:function(e,t,n){e.exports={form:"Form_form__1HjOX"}},27:function(e,t,n){e.exports={labelComponent:"Label_labelComponent__rYc2s"}},28:function(e,t,n){e.exports={input:"Input_input__1Zbq9"}},29:function(e,t,n){e.exports={button:"Button_button__sDjMR"}},30:function(e,t,n){e.exports={budgetForm:"BudgetForm_budgetForm__vzfOv"}},31:function(e,t,n){e.exports={text:"Notification_text__3mjrz"}},36:function(e,t,n){e.exports={valuesComponent:"Values_valuesComponent__3x_h-"}},37:function(e,t,n){e.exports={container:"App_container__DG-dx"}},41:function(e,t,n){e.exports=n(59)},59:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),u=n.n(r),l=n(8),o=n.n(l),c=n(6),s=n(24),i=n(38),m=n(25),p=n.n(m),b="ADD_EXPENSE",d="DELETE_EXPENSE",v="CHANGE_BALANCE",f=Object(c.combineReducers)({budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case v:return a.value;default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case b:return[a].concat(Object(i.a)(e));case d:return e.filter(function(e){return e.id!==a.id});default:return e}}}),E=Object(c.createStore)(f,Object(s.devToolsEnhancer)()),h=n(9),x=n(10),_=n(12),g=n(11),N=n(13),y=n(26),C=n.n(y),j=function(e){var t=e.onSubmit,n=void 0===t?function(){return null}:t,a=e.children;return u.a.createElement("form",{className:C.a.form,onSubmit:n},a)},S=n(27),O=n.n(S),F=function(e){var t=e.children;return u.a.createElement("div",{className:O.a.labelComponent},t)},A=n(28),P=n.n(A),w=function(e){var t=e.type,n=void 0===t?"text":t,a=e.value,r=void 0===a?"":a,l=e.onChange,o=void 0===l?function(){return null}:l,c=e.name,s=void 0===c?"":c;return u.a.createElement("input",{className:P.a.input,type:n,value:r,onChange:o,name:s})};w.defaultProps={name:""};var k=w,D=n(29),T=n.n(D),B=function(e){var t=e.type,n=void 0===t?"button":t,a=e.label,r=void 0===a?"":a,l=e.onClick,o=void 0===l?function(){return null}:l;return u.a.createElement("button",{className:T.a.button,type:n,onClick:o},r)};B.defaultProps={onClick:function(){return null},type:"button",label:""};var L=B,M=n(30),z=n.n(M),H=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(_.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={budget:""},n.handleChange=function(e){n.setState({budget:Math.abs(e.target.value)})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.budget;(0,n.props.onSave)(Number(t).toFixed(2)),n.setState({budget:""})},n}return Object(N.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.state.budget;return u.a.createElement(j,{onSubmit:this.handleSubmit},u.a.createElement(F,{className:z.a.budgetForm},"Enter your total budget",u.a.createElement(k,{type:"number",value:e,onChange:this.handleChange})),u.a.createElement(L,{label:"Save",type:"submit"}))}}]),t}(r.Component),R=Object(a.b)(null,function(e){return{onSave:function(t){return e(function(e){return{type:v,payload:{value:e}}}(t))}}})(H),X=n(16),q=n(31),G=n.n(q),I=function(e){var t=e.text;return u.a.createElement("span",{className:G.a.text},t)},J=n(17),V=n.n(J),Z=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(_.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",amount:"",incorrectName:!1,incorrectAmount:!1},n.handleChangeName=function(e){n.setState(Object(X.a)({},e.target.name,e.target.value))},n.handleChangeAmount=function(e){n.setState(Object(X.a)({},e.target.name,Math.abs(e.target.value)))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.amount;if(/[a-zA-Z]/.test(a)&&a.length>=3)if(0!==Number(r)){n.setState({incorrectName:!1,incorrectAmount:!1});var u=parseFloat(Number(r).toFixed(2));(0,n.props.addExpense)(a,u),n.setState({name:"",amount:""})}else n.setState({incorrectAmount:!0});else n.setState({incorrectName:!0})},n}return Object(N.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.amount,a=e.incorrectName,r=e.incorrectAmount;return u.a.createElement(j,{onSubmit:this.handleSubmit},u.a.createElement(F,{className:V.a.expenseForm},"Enter expense name",u.a.createElement(k,{type:"text",name:"name",value:t,onChange:this.handleChangeName})),a&&u.a.createElement(I,{text:" The name must contain Latin letters and be longer than 2 characters."}),u.a.createElement(F,{className:V.a.expenseForm},"Enter expense amount",u.a.createElement(k,{type:"number",name:"amount",value:n,onChange:this.handleChangeAmount})),r&&u.a.createElement(I,{text:"Quantity must be greater than 0"}),u.a.createElement(L,{label:"Add",type:"submit"}))}}]),t}(r.Component),Q=Object(a.b)(null,function(e){return{addExpense:function(t,n){return e(function(e,t){return{type:b,payload:{id:p.a.generate(),name:e,amount:t}}}(t,n))}}})(Z),Y=function(e){return e.expenses},$=function(e){return e.budget},K=function(e){return Y(e).reduce(function(e,t){var n=e;return n+=t.amount},0)},U=function(e){return $(e)-K(e)},W=n(2),ee=n.n(W),te=function(e){var t=e.expenses,n=void 0===t?[]:t,a=e.deleteExpense;return n.length>0&&u.a.createElement("table",{className:ee.a.table},u.a.createElement("thead",null,u.a.createElement("tr",{className:ee.a.tr},u.a.createElement("th",{className:ee.a.th},"Expense name"),u.a.createElement("th",{className:ee.a.th},"Expense amount"),u.a.createElement("th",{className:ee.a.th}))),u.a.createElement("tbody",null,n.map(function(e){var t=e.id,n=e.name,r=e.amount;return u.a.createElement("tr",{className:ee.a.tr,key:t},u.a.createElement("td",{className:ee.a.td},n),u.a.createElement("td",{className:ee.a.td},r),u.a.createElement("td",{className:ee.a.td},u.a.createElement(L,{label:"Delete",onClick:function(){return a(t)}})))})))},ne=Object(a.b)(function(e){return{expenses:Y(e)}},function(e){return{deleteExpense:function(t){return e(function(e){return{type:d,payload:{id:e}}}(t))}}})(te),ae=n(32),re=n(33),ue=n(18),le=n.n(ue);function oe(){var e=Object(ae.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return oe=function(){return e},e}var ce=re.a.div(oe(),function(e){return e.isPositive?"#388E3C":"#D32F2F"}),se=function(e){var t=e.label,n=e.value,a=e.isPositive;return u.a.createElement(ce,{isPositive:a},u.a.createElement("p",{className:le.a.label},t),u.a.createElement("p",{className:le.a.value},n,"\xa0$"))};se.defaultProps={isPositive:!1};var ie=se,me=n(36),pe=n.n(me),be=function(e){var t=e.budget,n=e.expenses,a=e.balance;return u.a.createElement("div",{className:pe.a.valuesComponent},u.a.createElement(ie,{label:"Budget",value:t,isPositive:!0}),u.a.createElement(ie,{label:"Expenses",value:n}),u.a.createElement(ie,{label:"Balance",value:a.toFixed(2),isPositive:a>=0}))},de=Object(a.b)(function(e){return{budget:$(e),expenses:K(e),balance:U(e)}},null)(be),ve=n(37),fe=n.n(ve),Ee=function(){return u.a.createElement("div",{className:fe.a.container},u.a.createElement(R,null),u.a.createElement(de,null),u.a.createElement(Q,null),u.a.createElement(ne,null))};o.a.render(u.a.createElement(a.a,{store:E},u.a.createElement(Ee,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.01d06cf5.chunk.js.map