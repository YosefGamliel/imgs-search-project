import React, { useEffect, useRef } from "react";
import ImagesList from "./ImagesList";
function Favorites({ imagesList, handleChangeList, tagsList }) {
  const flag = useRef(true);
  useEffect(() => {
    if (flag.current && localStorage.getItem("favorites") !== null)
      handleChangeList(JSON.parse(localStorage.getItem("favorites")));
    flag.current = false;
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
