import React, { useEffect, useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function Tweetbox() {
    const [TweetMessage, setTweetMessage] = useState();
    const [TweetImage, setTweetImage] = useState();
    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "My Name",
            username: "myname",
            verified: true,
            text: TweetMessage || null,
            image: TweetImage || null,
            avatar: "https://loremflickr.com/320/240",
        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetbox">
            <form action="">
                <div className="tweetbox__input">
                    <Avatar src="https://loremflickr.com/320/240" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={TweetMessage}
                        placeholder="Nulla ab nisi vero tempora ?"
                    />
                </div>
                <input
                    value={TweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetbox_imgInput"
                    placeholder="Nulla ab nisi vero tempora obcaecati dolore?"
                />
                <Button onClick={sendTweet} type="submit">
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default Tweetbox;
