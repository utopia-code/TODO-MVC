import { Todo } from '../models/todo.model';

/**
 * @class View
 *
 * Visual representation of the model.
 */
export class TodoView {
  private app: HTMLElement;
  private form: HTMLElement;
  private input: HTMLInputElement;
  private submitButton: HTMLElement;
  private title: HTMLElement;
  private todoList: HTMLElement;
  private _temporaryTodoText: string;

  constructor() {
    this.app = this.getElement("#root");
    this.form = this.createElement("form");
    this.input = this.createElement("input") as HTMLInputElement;
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";
    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Submit";
    this.form.append(this.input, this.submitButton);
    this.title = this.createElement("h1");
    this.title.textContent = "Todos";
    this.todoList = this.createElement("ul", "todo-list");
    this.app.append(this.title, this.form, this.todoList);

    this._temporaryTodoText = "";
    this._initLocalListeners();
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = "";
  }

  createElement(tag: string, className?: string) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector: string) {
    const element = document.querySelector(selector)! as HTMLElement;

    return element;
  }

  displayTodos(todos: Todo[]) {
    // Delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // Show default message
    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      // Create nodes
      todos.forEach((todo) => {
        const li = this.createElement("li");
        li.id = todo.id;

        const checkbox = this.createElement("input") as HTMLInputElement;
        checkbox.type = "checkbox";
        checkbox.checked = todo.complete;

        const span = this.createElement("span") as HTMLInputElement;
        span.contentEditable = "true";
        span.classList.add("editable");

        if (todo.complete) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(checkbox, span, deleteButton);

        // Append nodes
        this.todoList.append(li);
      });
    }

    // Debugging
    console.log(todos);
  }

  _initLocalListeners() {
    this.todoList.addEventListener("input", (event: any) => {
      if (event.target.className === "editable") {
        this._temporaryTodoText = event.target.innerText;
      }
    });
  }

  bindAddTodo(handler: Function) {
    this.form.addEventListener("submit", (event: any) => {
      event.preventDefault();

      if (this._todoText) {
        handler(this._todoText);
        this._resetInput();
      }
    });
  }

  bindDeleteTodo(handler: Function) {
    this.todoList.addEventListener("click", (event: any) => {
      if (event.target.className === "delete") {
        const id = event.target.parentElement.id;

        handler(id);
      }
    });
  }

  bindEditTodo(handler: Function) {
    this.todoList.addEventListener("focusout", (event: any) => {
      if (this._temporaryTodoText) {
        const id = event.target.parentElement.id;

        handler(id, this._temporaryTodoText);
        this._temporaryTodoText = "";
      }
    });
  }

  bindToggleTodo(handler: Function) {
    this.todoList.addEventListener("change", (event: any) => {
      if (event.target.type === "checkbox") {
        const id = event.target.parentElement.id;

        handler(id);
      }
    });
  }
}
