import React from "react";
import Image from "./Image";
function ImagesList({ imagesList, handleChangeList, tagsList, flag }) {
  return (
    <div className="divList">
      {imagesList.map((img) => (
        <Image
          img={img}
          handleChangeList={handleChangeList}
          tagsList={tagsList}
          flag={flag}
        />
      ))}
    </div>
  );
}
export default ImagesList;
