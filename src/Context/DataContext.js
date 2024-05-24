import React, { createContext, useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from '../api/Posts';
import useWindowSize from '../Hooks/useWindowSize';
import useAxiosFetch from '../Hooks/useAxiosFetch';
import { useNavigate } from 'react-router-dom';

const DataContext = createContext();

export const DataProvider =  ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const { width } = useWindowSize();

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');
  const navigate = useNavigate();

  useEffect(() => {
    setPosts(data);
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = format(new Date(), "MMMM dd yyyy pp");
    const newPost = { id, title: postTitle, datetime: date, body: postBody };
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error ${err}`);
      }
    }
  };

  const handleEdit = async (id) => {
    const date = format(new Date(), "MMMM dd yyyy pp");
    const updatedPost = { id, title: editTitle, datetime: date, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
      setEditBody('');
      setEditTitle('');
      navigate('/');
    } catch (err) {
      console.log(`Error ${err}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
      navigate('/');
    } catch (err) {
      console.log(`Error ${err}`);
    }
  };

  useEffect(() => {
    const filteredPosts = posts.filter(post =>
      post.body.toLowerCase().includes(search.toLowerCase()) ||
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredPosts.reverse());
  }, [posts, search]);

  return (
    <DataContext.Provider value={{
      width, search, setSearch, searchResults, isLoading, fetchError,
      handleSubmit, postBody, postTitle, setPostTitle, setPostBody,
      handleEdit, posts, handleDelete, setEditBody, setEditTitle,
      editTitle, editBody
    }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;