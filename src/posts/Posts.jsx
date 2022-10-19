
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import './Posts.css'

function Posts() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        axios.get("https://backend-skillup.herokuapp.com").then((response) => {
            setPost(response.data.data);
            console.log(response.data);
        });
    }, []);

  return (
    <div className="home">
        <h1>Home Page</h1>

        {posts.map((post) => (
            <div className="preview" key={post.userId}>
                <h2 id="title">{post.title}</h2>
                <p id="body">{post.body}</p>
                <p id="userid">{post.userId}</p>
            </div>
        ))}
    </div>
  );
};

export default Posts
