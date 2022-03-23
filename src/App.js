import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Tags from "./components/Tags";

function App() {
  const [tagsList, setTagsList] = useState([]);
  const first = useRef(true);
  const handleAddTag = (val) => {
    setTagsList(val);
  };
  const [imagesList, setImagesList] = useState([]);
  const handleChangeList = (val) => {
    setImagesList(val);
  };
  useEffect(() => {
    if (first.current && localStorage.getItem("tags") !== null) {
      setTagsList(JSON.parse(localStorage.getItem("tags")));
    }
    if (!first.current) {
      localStorage.setItem("tags", JSON.stringify(tagsList));
    }
    first.current = false;
  }, [tagsList]);
  return (
    <HashRouter>
      <div className="App">
        <SideBar
          tagsList={tagsList}
          handleAddTag={handleAddTag}
          handleChangeList={handleChangeList}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                imagesList={imagesList}
                handleChangeList={handleChangeList}
                tagsList={tagsList}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                imagesList={imagesList}
                handleChangeList={handleChangeList}
                tagsList={tagsList}
              />
            }
          />
          <Route path="/tags/*">
            {tagsList.map((val) => (
              <Route
                path={`${encodeURIComponent(val)}`}
                element={
                  <Tags
                    tag={val}
                    imagesList={imagesList}
                    handleChangeList={handleChangeList}
                    tagsList={tagsList}
                  />
                }
              />
            ))}
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
