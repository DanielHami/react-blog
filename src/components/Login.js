import { useState } from "react"
import { supabase } from '../supabaseClient'


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
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'facebook',
    })
  }

  return (
    <div className="text-center">
      <div>
        <p className="text-2xl">Login</p>
        <p>If you want to create a new blog first must be login </p>
      </div>
      {loading ? (
        'Sending magic link...'
      ) :
        <form onSubmit={handleLogin}
          className="flex flex-col mx-auto mt-8 gap-4 max-w-lg">
          <input type="email"
            value={email}
            className="border-2 caret-pink-500"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required>
          </input>
          <button type="submit"
            className="border-2 w-24 mx-auto"
          >Enter</button>
        </form>
      }
       <button className="border-2" onClick={signInWithFacebook}>Login with Facebook</button>
    </div>
  )
}

export default Login