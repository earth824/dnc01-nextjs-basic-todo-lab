export default function LoginForm() {
  return (
    <form>
      <div className="grid gap-6">
        <div className="grid gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            className="outline-none w-full px-3 py-1.5 border border-gray-200 rounded-lg h-9"
            placeholder="Enter your email"
          />
        </div>

        <div className="grid gap-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            className="outline-none w-full px-3 py-1.5 border border-gray-200 rounded-lg h-9"
            placeholder="Enter your password"
          />
        </div>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Login
        </button>
      </div>
    </form>
  );
}
