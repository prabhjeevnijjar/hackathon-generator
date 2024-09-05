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

  // Method to fetch all posts with filtering options
  const fetchPosts = ({ filter = 'All', searchQuery = '', level = '' }) => {
    let filteredPosts = posts;

    // Filter by search query
    if (searchQuery) {
      filteredPosts = filteredPosts.filter((post) => post.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Filter by level
    if (level) {
      filteredPosts = filteredPosts.filter((post) => post.level === level);
    }

    // Filter by status
    if (filter !== 'All') {
      filteredPosts = filteredPosts.filter((post) => post.status === filter);
    }

    return filteredPosts;
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

  return <PostContext.Provider value={{ posts, addPost, fetchPosts, getPostById }}>{children}</PostContext.Provider>;
};

export default PostProvider;
