import React, { useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ImagesList from "./ImagesList";
function Home({ imagesList, handleChangeList, tagsList }) {
  useEffect(() => {
    const favslinks =
      localStorage.getItem("favorites") == null
        ? []
        : JSON.parse(localStorage.getItem("favorites")).map((val) => val.link);
    if (
      imagesList.length === 0 &&
      sessionStorage.getItem("imagesList") !== null
    )
      handleChangeList(
        JSON.parse(sessionStorage.getItem("imagesList")).map((val) => {
          if (favslinks.indexOf(val.link) !== -1) val.favorite = true;
          else val.favorite = false;
          return val;
        })
      );
    if (imagesList.length !== 0)
      sessionStorage.setItem("imagesList", JSON.stringify(imagesList));
  });
  const loadMore = async () => {
    const favslinks =
      localStorage.getItem("favorites") == null
        ? []
        : JSON.parse(localStorage.getItem("favorites")).map((val) => val.link);
    const CALL =
      localStorage.getItem("apiCall") + localStorage.getItem("nextPage");
    const data = await (await fetch(CALL)).json();
    localStorage.setItem(
      "nextPage",
      `&start=${data.queries.nextPage[0].startIndex}`
    );
    await handleChangeList([
      ...imagesList,
      ...(await data.items.map((img) => ({
        link: img.link,
        title: img.title.substr(0, 30),
        favorite: favslinks.indexOf(img.link) !== -1,
      }))),
    ]);
  };
  return (
    <div className="layout">
      <Header />
      <SearchBar handleChangeList={handleChangeList} />
      <ImagesList
        imagesList={imagesList}
        handleChangeList={handleChangeList}
        tagsList={tagsList}
        flag={{ favs: null, tag: null }}
      />
      {imagesList.length > 0 && imagesList.length < 100 ? (
        <div className="loadBtn">
          <button onClick={loadMore}>Load More...</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Home;
