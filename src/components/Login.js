import { useState } from "react"
import { supabase } from '../supabaseClient'
import {SiFacebook} from 'react-icons/si'


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
    const {error} = await supabase.auth.signIn({
      provider: 'facebook',
    })
  }

  return (
    <div className="text-center mx-2 my-12">
      <div className="space-y-4">
        <p className="text-3xl font-semibold">Log In</p>
        <p>If you want to create a new blog first must be login </p>
      </div>

      {loading ? (
        'Sending magic link...'
      ) :
        <form
          className="flex flex-col mx-auto mt-8 gap-4 max-w-lg">
          <input type="email"
            value={email}
            className="border-2 caret-pink-500"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required>
          </input>
          <button type="submit"
                  className="border-2 w-full mx-auto " onClick={handleLogin}>Sign in</button>
          <button className="border-2 flex gap-4 font-semibold py-2 items-center justify-center rounded-lg " onClick={signInWithFacebook}>{<SiFacebook className="text-3xl text-blue-600"/>}Sign in with Facebook</button>
        </form>
      }
    </div>
  )
}

export default Login