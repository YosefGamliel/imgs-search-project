import React from "react";
import Image from "./Image";
function ImagesList({ imagesList, handleChangeList, tagsList }) {
  return (
    <div className="divList">
      {imagesList.map((img) => (
        <Image
          img={img}
          imagesList={imagesList}
          handleChangeList={handleChangeList}
          tagsList={tagsList}
        />
      ))}
    </div>
  );
}
export default ImagesList;
