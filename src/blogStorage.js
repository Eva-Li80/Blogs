export const saveBlogPosts = (posts) => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  };
  
  export const getBlogPosts = () => {
    const storedPosts = localStorage.getItem('blogPosts');
    return storedPosts ? JSON.parse(storedPosts) : [];
  };

