import React, { useState, useEffect } from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import db from "./firebase";

function Feed() {
    const [Posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()));
        });
        return () => {};
    }, []);
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* Tweetbox */}
            <Tweetbox />

            {Posts.map((post) => (
                <Post
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    avatar={post.avatar}
                />
            ))}

            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
        </div>
    );
}

export default Feed;
