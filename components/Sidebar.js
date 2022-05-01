import { HiLocationMarker } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'

function Sidebar() {
  return (
    <div className="ml-10 max-w-[600px] space-y-3 border-r xl:min-w-[300px]">
      <section className="mb-3 border-b">
        <img
          className="h-30 mb-3 w-40 cursor-pointer rounded-full object-contain"
          src="data:image/jpeg;base64,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"
          alt=""
        />

        <div className="text-bold">
          <h1>Elon Musk</h1>
          <h2>@BenRenny</h2>
          <button className="mb-2 mt-2  rounded-full bg-black p-3 text-white ">
            Follow
          </button>
          <p className="mb-3">Power is dangerous, it attracts the worst...</p>
        </div>
      </section>

      <section className="border-b">
        <div>
          <div className="mb-2 flex space-x-5">
            <p>114 followers</p>
            <p>250 following</p>
          </div>
          <button className="flex space-x-1">
            <HiLocationMarker />
            <p>Dubai</p>
          </button>

          <button className="flex space-x-1">
            <AiOutlineMail />
            <p>benjaminRenny@gmail.com</p>
          </button>

          <button className="flex space-x-1">
            <p className="mb-2">@BenRenny</p>
          </button>
        </div>
      </section>

      <section className="mt-3 p-3">Achievements</section>
    </div>
  )
}

export default Sidebar
