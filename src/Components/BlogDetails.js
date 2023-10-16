import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getBlogPosts, saveBlogPosts } from "../blogStorage";

const BlogDetails = () => {
  const { id } = useParams();
  const numericId = parseInt(id); // Omvandla id till ett nummer
  console.log(numericId); // Kontrollera om id har omvandlats korrekt
  const history = useHistory();

  const existingPosts = getBlogPosts();
  console.log(existingPosts);

  // Här använder vi 'find' för att hitta det specifika inlägget med matchande id (som ett nummer).
  const blog = existingPosts.find((post) => post.id === numericId);
  console.log(blog);

  if (!blog) {
    return <div className="details">Blog not found</div>;
  }

  const handleDelete = () => {
    // Använd filter för att ta bort det specifika inlägget med matchande id.
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
