import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
function TagsList({ showTags, tagsList, handleAddTag, handleChangeList }) {
  const show = showTags ? "block" : "none";
  const deleteTag = (ev, tag) => {
    ev.stopPropagation();
    handleAddTag(tagsList.filter((val) => val !== tag));
    if (window.location.pathname === `/tags/${tag}`)
      window.location.pathname = "/";
    if (localStorage.getItem(tag) !== null) localStorage.removeItem(tag);
  };
  return (
    <div class="tagsList" style={{ display: show }}>
      <lu>
        {tagsList.map((val, key) => (
          <Link to={`/tags/${val}`}>
            <li
              id={window.location.pathname === `/${val}` ? "active" : ""}
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
      </lu>
    </div>
  );
}
export default TagsList;
