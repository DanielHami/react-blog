import {useState} from 'react'
import { supabase } from './supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [password, setPassword] = useState('')

  

  const handleRegistration = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const updates ={
        firstname,
        lastname,
        email,
        password
      }
      let {error} = await supabase.from('signup').upsert(updates)

      if (error) {
        throw error
      }

    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row flex-center flex">
      <div className="col-6 form-widget" aria-live="polite">
        <h1 className="header">Supabase + React</h1>
        {loading ? (
          'Sending magic link...'
        ) : (
          <form onSubmit={handleRegistration} className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="lastname">Last name</label>
              <input
              id="lastname"
              className="inputField"
              type="lastname"
              placeholder="Your lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="firstname">First name</label>
              <input
              id="firstname"
              className="inputField"
              type="firstname"
              placeholder="Your firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor="password">Enter your password</label>
            <input
              id="password"
              className="inputField"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button block" aria-live="polite">
              Send magic link
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
