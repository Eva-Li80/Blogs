import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getBlogPosts, saveBlogPosts } from "../blogStorage";

const BlogDetails = () => {
  const { id } = useParams();
  const numericId = parseInt(id); 
  const history = useHistory();

  const existingPosts = getBlogPosts();

  const blog = existingPosts.find((post) => post.id === numericId);

  if (!blog) {
    return <div className="details">Blog not found</div>;
  }

  const handleDelete = () => {
    const updatedPosts = existingPosts.filter((post) => post.id !== numericId);
    saveBlogPosts(updatedPosts);
    history.push("/");
  };

  return (
    <div className="details">
      <article>
        <h2>{blog.title}</h2>
        <div>{blog.body}</div>
        <p>Written by: {blog.author}</p>
        <button onClick={handleDelete}>Delete blog</button>
      </article>
    </div>
  );
};

export default BlogDetails;
