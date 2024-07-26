import React, { useState } from "react";
import { Link } from "react-router-dom";

//anchor tag use krne se page reload hoga to use kro href ke jagah pe and 'Link' use kro a ki jagah pe agar react router dom use krr rhe ho to

// export default class Navbar extends Component {
const Navbar = (props) => {
  // render() {
  const { articles, setarticles } = props;
  const temp = articles;
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    // if (searchValue === "") {
    //   setarticles(temp);
    //   return;
    // }
    const filtered = temp?.filter((news) => {
      news.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setarticles(filtered);

  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/buisness">
                  Buisness
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technolo gy
                </Link>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="text"
              action=''
              placeholder="Search"
              aria-label="Search"
              // value={props.searchItem}
              onChange={handleSearch}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggle}
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
