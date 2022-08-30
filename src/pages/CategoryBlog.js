import Bloglist from "../components/BlogsList";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


export default function CategoryBlog() {
  const [blogs, setBlogs] = useState(null)
  const [category, setCategory] = useState("")
  const [seeAll, setSeeAll] = useState(false)
  

  useEffect(() => {
    setSeeAll(true)
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogs(data)
      })
  }, [])



  return (
    <div className="grid grid-cols-1 md:grid grid-cols-4 max-w-7xl my-20 mx-auto">
      <div className="col-span-1 px-2 py-6">
        <p className="text-3xl mb-8">Category</p>
        <div className="flex flex-wrap gap-4">
            <button className="text-left" onClick={() => setSeeAll(true)}>All Blogs</button>
            <button onClick={() => {setCategory("trade"); setSeeAll(false)}}>Trade</button>
            <button onClick={() => {setCategory("sport");setSeeAll(false)}}>Sport</button>
            <button onClick={() => {setCategory("culture");setSeeAll(false)}}>Culture</button>
            <button onClick={() => {setCategory("celebrity");setSeeAll(false)}}>Celebrity</button>
        </div>
      </div>
      <div className="col-span-3 py-6">
        {seeAll ? blogs && <Bloglist blogs={blogs} type="bottom" mode="second" />
       : blogs && <Bloglist blogs={blogs.filter(blog => blog.category === `${category}`)} type="bottom" mode="second" />}
      </div>
      <div>

      </div>
    </div>
  )
}