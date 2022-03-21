import React, { useEffect } from "react";
import ImagesList from "./ImagesList";
function Favorites({ imagesList, handleChangeList, tagsList }) {
  useEffect(() => {
    if (localStorage.getItem("favorites") !== null)
      handleChangeList(JSON.parse(localStorage.getItem("favorites")));
  });
  return (
    <div className="layout">
      <div className="header">
        <h2>My Favorites</h2>
      </div>
      <ImagesList
        imagesList={imagesList}
        handleChangeList={handleChangeList}
        tagsList={tagsList}
      />
    </div>
  );
}
export default Favorites;
