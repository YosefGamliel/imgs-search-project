import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddTag from "./AddTag";
import TagsList from "./TagsList";
function SideBar({ tagsList, handleAddTag, handleChangeList }) {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");
  console.log(splitLocation[splitLocation.length - 1]);
  const [showTags, setShowTags] = useState(
    splitLocation[splitLocation.length - 1] !== "" &&
      splitLocation[splitLocation.length - 1] !== "favorites"
  );
  return (
    <div className="SideBar">
      <h4>Categories:</h4>
      <ul className="SideBarList" style={{ marginLeft: "-40px" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li
            key="0"
            className="row"
            id={splitLocation[splitLocation.length - 1] === "" ? "active" : ""}
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
            id={
              splitLocation[splitLocation.length - 1] === "favorites"
                ? "active"
                : ""
            }
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
      </ul>
    </div>
  );
}

export default SideBar;
