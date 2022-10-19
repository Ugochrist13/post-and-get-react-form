import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import './MyPost.css'


function MyPost() {
    const [posts, setPost] = useState([]);


    useEffect(() => {
        axios.get("https://backend-skillup.herokuapp.com/9").then((response) => {
            setPost(response.data.data);
            console.log(response.data)
        });
        
    }, []);


    return (
        <div className="mypost">
            <h1>My page</h1>

            {posts.map((post) =>(
                <div className="preview" key={post.userId}>
                    <h2 id="title">{post.title}</h2>
                    <p id="body">{post.body}</p>
                    <p id="userid">{post.userId}</p>
                </div>
            ))}
        </div>
    );
}

export default MyPost;
