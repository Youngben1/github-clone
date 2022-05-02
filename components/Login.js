import { signIn, useSession } from 'next-auth/react'

function Login() {
  const { data, status } = useSession()
  console.log(data, status)

  return (
    <div className="grid place-items-center items-center">
      <button
        onClick={() => {
          signIn('github', { callbackUrl: 'http://localhost:3000' })
        }}
        className="mt-10 flex flex-col rounded-full bg-black py-2 text-white"
      >
        Sign In with Github
      </button>
    </div>
  )
}

export default Login
