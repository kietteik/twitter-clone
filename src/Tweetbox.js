import React from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";

function Tweetbox() {
    return (
        <div className="tweetbox">
            <form action="">
                <div className="tweetbox__input">
                    <Avatar src="https://loremflickr.com/320/240" />
                    <input placeholder="Nulla ab nisi vero tempora ?" />
                </div>
                <input
                    className="tweetbox_imgInput"
                    placeholder="Nulla ab nisi vero tempora obcaecati dolore?"
                />
                <Button>Tweet</Button>
            </form>
        </div>
    );
}

export default Tweetbox;
