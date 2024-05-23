import { TodoController } from './controllers/todo.controller';
import { TodoService } from './services/todo.service';
import './style.css';
import { TodoView } from './views/todo.view';

const app = new TodoController(new TodoService(), new TodoView());
