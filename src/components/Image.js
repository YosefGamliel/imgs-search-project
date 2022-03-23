import React from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";
import TagIcon from "@mui/icons-material/Tag";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Image({ img, handleChangeList, tagsList, flag }) {
  const favColor = img.favorite ? "blue" : "gray";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChoose = (ev) => {
    handleClose();
    const currentTag = ev.currentTarget.textContent;
    if (localStorage.getItem(currentTag) === null) {
      localStorage.setItem(currentTag, JSON.stringify([img]));
      ev.currentTarget.style.color = "blue";
    } else {
      const tagL = JSON.parse(localStorage.getItem(currentTag));
      if (tagL.map((val) => val.link).indexOf(img.link) === -1) {
        localStorage.setItem(currentTag, JSON.stringify([...tagL, img]));
        ev.currentTarget.style.color = "blue";
      } else {
        localStorage.setItem(
          currentTag,
          JSON.stringify(tagL.filter((val) => val.link !== img.link))
        );
        ev.currentTarget.style.color = "black";
        if (flag.tag !== null) {
          handleChangeList([]);
        }
      }
    }
  };
  const favorite = (ev) => {
    if (!img.favorite) {
      ev.currentTarget.style.color = "blue";
      let list = localStorage.getItem("favorites");
      if (list !== null)
        localStorage.setItem(
          "favorites",
          JSON.stringify([
            ...JSON.parse(list),
            { link: img.link, title: img.title, favorite: true },
          ])
        );
      else
        localStorage.setItem(
          "favorites",
          JSON.stringify([{ link: img.link, title: img.title, favorite: true }])
        );
    } else {
      ev.currentTarget.style.color = "gray";
      let list = JSON.parse(localStorage.getItem("favorites"));
      localStorage.setItem(
        "favorites",
        JSON.stringify(list.filter((val) => val.link !== img.link))
      );
      if (flag.favs !== null) {
        handleChangeList([]);
      }
    }
  };
  return (
    <div className="imgDiv">
      <div>
        <img src={img.link} alt={img.title} />
      </div>
      <div>{img.title}</div>
      <div className="imgButtons">
        <IconButton
          title="favorite"
          onClick={favorite}
          style={{ color: favColor }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton title="download">
          <DownloadIcon />
        </IconButton>
        <IconButton title="tag" onClick={handleClick}>
          <TagIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {tagsList.map((tag) => {
            let tagL = [];
            if (localStorage.getItem(tag) !== null)
              tagL = JSON.parse(localStorage.getItem(tag));
            const tagColor =
              tagL.map((val) => val.link).indexOf(img.link) === -1
                ? "black"
                : "blue";
            return (
              <MenuItem
                onClick={(ev) => {
                  handleChoose(ev);
                }}
                sx={{ color: tagColor, fontWeight: "bold" }}
              >
                {tag}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </div>
  );
}
export default Image;
