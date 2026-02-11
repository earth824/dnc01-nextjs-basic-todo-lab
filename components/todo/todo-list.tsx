export default function TodoList() {
  // getAlltodo
  return (
    <div className="border-y border-gray-200 divide-y divide-gray-200">
      {/* todo.map */}
      <div className="flex justify-between items-center p-4">
        <h4>React Exam</h4>
        <div className="flex items-center gap-12">
          <div className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-lg">
            Completed
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="todo/xxx/edit"
              className="border border-gray-200 p-2 rounded-lg text-blue-500 hover:bg-blue-50"
            >
              <SquarePen />
            </Link>

            <button className="border border-gray-200 p-2 rounded-lg text-red-500 hover:bg-red-50">
              <Trash2 />
            </button>
          </div>
        </div>
      </div>

      <div>3</div>
    </div>
  );
}
