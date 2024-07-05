import { IconButton } from "@mui/material";
import React from "react";
import logo from "../images/chat-bubbles.png";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
function Groups() {
  const lightTheme = useSelector((state)=>(state.themeKey));
  return (
    <div className="list-container">
      <div className={"ug-header"+ ((!lightTheme)?' dark':'')}>
        <img src={logo} style={{ height: "2rem", width: "2rem" }} alt="Logo" />
        <p className="ug-title">Active groups</p>
      </div>
      <div className={"sb-search"+ ((!lightTheme)?' dark':'')}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="search" className={"search-box"+ ((!lightTheme)?' dark':'')} />
      </div>
      <div className="ug-list">
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
      </div>
    </div>
  );
}

export default Groups;
