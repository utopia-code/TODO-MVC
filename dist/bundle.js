(()=>{"use strict";class t{constructor({text:t,complete:e}={text:"",complete:!1}){this.id=this.uuidv4(),this.text=t,this.complete=e||!1}uuidv4(){return([1e7].toString()+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(t=>(parseInt(t)^crypto.getRandomValues(new Uint8Array(1))[0]&15>>parseInt(t)/4).toString(16)))}}new class{constructor(t,e){this.onTodoListChanged=t=>{this.view.displayTodos(t)},this.handleAddTodo=t=>{this.service.addTodo(t)},this.handleEditTodo=(t,e)=>{this.service.editTodo(t,e)},this.handleDeleteTodo=t=>{this.service.deleteTodo(t)},this.handleToggleTodo=t=>{this.service.toggleTodo(t)},this.service=t,this.view=e,this.service.bindTodoListChanged(this.onTodoListChanged),this.view.bindAddTodo(this.handleAddTodo),this.view.bindEditTodo(this.handleEditTodo),this.view.bindDeleteTodo(this.handleDeleteTodo),this.view.bindToggleTodo(this.handleToggleTodo),this.onTodoListChanged(this.service.todos)}}(new class{constructor(){this.onTodoListChanged=()=>{};const e=localStorage.getItem("todos");this.todos=(e?JSON.parse(e):[]).map((e=>new t(e)))}bindTodoListChanged(t){this.onTodoListChanged=t}_commit(t){this.onTodoListChanged(t),localStorage.setItem("todos",JSON.stringify(t))}addTodo(e){this.todos.push(new t({text:e})),this._commit(this.todos)}editTodo(e,o){this.todos=this.todos.map((i=>i.id===e?new t(Object.assign(Object.assign({},i),{text:o})):i)),this._commit(this.todos)}deleteTodo(t){this.todos=this.todos.filter((({id:e})=>e!==t)),this._commit(this.todos)}toggleTodo(e){this.todos=this.todos.map((o=>o.id===e?new t(Object.assign(Object.assign({},o),{complete:!o.complete})):o)),this._commit(this.todos)}},new class{constructor(){this.app=this.getElement("#root"),this.form=this.createElement("form"),this.input=this.createElement("input"),this.input.type="text",this.input.placeholder="Add todo",this.input.name="todo",this.submitButton=this.createElement("button"),this.submitButton.textContent="Submit",this.form.append(this.input,this.submitButton),this.title=this.createElement("h1"),this.title.textContent="Todos",this.todoList=this.createElement("ul","todo-list"),this.app.append(this.title,this.form,this.todoList),this._temporaryTodoText="",this._initLocalListeners()}get _todoText(){return this.input.value}_resetInput(){this.input.value=""}createElement(t,e){const o=document.createElement(t);return e&&o.classList.add(e),o}getElement(t){return document.querySelector(t)}displayTodos(t){for(;this.todoList.firstChild;)this.todoList.removeChild(this.todoList.firstChild);if(0===t.length){const t=this.createElement("p");t.textContent="Nothing to do! Add a task?",this.todoList.append(t)}else t.forEach((t=>{const e=this.createElement("li");e.id=t.id;const o=this.createElement("input");o.type="checkbox",o.checked=t.complete;const i=this.createElement("span");if(i.contentEditable="true",i.classList.add("editable"),t.complete){const e=this.createElement("s");e.textContent=t.text,i.append(e)}else i.textContent=t.text;const s=this.createElement("button","delete");s.textContent="Delete",e.append(o,i,s),this.todoList.append(e)}));console.log(t)}_initLocalListeners(){this.todoList.addEventListener("input",(t=>{"editable"===t.target.className&&(this._temporaryTodoText=t.target.innerText)}))}bindAddTodo(t){this.form.addEventListener("submit",(e=>{e.preventDefault(),this._todoText&&(t(this._todoText),this._resetInput())}))}bindDeleteTodo(t){this.todoList.addEventListener("click",(e=>{if("delete"===e.target.className){const o=e.target.parentElement.id;t(o)}}))}bindEditTodo(t){this.todoList.addEventListener("focusout",(e=>{if(this._temporaryTodoText){const o=e.target.parentElement.id;t(o,this._temporaryTodoText),this._temporaryTodoText=""}}))}bindToggleTodo(t){this.todoList.addEventListener("change",(e=>{if("checkbox"===e.target.type){const o=e.target.parentElement.id;t(o)}}))}})})();
//# sourceMappingURL=bundle.js.map