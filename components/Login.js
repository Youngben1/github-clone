import { signIn } from 'next-auth/react'

function Login() {
  return (
    <div className="grid place-items-center items-center">
      <button
        onClick={() => {
          signIn('github')
        }}
        className="mt-10 flex flex-col rounded-full bg-black py-2 text-white"
      >
        Sign In with Github
      </button>
    </div>
  )
}

export default Login
