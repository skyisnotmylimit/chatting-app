import { IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../images/chat-bubbles.png";
import { useSelector } from "react-redux";
import {motion, AnimatePresence} from "framer-motion";
function Users() {
  const lightTheme = useSelector((state)=>(state.themeKey));
  return (
    <AnimatePresence>
    <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate",
          duration : "0.3",
        }}
    className="list-container">
      <div className={"ug-header"+ ((!lightTheme)?' dark':'')}>
        <img src={logo} style={{ height: "2rem", width: "2rem" }} alt="Logo" />
        <p className="ug-title">Online Users</p>
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
    </motion.div>
    </AnimatePresence>
  );
}

export default Users;
