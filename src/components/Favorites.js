import React, { useEffect, useRef } from "react";
import ImagesList from "./ImagesList";
function Favorites({ imagesList, handleChangeList, tagsList }) {
  const flag = useRef(true);
  useEffect(() => {
    if (
      imagesList.length === 0 &&
      localStorage.getItem("favorites") !== null &&
      JSON.parse(localStorage.getItem("favorites")).length !== 0
    )
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
        flag={{ favs: flag, tag: null }}
      />
    </div>
  );
}
export default Favorites;
