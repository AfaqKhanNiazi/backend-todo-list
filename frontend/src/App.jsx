

export default function App() {
  return (  <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl space-y-6">
      <h1 className="text-4xl font-bold text-center text-indigo-700">To-Do App</h1>

      {/* Input Section */}
      <div className="flex space-x-2">
        <input
          type="text"
          className="flex-1 p-3 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Add a new task..."
        />
        <button
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="space-y-4">
        <li className="flex justify-between items-center p-4 bg-white border rounded-xl shadow-sm hover:bg-indigo-50 transition">
          <span className="text-gray-800 text-lg">simple Task 1</span>
          <button className="text-indigo-600 hover:text-indigo-700">
            <i className="fas fa-trash"></i>
          </button>
        </li>
        <li className="flex justify-between items-center p-4 bg-white border rounded-xl shadow-sm hover:bg-indigo-50 transition">
          <span className="text-gray-800 text-lg line-through">simple Task 2</span>
          <button className="text-indigo-600 hover:text-indigo-700">
            <i className="fas fa-trash"></i>
          </button>
        </li>
        <li className="flex justify-between items-center p-4 bg-white border rounded-xl shadow-sm hover:bg-indigo-50 transition">
          <span className="text-gray-800 text-lg">simple Task 3</span>
          <button className="text-indigo-600 hover:text-indigo-700">
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>)
}


