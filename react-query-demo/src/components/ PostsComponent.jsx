import React from 'react';
import { useQuery } from 'react-query';


const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 300000, // 5 minutes caching
    cacheTime: 600000, // 10 minutes cache retention
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
