import TodoItem from '@/components/todo/todo-item';
import { getAllTodo } from '@/libs/data/todo';

export default async function TodoList() {
  const todos = await getAllTodo();
  return (
    <div className="border-y border-gray-200 divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} showAction={false} />
      ))}
    </div>
  );
}
