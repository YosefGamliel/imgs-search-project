import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { API_KEY, CX } from "./api";
function SearchBar({ handleChangeList }) {
  const [searchInput, setSearchInput] = useState("");
  const search = async () => {
    handleChangeList([]);
    setSearchInput("");
    const favslinks =
      localStorage.getItem("favorites") == null
        ? []
        : JSON.parse(localStorage.getItem("favorites")).map((val) => val.link);
    const API_CALL = `https://customsearch.googleapis.com/customsearch/v1?cx=${CX}&safe=active&searchType=image&key=${API_KEY}&q=${searchInput}`;
    const data = await (await fetch(API_CALL)).json();
    localStorage.setItem("apiCall", API_CALL);
    localStorage.setItem(
      "nextPage",
      `&start=${data.queries.nextPage[0].startIndex}`
    );
    await handleChangeList(
      await data.items.map((img) => ({
        link: img.link,
        title: img.title.substr(0, 30),
        favorite: favslinks.indexOf(img.link) !== -1,
      }))
    );
  };
  return (
    <div className="SearchBar">
      <input
        id="searchInput"
        placeholder="  Search..."
        value={searchInput}
        onChange={(ev) => {
          setSearchInput(ev.target.value);
        }}
      ></input>
      <IconButton title="click to search" onClick={search}>
        <SearchIcon />
      </IconButton>
    </div>
  );
}
export default SearchBar;
