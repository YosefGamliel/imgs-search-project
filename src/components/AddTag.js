import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
function AddTag({ tagsList, handleAddTag }) {
  const [inputTag, setInputTag] = useState("");
  return (
    <div id="AddTag">
      <input
        id="tagInput"
        value={inputTag}
        placeholder="  Add tag..."
        onChange={(ev) => {
          setInputTag(ev.target.value);
        }}
      />
      <IconButton
        title="click to add"
        onClick={() => {
          if (inputTag !== "") {
            handleAddTag([...tagsList, inputTag]);
            setInputTag("");
          }
        }}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
}
export default AddTag;
