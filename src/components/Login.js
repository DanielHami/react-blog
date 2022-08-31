import { useState } from "react"
import { supabase } from '../supabaseClient'
import { SiFacebook } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'


function Login() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  async function signInWithFacebook() {
     await supabase.auth.signIn({
      provider: 'facebook',
    })
  }

  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: 'github',
    })
  }
  return (
    <div className="text-center mx-2 my-12 md:my-32">

      {loading ? (
        'Sending magic link...'
      ) :
        <div className=" border-2 rounded-md w-fit p-6 mx-auto">
          <div className="space-y-4 ">
            <p className="text-3xl font-bold">Welcome</p>
            <p>If you want to create a new blog first must be login </p>
          </div>
          <form
            className="flex flex-col mx-auto mt-8 gap-4 max-w-sm">
            <input type="email"
              value={email}
              className="border-2 caret-pink-500"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required>
            </input>
            <button type="submit"
              className="border-2 rounded-lg w-full md:w-64 mx-auto p-2 bg-blue-600 text-lg text-white font-semibold " onClick={handleLogin}>Sign in</button>
          </form>
          <div className="flex flex-col mt-5 gap-4 max-w-sm mx-auto">
            <p className="text-lg font-bold">or</p>
            <button className="border-2 flex gap-4 font-semibold py-2 items-center justify-center rounded-lg " onClick={signInWithFacebook}>{<SiFacebook className="text-3xl text-blue-600" />}Sign in with Facebook</button>
            <button className="border-2 flex gap-4 font-semibold py-2 items-center justify-center rounded-lg " onClick={signInWithFacebook}>{<BsGithub className="text-3xl text-gray-900" />}Sign in with GitHub</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Login