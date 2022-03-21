import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
function TagsList({ showTags, tagsList, handleAddTag, handleChangeList }) {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");
  const show = showTags ? "block" : "none";
  const deleteTag = (ev, tag) => {
    ev.stopPropagation();
    handleAddTag(tagsList.filter((val) => val !== tag));
    if (splitLocation[splitLocation.length - 1] === `${tag}`)
      window.location.pathname = "/";
    if (localStorage.getItem(tag) !== null) localStorage.removeItem(tag);
  };
  return (
    <div class="tagsList" style={{ display: show }}>
      <ul style={{ marginLeft: "-40px" }}>
        {tagsList.map((val, key) => (
          <Link to={`/tags/${val}`} style={{ textDecoration: "none" }}>
            <li
              id={
                splitLocation[splitLocation.length - 1] === `${val}`
                  ? "active"
                  : ""
              }
              key={key}
              className="tags"
              onClick={() => {
                handleChangeList([]);
              }}
            >
              <div>
                {val}
                <IconButton
                  title="delete tag"
                  sx={{ color: "white" }}
                  onClick={(ev) => {
                    deleteTag(ev, val);
                  }}
                >
                  <DeleteForeverOutlinedIcon />
                </IconButton>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
export default TagsList;
