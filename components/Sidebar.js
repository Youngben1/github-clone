import { HiLocationMarker } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'

function Sidebar({ email, image, name }) {
  return (
    <div className="ml-10 max-w-[600px] space-y-3 border-r xl:min-w-[300px]">
      <section className="mb-3 border-b">
        <img
          className="h-30 mb-3 w-40 cursor-pointer rounded-full object-contain"
          src={image}
          alt=""
        />

        <div className="text-bold">
          <h1>{name}</h1>
          <h2>{email}</h2>
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
            <p>{email}</p>
          </button>

          <button className="flex space-x-1">
            <p className="mb-2">{name}</p>
          </button>
        </div>
      </section>

      <section className="mt-3 p-3">Achievements</section>
    </div>
  )
}

export default Sidebar
