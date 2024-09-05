'use client';
import React, { createContext, useContext, useState } from 'react';

// Create the context
const PostContext = createContext();

// Custom hook to use the PostContext
export const usePostContext = () => useContext(PostContext);

// Unique ID generator
const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // Method to add a new post
  const addPost = ({ name, description, startDate, endDate, image, level }) => {
    // Check if a post with the same name already exists
    if (posts.some((post) => post.name === name)) {
      alert('A post with this name already exists.');
      return;
    }

    const newPost = {
      id: generateId(),
      name,
      description,
      startDate,
      endDate,
      image,
      level,
      status: determineStatus(startDate, endDate), // Determine if the post is active, upcoming, or past
    };

    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  // Function to fetch a post by ID
  const getPostById = (id) => {
    return posts.find((post) => post.id === id) || null; // Return null if not found
  };

  // Method to search
  const fetchPostsByName = (searchQuery) => {
    let filteredPosts = posts;

    // Filter by search query
    if (searchQuery) {
      filteredPosts = filteredPosts.filter((post) => post.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    return filteredPosts;
  };

  // Method to fetch all posts with filtering options
  const fetchPosts = (filters) => {
    return posts.filter((post) => {
      const now = new Date();
      const startDate = new Date(post.startDate);
      const endDate = new Date(post.endDate);

      // Status filtering
      let statusMatch = true;
      if (filters.status.length > 0) {
        statusMatch = false;
        if (filters.status.includes('Active') && now >= startDate && now <= endDate) {
          statusMatch = true;
        }
        if (filters.status.includes('Upcoming') && now < startDate) {
          statusMatch = true;
        }
        if (filters.status.includes('Past') && now > endDate) {
          statusMatch = true;
        }
      }

      // Level filtering
      let levelMatch = true;
      if (filters.level.length > 0) {
        levelMatch = filters.level.includes(post.level);
      }

      // Name filtering
      let nameMatch = true;
      if (filters.name) {
        nameMatch = post.name.toLowerCase().includes(filters.name.toLowerCase());
      }

      // Return posts that match status, level, and name filters
      return statusMatch && levelMatch && nameMatch;
    });
  };

  // Determine the status of the post (Active, Upcoming, Past)
  const determineStatus = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now < start) return 'Upcoming';
    if (now > end) return 'Past';
    return 'Active';
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return <PostContext.Provider value={{ posts, addPost, fetchPosts, getPostById, fetchPostsByName, deletePost }}>{children}</PostContext.Provider>;
};

export default PostProvider;
