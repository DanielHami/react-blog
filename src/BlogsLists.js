
import { StyledBotton, StyledGrid, StyledImg } from "./components/style/Styled.bloglist";

const Bloglist = ({blogs, type, mode }) => {

 

    return (  
      <StyledGrid prop={mode}>
      {blogs.map((blog) =>
     <div key={blog.id}>
       {<StyledBotton prop={mode}>
          {<StyledImg prop={mode} src={blog.image} className="mb-3 w-full h-42" alt=""/>}
          <div className="">
            <p className="text-xs pb-2 text-slate-400 lg:text-md "> Written by {blog.author}</p>
            <h1 className="text-lg text-gray-200 font-semibold pb-3 lg:text-xl ">{blog.title}</h1>     
            { type === 'bottom' && <p className="text-gray-400 line-clamp-4 lg:text-sm">{blog.body}</p>}
          </div>  
          </StyledBotton>}
      </div>
      )}
     </StyledGrid>
     
    );

}


export default Bloglist;