(this.webpackJsonpto_do_list=this.webpackJsonpto_do_list||[]).push([[0],{12:function(e,t,n){e.exports={loader:"Preloader_loader__16j2X",spin:"Preloader_spin__2-gvn",loaderInercircle:"Preloader_loaderInercircle__xmLnY"}},16:function(e,t,n){e.exports={input_field:"NewTask_input_field__3ThHQ"}},18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),l=(n(23),n(7)),s=n.n(l),i=n(2),u=n(11),p=n.n(u),d=n(15),_=n(1),m={getTask:function(){return fetch("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.json()}))}},E=n(4),k={tasks:[],newTaskText:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TASKS":return Object(_.a)(Object(_.a)({},e),{},{tasks:Object(E.a)(t.payload)});case"TASK_COMPLETED":return Object(_.a)(Object(_.a)({},e),{},{tasks:e.tasks.map((function(e){return e.id===t.payload?Object(_.a)(Object(_.a)({},e),{},{completed:!e.completed}):e}))});case"ADD_NEW_TASK":var n={title:e.newTaskText,id:e.tasks.length+1,completed:!1};return Object(_.a)(Object(_.a)({},e),{},{tasks:[].concat(Object(E.a)(e.tasks),[n]),newTaskText:""});case"CHANGE_NEW_TASK_TEXT":return Object(_.a)(Object(_.a)({},e),{},{newTaskText:t.payload});default:return e}},T={isFetching:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING_IN_PROGRESS":return Object(_.a)(Object(_.a)({},e),{},{isFetching:!0});case"FETCHING_IS_FINISH":return Object(_.a)(Object(_.a)({},e),{},{isFetching:!1});default:return e}},v=n(5),g=n.n(v),b=function(e){return c.a.createElement("div",{className:g.a.slow_appearance},Object(E.a)(e.tasks).reverse().map((function(t,n,a){return c.a.createElement("div",{className:g.a.item_container+" "+(t.completed&&g.a.completed)+" "+(t.id===a.length?g.a.slow_appearance:""),key:t.id},c.a.createElement("div",null,t.title),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",onClick:function(){return e.toggleComplete(t.id)},checked:t.completed})))})))},w=n(12),O=n.n(w),j=function(){return c.a.createElement("div",{className:O.a.loader},c.a.createElement("div",{className:O.a.loaderInercircle}))},N=Object(i.b)((function(e){return{isFetching:e.app.isFetching,tasks:e.tasks.tasks}}),{getTask:function(){return function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"FETCHING_IN_PROGRESS"}),m.getTask().then((function(e){console.log(1),t({type:"SET_TASKS",payload:e}),t({type:"FETCHING_IS_FINISH"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},toggleComplete:function(e){return function(t){t({type:"TASK_COMPLETED",payload:e})}}})((function(e){return c.a.createElement("div",null,c.a.createElement("button",{onClick:e.getTask},"Load"),e.isFetching?c.a.createElement(j,null):0==e.tasks.length?c.a.createElement("div",null,"You don't have tasks"):c.a.createElement("div",null,c.a.createElement(b,{tasks:e.tasks,toggleComplete:e.toggleComplete})))})),y=n(16),S=n.n(y),I=Object(i.b)((function(e){return{newTaskText:e.tasks.newTaskText}}),{addTask:function(){return function(e){return e({type:"ADD_NEW_TASK"})}},changeNewTask:function(e){return function(t){t(function(e){return{type:"CHANGE_NEW_TASK_TEXT",payload:e}}(e))}}})((function(e){var t=function(t){t.preventDefault(),e.addTask()};return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:t,className:S.a.input_field},c.a.createElement("input",{type:"text",palaceholder:"Input your task",onChange:function(t){e.changeNewTask(t.currentTarget.value)},value:e.newTaskText}),c.a.createElement("button",{type:"submit",onClick:t},"ADD")))})),x=function(){return c.a.createElement("div",{className:s.a.container},c.a.createElement("h1",{className:s.a.title},"To do list"),c.a.createElement("div",null,c.a.createElement("div",{className:s.a.new_task_container},c.a.createElement(I,null)),c.a.createElement("div",null,c.a.createElement(N,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(3),C=n(17),F=Object(A.c)({app:h,tasks:f}),D=Object(A.d)(F,Object(A.a)(C.a));window.store=D;var P=D;o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:P},c.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){e.exports={item_container:"Items_item_container__npPUE",completed:"Items_completed__uPWYW",slow_appearance:"Items_slow_appearance__2WnNK",appea:"Items_appea__3D1RM"}},7:function(e,t,n){e.exports={container:"App_container__24DJb",title:"App_title__3ZLPo",new_task_container:"App_new_task_container__3vs1z"}}},[[18,1,2]]]);
//# sourceMappingURL=main.62ab4780.chunk.js.map