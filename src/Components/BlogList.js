import { Link } from "react-router-dom"

const BlogList = ({blogs, title }) => {
    return (
        <div className="bloglist">
            <h2 className="title">{title}</h2>
            {blogs.map((blog) => (
                <div className="blogs-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} >
                    <h1>{blog.title}</h1>
                    <p>written by: { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
      );
}
 
export default BlogList;