import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

export default function Sidebar() {
    return (
        <div className="sidebar">
            {/* Icon */}
            <TwitterIcon />

            {/* options */}
            <SidebarOption active Icon={HomeOutlinedIcon} text="Home" />
            <SidebarOption Icon={ExploreOutlinedIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PersonOutlineIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            {/* tweet button */}
            <Button className="sidebar__tweet">Tweet</Button>
        </div>
    );
}
