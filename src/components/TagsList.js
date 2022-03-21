import React from "react";
import { IconButton } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
function TagsList({ showTags, tagsList, handleAddTag }) {
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
          <li
            id={window.location.pathname === `/${val}` ? "active" : ""}
            key={key}
            className="tags"
            onClick={(ev) => {
              window.location.pathname = `/${val}`;
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
        ))}
      </lu>
    </div>
  );
}
export default TagsList;
