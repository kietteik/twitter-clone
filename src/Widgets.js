import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterFollowButton,
    TwitterHashtagButton,
    TwitterMentionButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widget">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input
                    placeholder="Search Twitter"
                    type="text"
                    className="widgets__search"
                />
            </div>
            <div className="widgets__container">
                <h2>Widgets</h2>
                <TwitterTweetEmbed tweetId={"933354946111705097"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="kietteik"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://facebook.com/kietteik"}
                    options={{
                        text: "#reactjs is awesome",
                        via: "kietteik",
                    }}
                />
                <TwitterFollowButton screenName={"kietteik"} />
            </div>
        </div>
    );
}

export default Widgets;
