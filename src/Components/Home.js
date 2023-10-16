import BlogList from "./BlogList";
import { useState, useEffect } from "react";
import { getBlogPosts } from "../blogStorage";

const Home = () => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const blogPosts = getBlogPosts();
    setData(blogPosts);
    setPending(false);
  }, []);

  return (
    <div className="home">
      {pending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title={"All blogs"} />}
    </div>
  );
}

export default Home;
