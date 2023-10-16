export const saveBlogPosts = (posts) => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  };
  
  export const getBlogPosts = () => {
    const storedPosts = localStorage.getItem('blogPosts');
    return storedPosts ? JSON.parse(storedPosts) : [];
  };

//   const initialBlogPosts = [
//     {
//       id: 1,
//       title: "Welcome to the blog",
//       body: "This is our first",
//       author: "Admin",
//     },
//   ];
  
//   if (!localStorage.getItem('blogPosts')) {
//     saveBlogPosts(initialBlogPosts);
//   }