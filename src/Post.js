import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

function Post({ displayName, username, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://loremflickr.com/320/240" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h4>
                            User Name{" "}
                            <span className="post__headerSmall">
                                <VerifiedUserIcon className="post__badge" />{" "}
                                @username
                            </span>
                        </h4>
                    </div>
                    <div className="post__headerDes">
                        usertextdes scription sthg ...!!!!!
                    </div>
                </div>
                <img
                    src="https://media.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy.gif"
                    alt=""
                    srcset=""
                />
                <div className="post__footer">
                    <ChatBubbleOutlineOutlinedIcon />
                    <RepeatOutlinedIcon />
                    <FavoriteBorderOutlinedIcon />
                    <PublishOutlinedIcon />
                </div>
            </div>
        </div>
    );
}

export default Post;
