import React, { useEffect, useRef } from "react";
import ImagesList from "./ImagesList";
function Tags({ tag, imagesList, handleChangeList, tagsList }) {
  const flag = useRef(true);
  useEffect(() => {
    if (flag.current && localStorage.getItem(tag) !== null) {
      const favslinks =
        localStorage.getItem("favorites") == null
          ? []
          : JSON.parse(localStorage.getItem("favorites")).map(
              (val) => val.link
            );
      handleChangeList(
        JSON.parse(localStorage.getItem(tag)).map((val) => {
          if (favslinks.indexOf(val.link) !== -1) val.favorite = true;
          else val.favorite = false;
          return val;
        })
      );
    }
    flag.current = false;
  });
  return (
    <div className="layout">
      <div className="header">
        <h2>{`#${tag}`}</h2>
      </div>
      <ImagesList
        imagesList={imagesList}
        handleChangeList={handleChangeList}
        tagsList={tagsList}
        flag={{ favs: null, tag: flag }}
      />
    </div>
  );
}
export default Tags;
