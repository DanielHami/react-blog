import { useState, useEffect } from "react";
import Bloglist from "../components/BlogsList"




const Home = () => {

  const [blogs, setBlogs] = useState(null)


  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogs(data)
      })
  }, [])
  return (
    <div>
      <div className="bg-slate-900 flex justify-center">
        <div className="max-w-7xl text-white">
          <div className=" py-4 text-white mb-5 lg:py-12 lg:mb-12">
            <p className="text-6xl font-extrabold text-center uppercase my-10 lg:text-9xl lg:pb-12">The blog</p>
            <div className="flex flex-col py-10 px-3 gap-12 md:grid md:grid-cols-2 md:gap-12 ">
              {blogs && <Bloglist blogs={blogs.filter(blog => blog.author === 'Hami')} type="bottom" />}
              {blogs && <Bloglist blogs={blogs.slice(0, 3)} mode="first" />}
            </div>
          </div>
        </div>
      </div>
      <div className="my-12 lg:my-24 flex justify-center">
        <div className="max-w-7xl">
          <p className="text-2xl mx-2 mb-5">Breaking news</p>
          {blogs && <Bloglist blogs={blogs} type="bottom" mode="second" />}
        </div>
      </div>
    </div>
  );
}

export default Home;