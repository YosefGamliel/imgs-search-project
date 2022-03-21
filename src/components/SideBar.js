import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddTag from "./AddTag";
import TagsList from "./TagsList";
function SideBar({ tagsList, handleAddTag, handleChangeList }) {
  const [showTags, setShowTags] = useState(
    window.location.pathname !== "/" &&
      window.location.pathname !== "/favorites"
  );
  return (
    <div className="SideBar">
      <h4>Categories:</h4>
      <lu className="SideBarList">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li
            key="0"
            className="row"
            id={window.location.pathname === "/" ? "active" : ""}
            onClick={() => {
              handleChangeList([]);
            }}
          >
            <div id="icon">
              <HomeIcon />
            </div>
            <div id="title">Home</div>
          </li>
        </Link>
        <Link to="/favorites" style={{ textDecoration: "none" }}>
          <li
            key="1"
            className="row"
            id={window.location.pathname === "/favorites" ? "active" : ""}
            onClick={() => {
              handleChangeList([]);
            }}
          >
            <div id="icon">
              <FavoriteIcon />
            </div>
            <div id="title">Favorites</div>
          </li>
        </Link>
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
          handleChangeList={handleChangeList}
        />
        <AddTag key="4" tagsList={tagsList} handleAddTag={handleAddTag} />
      </lu>
    </div>
  );
}

export default SideBar;
