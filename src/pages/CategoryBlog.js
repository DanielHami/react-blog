import Bloglist from "../components/BlogsList";
import { useState, useEffect } from 'react'



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
    <div className=" space-y-20 max-w-7xl my-20 mx-auto md:my-32">
      <div className="col-span-1 px-2 py-6">
        <p className="text-6xl mb-14 font-semibold ">Category</p>
        <div className="flex flex-wrap gap-6 md:gap-12 text-xl">
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