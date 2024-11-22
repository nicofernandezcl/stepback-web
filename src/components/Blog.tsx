import React, { useCallback, useEffect, useState } from "react";
import { BlogPost } from "../types";

const postsThreshold = 4;

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetch("/data/blog.json")
      .then((response) => response.json())
      .then((json) => {
        setPosts(json.posts);
        setVisiblePosts(json.posts.slice(0, postsThreshold));
        setHasMore(json.posts.length > postsThreshold);
      })
      .catch((error) => console.error("Error loading blog.json:", error));
  }, []);

  useEffect(() => {
    console.log("Visible Posts:", visiblePosts);
  }, [visiblePosts]);

  const loadMorePosts = useCallback(() => {
    if (loading || visiblePosts.length == posts.length) return;

    setLoading(true);

    setTimeout(() => {
      const nextPosts = posts.slice(visiblePosts.length, visiblePosts.length + postsThreshold);
      setVisiblePosts((prev) => [...prev, ...nextPosts]);

      if (visiblePosts.length + nextPosts.length >= posts.length) {
        setHasMore(false);
      }

      setLoading(false);
    }, 500);
    
  }, [loading, posts, visiblePosts]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        loadMorePosts();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMorePosts]);

  if (!posts.length) return <p>Loading...</p>;

  return (
    <>
      <h1>Blog</h1>
      <div className="blog-container">
        {visiblePosts.map((post) => (
          <div className="blog-post" key={post.id}>
            {post.image && <img src={post.image} alt={post.title} />}
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <a href={`/blog/${post.slug}`}>Read more</a>
          </div>
        ))}
      </div>
      {loading && <p>Loading more posts...</p>}
      {!hasMore && <p>No more posts to load.</p>}
    </>
  );
};

export default Blog;
