import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddTag from "./AddTag";
import TagsList from "./TagsList";
function SideBar({ tagsList, handleAddTag }) {
  const [showTags, setShowTags] = useState(
    window.location.pathname !== "/imgs-search-project" &&
      window.location.pathname !== "/imgs-search-project/favorites"
  );
  return (
    <div className="SideBar">
      <h4>Categories:</h4>
      <lu className="SideBarList">
        <li
          key="0"
          className="row"
          id={
            window.location.pathname === "/imgs-search-project" ? "active" : ""
          }
          onClick={() => {
            window.location.pathname = "/imgs-search-project";
          }}
        >
          <div id="icon">
            <HomeIcon />
          </div>
          <div id="title">Home</div>
        </li>
        <li
          key="1"
          className="row"
          id={
            window.location.pathname === "/imgs-search-project/favorites"
              ? "active"
              : ""
          }
          onClick={() => {
            window.location.pathname = "/imgs-search-project/favorites";
          }}
        >
          <div id="icon">
            <FavoriteIcon />
          </div>
          <div id="title">Favorites</div>
        </li>
        <li
          key="2"
          className="row"
          onClick={() => {
            setShowTags(!showTags);
          }}
        >
          <div id="icon">
            <TagIcon />
          </div>
          <div id="title">Tags</div>
        </li>
        <TagsList
          key="3"
          showTags={showTags}
          tagsList={tagsList}
          handleAddTag={handleAddTag}
        />
        <AddTag key="4" tagsList={tagsList} handleAddTag={handleAddTag} />
      </lu>
    </div>
  );
}

export default SideBar;
