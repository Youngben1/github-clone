function Feed() {
  return (
    <div className="m-3 flex-grow items-center p-3">
      <form className="flex space-x-1">
        <input
          placeholder="Find Repository..."
          type="text"
          className="border-red mr-5 flex flex-grow rounded-lg bg-transparent px-5 placeholder-gray-500 outline-none hover:ring-2"
        />
        <div className="space-x-3 rounded-full text-black">
          <button className="m-1 rounded-full bg-blue-600 p-3 text-black">
            Type
          </button>
          <button className="m-1 rounded-full bg-blue-600 p-3 text-black">
            Language
          </button>
          <button className="m-1 rounded-full bg-blue-600 p-3 text-black">
            Sort
          </button>
        </div>
      </form>

      <hr className="mt-5" />
    </div>
  )
}

export default Feed
