import { useState } from "react";
import { useHistory } from "react-router-dom";
import { saveBlogPosts, getBlogPosts } from "../blogStorage";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mamma");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingPosts = getBlogPosts();
    const maxId = existingPosts.reduce((max, post) => (post.id > max ? post.id : max), 0);
    const newId = maxId + 1;

    const newBlog = {
      id: newId, 
      title,
      body,
      author,
    };

    existingPosts.push(newBlog);

    saveBlogPosts(existingPosts);

    history.push("/");
  };

  return (
    <div className="create">
      <h2>Create a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea required onChange={(e) => setBody(e.target.value)} />
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mamma">Mamma</option>
          <option value="Pappa">Pappa</option>
          <option value="Dotter">Dotter</option>
          <option value="Son">Son</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
  );
};

export default Create;
