export const saveBlogPosts = (posts) => {
  localStorage.setItem('blogPosts', JSON.stringify(posts));
};

export const getBlogPosts = () => {
  const storedPosts = localStorage.getItem('blogPosts');
  return storedPosts ? JSON.parse(storedPosts) : [];
};

const initialBlogPosts = [
  {
    id: 1,
    title: "Welcome to the family blog",
    body: "Try to post something 🥰",
    author: "Admin",
  },
];

const existingPosts = getBlogPosts();

if (existingPosts.length === 0) {
  saveBlogPosts(initialBlogPosts);
}



