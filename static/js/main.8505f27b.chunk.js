(this.webpackJsonpto_do_list=this.webpackJsonpto_do_list||[]).push([[0],{12:function(e,t,a){e.exports={loader:"Preloader_loader__16j2X",spin:"Preloader_spin__2-gvn",loaderInercircle:"Preloader_loaderInercircle__xmLnY"}},16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=(a(21),a(7)),i=a.n(l),s=a(2),u=a(1),_={getTask:function(){return fetch("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.json()})).catch((function(e){return new Error("error")}))}},m=a(4),p={tasks:[],newTaskText:"",formError:!1},d=function(e){return{type:"ERROR_IN_NEW_TASK_INPUT",payload:e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TASKS":return Object(u.a)(Object(u.a)({},e),{},{tasks:Object(m.a)(t.payload)});case"TASK_COMPLETED":return Object(u.a)(Object(u.a)({},e),{},{tasks:e.tasks.map((function(e){return e.id===t.payload?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e}))});case"ADD_NEW_TASK":var a={title:e.newTaskText,id:e.tasks.length+1,completed:!1};return Object(u.a)(Object(u.a)({},e),{},{tasks:[].concat(Object(m.a)(e.tasks),[a]),newTaskText:""});case"CHANGE_NEW_TASK_TEXT":return Object(u.a)(Object(u.a)({},e),{},{newTaskText:t.payload});case"ERROR_IN_NEW_TASK_INPUT":return Object(u.a)(Object(u.a)({},e),{},{formError:t.payload});default:return e}},T={isFetching:!1,loadingError:!1},f=function(e){return{type:"LOADING_ERROR",payload:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING_IN_PROGRESS":return Object(u.a)(Object(u.a)({},e),{},{isFetching:!0});case"FETCHING_IS_FINISH":return Object(u.a)(Object(u.a)({},e),{},{isFetching:!1});case"LOADING_ERROR":return Object(u.a)(Object(u.a)({},e),{},{loadingError:t.payload});default:return e}},g=a(5),h=a.n(g),N=function(e){return r.a.createElement("div",{className:h.a.slow_appearance},Object(m.a)(e.tasks).reverse().map((function(t,a,n){return r.a.createElement("div",{className:h.a.item_container+" "+(t.completed&&h.a.completed)+" "+(t.id===n.length?h.a.slow_appearance:""),key:t.id},r.a.createElement("div",null,t.title),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",onClick:function(){return e.toggleComplete(t.id)},checked:t.completed})))})))},v=a(12),b=a.n(v),O=function(){return r.a.createElement("div",{className:b.a.loader},r.a.createElement("div",{className:b.a.loaderInercircle}))},w=Object(s.b)((function(e){return{isFetching:e.app.isFetching,loadingError:e.app.loadingError,tasks:e.tasks.tasks}}),{getTask:function(){return function(e){e({type:"FETCHING_IN_PROGRESS"}),_.getTask().then((function(t){t.message&&"error"===t.message?(e({type:"FETCHING_IS_FINISH"}),e(f(!0))):(e({type:"SET_TASKS",payload:t}),e({type:"FETCHING_IS_FINISH"}),e(f(!1)))}))}},toggleComplete:function(e){return function(t){t({type:"TASK_COMPLETED",payload:e})}}})((function(e){return Object(n.useEffect)((function(){e.getTask()}),[]),r.a.createElement("div",null,!e.isFetching&&e.loadingError?r.a.createElement("div",{className:"center_block"},r.a.createElement("div",null,r.a.createElement("p",null,"Something wrong...")),r.a.createElement("button",{onClick:e.getTask},"Try again")):e.isFetching&&!e.loadingError?r.a.createElement(O,null):0==e.tasks.length?r.a.createElement("div",null,"You don't have tasks"):r.a.createElement("div",null,r.a.createElement(N,{tasks:e.tasks,toggleComplete:e.toggleComplete})))})),y=a(8),I=a.n(y),j=Object(s.b)((function(e){return{newTaskText:e.tasks.newTaskText,formError:e.tasks.formError}}),{addTask:function(e){return function(t){var a;""===e.trim()?(clearTimeout(a),t(d(!0)),a=setTimeout((function(){return t(d(!1))}),5e3)):(clearTimeout(a),t({type:"ADD_NEW_TASK"}),t(d(!1)))}},changeNewTask:function(e){return function(t){t(function(e){return{type:"CHANGE_NEW_TASK_TEXT",payload:e}}(e))}}})((function(e){var t=function(t){t.preventDefault(),e.addTask(e.newTaskText)};return r.a.createElement("div",{className:I.a.container},r.a.createElement("form",{onSubmit:t,className:I.a.input_field},r.a.createElement("div",null,r.a.createElement("input",{type:"text",palaceholder:"Input your task",onChange:function(t){e.changeNewTask(t.currentTarget.value)},value:e.newTaskText,className:e.formError&&I.a.error}),r.a.createElement("button",{type:"submit",onClick:t},"ADD")),e.formError?r.a.createElement("span",null,"Please enter not empy task..."):""))})),S=function(){return r.a.createElement("div",{className:i.a.container},r.a.createElement("h1",{className:i.a.title},"To do list"),r.a.createElement("div",null,r.a.createElement("div",{className:i.a.new_task_container},r.a.createElement(j,null)),r.a.createElement("div",null,r.a.createElement(w,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(3),R=a(15),C=Object(A.c)({app:k,tasks:E}),x=Object(A.d)(C,Object(A.a)(R.a));window.store=x;var F=x;o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:F},r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports={item_container:"Items_item_container__npPUE",completed:"Items_completed__uPWYW",slow_appearance:"Items_slow_appearance__2WnNK",appea:"Items_appea__3D1RM"}},7:function(e,t,a){e.exports={container:"App_container__24DJb",title:"App_title__3ZLPo",new_task_container:"App_new_task_container__3vs1z"}},8:function(e,t,a){e.exports={container:"NewTask_container__1lVRD",input_field:"NewTask_input_field__3ThHQ",error:"NewTask_error__US53Q"}}},[[16,1,2]]]);
//# sourceMappingURL=main.8505f27b.chunk.js.map