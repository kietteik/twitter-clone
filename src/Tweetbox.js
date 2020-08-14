import React from "react";
import "./Tweet.css";
import { Avatar, Button } from "@material-ui/core";

function Tweetbox() {
    return (
        <div className="tweetbox">
            <form action="">
                <div className="tweetbox__input">
                    <Avatar src="https://loremflickr.com/320/240" />
                    <input placeholder="What do you think?" />
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    );
}

export default Tweetbox;
