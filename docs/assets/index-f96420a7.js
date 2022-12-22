(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const v=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a  id='Todos'  class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a id='Pendientes' class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a id='Completados'  class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let g;const L=new Uint8Array(16);function S(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(L)}const l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));function C(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:E};function A(e,t,i){if(b.randomUUID&&!t&&!e)return b.randomUUID();e=e||{};const d=e.random||(e.rng||S)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=d[o];return t}return C(d)}class w{constructor(t){this.id=A(),this.descripcion=t,this.done=!1,this.createDate=new Date}}const a={All:"all",Completed:"Completed",Pending:"Pending"},s={todos:[new w("Test this code.")],Filter:a.All},k=()=>{T(),console.log("InitStore")},T=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("state"));s.todos=e,s.Filter=t},h=()=>{localStorage.setItem("state",JSON.stringify(s))},x=(e=a.All)=>{switch(e){case a.All:return[...s.todos];case a.Completed:return s.todos.filter(t=>t.done);case a.Pending:return s.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid.`)}},P=e=>{if(!e)throw new Error("Descripcion requerida");s.todos.push(new w(e)),h()},I=e=>{s.todos=s.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),h()},U=e=>{s.todos=s.todos.filter(t=>t.id!==e),h()},q=()=>{s.todos=s.todos.filter(e=>!e.done),h()},D=(e=a.All)=>{s.Filter=e,h()},F=()=>s.Filter,c={addTodo:P,deleteCompleted:q,getCurrentFilter:F,initStore:k,loadstore:T,setFilters:D,toggleTodo:I,GetAll:x,deleteTodo:U},M=e=>{if(!e)throw new Error("A TODO object is required.");const{done:t,descripcion:i,id:d}=e,o=`
    <div class="view ">
        <input class="toggle  " type="checkbox" ${t?"checked":""}>
        <label >${i}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">`,r=document.createElement("li");return r.innerHTML=o,r.setAttribute("data-id",d),e.done&&r.classList.add("completed"),r};let m;const O=(e,t=[])=>{if(m||(m=document.querySelector(e)),!m)throw new Error(`Element ${e} not found.`);m.innerHTML="",t.forEach(i=>{m.append(M(i))})};let f;const H=(e,t)=>{if(f||(f=document.querySelector(e)),!f)throw new Error(`El elemento ${e} no existe en el DOM.`);f.textContent=t},p={clearcompleted:".clear-completed",TodoList:".todo-list",newtodoinput:"#new-todo-input",filtro:".filtro",pendingCount:"#pending-count"},N=e=>{const t=()=>{const n=c.GetAll(c.getCurrentFilter());O(p.TodoList,n),H(p.pendingCount,c.GetAll(a.Pending).length)};(()=>{const n=document.createElement("div");n.innerHTML=v,n.style.textAlign="center",document.querySelector(e).append(n),t()})();const i=document.querySelector(p.newtodoinput),d=document.querySelector(p.TodoList),o=document.querySelector(p.clearcompleted),r=document.querySelectorAll(p.filtro);document.querySelectorAll(p.Borrarcompletados),i.addEventListener("keyup",n=>{n.keyCode===13&&n.target.value.trim().length!==0&&(c.addTodo(n.target.value),n.target.value="",t())}),d.addEventListener("click",n=>{const u=n.target.closest("[data-id]");c.toggleTodo(u.getAttribute("data-id")),console.log(n.target.className),t()}),d.addEventListener("click",n=>{const u=n.target.closest("[data-id]");n.target.className==="destroy"&&(c.deleteTodo(u.getAttribute("data-id")),t())}),o.addEventListener("click",n=>{c.deleteCompleted(),t()}),r.forEach(n=>{n.addEventListener("click",u=>{switch(r.forEach(y=>y.classList.remove("selected")),r.forEach(y=>y.classList.remove("completada")),u.target.classList.add("selected"),u.target.classList.add("completada"),u.target.getAttribute("id")){case"Pendientes":c.setFilters(a.Pending);break;case"Todos":c.setFilters(a.All);break;case"Completados":c.setFilters(a.Completed);break}t()})})};c.initStore();N("#app");
