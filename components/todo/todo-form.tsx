export default function TodoForm() {
  return (
    <form action="">
      <div className="grid gap-6">
        <div className="grid gap-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="w-full border border-gray-200 outline-none px-3 py-1.5 h-9 rounded-lg"
          />
        </div>
        <div className="grid gap-3">
          <span>Status</span>

          <div className="flex gap-12">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="pending"
                value="pending"
                className="size-4"
              />
              <label htmlFor="pending">Pending</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="completed"
                value="completed"
                className="size-4"
              />
              <label htmlFor="completed">Completed</label>
            </div>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Create
        </button>
      </div>
    </form>
  );
}
