import axios from "axios"
import { useState, useEffect } from "react"
import Login from "../components/Login"
import { supabase } from '../supabaseClient'

export default function Create() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")
    const [success, setSuccess] = useState(false)
    const [session, setSession] = useState(null)

   
    useEffect(() => {
      setSession(supabase.auth.session())
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:8000/blogs',{
        title: title,
        image: "images/cool.jpeg",
        body: body,
        author: author
      })
      .then(() => {
        console.log('New blog added')
        setSuccess(true)
      });
    }

    return (
      <div>
      {!session  ? <Login/> :
        <div className="mx-auto my-10">
            <form onSubmit={handleSubmit} className="flex flex-col max-w-lg mx-auto p-5 gap-3 ">
                <label className="">Blog title:</label>
                  <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-2 p-2"
                    required>
                  </input>
                <label className="">Blog body:</label>
                  <textarea type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="border-2 p-2 rounded-lg caret-pink-500"
                    required>
                  </textarea>
                <label>Author:</label>
                  <input type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="border-2 px-2"
                    required>
                  </input>
                <button type="submit" 
                        className="border-2 mt-6 p-2 w-24 mx-auto rounded-lg bg-pink-500 text-white ">{success ? "Added" : "Submit"}</button>
            </form>
         </div>
      }
      </div>
    )
}